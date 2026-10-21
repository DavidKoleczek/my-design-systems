# Technical Pastel

Technical Pastel is a design system for professional creative tools: modeling, image making, video, sound and whatever comes next. The interface is a precise instrument built on cool, quiet grays, with a light, softened blue as its main color and a set of pastels for softness. Its details come from technical drawings: hairlines, crop marks, dimension lines and mono annotations. The logo's blue square ties it together.

## Principles

- **The work comes first.** Chrome stays calm and cool so the artwork is the most vivid thing on screen. Color in the interface means one of four things: the main action or selection (`accent`), a user's own label (a `pastel-`), a soft brand moment (a `pastel-` surface), or that something went wrong (`danger`).
- **Blue leads, pastels soften.** One saturated blue does the pointing; the pastels make the product feel friendly without making it toy-like.
- **Drawn, not decorated.** Detail comes from hairlines, crop marks, dimension lines and mono annotations, used where precision matters. Never gradients, glows, textures, clip-art crosshairs or plus-sign grids.
- **Instrument, not toy.** Dense, legible and flat. Lines separate things; shadows are only for what floats.

## Voice and copy

- Sentence case everywhere: "Export settings", "Add frame". Product and feature names are the only capitals.
- Labels are short nouns; actions start with a verb: "Render", "Add marker", "Import audio". No "OK" or "Submit".
- Always show units, set in mono after the number: `1.25 m`, `48 kHz`, `24 fps`, `-6.0 dB`. No space before `°`, `%` or `×`: `45°`, `80%`, `1.00×`. Dimensions use a real times sign: `1920 × 1080`.
- Errors say what happened, then what to do: "Couldn't read this file. Try PNG, JPG or MP4." No "Error:" prefix, no exclamation marks, no emoji.
- Empty states invite rather than apologize: "Start with a frame", not "Nothing here yet".
- Talk about the user's things as "your", never "my": "Your projects".

## Color

Cool neutrals carry the interface. `canvas` is the viewport behind the work; `panel` is every panel, sidebar and toolbar; `raised` is menus and dialogs (with `shadow-popover`); `field` is the inside of inputs and segmented tracks. Text is `ink`, secondary text and annotations are `ink-muted`, and `ink-faint` is for disabled labels only. Separate panels and rows with `line`; give controls, crop marks and dimension lines a `line-control` edge.

- **Blue** (`accent`) is the main color, lightened toward pastel so near-black text sits comfortably on it. It is always a fill: the primary button, the logo square, the selection's size readout, the playhead, active toggles and progress. Text or icons on it are `on-accent`, a near-black. For blue text, links, icons, selection outlines or any thin mark on a light ground, use the deeper `accent-ink`; the light fill is too pale for lines. For a pale blue well (a value field's fill, the active segment, a selected row), use `accent-soft`.
- **Pastels** (`pastel-blue`, `pastel-lilac`, `pastel-rose`, `pastel-peach`, `pastel-butter`, `pastel-mint`, `pastel-sage` and `pastel-stone`) have two jobs. They are the colors users pick to label layers, clips, tracks and projects (`pastel-stone` is the default). They are also soft brand surfaces: project thumbnails, empty-state tiles, onboarding cards and covers. Text on them is always `on-pastel`, never `ink-muted`. They never mean status, and they never fill controls.
- **Danger** is the only status hue: errors and destructive actions, always with an icon or a word. Success and info are shown in `ink` with the `check` icon. Don't add a green "success"; it would read as `pastel-mint`.
- **Light is the default theme.** Offer dark per user, and default to dark in color-critical work like grading video, where the near-black `canvas` keeps the image honest. Pastels keep their values in dark, as small labels and tiles, not as large backgrounds. Both themes hold 4.5:1 for every text pair named in the token notes, and 3:1 for `line-control` and the focus ring.

## Type

- **Geist** for the interface. `ui-body` (13px) is the default; `ui-label` (12px/500) for panel headers, field labels and buttons; `ui-title` for dialogs, empty states and inspectors; `ui-display` once per screen on home and onboarding. Nothing smaller than `ui-caption` (11px).
- **Geist Mono** for anything you could type into a field and for annotations: `mono-value` for parameters, coordinates, sizes and hex; `mono-annotation` for rulers, dimension labels and selection readouts; `mono-timecode` for transport readouts. Always use tabular numbers so values don't jitter while scrubbing.

