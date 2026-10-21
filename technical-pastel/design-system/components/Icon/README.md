# Icon

Line icons drawn like a technical diagram, on a 24 grid with a 1.5px stroke, in `currentColor`.

**You provide:** `name` (one of `Icon.names`), and optionally `size` (16, 20 or 24) and `label` when the icon stands alone without visible text.

- Use 20px in toolbars and buttons, 16px in dense rows and segments, and 24px in empty states. The stroke scales with the size.
- Color it with `ink`; use `ink-muted` for inactive tools and `accent-ink` only to mark the active tool.
- It is hidden from assistive tech unless you pass `label`. Next to visible text, leave `label` off.
- Need an icon that isn't here? Draw it on the same grid: straight lines and true circles, square caps and miter joins, solid fills only for dots smaller than 3px.
