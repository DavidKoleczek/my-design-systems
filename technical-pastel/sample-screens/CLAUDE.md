# Technical Pastel sample screens

Four example screens for a suite of creative tools, built with the Technical Pastel design system: `home.html` (project library), `editor.html` (a poster in a design editor), `timeline.html` (a video edit, dark theme) and `export.html` (an export dialog). Open `index.html` in a browser to browse them.

## How they're built

- Plain HTML pages. Layout and copy are ordinary markup with inline styles that only use Technical Pastel tokens (`var(--panel)`, `var(--ink)`, `var(--accent)`, …) from `technical-pastel/tokens.css`.
- Real components are written as `<x-import component-from-global-scope="TechnicalPastel.Button" variant="primary">Render</x-import>` tags. `technical-pastel/render.js` replaces each tag with the matching component from `technical-pastel/components/bundle.js` (`window.TechnicalPastel`), turning attributes into props (`default-value` → `defaultValue`). An attribute written as `{{name}}` takes its value from the `renderVals()` method in the page's `<script id="screen-logic">`.
- The full brand rules, tokens and component docs live in the design system folder, `../design-system/`; `technical-pastel/` holds copies of the files these screens load from it. Read its `README.md` and `CLAUDE.md` before changing these screens or building new ones.

## Using them

Treat these as references for layout and density: the 44px top bar, the left tool strip, the canvas with rulers, the right-hand stack of panels, and the timeline. When building an app from them (for example in React), rebuild the screens with the real components rather than keeping the `<x-import>` tags.
