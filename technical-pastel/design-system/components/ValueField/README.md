# ValueField

A number you can drag to scrub, click to type, or step with the arrow keys; the workhorse of every inspector.

**You provide:** `label`, `value` and `onChange` (or `defaultValue`), `min`, `max` and `step`, and optionally `unit`, `precision`, `bar`, `size` and `disabled`.

- The label sits left in `ink-muted`; the value sits right in Geist Mono with tabular numbers, followed by its unit.
- The fill shows where the value sits in its range, in pale blue `accent-soft`. Turn it off with `bar={false}` for unbounded values such as coordinates and sizes.
- Drag horizontally to scrub (hold Shift for fine control). Click without dragging to type, then Enter to commit or Escape to cancel. Arrow keys step, and Shift steps by ten.
- Always give a unit when the value has one. Keep labels to one or two words, or a single letter for X, Y, W and H.
