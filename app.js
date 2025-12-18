const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

let current = '';
let resetNext = false;
let history = [];

/* ---------- UI UPDATE ---------- */

function update(val) {
  display.textContent = val || '0';
}

/* ---------- BUTTON INPUT ---------- */

document.querySelectorAll('button').forEach(btn => {
  btn.onclick = () => handle(btn.textContent);
});

/* ---------- KEYBOARD INPUT ---------- */

document.addEventListener('keydown', e => {
  const keyMap = {
    '*': '×',
    '/': '÷',
    '-': '−',
    '+': '+',
    'Enter': '=',
    'Backspace': '⌫',
    'Escape': 'C'
  };

  if (!isNaN(e.key) || e.key === '.') {
    handle(e.key);
  } else if (keyMap[e.key]) {
    handle(keyMap[e.key]);
  }
});

/* ---------- CORE LOGIC ---------- */

function handle(value) {

  if (value === 'C') {
    current = '';
    resetNext = false;
    return update(current);
  }

  if (value === '⌫') {
    current = current.slice(0, -1);
    return update(current);
  }

  if (value === '=') {
    try {
      const expression = current
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-');

      const result = Function(`return ${expression}`)();

      addToHistory(`${current} = ${result}`);

      current = result.toString();
      resetNext = true;
      return update(current);

    } catch {
      current = '';
      return update('Error');
    }
  }

  if (resetNext && !isOperator(value)) {
    current = '';
    resetNext = false;
  }

  current += value;
  update(current);
}

/* ---------- HELPERS ---------- */

function isOperator(val) {
  return ['+', '−', '×', '÷'].includes(val);
}

function addToHistory(entry) {
  history.unshift(entry);
  history = history.slice(0, 10);
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}
