# Technical Pastel design system

This folder is the Technical Pastel design system: the brand rules, design tokens, fonts, logos, icons and a small set of React components for a suite of creative tools. Use it whenever you build or restyle Technical Pastel UI.

## Read first

1. `README.md` is the brand book: principles, voice and copy, color rules, type, details, layout, logo and iconography. Follow it.
2. `tokens.json` holds every token with a usage note. `tokens.css` is the same tokens as CSS custom properties (light on `:root`, dark under `[data-theme="dark"]`) plus a class per type style (`.ui-body`, `.mono-value`, …) and the `@font-face` rules.
3. Each `components/<Name>/README.md` says when to use a component and what it needs.

## Using it in code

- Styles: load `tokens.css`, then `components/bundle.css`. Always use the variables (`var(--panel)`, `var(--ink)`, `var(--accent)`), never raw hex values.
- Components: `components/bundle.js` is one classic script that defines `window.TechnicalPastel` with `Icon`, `Button`, `Segmented`, `Panel`, `ValueField` and `EmptyState`. It needs React 18 and ReactDOM 18 on the page first (copies are in `components/vendor/`). Props are documented in `components/index.d.ts`.
- In a React or Next.js project, either load the bundle as above, or port a component into the project by reading its README, `index.d.ts` and the matching rules in `bundle.css`. Keep class names and token names the same.
- With Tailwind, map the theme to the CSS variables (for example `colors: { panel: 'var(--panel)', ink: 'var(--ink)', accent: 'var(--accent)' }`) instead of copying hex values.
- Fonts: Geist and Geist Mono are in `fonts/` (SIL Open Font License, see `fonts/OFL.txt`). Icons are in `assets/icons/` as SVG, and in code through `<TechnicalPastel.Icon name="…">`.

## Rules that matter most

- Cool neutral chrome; the user's work is the most colorful thing on screen.
- The light blue `accent` (#6AB3EE) is always a fill with near-black `on-accent` text, never white text. Thin lines, outlines and blue text use `accent-ink`.
- Pastels (`pastel-*`) are for the user's own labels and for soft brand surfaces such as thumbnails, empty-state tiles and covers. Text on them is `on-pastel`.
- `danger` is the only status color, always with an icon or a word.
- One primary button per view. Sentence case everywhere. Units in mono after the number.
- No gradients, glows, plus-sign grids, registration crosses or circles with crosshairs.

## Previews

Open `index.html` in a browser to see every component in both themes.