## Details

Use these where precision matters, never as decoration.

- **Hairlines** (`stroke-hair`, 1px) in `line` for structure, or `line-control` when the line carries meaning.
- **Crop marks**: four 16px L-shaped corners (`space-4`) instead of a full border, for drop zones, empty states and export frames.
- **Dimension lines**: a hairline with end ticks and a centered `mono-annotation` label, such as `1920 × 1080`. Use them on frames, previews and empty states.
- **Pastel tiles**: a rounded square (`radius-xl`) of one pastel holding a single icon in `on-pastel`, as in `EmptyState`. Use one tile per moment.
- **Selection** on the work: a 1px `accent-ink` outline, square `handle`-size (6px) handles filled with `panel` and edged in `accent-ink`, and the size readout below in `mono-annotation` on an `accent` fill with `on-accent` text. Square corners (`radius-0`).
- **Rulers** along the canvas: `panel` ground, `line-control` ticks and `mono-annotation` numbers in `ink-muted`. Mark the selection's extent on the ruler with `accent-soft` edged in `accent-ink`.
- **Don't** use plus-sign grids, registration crosses, or circles with crosshairs. They read as clip art.

## Space, shape and depth

- 4px grid: `space-1` to `space-3` inside tools, `space-4` and up for dialogs, home and empty states.
- Control heights come from `control-sm` (24px, dense inspectors), `control-md` (28px, default) and `control-lg` (36px, dialog footers, home and empty-state actions). Use one height per toolbar row.
- Radii: `radius-sm` for fields, segments and label swatches; `radius-md` for buttons; `radius-lg` for panels, popovers, dialogs and project cards; `radius-xl` for pastel tiles. Selections, handles, timeline clips and the logo square stay square (`radius-0`).
- Panels are flat: `panel` fill and a `line` border, with no shadow. Only menus, popovers, dialogs and drag ghosts get `shadow-popover`.
- Every focusable control shows `focus-ring`: a 2px gap in the panel color, then 2px of solid `ink`. Never remove it; it follows the radius.
- Motion is short and functional: 80–120ms ease-out for hovers and disclosure. Nothing bounces.

## Layout

Workspaces are built from modular `Panel`s: a 44px top bar (wordmark, project name, a `Segmented` mode switch, then actions at the right), a tool strip on the left, the `canvas` viewport in the middle with rulers, and stacks of collapsible panels in a right-hand inspector. Time-based work adds a timeline across the bottom. Panels sit on `canvas` with `space-1` gaps and never nest. The home screen is where the pastels show most: each project card's thumbnail sits on its label's pastel.

## Logo

- The logo is the wordmark: "technical pastel" in Geist SemiBold, with a light blue `accent` square at the end where a period would be. The square is the brand in one shape; it can appear alone as a bullet, a loading mark or a favicon dot.
- Use `technical-pastel-wordmark.svg` on light grounds and `technical-pastel-wordmark-light.svg` on dark grounds. Use `technical-pastel-wordmark-mono.svg` only where one ink is required, such as engraving. Use `technical-pastel-app-icon.svg` for the app icon and favicon.
- Leave clear space equal to the height of the "p" bowl on every side. The minimum size is 16px tall on screen.
- Never recolor the letters blue, never change the square's color or shape, and never place the wordmark on an `accent` fill. On a pastel, use the ink wordmark.

## Iconography

- Line icons on a 24 grid: 1.5px stroke at 24px, square caps, miter joins, no fills except tiny solid dots. Straight lines, true circles and square anchor points (see `pen`).
- In code, use `Icon` with a name; it draws in `currentColor` and scales the stroke with its size. Use 20px in toolbars and buttons, 16px in dense rows and segments, and 24px on pastel tiles. The SVG files in Icons are single-ink (`#12161c`) for use outside code.
- Icons are `ink` by default, `ink-muted` when inactive, `accent-ink` for the active tool, and `on-pastel` on a pastel tile. No emoji in the interface.

## Components

`Icon`, `Button`, `Segmented`, `Panel`, `ValueField` and `EmptyState` are the working set. They live in `components/bundle.js` as `window.TechnicalPastel` (React 18 on the page), styled by `components/bundle.css` on top of the tokens.
