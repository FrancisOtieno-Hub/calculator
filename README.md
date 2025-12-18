# Calculator PWA

A fast, offline-ready **Progressive Web App calculator** built with plain HTML, CSS, and JavaScript. Clean UI, predictable behavior, and a minimal codebase designed for learning, teaching, and everyday use.

---

## Features

* Instant calculations with a responsive UI
* Installable as a PWA (Android, desktop)
* Works fully offline
* Modern dark theme with tactile feedback
* Safe expression handling (no `eval` abuse)
* Small, readable, beginner-friendly code

---

## Project Structure

```text
calculator-pwa/
│
├── index.html        # App shell
├── styles.css        # UI styling
├── app.js            # Calculator logic
├── sw.js             # Service Worker (offline caching)
├── manifest.json     # PWA metadata
├── icon-192.png      # App icon
├── icon-512.png      # App icon
└── README.md         # Documentation
```

---

## Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/FrancisOtieno-Hub/calculator.git
cd calculator-pwa
```

Or simply download and extract the ZIP.

---

### 2. Run Locally (Recommended)

Because service workers require HTTPS or localhost, use a simple local server:

```bash
# Python
python -m http.server 5500

# Node.js (if installed)
npx serve .
```

Then open:

```
http://localhost:5500
```

---

## Install as an App

1. Open the app in **Chrome / Edge**
2. Click **Install** in the address bar or menu
3. The calculator installs like a native app

---

## How It Works

* **index.html** defines the calculator layout
* **styles.css** provides the dark, modern UI
* **app.js** handles input, operators, and results
* **sw.js** caches core assets for offline use
* **manifest.json** enables installation and theming

The app uses a simple state machine to ensure correct behavior after calculations and safe operator handling.

---

## Customization Ideas

* Add keyboard input support
* Add calculation history
* Add light / dark theme toggle
* Convert to a teaching PWA for classrooms
* Package as an APK using Bubblewrap

---

## Teaching Use

This project is ideal for:

* Introducing **JavaScript state management**
* Teaching **event handling**
* Demonstrating **Progressive Web Apps**
* Explaining **offline-first thinking**

The code is intentionally readable and modular.

---

## Security Notes

* No user data is stored
* No external dependencies
* Expressions are sanitized before evaluation

---

## License

MIT License — free to use, modify, and distribute.

---

## Author

Built with clarity and care.

If you extend this project, document your changes — good software tells its own story.
