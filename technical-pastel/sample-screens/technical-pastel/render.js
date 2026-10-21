/* Technical Pastel screen runtime: mounts the <x-import> component tags in a screen with the
   real components from components/bundle.js (window.TechnicalPastel). Needs React 18 and ReactDOM 18
   loaded first. Values written as {{name}} come from the screen's <script id="screen-logic">. */
(function () {
  function camel(s) { return s.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); }); }
  function styleObj(str) {
    var o = {};
    str.split(';').forEach(function (d) {
      var i = d.indexOf(':'); if (i < 0) return;
      var k = d.slice(0, i).trim(), v = d.slice(i + 1).trim();
      if (k) o[k.indexOf('--') === 0 ? k : camel(k)] = v;
    });
    return o;
  }
  function Slot(p) {
    var ref = React.useRef(null);
    React.useLayoutEffect(function () {
      var r = ref.current;
      if (r && !r.firstChild) p.nodes.forEach(function (n) { r.appendChild(n); });
    }, []);
    return React.createElement('div', { ref: ref, style: { display: 'contents' } });
  }
  function screenValues() {
    var src = document.getElementById('screen-logic');
    if (!src) return {};
    function DCLogic() { this.props = {}; this.state = {}; }
    DCLogic.prototype.setState = function () {};
    DCLogic.prototype.forceUpdate = function () {};
    var Component = new Function('DCLogic', src.textContent + '\nreturn Component;')(DCLogic);
    return new Component().renderVals() || {};
  }
  function run() {
    var vals = screenValues();
    var tags = Array.prototype.slice.call(document.querySelectorAll('x-import')).reverse();
    tags.forEach(function (el) {
      var C = window;
      el.getAttribute('component-from-global-scope').split('.').forEach(function (p) { C = C && C[p]; });
      if (!C) { console.warn('Unknown component', el.getAttribute('component-from-global-scope')); return; }
      var props = {};
      Array.prototype.forEach.call(el.attributes, function (a) {
        if (a.name === 'component-from-global-scope') return;
        var v = a.value, m = /^\{\{\s*([\w.$]+)\s*\}\}$/.exec(v);
        if (m) v = m[1].split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, vals);
        if (a.name === 'style') props.style = styleObj(v);
        else if (a.name === 'class') props.className = v;
        else if (a.name.indexOf('aria-') === 0 || a.name.indexOf('data-') === 0) props[a.name] = v;
        else props[camel(a.name)] = v;
      });
      var kids = Array.prototype.slice.call(el.childNodes);
      var textOnly = kids.every(function (n) { return n.nodeType === 3; });
      if (kids.length && textOnly && el.textContent.trim()) props.children = el.textContent.trim();
      else if (kids.length && !textOnly) props.children = React.createElement(Slot, { nodes: kids });
      var host = document.createElement('span');
      host.style.display = 'contents';
      el.replaceWith(host);
      ReactDOM.createRoot(host).render(React.createElement(C, props));
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
