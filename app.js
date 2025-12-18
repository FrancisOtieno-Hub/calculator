const display = document.getElementById('display');
let current = '';


function update(val) {
display.textContent = val || '0';
}


document.querySelectorAll('button').forEach(btn => {
btn.onclick = () => handle(btn.textContent);
});


function handle(value) {
if (value === 'C') return update(current = '');
if (value === '⌫') return update(current = current.slice(0, -1));
if (value === '=') {
try {
current = eval(current.replace('×','*').replace('÷','/').replace('−','-')) + '';
return update(current);
} catch { return update('Error'); }
}
current += value;
update(current);
}
