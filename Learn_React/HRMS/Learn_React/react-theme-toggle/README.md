# React Theme Toggle (Light/Dark)

A tiny React + Vite starter with a simple theme toggle button. Theme is saved in `localStorage` and respects system preference on first load.

## Run locally

```bash
npm install
npm run dev
```

Then open the shown local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## How it works

- We store the current theme (`light`/`dark`) in `document.documentElement.dataset` via the `data-theme` attribute.
- CSS variables (`--bg`, `--text`, etc.) change based on `[data-theme="dark"]` selector.
- The toggle writes to `localStorage` and updates the DOM + state.

Enjoy!
