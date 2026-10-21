# Segmented

One choice from two to six modes: workspace modes, view options, tools and alignment.

**You provide:** `items` (each `{ value, label?, icon?, title? }`), `value` and `onChange` (or `defaultValue`), a `label` for the group, and optionally `size: 'sm'`.

- The track is `field` with a `line` edge; the active segment fills with pale blue `accent-soft`, edged in `accent-ink`, with `ink` text. Inactive segments are `ink-muted`.
- Icon-only segments need a `title`, which becomes the tooltip and accessible name.
- It is a radio group: arrow keys move and select, Tab leaves.
- Use it for modes that change what the screen shows. For on/off settings, use a single toggle instead.
