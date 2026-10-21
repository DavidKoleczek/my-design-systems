# Button

Secondary is the default; use one primary per view, for the thing the screen is for.

**You provide:** the label as children (verb first, sentence case: "Render", "Import audio"), and optionally `variant`, `size`, `icon` (an icon name or a node) and the usual button props.

- `primary` is the light blue `accent` with near-black `on-accent` text, never white, which fails contrast on this blue.
- `secondary` is a `panel` fill with a `line-control` edge, `ghost` has no fill (toolbars, panel headers), and `danger` is for destructive confirmations only.
- Sizes follow the control heights: `sm` 24px for inspectors, `md` 28px default, `lg` 36px for dialog footers, home and empty states. Use one size per row.
- An icon-only button needs an `aria-label`. Prefer keeping buttons enabled and explaining on click over disabling them.
