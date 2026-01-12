import {
  s as Se,
  k as ot,
  c as ut,
  u as dt,
  g as ft,
  a as ht,
  e as Ce,
  n as ve,
  o as De,
  x as H,
  r as mt,
} from "../chunks/scheduler.W2pu3yam.js";
import {
  S as Ge,
  i as Oe,
  e as h,
  c as m,
  d as D,
  g as p,
  o as t,
  p as T,
  j as M,
  y as pt,
  t as le,
  q as vt,
  n as gt,
  a as ie,
  z as ct,
  s as b,
  h as _,
  k as f,
  A as Le,
  u as et,
  v as tt,
  B as Q,
  w as lt,
  x as st,
  m as at,
} from "../chunks/index.B4lxBfiN.js";
function Ne(s) {
  return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function it(s, e, r) {
  const l = s.slice();
  return (l[10] = e[r]), l;
}
function rt(s) {
  let e, r, l;
  const n = s[7].default,
    i = ut(n, s, s[6], null);
  return {
    c() {
      (e = h("div")), i && i.c(), (r = b()), this.h();
    },
    l(u) {
      e = m(u, "DIV", { class: !0 });
      var a = D(e);
      i && i.l(a), (r = _(a)), a.forEach(p), this.h();
    },
    h() {
      t(e, "class", "carousel-container svelte-686mvj");
    },
    m(u, a) {
      M(u, e, a), i && i.m(e, null), f(e, r), (l = !0);
    },
    p(u, a) {
      i &&
        i.p &&
        (!l || a & 64) &&
        dt(i, n, u, u[6], l ? ht(n, u[6], a, null) : ft(u[6]), null);
    },
    i(u) {
      l || (le(i, u), (l = !0));
    },
    o(u) {
      ie(i, u), (l = !1);
    },
    d(u) {
      u && p(e), i && i.d(u);
    },
  };
}
function bt(s) {
  let e,
    r,
    l,
    n = Ne(Array(s[3])),
    i = [];
  for (let a = 0; a < n.length; a += 1) i[a] = rt(it(s, n, a));
  const u = (a) =>
    ie(i[a], 1, 1, () => {
      i[a] = null;
    });
  return {
    c() {
      e = h("div");
      for (let a = 0; a < i.length; a += 1) i[a].c();
      this.h();
    },
    l(a) {
      e = m(a, "DIV", { class: !0 });
      var o = D(e);
      for (let d = 0; d < i.length; d += 1) i[d].l(o);
      o.forEach(p), this.h();
    },
    h() {
      t(e, "class", "carousel-host svelte-686mvj"),
        ot(() => s[9].call(e)),
        T(e, "--pad", s[0]),
        T(e, "--gap", s[1]),
        T(e, "--duration", `${s[4].duration}s`),
        T(e, "--direction", s[2] === "left" ? "normal" : "reverse");
    },
    m(a, o) {
      M(a, e, o);
      for (let d = 0; d < i.length; d += 1) i[d] && i[d].m(e, null);
      s[8](e), (r = pt(e, s[9].bind(e))), (l = !0);
    },
    p(a, [o]) {
      if (o & 72) {
        n = Ne(Array(a[3]));
        let d;
        for (d = 0; d < n.length; d += 1) {
          const y = it(a, n, d);
          i[d]
            ? (i[d].p(y, o), le(i[d], 1))
            : ((i[d] = rt(y)), i[d].c(), le(i[d], 1), i[d].m(e, null));
        }
        for (vt(), d = n.length; d < i.length; d += 1) u(d);
        gt();
      }
      o & 1 && T(e, "--pad", a[0]),
        o & 2 && T(e, "--gap", a[1]),
        o & 16 && T(e, "--duration", `${a[4].duration}s`),
        o & 4 && T(e, "--direction", a[2] === "left" ? "normal" : "reverse");
    },
    i(a) {
      if (!l) {
        for (let o = 0; o < n.length; o += 1) le(i[o]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1) ie(i[o]);
      l = !1;
    },
    d(a) {
      a && p(e), ct(i, a), s[8](null), r();
    },
  };
}
function _t(s, e, r) {
  let { $$slots: l = {}, $$scope: n } = e,
    { pad: i = "0" } = e,
    { gap: u = "0" } = e,
    { speed: a = 50 } = e,
    { direction: o = "left" } = e,
    { iterations: d = 3 } = e,
    y = { el: void 0, clientWidth: 0, clientHeight: 0, duration: 0 };
  function v(I) {
    Ce[I ? "unshift" : "push"](() => {
      (y.el = I), r(4, y), r(5, a);
    });
  }
  function V() {
    (y.clientWidth = this.clientWidth),
      (y.clientHeight = this.clientHeight),
      r(4, y),
      r(5, a);
  }
  return (
    (s.$$set = (I) => {
      "pad" in I && r(0, (i = I.pad)),
        "gap" in I && r(1, (u = I.gap)),
        "speed" in I && r(5, (a = I.speed)),
        "direction" in I && r(2, (o = I.direction)),
        "iterations" in I && r(3, (d = I.iterations)),
        "$$scope" in I && r(6, (n = I.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 48 && r(4, (y.duration = y.clientWidth / a), y);
    }),
    [i, u, o, d, y, a, n, l, v, V]
  );
}
class yt extends Ge {
  constructor(e) {
    super(),
      Oe(this, e, _t, bt, Se, {
        pad: 0,
        gap: 1,
        speed: 5,
        direction: 2,
        iterations: 3,
      });
  }
}
function wt(s) {
  let e, r;
  return {
    c() {
      (e = h("img")), this.h();
    },
    l(l) {
      (e = m(l, "IMG", { src: !0, alt: !0 })), this.h();
    },
    h() {
      H(e.src, (r = "/img/icon-pause.webp")) || t(e, "src", r),
        t(e, "alt", "Pause icon");
    },
    m(l, n) {
      M(l, e, n);
    },
    d(l) {
      l && p(e);
    },
  };
}
function xt(s) {
  let e, r;
  return {
    c() {
      (e = h("img")), this.h();
    },
    l(l) {
      (e = m(l, "IMG", { src: !0, alt: !0 })), this.h();
    },
    h() {
      H(e.src, (r = "/img/icon-play.webp")) || t(e, "src", r),
        t(e, "alt", "Play icon");
    },
    m(l, n) {
      M(l, e, n);
    },
    d(l) {
      l && p(e);
    },
  };
}
function It(s) {
  let e, r, l, n;
  function i(o, d) {
    return o[0] === "paused" ? xt : wt;
  }
  let u = i(s),
    a = u(s);
  return {
    c() {
      (e = h("div")), (r = h("div")), a.c(), this.h();
    },
    l(o) {
      e = m(o, "DIV", { id: !0, class: !0 });
      var d = D(e);
      r = m(d, "DIV", { class: !0 });
      var y = D(r);
      a.l(y), y.forEach(p), d.forEach(p), this.h();
    },
    h() {
      t(r, "class", "icon-container svelte-i3p7y1"),
        t(e, "id", "media-player"),
        t(e, "class", "svelte-i3p7y1");
    },
    m(o, d) {
      M(o, e, d),
        f(e, r),
        a.m(r, null),
        l || ((n = Le(e, "click", s[1])), (l = !0));
    },
    p(o, [d]) {
      u !== (u = i(o)) && (a.d(1), (a = u(o)), a && (a.c(), a.m(r, null)));
    },
    i: ve,
    o: ve,
    d(o) {
      o && p(e), a.d(), (l = !1), n();
    },
  };
}
function Mt(s, e, r) {
  let l = "paused",
    n;
  De(() => {
    r(2, (n = new Audio("/keef.mp3")));
  });
  const i = () => {
    r(0, (l = l === "paused" ? "playing" : "paused"));
  };
  return (
    (s.$$.update = () => {
      s.$$.dirty & 5 &&
        n &&
        (l === "playing" ? n.play() : l === "paused" && n.pause());
    }),
    [l, i, n]
  );
}
class kt extends Ge {
  constructor(e) {
    super(), Oe(this, e, Mt, It, Se, {});
  }
}
function Et(s, e, r) {
  const l = s.slice();
  return (l[13] = e[r]), l;
}
function nt(s) {
  let e, r, l, n, i, u;
  return {
    c() {
      (e = h("div")),
        (r = h("div")),
        (l = b()),
        (n = h("div")),
        (i = b()),
        (u = h("div")),
        this.h();
    },
    l(a) {
      e = m(a, "DIV", { class: !0, style: !0 });
      var o = D(e);
      (r = m(o, "DIV", { class: !0, style: !0 })),
        D(r).forEach(p),
        (l = _(o)),
        (n = m(o, "DIV", { class: !0, style: !0 })),
        D(n).forEach(p),
        (i = _(o)),
        (u = m(o, "DIV", { class: !0, style: !0 })),
        D(u).forEach(p),
        o.forEach(p),
        this.h();
    },
    h() {
      t(r, "class", "item svelte-1he4b22"),
        T(r, "--local-rotation", Math.random() * 360 - 180 + "deg"),
        t(n, "class", "item svelte-1he4b22"),
        T(n, "--local-rotation", Math.random() * 360 - 180 + "deg"),
        t(u, "class", "item svelte-1he4b22"),
        T(u, "--local-rotation", Math.random() * 360 - 180 + "deg"),
        t(e, "class", "money svelte-1he4b22"),
        T(e, "left", s[0].x + "px"),
        T(e, "top", s[0].y + "px");
    },
    m(a, o) {
      M(a, e, o), f(e, r), f(e, l), f(e, n), f(e, i), f(e, u);
    },
    p(a, o) {
      o & 1 && T(e, "left", a[0].x + "px"), o & 1 && T(e, "top", a[0].y + "px");
    },
    d(a) {
      a && p(e);
    },
  };
}
function Tt(s) {
  let e,
    r = "$WhaleTesticle";
  return {
    c() {
      (e = h("span")), (e.textContent = r), this.h();
    },
    l(l) {
      (e = m(l, "SPAN", { class: !0, "data-svelte-h": !0 })),
        Q(e) !== "svelte-mgdcld" && (e.textContent = r),
        this.h();
    },
    h() {
      t(e, "class", "svelte-1he4b22");
    },
    m(l, n) {
      M(l, e, n);
    },
    p: ve,
    d(l) {
      l && p(e);
    },
  };
}
function At(s) {
  let e,
    r = Ne(Array(12)),
    l = [];
  for (let n = 0; n < r.length; n += 1) l[n] = Tt(Et(s, r, n));
  return {
    c() {
      for (let n = 0; n < l.length; n += 1) l[n].c();
      e = at();
    },
    l(n) {
      for (let i = 0; i < l.length; i += 1) l[i].l(n);
      e = at();
    },
    m(n, i) {
      for (let u = 0; u < l.length; u += 1) l[u] && l[u].m(n, i);
      M(n, e, i);
    },
    p: ve,
    d(n) {
      n && p(e), ct(l, n);
    },
  };
}
function Ht(s) {
  let e,
    r,
    l,
    n,
    i,
    u,
    a,
    o,
    d = ">>>>>>>>> SCROLL DOWN THE PAGE NOW <<<<<<<<<",
    y,
    v,
    V,
    I =
      '<div class="gay-border svelte-1he4b22"></div> <a href="https://x.com/Whale_Testicle" target="_blank" rel="noopener noreferrer" class="svelte-1he4b22"><img src="/img/twitter.webp" alt="" class="svelte-1he4b22"/></a> <a href="https://etherscan.io/token/0xd4516ea5216d68ea09777602d22b2feec57242e0" target="_blank" rel="noopener noreferrer" class="svelte-1he4b22"><img src="/img/contract.webp" alt="" class="svelte-1he4b22"/></a> <a href="https://t.me/Whale_Testicle" target="_blank" rel="noopener noreferrer" class="svelte-1he4b22"><img src="/img/telegram.webp" alt="" class="svelte-1he4b22"/></a> <a href="https://dexscreener.com/ethereum/0xd4516ea5216d68ea09777602d22b2feec57242e0" target="_blank" rel="noopener noreferrer" class="svelte-1he4b22"><img src="/img/dexscreener.webp" alt="" class="svelte-1he4b22"/></a> <div class="gay-border second-gay svelte-1he4b22"></div>',
    se,
    j,
    k =
      "Biggest testicle in the world. TO THE ULTIMATE QUESTION OF LIFE, THE UNIVERSE, AND EVERYTHING IS",
    C,
    N,
    ee =
      '<img src="/img/42069-f.png" alt="" class="svelte-1he4b22"/> <img src="/img/42069-c.png" alt="" class="svelte-1he4b22"/> <img src="/img/42069-d.png" alt="" class="svelte-1he4b22"/>',
    q,
    X,
    Pe,
    ge,
    S,
    Z,
    We,
    be,
    G,
    Ye,
    re,
    _e,
    J,
    $e,
    ye,
    B,
    Re = `<p class="about svelte-1he4b22">Whale Testicle isn't just the biggest testicle in the animal kingdom… It's the biggest middle finger to mediocrity ever evolved on this wet rock floating in space.
      </p> <div class="kaomoji svelte-1he4b22"></div>`,
    we,
    ae,
    xe,
    z,
    Ue =
      '<img src="/img/safari.png" alt="" class="svelte-1he4b22"/> <img src="/img/howtobuy.png" alt="" class="svelte-1he4b22"/> <img src="/img/safari.png" alt="" class="svelte-1he4b22"/>',
    Ie,
    F,
    je = `<p class="svelte-1he4b22">1. Set up a ETHEREUM wallet (PHANTOM, COINBASE etc)
			<br/> <br/>
			2. Send ETHEREUM to your wallet address
			<br/> <br/>
			3. Use RAYDIUM or PHOTON to swap your ETHEREUM to WhaleTesticle
			<br/> <br/>
			4. ENJOY your WhaleTesticle
			<br/> <br/>
			5. <a href="https://www.dextools.io/app/en/solana/pair-explorer/FuCNeyo3pRvFYVEGaxVEUcpdQoMGhPVsDmddAY4RgSGk" target="_blank" rel="noopener noreferrer">CHECK DEXTOOLS here</a> for your mind</p>`,
    ne,
    w,
    O,
    qe,
    ce,
    Me,
    P,
    Be,
    oe,
    ke,
    W,
    Ke,
    ue,
    Ee,
    Y,
    Xe,
    de,
    Te,
    $,
    ze,
    fe,
    Ae,
    R,
    Fe,
    he,
    He,
    U,
    Qe,
    me,
    pe,
    K,
    Ze,
    L,
    Ve,
    Je,
    E = s[0] && nt(s);
  return (
    (l = new kt({})),
    (u = new yt({
      props: {
        iterations: 3,
        gap: "0.125rem",
        $$slots: { default: [At] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        (e = b()),
          E && E.c(),
          (r = b()),
          et(l.$$.fragment),
          (n = b()),
          (i = h("div")),
          et(u.$$.fragment),
          (a = b()),
          (o = h("h2")),
          (o.textContent = d),
          (y = b()),
          (v = h("main")),
          (V = h("div")),
          (V.innerHTML = I),
          (se = b()),
          (j = h("h1")),
          (j.textContent = k),
          (C = b()),
          (N = h("div")),
          (N.innerHTML = ee),
          (q = b()),
          (X = h("img")),
          (ge = b()),
          (S = h("div")),
          (Z = h("img")),
          (be = b()),
          (G = h("img")),
          (_e = b()),
          (J = h("img")),
          (ye = b()),
          (B = h("div")),
          (B.innerHTML = Re),
          (we = b()),
          (ae = h("div")),
          (xe = b()),
          (z = h("div")),
          (z.innerHTML = Ue),
          (Ie = b()),
          (F = h("div")),
          (F.innerHTML = je),
          (ne = b()),
          (w = h("div")),
          (O = h("img")),
          (Me = b()),
          (P = h("img")),
          (ke = b()),
          (W = h("img")),
          (Ee = b()),
          (Y = h("img")),
          (Te = b()),
          ($ = h("img")),
          (Ae = b()),
          (R = h("img")),
          (He = b()),
          (U = h("img")),
          (pe = b()),
          (K = h("img")),
          this.h();
      },
      l(c) {
        (e = _(c)),
          E && E.l(c),
          (r = _(c)),
          tt(l.$$.fragment, c),
          (n = _(c)),
          (i = m(c, "DIV", { id: !0, class: !0 }));
        var g = D(i);
        tt(u.$$.fragment, g),
          g.forEach(p),
          (a = _(c)),
          (o = m(c, "H2", { class: !0, "data-svelte-h": !0 })),
          Q(o) !== "svelte-fktlpx" && (o.textContent = d),
          (y = _(c)),
          (v = m(c, "MAIN", {}));
        var x = D(v);
        (V = m(x, "DIV", { id: !0, class: !0, "data-svelte-h": !0 })),
          Q(V) !== "svelte-15quevr" && (V.innerHTML = I),
          (se = _(x)),
          (j = m(x, "H1", { class: !0, "data-svelte-h": !0 })),
          Q(j) !== "svelte-1rmv2w1" && (j.textContent = k),
          (C = _(x)),
          (N = m(x, "DIV", { class: !0, "data-svelte-h": !0 })),
          Q(N) !== "svelte-lunop3" && (N.innerHTML = ee),
          (q = _(x)),
          (X = m(x, "IMG", { id: !0, src: !0, alt: !0, class: !0 })),
          (ge = _(x)),
          (S = m(x, "DIV", { id: !0, class: !0 }));
        var te = D(S);
        (Z = m(te, "IMG", { src: !0, alt: !0, class: !0 })),
          (be = _(te)),
          (G = m(te, "IMG", {
            id: !0,
            src: !0,
            alt: !0,
            "data-visibility": !0,
            class: !0,
          })),
          (_e = _(te)),
          (J = m(te, "IMG", { src: !0, alt: !0, class: !0 })),
          te.forEach(p),
          (ye = _(x)),
          (B = m(x, "DIV", { id: !0, class: !0, "data-svelte-h": !0 })),
          Q(B) !== "svelte-2s553k" && (B.innerHTML = Re),
          (we = _(x)),
          (ae = m(x, "DIV", { class: !0 })),
          D(ae).forEach(p),
          (xe = _(x)),
          (z = m(x, "DIV", { id: !0, class: !0, "data-svelte-h": !0 })),
          Q(z) !== "svelte-1vhecel" && (z.innerHTML = Ue),
          (Ie = _(x)),
          (F = m(x, "DIV", { id: !0, class: !0, "data-svelte-h": !0 })),
          Q(F) !== "svelte-kyh9ib" && (F.innerHTML = je),
          x.forEach(p),
          (ne = _(c)),
          (w = m(c, "DIV", { id: !0, class: !0 }));
        var A = D(w);
        (O = m(A, "IMG", { id: !0, src: !0, alt: !0, style: !0, class: !0 })),
          (Me = _(A)),
          (P = m(A, "IMG", { id: !0, src: !0, alt: !0, style: !0, class: !0 })),
          (ke = _(A)),
          (W = m(A, "IMG", { id: !0, src: !0, alt: !0, style: !0, class: !0 })),
          (Ee = _(A)),
          (Y = m(A, "IMG", { id: !0, src: !0, alt: !0, style: !0, class: !0 })),
          (Te = _(A)),
          ($ = m(A, "IMG", { id: !0, src: !0, alt: !0, style: !0, class: !0 })),
          (Ae = _(A)),
          (R = m(A, "IMG", { id: !0, src: !0, alt: !0, style: !0, class: !0 })),
          (He = _(A)),
          (U = m(A, "IMG", { id: !0, src: !0, alt: !0, style: !0, class: !0 })),
          A.forEach(p),
          (pe = _(c)),
          (K = m(c, "IMG", { id: !0, src: !0, alt: !0, class: !0 })),
          this.h();
      },
      h() {
        t(i, "id", "ticker-tape"),
          t(i, "class", "svelte-1he4b22"),
          t(o, "class", "svelte-1he4b22"),
          t(V, "id", "links-container"),
          t(V, "class", "svelte-1he4b22"),
          t(j, "class", "svelte-1he4b22"),
          t(N, "class", "brand-grid svelte-1he4b22"),
          t(X, "id", "brand"),
          H(X.src, (Pe = "/img/42069-fire.png")) || t(X, "src", Pe),
          t(X, "alt", ""),
          t(X, "class", "svelte-1he4b22"),
          H(Z.src, (We = "/img/42069-b.png")) || t(Z, "src", We),
          t(Z, "alt", ""),
          t(Z, "class", "svelte-1he4b22"),
          t(G, "id", "hands"),
          H(G.src, (Ye = "/img/hands.png")) || t(G, "src", Ye),
          t(G, "alt", ""),
          t(G, "data-visibility", (re = s[2] ? "true" : "false")),
          t(G, "class", "svelte-1he4b22"),
          H(J.src, ($e = "/img/42069-e.png")) || t(J, "src", $e),
          t(J, "alt", ""),
          t(J, "class", "svelte-1he4b22"),
          t(S, "id", "brand-grid-b"),
          t(S, "class", "brand-grid svelte-1he4b22"),
          t(B, "id", "about"),
          t(B, "class", "border-box svelte-1he4b22"),
          t(ae, "class", "gay-border svelte-1he4b22"),
          t(z, "id", "how-to-buy"),
          t(z, "class", "svelte-1he4b22"),
          t(F, "id", "how-to-buy-box"),
          t(F, "class", "border-box svelte-1he4b22"),
          t(O, "id", "ultra"),
          H(O.src, (qe = "/img/ultralightbeam.webp")) || t(O, "src", qe),
          t(O, "alt", ""),
          t(
            O,
            "style",
            (ce = `--local-para-x: ${s[4][0].x}px; --local-para-y: ${s[4][0].y}px`)
          ),
          t(O, "class", "svelte-1he4b22"),
          t(P, "id", "planet-1"),
          H(P.src, (Be = "/img/planet1.webp")) || t(P, "src", Be),
          t(P, "alt", ""),
          t(
            P,
            "style",
            (oe = `--local-para-x: ${s[4][1].x}px; --local-para-y: ${s[4][1].y}px`)
          ),
          t(P, "class", "svelte-1he4b22"),
          t(W, "id", "planet-2"),
          H(W.src, (Ke = "/img/planet2.webp")) || t(W, "src", Ke),
          t(W, "alt", ""),
          t(
            W,
            "style",
            (ue = `--local-para-x: ${s[4][2].x}px; --local-para-y: ${s[4][2].y}px`)
          ),
          t(W, "class", "svelte-1he4b22"),
          t(Y, "id", "chart"),
          H(Y.src, (Xe = "/img/chart.webp")) || t(Y, "src", Xe),
          t(Y, "alt", ""),
          t(
            Y,
            "style",
            (de = `--local-para-x: ${s[4][3].x}px; --local-para-y: ${s[4][3].y}px`)
          ),
          t(Y, "class", "svelte-1he4b22"),
          t($, "id", "rainbow-road"),
          H($.src, (ze = "/img/rainbowroad.webp")) || t($, "src", ze),
          t($, "alt", ""),
          t(
            $,
            "style",
            (fe = `--local-para-x: ${s[4][4].x}px; --local-para-y: ${s[4][4].y}px`)
          ),
          t($, "class", "svelte-1he4b22"),
          t(R, "id", "computer"),
          H(R.src, (Fe = "/img/42computer.webp")) || t(R, "src", Fe),
          t(R, "alt", ""),
          t(
            R,
            "style",
            (he = `--local-para-x: ${s[4][5].x}px; --local-para-y: ${s[4][5].y}px`)
          ),
          t(R, "class", "svelte-1he4b22"),
          t(U, "id", "nice"),
          H(U.src, (Qe = "/img/nicenicenice.webp")) || t(U, "src", Qe),
          t(U, "alt", ""),
          t(
            U,
            "style",
            (me = `--local-para-x: ${s[4][6].x}px; --local-para-y: ${s[4][6].y}px`)
          ),
          t(U, "class", "svelte-1he4b22"),
          t(w, "id", "footer"),
          t(w, "style", "overflow: hidden"),
          t(w, "class", "svelte-1he4b22"),
          t(K, "id", "footer-mobile"),
          H(K.src, (Ze = "/img/bg-mobile.webp")) || t(K, "src", Ze),
          t(K, "alt", ""),
          t(K, "class", "svelte-1he4b22");
      },
      m(c, g) {
        M(c, e, g),
          E && E.m(c, g),
          M(c, r, g),
          lt(l, c, g),
          M(c, n, g),
          M(c, i, g),
          lt(u, i, null),
          M(c, a, g),
          M(c, o, g),
          M(c, y, g),
          M(c, v, g),
          f(v, V),
          f(v, se),
          f(v, j),
          f(v, C),
          f(v, N),
          f(v, q),
          f(v, X),
          f(v, ge),
          f(v, S),
          f(S, Z),
          f(S, be),
          f(S, G),
          f(S, _e),
          f(S, J),
          f(v, ye),
          f(v, B),
          s[7](B),
          f(v, we),
          f(v, ae),
          f(v, xe),
          f(v, z),
          f(v, Ie),
          f(v, F),
          M(c, ne, g),
          M(c, w, g),
          f(w, O),
          f(w, Me),
          f(w, P),
          f(w, ke),
          f(w, W),
          f(w, Ee),
          f(w, Y),
          f(w, Te),
          f(w, $),
          f(w, Ae),
          f(w, R),
          f(w, He),
          f(w, U),
          s[8](w),
          M(c, pe, g),
          M(c, K, g),
          (L = !0),
          Ve ||
            ((Je = [
              Le(document.body, "click", s[5]),
              Le(w, "mousemove", s[6]),
            ]),
            (Ve = !0));
      },
      p(c, [g]) {
        c[0]
          ? E
            ? E.p(c, g)
            : ((E = nt(c)), E.c(), E.m(r.parentNode, r))
          : E && (E.d(1), (E = null));
        const x = {};
        g & 65536 && (x.$$scope = { dirty: g, ctx: c }),
          u.$set(x),
          (!L || (g & 4 && re !== (re = c[2] ? "true" : "false"))) &&
            t(G, "data-visibility", re),
          (!L ||
            (g & 16 &&
              ce !==
                (ce = `--local-para-x: ${c[4][0].x}px; --local-para-y: ${c[4][0].y}px`))) &&
            t(O, "style", ce),
          (!L ||
            (g & 16 &&
              oe !==
                (oe = `--local-para-x: ${c[4][1].x}px; --local-para-y: ${c[4][1].y}px`))) &&
            t(P, "style", oe),
          (!L ||
            (g & 16 &&
              ue !==
                (ue = `--local-para-x: ${c[4][2].x}px; --local-para-y: ${c[4][2].y}px`))) &&
            t(W, "style", ue),
          (!L ||
            (g & 16 &&
              de !==
                (de = `--local-para-x: ${c[4][3].x}px; --local-para-y: ${c[4][3].y}px`))) &&
            t(Y, "style", de),
          (!L ||
            (g & 16 &&
              fe !==
                (fe = `--local-para-x: ${c[4][4].x}px; --local-para-y: ${c[4][4].y}px`))) &&
            t($, "style", fe),
          (!L ||
            (g & 16 &&
              he !==
                (he = `--local-para-x: ${c[4][5].x}px; --local-para-y: ${c[4][5].y}px`))) &&
            t(R, "style", he),
          (!L ||
            (g & 16 &&
              me !==
                (me = `--local-para-x: ${c[4][6].x}px; --local-para-y: ${c[4][6].y}px`))) &&
            t(U, "style", me);
      },
      i(c) {
        L || (le(l.$$.fragment, c), le(u.$$.fragment, c), (L = !0));
      },
      o(c) {
        ie(l.$$.fragment, c), ie(u.$$.fragment, c), (L = !1);
      },
      d(c) {
        c &&
          (p(e),
          p(r),
          p(n),
          p(i),
          p(a),
          p(o),
          p(y),
          p(v),
          p(ne),
          p(w),
          p(pe),
          p(K)),
          E && E.d(c),
          st(l, c),
          st(u),
          s[7](null),
          s[8](null),
          (Ve = !1),
          mt(Je);
      },
    }
  );
}
const Vt = 5;
function Ct(s, e, r) {
  let l = null,
    n = !0,
    i;
  De(() => {
    i = new Audio("/chaching.mp3");
  });
  const u = async (k) => {
    if (!n) return;
    i.play(), (n = !1);
    let C = k.pageX,
      N = k.pageY;
    r(0, (l = { x: C, y: N })),
      await new Promise((ee) => setTimeout(ee, 1200)),
      r(0, (l = null)),
      (n = !0);
  };
  let a,
    o = !1;
  De(() => {
    const k = new IntersectionObserver(
      (C) => {
        C[0].isIntersecting !== o && r(2, (o = C[0].isIntersecting));
      },
      { threshold: [0] }
    );
    return (
      k.observe(a),
      () => {
        k.unobserve(a);
      }
    );
  });
  let d,
    y = 0;
  const v = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    V = [3, 6, 12, 24, 48, 96, 192];
  function I(k) {
    if ((y++, y < Vt)) return;
    y = 0;
    const C = d.getBoundingClientRect(),
      N = ((k.clientX - C.left) / C.width - 0.5) * 2,
      ee = ((k.clientY - C.top) / C.height - 0.5) * 2;
    for (let q = 0; q < v.length; q++)
      r(4, (v[q] = { x: N * V[q], y: ee * V[q] }), v);
  }
  function se(k) {
    Ce[k ? "unshift" : "push"](() => {
      (a = k), r(1, a);
    });
  }
  function j(k) {
    Ce[k ? "unshift" : "push"](() => {
      (d = k), r(3, d);
    });
  }
  return [l, a, o, d, v, u, I, se, j];
}
class Nt extends Ge {
  constructor(e) {
    super(), Oe(this, e, Ct, Ht, Se, {});
  }
}
export { Nt as component };
