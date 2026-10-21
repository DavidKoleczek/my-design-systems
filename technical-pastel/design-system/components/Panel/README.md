# Panel

A modular, collapsible block of controls; inspectors are built from stacks of these.

**You provide:** `title` (a short noun: "Transform", "Appearance"), children (usually `ValueField`s and `Segmented`s), and optionally `actions` (ghost `sm` icon buttons), `collapsible` and `defaultOpen`.

- Panels are flat: `panel` fill, `line` border and `radius-lg`, with no shadow. Stack them with a `space-1` gap on `canvas`.
- The header is `panel-header` tall with the title in `ui-label`; the chevron rotates on open. The body pads with `space-3` and stacks fields with `space-1`.
- Put paired values (X and Y, W and H) side by side in a two-column grid.
- Don't nest panels. For a sub-group, use a `ui-caption` label in `ink-muted` above the fields.
