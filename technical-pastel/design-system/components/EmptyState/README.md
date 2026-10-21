# EmptyState

An invitation to fill a space: crop marks at the corners, one icon on a pastel tile, an optional dimension line, and a title.

**You provide:** `title` (an invitation: "Start with a frame"), one sentence of body text as children, `icon` (an icon name), and optionally `tone` (a pastel: blue, lilac, rose, peach, butter, mint, sage or stone; blue by default), `meta` (a dimension label such as "1920 × 1080") and `action` (usually one primary `Button`).

- It sits on `canvas` with `line-control` crop marks at the corners, so it also reads as a drop target.
- The art is a 64px tile in the chosen pastel with `radius-xl` corners and the icon in `on-pastel`. Pick the tone from the thing the space will hold (its label color), or leave it blue.
- The title is `ui-title` in `ink`, the body is `ui-body` in `ink-muted`, and `meta` is set in `mono-annotation` on a dimension line.
- Use it for empty canvases, timelines, libraries and search results. Don't use it for errors; those get a `danger` message that says what to do next.
