// THE CHANNEL SITE — home behaviour (lab prototype, 2026-11-05; review fixes 2026-11-07): the finder (episodes AND the
// claims in every fact-check log), the corrections wall, topic chips and the cards/table switch. Every episode is real
// HTML already; this only filters and shuffles.
(() => {
  const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const json = (id) => { const el = document.getElementById(id); return el ? JSON.parse(el.textContent) : null; };
  const LOG = ".";   // the logs sit beside each case file on this same site

  // ── find what you just watched: an episode by its words, or a claim by the words or number you heard ──
  const F = json("find-data"), q = $("#q"), hits = $("#hits"), said = $("#hits-count");
    // screen readers hear a short count, not the whole list on every keystroke
    let sayT = 0; const say = (s) => { clearTimeout(sayT); sayT = setTimeout(() => { if (said) said.textContent = s; }, 400); };
  if (F && q) {
    const hay = F.map((e) => [e, `${e.t} ${e.q} ${e.k} ${e.c} file ${e.n}`.toLowerCase()]);
    const pic = (e) => (e.th ? `<img src="${esc(e.th)}" alt="">` : `<span class="tile"></span>`);
    // the claim index is the live site's (~900 KB): fetched once, on the first keystroke, never on page load
    let claims = null, loading = false;
    const loadClaims = () => {
      if (claims || loading) return; loading = true;
      const s = document.createElement("script"); s.src = "assets/search-index.js";
      s.onload = () => {
        const live = new Set(F.map((e) => e.s));
        claims = (window.__EPISODES__ || []).filter((e) => live.has(e.s)).flatMap((e) =>
          (e.d || []).filter((d) => d[0] === "factcheck-log").flatMap((d) => (d[3] || []).map((c) => ({ s: e.s, n: e.n, c, l: c.toLowerCase() }))));
        render();
      };
      document.head.appendChild(s);
    };
    const render = () => {
      const words = q.value.toLowerCase().split(/\s+/).filter(Boolean);
      if (!words.length) { hits.innerHTML = ""; say(""); return; }
      const found = hay.filter(([, h]) => words.every((w) => h.includes(w))).slice(0, 4).map(([e]) => e);
      const cl = claims && words.join("").length >= 3 ? claims.filter((c) => words.every((w) => c.l.includes(w))).slice(0, 4) : [];
      const eps = found.map((e) => `<li><a href="${e.s}/">${pic(e)}<span><b>${esc(e.q || e.t)}</b><small>File ${e.n} · ${esc(e.c)} · ${esc(e.d)}</small></span></a></li>`);
      const cls = cl.map((c) => `<li class="claim"><a href="${LOG}/${c.s}/factcheck-log.html"><span><b>${esc(c.c.length > 160 ? c.c.slice(0, 158) + "…" : c.c)}</b><small>A claim we checked · File ${c.n} · its source is in the fact-check log</small></span></a></li>`);
      say(eps.length || cls.length ? `${eps.length} episode${eps.length === 1 ? "" : "s"}, ${cls.length} claim${cls.length === 1 ? "" : "s"}` : claims ? "No matches" : "");
      hits.innerHTML = eps.length || cls.length ? [...eps, ...cls].join("")
        : `<li class="none">${claims ? "Nothing on that yet. Try another word, or browse every question below." : "Searching the claims…"}</li>`;
    };
    q.addEventListener("input", () => { loadClaims(); render(); });
    q.addEventListener("keydown", (ev) => { if (ev.key === "Enter") { const a = hits.querySelector("a"); if (a) location.href = a.href; } });
  }

  // ── the corrections wall: three at a time, a fresh three on demand; only pairs with both halves written ──
  const W = json("wall-data"), wall = $("#wall");
  if (W && wall && W.length) {
    // deal round-robin across episodes, so three on screen come from three different files
    const mix = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
    const groups = mix([...W.reduce((m, c, i) => m.set(c.n, [...(m.get(c.n) ?? []), i]), new Map()).values()].map(mix));
    const order = []; for (let r = 0; order.length < W.length; r++) for (const g of groups) if (g[r] !== undefined) order.push(g[r]);
    let at = 0;
    const show = () => {
      const pick = []; for (let k = 0; k < 3 && W.length; k++) { pick.push(W[order[at % W.length]]); at++; }
      wall.innerHTML = pick.map((c) => `<li><p class="had"><span class="lbl">Draft said</span><del>${esc(c.had)}</del></p>
        <p class="is"><span class="lbl">The record says</span><ins>${esc(c.is)}</ins></p>
        <a class="from" href="${c.slug}/">From File ${c.n}: ${esc(c.q)}</a></li>`).join("");
    };
    show(); $("#shuffle")?.addEventListener("click", show);
  }

  // ── topic chips + the cards/table switch ──
  let shelf = "";
  const filter = () => { for (const el of $$(".all .cards .card, .all tbody tr")) el.hidden = !!shelf && el.dataset.shelf !== shelf; };
  $$(".chips button").forEach((b) => b.addEventListener("click", () => {
    $$(".chips button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); shelf = b.dataset.s; filter(); }));
  $$(".view button").forEach((b) => b.addEventListener("click", () => {
    $$(".view button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    const t = b.dataset.v === "table"; $(".all .cards").hidden = t; $(".all .table").hidden = !t;
    try { localStorage.setItem("view", b.dataset.v); } catch {} }));
  try { if (localStorage.getItem("view") === "table") $('.view button[data-v="table"]')?.click(); } catch {}
})();
