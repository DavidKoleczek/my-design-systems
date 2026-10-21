/* @ds-bundle: {"format":4,"namespace":"TechnicalPastel","components":[{"name":"Icon"},{"name":"Button"},{"name":"Segmented"},{"name":"Panel"},{"name":"ValueField"},{"name":"EmptyState"}]} */
(function () {
  /* React is read when a component renders, so the bundle can load before React does. */
  function R() { return window.React; }
  function h() { var r = R(); return r.createElement.apply(r, arguments); }
  function useState(v) { return R().useState(v); }
  function useRef(v) { return R().useRef(v); }
  function useEffect(f, d) { return R().useEffect(f, d); }
  /* Attributes may arrive as strings from markup: coerce numbers and booleans. */
  function num(v, d) { if (v === undefined || v === null || v === '') return d; var n = Number(v); return isNaN(n) ? d : n; }
  function bool(v, d) { if (v === undefined || v === null) return d; return v === true || v === 'true' || v === ''; }

  var ICONS = {"select": ["M6 3v16l4.5-4.5 3 6.5 2.5-1-3-6.5H19z"], "move": ["M12 3v18M3 12h18", "M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"], "pen": ["M5 18C5 10 10 5 18 5", "M5 18V9", "f:M3.5 16.5h3v3h-3zM16.5 3.5h3v3h-3zM4 7.5h2v2H4z"], "shape": ["M3 10h11v11H3z", "M20.5 9.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"], "text": ["M5 5h14M12 5v15M9 20h6"], "frame": ["M7 3v18M17 3v18M3 7h18M3 17h18"], "crop": ["M7 2v15h15M2 7h15v15"], "layers": ["M12 3l9 5-9 5-9-5z", "M3 12l9 5 9-5", "M3 16l9 5 9-5"], "grid": ["M3 3h18v18H3z", "M9 3v18M15 3v18M3 9h18M3 15h18"], "eye": ["M2 12c3-5.5 6.5-7 10-7s7 1.5 10 7c-3 5.5-6.5 7-10 7s-7-1.5-10-7z", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], "lock": ["M5 11h14v10H5z", "M8 11V8a4 4 0 0 1 8 0v3"], "play": ["M7 4l12 8-12 8z"], "pause": ["M6 5h4v14H6zM14 5h4v14h-4z"], "record": ["M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z", "f:M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], "add": ["M12 4v16M4 12h16"], "close": ["M5 5l14 14M19 5L5 19"], "more": ["f:M4 11h2.5v2.5H4zM10.75 11h2.5v2.5h-2.5zM17.5 11H20v2.5h-2.5z"], "search": ["M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z", "M15.5 15.5L21 21"], "sliders": ["M3 7h4M11 7h10M3 17h10M17 17h4", "M7 5h4v4H7zM13 15h4v4h-4z"], "export": ["M12 15V3M8 7l4-4 4 4", "M9 11H5v10h14V11h-4"], "undo": ["M9 5L4 10l5 5", "M4 10h10.5a5.5 5.5 0 0 1 0 11H11"], "redo": ["M15 5l5 5-5 5", "M20 10H9.5a5.5 5.5 0 0 0 0 11H13"], "chevron": ["M6 9l6 6 6-6"], "check": ["M4 12.5l5 5L20 6.5"], "warning": ["M12 3l10 18H2z", "M12 10v5", "f:M11 17h2v2h-2z"], "measure": ["M3 8v8M21 8v8M3 12h18", "M7 10.5v3M11 10.5v3M15 10.5v3M19 10.5v3"]};

  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) if (keys.indexOf(k) < 0) r[k] = o[k]; return r; }
  var uid = 0;
  function useId(prefix) { var r = useRef(null); if (r.current === null) r.current = prefix + '-' + (++uid); return r.current; }

  /* Icon — line icons on a 24 grid, 1.5px at 24px, square caps, currentColor */
  function Icon(props) {
    var size = num(props.size, 20);
    var paths = ICONS[props.name] || [];
    var label = props.label;
    return h('svg', {
      className: cx('tp-icon', props.className), viewBox: '0 0 24 24', width: size, height: size,
      fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'square', strokeLinejoin: 'miter',
      focusable: 'false', role: label ? 'img' : undefined, 'aria-label': label || undefined,
      'aria-hidden': label ? undefined : true, style: props.style
    }, paths.map(function (d, i) {
      return d.indexOf('f:') === 0
        ? h('path', { key: i, d: d.slice(2), fill: 'currentColor', stroke: 'none' })
        : h('path', { key: i, d: d });
    }));
  }
  Icon.names = Object.keys(ICONS);

  function glyph(icon, size) { return typeof icon === 'string' ? h(Icon, { name: icon, size: size }) : icon; }

  /* Button */
  function Button(props) {
    var variant = props.variant || 'secondary';
    var size = props.size || 'md';
    var rest = omit(props, ['variant', 'size', 'icon', 'className', 'children', 'disabled']);
    return h('button', Object.assign({ type: 'button', disabled: bool(props.disabled, false) }, rest, {
      className: cx('tp-btn', 'tp-btn-' + variant, 'tp-btn-' + size, !props.children && 'tp-btn-icon-only', props.className)
    }), props.icon ? h('span', { className: 'tp-btn-glyph', 'aria-hidden': true }, glyph(props.icon, size === 'sm' ? 16 : 20)) : null,
      props.children ? h('span', null, props.children) : null);
  }

  /* Segmented — one choice from a few modes */
  function Segmented(props) {
    var items = props.items || [];
    var first = items.length ? items[0].value : undefined;
    var _s = useState(props.defaultValue !== undefined ? props.defaultValue : first), inner = _s[0], setInner = _s[1];
    var value = props.value !== undefined ? props.value : inner;
    var refs = useRef([]);
    function select(v) { if (props.value === undefined) setInner(v); if (props.onChange) props.onChange(v); }
    function onKey(e, i) {
      var d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var j = (i + d + items.length) % items.length;
      select(items[j].value);
      if (refs.current[j]) refs.current[j].focus();
    }
    return h('div', { role: 'radiogroup', 'aria-label': props.label, className: cx('tp-seg', props.size === 'sm' && 'tp-seg-sm', props.className) },
      items.map(function (it, i) {
        var on = it.value === value;
        var iconOnly = it.icon && !it.label;
        return h('button', {
          key: String(it.value), type: 'button', role: 'radio', 'aria-checked': on, tabIndex: on ? 0 : -1,
          className: cx('tp-seg-item', on && 'is-active', iconOnly && 'is-icon'),
          ref: function (el) { refs.current[i] = el; },
          'aria-label': iconOnly ? (it.title || String(it.value)) : undefined, title: it.title,
          onClick: function () { select(it.value); }, onKeyDown: function (e) { onKey(e, i); }
        }, it.icon ? glyph(it.icon, 16) : null, it.label ? h('span', null, it.label) : null);
      }));
  }

  /* Panel — modular, collapsible, flat */
  function Panel(props) {
    var collapsible = bool(props.collapsible, true);
    var _s = useState(bool(props.defaultOpen, true)), open = _s[0], setOpen = _s[1];
    var bodyId = useId('tp-panel');
    var title = h('span', { className: 'tp-panel-title' }, props.title);
    return h('section', { className: cx('tp-panel', props.className), 'aria-label': typeof props.title === 'string' ? props.title : undefined },
      h('header', { className: 'tp-panel-header' },
        collapsible
          ? h('button', { type: 'button', className: 'tp-panel-toggle', 'aria-expanded': open, 'aria-controls': bodyId, onClick: function () { setOpen(!open); } },
              h(Icon, { name: 'chevron', size: 16, className: cx('tp-chevron', open && 'is-open') }), title)
          : title,
        props.actions ? h('div', { className: 'tp-panel-actions' }, props.actions) : null),
      open ? h('div', { id: bodyId, className: 'tp-panel-body' }, props.children) : null);
  }

  /* ValueField — a number you can scrub, step or type */
  var TIGHT = ['°', '%', '×', '′', '″'];
  function decimals(step) { var s = String(step); var i = s.indexOf('.'); return i < 0 ? 0 : s.length - i - 1; }
  function ValueField(props) {
    var min = num(props.min, 0);
    var max = num(props.max, 100);
    var step = num(props.step, 1);
    var prec = num(props.precision, decimals(step));
    var unit = props.unit || '';
    var disabled = bool(props.disabled, false);
    var _s = useState(num(props.defaultValue, min)), inner = _s[0], setInner = _s[1];
    var _e = useState(null), draft = _e[0], setDraft = _e[1];
    var value = props.value !== undefined ? num(props.value, min) : inner;
    var drag = useRef(null);
    var inputRef = useRef(null);
    var rootRef = useRef(null);
    var labelId = useId('tp-field');

    function clamp(v) { return Math.min(max, Math.max(min, v)); }
    function commit(v) {
      if (isNaN(v)) return;
      v = clamp(Math.round(v / step) * step);
      v = Number(v.toFixed(prec));
      if (props.value === undefined) setInner(v);
      if (props.onChange) props.onChange(v);
    }
    useEffect(function () { if (draft !== null && inputRef.current) { inputRef.current.focus(); inputRef.current.select(); } }, [draft !== null]);

    function finish(ok) {
      if (ok) commit(parseFloat(draft));
      setDraft(null);
      if (rootRef.current) rootRef.current.focus();
    }
    function onPointerDown(e) {
      if (draft !== null || e.button !== 0) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      drag.current = { x: e.clientX, v: value, w: e.currentTarget.getBoundingClientRect().width, moved: false };
    }
    function onPointerMove(e) {
      var d = drag.current; if (!d) return;
      var dx = e.clientX - d.x;
      if (Math.abs(dx) > 3) d.moved = true;
      if (d.moved) commit(d.v + (dx / d.w) * (max - min) * (e.shiftKey ? 0.1 : 1));
    }
    function onPointerUp() {
      var d = drag.current; drag.current = null;
      if (d && !d.moved && !disabled) setDraft(value.toFixed(prec));
    }
    function onKeyDown(e) {
      if (draft !== null) return;
      var big = e.shiftKey ? 10 : 1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); commit(value + step * big); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); commit(value - step * big); }
      else if (e.key === 'Home') { e.preventDefault(); commit(min); }
      else if (e.key === 'End') { e.preventDefault(); commit(max); }
      else if (e.key === 'Enter') { e.preventDefault(); setDraft(value.toFixed(prec)); }
    }
    var frac = max > min ? (value - min) / (max - min) : 0;
    var text = value.toFixed(prec) + (unit ? (TIGHT.indexOf(unit) >= 0 ? '' : ' ') + unit : '');
    return h('div', {
      ref: rootRef, role: 'slider', tabIndex: disabled ? -1 : 0,
      'aria-labelledby': labelId, 'aria-valuemin': min, 'aria-valuemax': max, 'aria-valuenow': value,
      'aria-valuetext': text, 'aria-disabled': disabled || undefined,
      className: cx('tp-field', props.size === 'sm' && 'tp-field-sm', draft !== null && 'is-editing', props.className),
      onPointerDown: disabled ? undefined : onPointerDown, onPointerMove: onPointerMove, onPointerUp: onPointerUp,
      onKeyDown: disabled ? undefined : onKeyDown
    },
      !bool(props.bar, true) ? null : h('span', { className: 'tp-field-fill', style: { width: (frac * 100) + '%' }, 'aria-hidden': true }),
      h('span', { id: labelId, className: 'tp-field-label' }, props.label),
      draft !== null
        ? h('input', {
            ref: inputRef, className: 'tp-field-input', value: draft, inputMode: 'decimal', 'aria-label': props.label,
            onChange: function (e) { setDraft(e.target.value); },
            onKeyDown: function (e) { if (e.key === 'Enter') finish(true); else if (e.key === 'Escape') finish(false); },
            onBlur: function () { finish(true); }
          })
        : h('span', { className: 'tp-field-value' }, text));
  }

  /* EmptyState — crop marks, a pastel tile with one icon, an optional dimension line */
  var TONES = ['blue', 'lilac', 'rose', 'peach', 'butter', 'mint', 'sage', 'stone'];
  function EmptyState(props) {
    var tone = TONES.indexOf(props.tone) >= 0 ? props.tone : 'blue';
    var corners = ['tl', 'tr', 'bl', 'br'].map(function (c) { return h('span', { key: c, className: 'tp-crop tp-crop-' + c, 'aria-hidden': true }); });
    return h('div', { className: cx('tp-empty', props.className) },
      corners,
      props.meta ? h('div', { className: 'tp-empty-dim', 'aria-hidden': true }, h('span', { className: 'tp-dim-line' }), h('span', { className: 'tp-dim-text' }, props.meta), h('span', { className: 'tp-dim-line' })) : null,
      h('div', { className: 'tp-empty-art', 'aria-hidden': true, style: { background: 'var(--pastel-' + tone + ')' } }, h(Icon, { name: props.icon || 'add', size: 24 })),
      h('p', { className: 'tp-empty-title' }, props.title),
      props.children ? h('p', { className: 'tp-empty-body' }, props.children) : null,
      props.action ? h('div', { className: 'tp-empty-action' }, props.action) : null);
  }

  window.TechnicalPastel = Object.assign(window.TechnicalPastel || {}, { Icon: Icon, Button: Button, Segmented: Segmented, Panel: Panel, ValueField: ValueField, EmptyState: EmptyState });
})();
