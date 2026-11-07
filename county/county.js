// THE COUNTY SITE — the map's behaviour (lab prototype, idea #89). No library: one "world" the size of the county
// picture, moved by a CSS transform; the closer pictures (town, downtown) sit inside it where they belong and fade in
// as you zoom; the pins live in screen space so they keep their size. Data: the JSON in #cty-data (build-page.mjs).
(() => {
  const root = document.getElementById("county"), dataEl = document.getElementById("cty-data");
  if (!root || !dataEl) return;
  const D = JSON.parse(dataEl.textContent), [WW, WH] = D.world;
  const $ = (s, el = root) => el.querySelector(s);
  const map = $(".cty-map"), world = $(".cty-world"), pinsEl = $(".cty-pins"), list = $(".cty-ol"), panel = $(".cty-panel"), where = $(".cty-where");
  const B = Object.fromEntries(D.buildings.map((b) => [b.id, b]));
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const mmss = (t) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
  root.classList.add("live");

  // ── the pictures ──
  // each level is a box the size of its full picture, placed into county space by its homography (matrix3d), holding an
  // n×n grid of tiles; a closer level's tiles load the first time you zoom far enough to see it
  world.style.width = WW + "px"; world.style.height = WH + "px";
  const tileW = (lv) => lv.size[0] / lv.n, tileH = (lv) => lv.size[1] / lv.n;
  const imgs = D.levels.map((lv, i) => {
    const box = document.createElement("div"); box.className = "lvbox" + (i ? " lv" : "");
    Object.assign(box.style, { width: lv.size[0] + "px", height: lv.size[1] + "px", opacity: i ? 0 : 1,
      transform: `matrix3d(${[lv.h[0], lv.h[3], 0, lv.h[6], lv.h[1], lv.h[4], 0, lv.h[7], 0, 0, 1, 0, lv.h[2], lv.h[5], 0, lv.h[8]].join(",")})` });
    lv.tiles.forEach((src, k) => {
      const im = new Image(); im.alt = ""; im.decoding = "async"; im.dataset.src = src;
      Object.assign(im.style, { left: (k % lv.n) * tileW(lv) + "px", top: Math.floor(k / lv.n) * tileH(lv) + "px", width: tileW(lv) + 0.5 + "px", height: tileH(lv) + 0.5 + "px" });
      box.appendChild(im);
    });
    world.appendChild(box); return box;
  });
  // each picture's footprint in county space (the box around its four corners), for the "where am I" badge
  const hApply = (h, x, y) => { const w = h[6] * x + h[7] * y + h[8]; return [(h[0] * x + h[1] * y + h[2]) / w, (h[3] * x + h[4] * y + h[5]) / w]; };
  const frames = D.levels.map((lv) => { const c = [[0, 0], [lv.size[0], 0], [0, lv.size[1]], [lv.size[0], lv.size[1]]].map(([x, y]) => hApply(lv.h, x, y));
    return [Math.min(...c.map((p) => p[0])), Math.min(...c.map((p) => p[1])), Math.max(...c.map((p) => p[0])), Math.max(...c.map((p) => p[1]))]; });
  const load = (i) => { const box = imgs[i]; if (box.dataset.on) return; box.dataset.on = "1"; box.querySelectorAll("img").forEach((im) => { im.src = im.dataset.src; }); };
  load(0);

  // ── the pins ──
  const pins = {};
  for (const b of D.buildings) {
    const el = document.createElement("button");
    el.type = "button"; el.className = "cty-pin" + (b.kind === "landmark" ? " lm" : ""); el.dataset.id = b.id;
    el.setAttribute("aria-label", `${b.name}: ${b.count} episode${b.count === 1 ? "" : "s"}`);
    el.innerHTML = `<span class="dot">${b.kind === "landmark" ? "" : b.count}</span><span class="lab">${esc(b.name)}</span>`;
    pinsEl.appendChild(el); pins[b.id] = el;
  }

  // ── the view: scale s, offset tx/ty (screen px) ──
  let s = 1, tx = 0, ty = 0, sMin = 1, sMax = 8, anim = null;
  const vw = () => map.clientWidth, vh = () => map.clientHeight;
  const deepK = Math.min(...D.levels.map((l) => l.k));
  function fit() { sMin = Math.max(vw() / WW, vh() / WH); sMax = Math.max(sMin * 1.5, 1.1 / deepK); }
  function clamp() { s = Math.min(sMax, Math.max(sMin, s)); tx = Math.min(0, Math.max(vw() - WW * s, tx)); ty = Math.min(0, Math.max(vh() - WH * s, ty)); }
  function apply() {
    clamp();
    world.style.transform = `translate(${tx}px,${ty}px) scale(${s})`;
    let label = D.levels[0].label; const op = [1];
    // a closer picture fades in as soon as the one behind it starts to be enlarged (z: screen px per picture px)
    const cx = (vw() / 2 - tx) / s, cy = (vh() / 2 - ty) / s;   // the view's centre, in county space
    D.levels.forEach((lv, i) => { if (!i) return; const z = s * lv.k, o = Math.min(1, Math.max(0, (z - 0.2) / 0.12)); op[i] = o; imgs[i].style.opacity = o; if (z > 0.12) load(i);
      const [x0, y0, x1, y1] = frames[i]; if (o > 0.5 && cx > x0 && cx < x1 && cy > y0 && cy < y1) label = lv.label; });
    where.textContent = label;
    root.classList.toggle("labels", s * (D.levels[1]?.k ?? 1) > 0.95);
    for (const b of D.buildings) { const el = pins[b.id]; let p = null;
      // where the building is in each picture, blended by how much of that picture is showing
      b.pins.forEach((q, i) => { if (!q) return; p = p ? [p[0] + (q[0] - p[0]) * op[i], p[1] + (q[1] - p[1]) * op[i]] : q; });
      if (!p) { el.hidden = true; continue; }
      const x = p[0] * s + tx, y = p[1] * s + ty, off = x < -40 || y < -40 || x > vw() + 40 || y > vh() + 40;
      el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`; el.style.visibility = off ? "hidden" : ""; }
  }
  function zoomAt(f, cx = vw() / 2, cy = vh() / 2) { const ns = Math.min(sMax, Math.max(sMin, s * f)), k = ns / s; tx = cx - (cx - tx) * k; ty = cy - (cy - ty) * k; s = ns; apply(); }
  // glide so world point (x, y) sits at screen point (cx, cy) at scale ts
  function flyTo(x, y, ts, cx = vw() / 2, cy = vh() / 2, ms = 700) {
    cancelAnimationFrame(anim); ts = Math.min(sMax, Math.max(sMin, ts));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) ms = 1; // no glide for people who asked for less motion
    const s0 = s, tx0 = tx, ty0 = ty, t0 = performance.now();
    const step = (now) => { const u = Math.min(1, (now - t0) / ms), e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      s = s0 * Math.pow(ts / s0, e); const txE = cx - x * ts, tyE = cy - y * ts; tx = tx0 + (txE - tx0) * e; ty = ty0 + (tyE - ty0) * e; apply();
      if (u < 1) anim = requestAnimationFrame(step); };
    anim = requestAnimationFrame(step);
  }
  const home = () => flyTo(WW / 2, WH / 2, sMin);

  // ── pointer: drag, pinch, wheel, double-click ──
  const pts = new Map(); let moved = 0, pinch = null;
  map.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".cty-ctl,.cty-panel")) return;
    cancelAnimationFrame(anim); map.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]); moved = 0;
    if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), s }; }
    map.classList.add("drag");
  });
  map.addEventListener("pointermove", (e) => {
    if (!pts.has(e.pointerId)) return;
    const prev = pts.get(e.pointerId), dx = e.clientX - prev[0], dy = e.clientY - prev[1]; pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pts.size === 1) { tx += dx; ty += dy; moved += Math.abs(dx) + Math.abs(dy); apply(); }
    else if (pinch) { const [a, b] = [...pts.values()], r = map.getBoundingClientRect(), d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      moved += 10; zoomAt((pinch.s * d / pinch.d) / s, (a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top); }
  });
  const up = (e) => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; if (!pts.size) map.classList.remove("drag"); };
  map.addEventListener("pointerup", up); map.addEventListener("pointercancel", up);
  map.addEventListener("wheel", (e) => { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); cancelAnimationFrame(anim); const r = map.getBoundingClientRect();
    zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018)), e.clientX - r.left, e.clientY - r.top); }, { passive: false });
  map.addEventListener("dblclick", (e) => { if (e.target.closest(".cty-pin,.cty-ctl,.cty-panel")) return; const r = map.getBoundingClientRect(), cx = e.clientX - r.left, cy = e.clientY - r.top;
    flyTo((cx - tx) / s, (cy - ty) / s, s * 2, cx, cy, 450); });
  map.addEventListener("keydown", (e) => {
    const k = { ArrowLeft: [60, 0], ArrowRight: [-60, 0], ArrowUp: [0, 60], ArrowDown: [0, -60] }[e.key];
    if (k) { tx += k[0]; ty += k[1]; apply(); e.preventDefault(); }
    else if (e.key === "+" || e.key === "=") zoomAt(1.4); else if (e.key === "-") zoomAt(1 / 1.4); else if (e.key === "Escape") close();
  });
  $(".cty-in-btn").onclick = () => zoomAt(1.6); $(".cty-out-btn").onclick = () => zoomAt(1 / 1.6); $(".cty-home-btn").onclick = () => { close(); home(); };

  // ── choosing a building ──
  let sel = null;
  const wide = () => matchMedia("(min-width: 901px)").matches;
  function open(id, { fly = true, focus = false } = {}) {
    const b = B[id]; if (!b) return; sel = id;
    for (const [k, el] of Object.entries(pins)) el.classList.toggle("on", k === id);
    list.querySelectorAll("button").forEach((el) => el.classList.toggle("on", el.dataset.id === id));
    const mins = Math.max(1, Math.round(b.seconds / 60));
    panel.innerHTML = `<header><h2 id="cty-ph">${esc(b.name)}</h2>${b.blurb ? `<p class="bl">${esc(b.blurb)}</p>` : ""}
      <p class="meta">${b.kind === "landmark" ? `Every episode passes through · ${mins} min on screen` : `In ${b.count} episode${b.count === 1 ? "" : "s"} · ${mins} min on screen`}</p>
      <button type="button" class="cty-x" aria-label="Close">×</button></header>
      <ol class="cty-eps">${b.eps.map((e) => {
        const scene = e.yt ? `https://www.youtube.com/watch?v=${e.yt}&t=${e.scene}s` : null;
        const pic = `<img src="${esc(e.img ?? e.thumb ?? "")}" alt="" loading="lazy">`;
        return `<li class="cty-ep">${scene ? `<a class="sc" href="${scene}" rel="noopener" tabindex="-1" aria-hidden="true">${pic}<span class="t">▶ ${mmss(e.scene)}</span></a>` : `<span class="sc">${pic}</span>`}
          <div><p class="n">File ${e.n}</p><h3>${esc(e.title)}</h3>${e.chapter ? `<p class="ch">Chapter · ${esc(e.chapter)}</p>` : ""}
          <p class="go">${scene ? `<a href="${scene}" rel="noopener">▶ Watch this scene</a>` : `<span class="soon">Not on YouTube yet</span>`}${e.page ? `<a href="${esc(e.page)}">Check our work</a>` : ""}</p></div></li>`; }).join("")}</ol>`;
    panel.hidden = false; panel.setAttribute("aria-labelledby", "cty-ph"); panel.tabIndex = -1;
    // from the list or the keyboard, the reader goes where the answer is (the panel sits before the list in the page)
    if (focus) panel.focus({ preventScroll: wide() });
    panel.querySelector(".cty-x").onclick = close;
    history.replaceState(null, "", `#county=${id}`);
    if (fly && b.pin) { const lv = D.levels[b.level ?? 0], ts = Math.max(s, Math.min(sMax, 0.8 / lv.k));
      // with the panel over the map's right side, centre the building in the space left of it
      const cx = wide() ? (vw() - Math.min(400, vw() - 80) - 12) / 2 : vw() / 2;
      flyTo(b.pin[0], b.pin[1], ts, Math.max(80, cx), vh() / 2); }
    if (!wide()) panel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  }
  function close() { const was = sel, inPanel = panel.contains(document.activeElement); sel = null; panel.hidden = true;
    if (inPanel && was) list.querySelector(`button[data-id="${was}"]`)?.focus(); for (const el of Object.values(pins)) el.classList.remove("on");
    list.querySelectorAll("button.on").forEach((el) => el.classList.remove("on")); history.replaceState(null, "", location.pathname + location.search); }
  pinsEl.addEventListener("click", (e) => { const p = e.target.closest(".cty-pin"); if (p && moved < 6) open(p.dataset.id, { focus: e.detail === 0 }); });
  list.addEventListener("click", (e) => { const p = e.target.closest("button[data-id]"); if (p) open(p.dataset.id, { focus: true }); });
  // hover links the list and the map both ways
  const hot = (id, on) => { pins[id]?.classList.toggle("hot", on); list.querySelector(`button[data-id="${id}"]`)?.classList.toggle("hot", on); };
  for (const el of [pinsEl, list]) {
    el.addEventListener("pointerover", (e) => { const p = e.target.closest("[data-id]"); if (p) hot(p.dataset.id, true); });
    el.addEventListener("pointerout", (e) => { const p = e.target.closest("[data-id]"); if (p) hot(p.dataset.id, false); });
  }
  // the filter: everything, the story stops, or the places every episode passes through
  root.querySelectorAll(".cty-seg button").forEach((btn) => btn.addEventListener("click", () => {
    root.querySelectorAll(".cty-seg button").forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
    const f = btn.dataset.f;
    for (const b of D.buildings) { const show = f === "all" || (f === "stops") === (b.kind === "stop");
      pins[b.id].classList.toggle("dim", !show); list.querySelector(`li[data-id="${b.id}"]`)?.toggleAttribute("hidden", !show); }
    list.querySelectorAll(".grp").forEach((g) => g.toggleAttribute("hidden", (f === "stops" && g.dataset.g === "landmark") || (f === "landmarks" && g.dataset.g === "stop")));
  }));

  new ResizeObserver(() => { const first = !map.dataset.ready; fit(); if (first) { s = sMin; tx = (vw() - WW * s) / 2; ty = (vh() - WH * s) / 2; map.dataset.ready = "1"; } apply(); }).observe(map);
  const want = location.hash.match(/^#county=([\w-]+)/)?.[1];
  if (want && B[want]) requestAnimationFrame(() => open(want));
})();
