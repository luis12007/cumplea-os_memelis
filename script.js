/* ============================================================
   Feliz Cumpleaños, Memelis 💗
   ============================================================ */

// ---------- Fotos (orden de la carpeta Recursos) ----------
const WA = 'WhatsApp Image 2026-10-10 at ';
const FILES = [
  '2.jpeg',
  WA + '5.21.22 PM.jpeg', WA + '5.21.23 PM.jpeg', WA + '5.21.24 PM 1.jpeg', WA + '5.21.24 PM 4.jpeg',
  WA + '5.21.24 PM 5.jpeg', WA + '5.21.24 PM 6.jpeg', WA + '5.21.24 PM.jpeg', WA + '5.21.24 PM3.jpeg',
  WA + '5.21.25 PM 10.jpeg', WA + '5.21.25 PM 12.jpeg', 'recorte-abuelita.jpeg', WA + '5.21.25 PM 14.jpeg',
  WA + '5.21.25 PM 15.jpeg', WA + '5.21.25 PM 16.jpeg', WA + '5.21.25 PM 18.jpeg', WA + '5.21.25 PM 7.jpeg',
  WA + '5.21.25 PM 8.jpeg', WA + '5.21.25 PM 9.jpeg', WA + '5.21.25 PM16.jpeg', WA + '5.21.26 PM 32.jpeg',
  WA + '5.21.26 PM 33.jpeg', WA + '5.21.26 PM 48.jpeg', WA + '5.21.26 PM17.jpeg', WA + '5.21.26 PM18.jpeg',
  WA + '5.21.26 PM20.jpeg', WA + '5.21.26 PM21.jpeg', WA + '5.21.26 PM22.jpeg', WA + '5.21.26 PM23.jpeg',
  WA + '5.21.26 PM24.jpeg', WA + '5.21.26 PM33.jpeg', WA + '5.21.26 PMc31.jpeg', WA + '5.21.27 PM 34.jpeg',
  WA + '5.21.27 PM 35.jpeg', WA + '5.21.27 PM 36.jpeg', WA + '5.21.27 PM 37.jpeg', WA + '5.25.51 PM1.jpeg',
  WA + '5.25.51 PM2.jpeg', WA + '5.25.51 PM3.jpeg', WA + '5.25.51 PM4.jpeg', WA + '5.25.51 PM5.jpeg',
  WA + '5.25.51 PM6.jpeg', WA + '5.25.52 PM10.jpeg', WA + '5.25.52 PM11.jpeg', WA + '5.25.52 PM12.jpeg',
  WA + '5.25.52 PM13.jpeg', WA + '5.25.52 PM14.jpeg', WA + '5.25.52 PM15.jpeg', 'recorte-catis.jpeg',
  WA + '5.25.52 PM17.jpeg', WA + '5.25.52 PM18.jpeg', WA + '5.25.52 PM21.jpeg', WA + '5.25.52 PM7.jpeg',
  WA + '5.25.52 PM8.jpeg', WA + '5.25.52 PM9.jpeg', WA + '5.25.53 PM21.jpeg', WA + '5.25.53 PM22.jpeg',
  WA + '5.25.53 PM23.jpeg', WA + '5.25.53 PM31.jpeg', WA + '5.25.53 PM32.jpeg', WA + '5.25.53 PM33.jpeg',
  WA + '5.25.53 PM41.jpeg', WA + '5.25.53 PM44.jpeg',
];
const LANDSCAPE = new Set([21, 23, 29, 31, 39, 43, 54, 55, 56, 58, 61, 62]);
const TALL = new Set([46, 47]);
const src = (i) => encodeURI('Recursos/' + FILES[i]);
const CUSTOM = { 11: '996 / 1600', 48: '790 / 1201' };
const ratio = (i) => CUSTOM[i] || (LANDSCAPE.has(i) ? '4 / 3' : TALL.has(i) ? '9 / 16' : '3 / 4');

// Fotos solitas que caen en la pila (la última queda arriba)
const PILE = [
  [9, 'mi solecito 🌻'], [13, 'amiga de los animalitos'], [15, 'reina de la playa'], [26, 'viento y libertad'],
  [28, 'azul cielo'], [36, 'en la cima del mundo'], [44, 'brillando de noche'], [52, 'modo tropical 🌴'],
  [53, 'elegancia pura'], [40, '¡happy birthday! 🎂'],
];
// Fotos juntitos en el tendedero
const LINE = [
  [3, 'desde el principio'], [7, 'tu risa, mi canción favorita'], [16, 'besitos en la mejilla'],
  [4, 'mi lugar feliz 🌿'], [25, 'mi persona favorita'], [27, 'tú y yo, siempre'], [23, 'bajo las lucecitas'],
  [33, 'mi equipo favorito'], [34, 'amor con sabor a mar 🌊'], [35, 'locuras contigo'], [43, 'aventuras de noche ✨'],
  [41, 'mi compañera perfecta'], [55, 'en la cima, contigo'], [61, 'perdernos juntitos 🌲'], [62, 'acurrucaditos'],
];
const WALL = [0, 1, 2, 5, 6, 8, 11, 12, 14, 18, 19, 20, 21, 29, 30, 31, 32, 37, 38, 39, 42, 45, 46, 47, 50, 51, 54, 56, 57, 58, 59];
const QUOTES = ['Tu risa es mi canción favorita', 'Eres mi casualidad más bonita', 'Contigo hasta lo simple es mágico', 'Mi lugar seguro eres tú', 'Te elegiría en todas las vidas'];
const STICKERS = ['🎀', '💗', '🌸', '✨', '🧁', '🎈', '🌷', '💐'];

const GIFTS = [
  { e: '💕', t: 'Una cita con Cuisito', d: 'Válido por una cita especial planeada con todo mi amor. Tú eliges el día, yo pongo el corazón.', c: '#ffc2d4' },
  { e: '🍽️', t: 'Cena con tu mami', d: 'Una cena deliciosa para ti y tu mami, para celebrar a las dos mujeres más bonitas.', c: '#f3e1c7' },
  { e: '💄', t: 'Maquillaje', d: 'Para que sigas brillando… aunque sin nada ya eres la más preciosa.', c: '#ffb3c9' },
  { e: '💐', t: 'Ramito de flores', d: 'Flores frescas para la flor más bonita de mi jardín.', c: '#d8ead2' },
  { e: '✈️', t: 'Cupón: abono para viaje', d: 'Un empujoncito para tu próxima aventura. ¡Que empiece el conteo!', c: '#cfe3f5' },
  { e: '📦', t: 'Pedido de Temu', d: 'Llena ese carrito sin culpa, mi amor. ¡Va por mi cuenta!', c: '#ffd8b5' },
  { e: '🥨', t: 'Pedido de Alemania', d: 'Un antojito directo desde Alemania hasta tus manitas.', c: '#f6e7a8' },
  { e: '🏰', t: 'Viaje en Alemania', d: 'Cuando esté en Alemania, nos vamos de viaje juntitos a conocer castillos y pueblitos de cuento.', c: '#e3d4f5' },
];

const PASTEL = ['#ffb6c9', '#ff8fb1', '#ffd6e0', '#ffffff', '#c9e4c5', '#f7d794', '#e8578a', '#e0c3fc'];
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const HAS_GSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
if (!HAS_GSAP) document.documentElement.classList.add('no-gsap');

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ---------- Construcción del DOM ----------
$$('img[data-i]').forEach((img) => { img.src = src(+img.dataset.i); });

function polaroid(i, caption, extra = '') {
  return `<figure class="polaroid ${extra}"><img src="${src(i)}" alt="" style="aspect-ratio:${ratio(i)}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`;
}

// Pila
$('#pileStage').innerHTML = PILE.map(([i, cap]) =>
  `<div class="pile-photo"><span class="tape"></span>${polaroid(i, cap).replace(' loading="lazy" decoding="async"', '')}</div>`).join('');

// Tendedero
const track = $('#lineTrack');
track.style.width = 'max-content';
track.insertAdjacentHTML('beforeend', LINE.map(([i, cap]) => {
  const land = LANDSCAPE.has(i);
  return `<div class="hang" style="--sd:${rand(3, 5).toFixed(2)}s;animation-delay:${rand(-4, 0).toFixed(2)}s">
    <span class="pin"></span>
    ${polaroid(i, cap, land ? 'land' : '').replace(' loading="lazy" decoding="async"', '')}
    ${Math.random() > .55 ? '<svg class="hang-heart"><use href="#heart"/></svg>' : ''}
  </div>`;
}).join('') + '<div class="line-end">y los que nos faltan…</div>');

// Muro de columnas
function buildWall() {
  const n = innerWidth <= 480 ? 2 : 3;
  const cols = Array.from({ length: n }, () => []);
  let q = 0;
  WALL.forEach((i, k) => {
    const sticker = Math.random() > .6 ? `<span class="sticker">${pick(STICKERS)}</span>` : '';
    cols[k % n].push(`<div class="wcard" style="aspect-ratio:${ratio(i)}"><img src="${src(i)}" alt="" loading="lazy" decoding="async">${sticker}</div>`);
    if (k % 7 === 3 && q < QUOTES.length) cols[(k + 1) % n].push(`<div class="wcard-quote wall-quote">${QUOTES[q++]} 💗</div>`);
  });
  $('#wallCols').innerHTML = cols.map((c) => `<div class="pcol">${c.join('')}</div>`).join('');
}
buildWall();

// Palabras
const HL = ['rosa,', 'risa', 'abrazos', 'casa.', 'día,', 'bonito', 'vida.'];
const wt = $('#wordsText');
wt.innerHTML = wt.textContent.trim().split(/\s+/).map((w) =>
  `<span class="w${HL.includes(w) ? ' hl' : ''}">${w}</span>`).join(' ');

// Cartas de regalo
$('#giftCards').innerHTML = GIFTS.map((g, k) => `
  <div class="gcard" style="--gc:${g.c}" data-k="${k}">
    <div class="gcard-inner">
      <div class="gface gback"><span class="num">nº ${k + 1}</span><svg><use href="#kitty"/></svg><span class="q">¿qué será?</span></div>
      <div class="gface gfront">
        <div class="gemoji">${g.e}</div>
        <div class="gtext">
          <div class="gtitle">${g.t}</div>
          <div class="gdesc">${g.d}</div>
          <div class="gstamp">canjeable ♡</div>
        </div>
      </div>
    </div>
  </div>`).join('');

// Huellitas
$('.paws').innerHTML = Array.from({ length: 16 }, () =>
  `<svg style="left:${rand(0, 96)}%;top:${rand(0, 94)}%;transform:rotate(${rand(-50, 50)}deg) scale(${rand(.6, 1.3)})"><use href="#paw"/></svg>`).join('');

// Banderines
function buildBunting() {
  const w = innerWidth, n = Math.max(9, Math.round(w / 58)), sag = Math.min(46, w * .06);
  const colors = ['#ffb6c9', '#ffffff', '#c9e4c5', '#ff8fb1', '#f7d794', '#f3d2f0'];
  const y = (x) => 6 + sag * Math.sin(Math.PI * x / w);
  let flags = '';
  for (let k = 0; k < n; k++) {
    const x0 = (k + .1) * w / n, x1 = (k + .9) * w / n, xm = (x0 + x1) / 2;
    const h = Math.min(54, w / n * 1.05);
    flags += `<path d="M${x0} ${y(x0)} L${x1} ${y(x1)} L${xm} ${y(xm) + h} Z" fill="${colors[k % colors.length]}" stroke="rgba(91,43,62,.08)"/>`;
    flags += `<circle cx="${xm}" cy="${y(xm) + h * .38}" r="${h * .09}" fill="rgba(255,255,255,.7)"/>`;
  }
  $('#bunting').innerHTML = `<svg viewBox="0 0 ${w} 110"><path d="M0 6 Q ${w / 2} ${6 + sag * 2} ${w} 6" fill="none" stroke="#d9a9b9" stroke-width="2"/>${flags}</svg>`;
}
buildBunting();

// Globos
$('#balloons').innerHTML = Array.from({ length: innerWidth < 600 ? 7 : 12 }, (_, k) =>
  `<span class="balloon" style="left:${rand(2, 92)}%;--s:${rand(46, 78).toFixed(0)}px;--c:${pick(['#ffb6c9', '#ff8fb1', '#ffd6e0', '#c9e4c5', '#f7d794', '#e8c6f0', '#ffffff'])};--d:${rand(11, 20).toFixed(1)}s;--delay:${(-rand(0, 18)).toFixed(1)}s"></span>`).join('');

// ---------- Confeti ----------
const C = window.confetti;
let emojiShapes = null;
try { emojiShapes = ['🎀', '💗', '🌸', '✨'].map((t) => C.shapeFromText({ text: t, scalar: 2.2 })); } catch (e) { /* sin emojis */ }

function burst(opts = {}) {
  if (!C) return;
  C({ particleCount: 110, spread: 100, startVelocity: 42, origin: { y: .6 }, colors: PASTEL, ticks: 260, ...opts });
}
function emojiBurst(origin, count = 24) {
  if (!C || !emojiShapes) return;
  C({ shapes: emojiShapes, scalar: 2.2, particleCount: count, spread: 110, startVelocity: 32, origin, ticks: 220, flat: true });
}
function celebrate(ms = 2600) {
  if (!C) return;
  const end = Date.now() + ms;
  (function frame() {
    C({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0, y: .75 }, colors: PASTEL });
    C({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1, y: .75 }, colors: PASTEL });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  emojiBurst({ x: .5, y: .45 }, 36);
}
const originOf = (el) => {
  const r = el.getBoundingClientRect();
  return { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight };
};

// ---------- Fondo ambiental (corazones, confeti y pétalos) ----------
(function ambient() {
  const cv = $('#ambient'), ctx = cv.getContext('2d');
  let W, H, dpr;
  const parts = [];
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
  };
  resize(); addEventListener('resize', resize);
  const N = reduceMotion ? 0 : innerWidth < 600 ? 18 : 32;
  const make = (top) => ({
    x: Math.random() * W, y: top ? -20 * dpr : Math.random() * H, s: rand(4, 9) * dpr,
    vy: rand(.25, .7) * dpr, vx: rand(-.2, .2) * dpr, rot: rand(0, 6.28), vr: rand(-.02, .02),
    sway: rand(0, 6.28), type: pick(['heart', 'heart', 'dot', 'rect', 'petal']), c: pick(PASTEL.filter((c) => c !== '#ffffff')),
    a: rand(.35, .75),
  });
  for (let k = 0; k < N; k++) parts.push(make(false));
  function heart(s) {
    ctx.beginPath(); ctx.moveTo(0, s * .35);
    ctx.bezierCurveTo(-s, -s * .3, -s * .45, -s, 0, -s * .45);
    ctx.bezierCurveTo(s * .45, -s, s, -s * .3, 0, s * .35); ctx.fill();
  }
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      p.sway += .02; p.y += p.vy; p.x += p.vx + Math.sin(p.sway) * .3 * dpr; p.rot += p.vr;
      if (p.y > H + 20 * dpr) Object.assign(p, make(true));
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.globalAlpha = p.a; ctx.fillStyle = p.c;
      if (p.type === 'heart') heart(p.s * 1.3);
      else if (p.type === 'dot') { ctx.beginPath(); ctx.arc(0, 0, p.s * .45, 0, 6.28); ctx.fill(); }
      else if (p.type === 'rect') ctx.fillRect(-p.s * .5, -p.s * .25, p.s, p.s * .5);
      else { ctx.beginPath(); ctx.ellipse(0, 0, p.s * .9, p.s * .45, 0, 0, 6.28); ctx.fill(); }
      ctx.restore();
    }
    if (N) requestAnimationFrame(loop);
  })();
})();

// ---------- Chispitas al tocar ----------
let lastSpark = 0;
function spark(x, y, n = 1) {
  for (let k = 0; k < n; k++) {
    const s = document.createElement('span');
    s.className = 'spark'; s.textContent = pick(['💗', '✨', '🌸', '💕', '⭐']);
    s.style.left = x + 'px'; s.style.top = y + 'px';
    s.style.setProperty('--dx', rand(-50, 50) + 'px'); s.style.setProperty('--dy', rand(-70, -10) + 'px');
    document.body.appendChild(s); setTimeout(() => s.remove(), 1000);
  }
}
addEventListener('pointerdown', (e) => spark(e.clientX, e.clientY, 5));
if (matchMedia('(pointer:fine)').matches) {
  addEventListener('pointermove', (e) => {
    const t = performance.now(); if (t - lastSpark < 70) return; lastSpark = t; spark(e.clientX, e.clientY);
  });
}

// ---------- Música opcional (Recursos/cancion.mp3) ----------
const song = $('#song'), musicBtn = $('#musicBtn');
function tryMusic() {
  song.volume = .6;
  song.play().then(() => { musicBtn.hidden = false; musicBtn.classList.add('playing'); }).catch(() => {});
}
musicBtn.addEventListener('click', () => {
  if (song.paused) { song.play(); musicBtn.classList.add('playing'); } else { song.pause(); musicBtn.classList.remove('playing'); }
});

// ---------- Sobre de bienvenida ----------
const envelope = $('#envelope'), intro = $('#intro');
if (HAS_GSAP) gsap.set(['.hp', '.hero-feliz', '.hero-title', '.hero-name', '.hero-sub', '.hero-kitty', '.scroll-hint'], { opacity: 0 });

envelope.addEventListener('click', () => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  tryMusic();
  setTimeout(() => {
    burst({ particleCount: 160, origin: { y: .5 } });
    emojiBurst({ x: .5, y: .5 }, 30);
    intro.style.transition = 'opacity .9s ease, transform .9s ease';
    intro.style.opacity = '0'; intro.style.transform = 'scale(1.08)';
    document.body.classList.remove('locked');
    setTimeout(() => { intro.remove(); if (HAS_GSAP) ScrollTrigger.refresh(); }, 900);
    heroIn();
  }, 1500);
});

function heroIn() {
  if (!HAS_GSAP) return;
  const tl = gsap.timeline({ delay: .3 });
  gsap.set('.hp', { x: 0, xPercent: (k) => [-140, -50, 40][k] });
  tl.fromTo('.hp', { opacity: 0, y: 140, rotation: (k) => [-40, 0, 40][k] },
    { opacity: 1, y: 0, rotation: (k) => [-11, 2, 10][k], duration: 1.2, stagger: .15, ease: 'back.out(1.6)' })
    .fromTo('.hero-feliz', { opacity: 0, y: 20, letterSpacing: '1em' }, { opacity: 1, y: 0, letterSpacing: '.25em', duration: 1 }, '-=.8')
    .fromTo('.hero-title', { opacity: 0, scale: .6, filter: 'blur(14px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.3, ease: 'expo.out' }, '-=.7')
    .fromTo('.hero-name', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .9 }, '-=.8')
    .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .8 }, '-=.5')
    .fromTo('.hero-kitty', { opacity: 0, x: 120, rotation: 30 }, { opacity: 1, x: 0, rotation: 0, duration: 1, ease: 'back.out(2)' }, '-=.6')
    .to('.scroll-hint', { opacity: 1, duration: .6 });
}

// ---------- Animaciones de scroll ----------
if (HAS_GSAP) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });

  // Hero: las fotos se separan al bajar
  gsap.to('.hero-photos', { y: -80, scale: .92, opacity: .3, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });

  // Pila de polaroids que vuelan desde todos lados
  const pileItems = $$('.pile-photo');
  gsap.set(pileItems, { yPercent: -50 });
  const pileTl = gsap.timeline({
    scrollTrigger: { trigger: '#pile', start: 'top top', end: () => '+=' + innerHeight * pileItems.length * .5, pin: true, scrub: .8, invalidateOnRefresh: true },
  });
  pileItems.forEach((el, k) => {
    const last = k === pileItems.length - 1;
    const ang = rand(0, Math.PI * 2), ex = last ? 0 : rand(-1, 1), ey = last ? 0 : rand(-1, 1);
    pileTl.fromTo(el,
      { x: () => Math.cos(ang) * innerWidth * 1.1, y: () => Math.sin(ang) * innerHeight * 1.1, rotation: rand(-120, 120), scale: 1.5 },
      { x: () => ex * Math.min(innerWidth * .2, 220), y: () => ey * Math.min(innerHeight * .07, 60), rotation: last ? -2 : rand(-15, 15), scale: last ? 1.12 : 1, ease: 'power3.out', duration: 1 },
      k * .7);
  });
  pileTl.to({}, { duration: .8 });

  // Palabras que se iluminan
  gsap.to('#wordsText .w', {
    opacity: 1, stagger: .1, ease: 'none',
    scrollTrigger: { trigger: '#words', start: 'top top', end: '+=160%', pin: true, scrub: .5 },
  });
  gsap.fromTo('.words-heart', { scale: .6, rotation: -8 }, { scale: 1.15, rotation: 6, ease: 'none', scrollTrigger: { trigger: '#words', start: 'top bottom', end: 'bottom top', scrub: true } });

  // Tendedero horizontal
  const dist = () => track.scrollWidth - innerWidth;
  gsap.to(track, {
    x: () => -dist(), ease: 'none',
    scrollTrigger: { trigger: '#clothesline', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true },
  });

  // Foto revelada dentro de un corazón
  gsap.timeline({ scrollTrigger: { trigger: '#heartSec', start: 'top top', end: '+=180%', pin: true, scrub: .8 } })
    .fromTo('.heart-photo', { '--hs': '14%' }, { '--hs': '650%', ease: 'power2.in', duration: 1 })
    .fromTo('.heart-photo img', { scale: 1.3 }, { scale: 1, ease: 'none', duration: 1 }, 0)
    .fromTo('.heart-copy', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: .4 }, .7);

  // Muro con columnas a distinta velocidad
  $$('.pcol').forEach((col, k) => {
    const [a, b] = k % 2 ? [10, -10] : [3, -5];
    gsap.fromTo(col, { yPercent: a }, { yPercent: b, ease: 'none', scrollTrigger: { trigger: '#wallCols', start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  gsap.set('.wcard, .wall-quote', { opacity: 0, y: 70, rotation: () => rand(-8, 8), scale: .9 });
  ScrollTrigger.batch('.wcard, .wall-quote', {
    start: 'top 95%',
    onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, rotation: 0, scale: 1, duration: 1, stagger: .1, ease: 'back.out(1.4)' }),
  });

  // Aparición general
  gsap.set('.reveal', { opacity: 0, y: 44 });
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1, stagger: .14, ease: 'power3.out' }),
  });

  // Pastel entra rebotando
  gsap.from('#cake', { y: 120, scale: .7, opacity: 0, duration: 1.2, ease: 'back.out(1.6)', scrollTrigger: { trigger: '#cake', start: 'top 85%' } });

  // Cartitas de las mascotas
  gsap.from('.pet-card', {
    y: 260, opacity: 0, rotation: (k) => [-45, 0, 45][k], duration: 1.2, stagger: .2, ease: 'back.out(1.5)', clearProps: 'transform,opacity', onComplete: () => $$('.pet-card').forEach((c) => c.classList.add('ready')),
    scrollTrigger: { trigger: '#petCards', start: 'top 80%' },
  });

  // Regalo
  gsap.from('.gift-stage', { scale: 0, rotation: -30, duration: 1.1, ease: 'back.out(2)', scrollTrigger: { trigger: '.gift-stage', start: 'top 85%' } });
}

// ---------- Videos ----------
const vids = $$('.vframe video');
const io = new IntersectionObserver((ents) => ents.forEach((en) => {
  if (en.isIntersecting) en.target.play().catch(() => {}); else en.target.pause();
}), { threshold: .4 });
vids.forEach((v) => io.observe(v));
$$('.vframe').forEach((f) => f.addEventListener('click', () => {
  const v = $('video', f), unmute = v.muted;
  vids.forEach((o) => { o.muted = true; o.parentElement.querySelector('.vsound').textContent = '🔇'; });
  v.muted = !unmute; v.play().catch(() => {});
  $('.vsound', f).textContent = unmute ? '🔊' : '🔇';
  if (unmute && !song.paused) { song.pause(); musicBtn.classList.remove('playing'); }
}));

// ---------- Mascotas: levantar carta al tocar ----------
$$('.pet-card').forEach((c) => c.addEventListener('click', () => {
  $$('.pet-card').forEach((o) => o !== c && o.classList.remove('lift'));
  c.classList.toggle('lift');
  emojiBurst(originOf(c), 10);
}));

// ---------- Pastel ----------
$('#blowBtn').addEventListener('click', (e) => {
  const cake = $('#cake');
  if (cake.classList.contains('out')) {
    cake.classList.remove('out'); $('#wish').classList.remove('show'); e.target.textContent = 'Soplar las velitas 🌬️';
    return;
  }
  cake.classList.add('out');
  e.target.textContent = 'Volver a prender 🕯️';
  setTimeout(() => {
    $('#wish').classList.add('show');
    burst({ origin: originOf(cake) });
    emojiBurst(originOf(cake), 20);
  }, 450);
});

// ---------- Regalo ----------
const gift = $('#gift'), cardsWrap = $('#giftCards');
let opened = false, revealed = 0;

gift.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  gift.classList.add('opened');
  $('#giftLead').textContent = 'Toca cada carta para descubrir tu regalo 💌';

  if (!HAS_GSAP) { cardsWrap.classList.add('show'); burst(); return; }

  const tl = gsap.timeline();
  tl.to(gift, { rotation: 6, duration: .08, yoyo: true, repeat: 5, ease: 'sine.inOut' })
    .to(gift, { rotation: 0, scale: 1.12, duration: .2 })
    .to('.gift-lid', { y: -260, x: 80, rotation: 40, opacity: 0, duration: 1, ease: 'power2.out' })
    .to('.gift-tag', { opacity: 0, duration: .3 }, '<')
    .add(() => { burst({ origin: originOf(gift), particleCount: 180, startVelocity: 55 }); emojiBurst(originOf(gift), 30); }, '<')
    .to('#rays', { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }, '<')
    .to(gift, { scale: 1, duration: .4 }, '<.3')
    .add(dealCards, '-=.6');
});

function dealCards() {
  cardsWrap.classList.add('show');
  const g = gift.getBoundingClientRect(), gx = g.left + g.width / 2, gy = g.top + g.height * .3;
  $$('.gcard', cardsWrap).forEach((card, k) => {
    const r = card.getBoundingClientRect();
    gsap.fromTo(card,
      { x: gx - (r.left + r.width / 2), y: gy - (r.top + r.height / 2), scale: .12, rotation: rand(-200, 200), opacity: 0 },
      { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, duration: 1.3, delay: k * .13, ease: 'back.out(1.3)' });
  });
  setTimeout(() => {
    const y = cardsWrap.getBoundingClientRect().top + scrollY - Math.max(20, innerHeight * .08);
    if (cardsWrap.getBoundingClientRect().top > innerHeight * .55) scrollTo({ top: y, behavior: 'smooth' });
  }, 1300);
}

cardsWrap.addEventListener('click', (e) => {
  const card = e.target.closest('.gcard');
  if (!card || card.classList.contains('flipped')) return;
  card.classList.add('flipped');
  setTimeout(() => {
    burst({ origin: originOf(card), particleCount: 60, spread: 70, startVelocity: 30 });
    emojiBurst(originOf(card), 12);
  }, 350);
  if (++revealed === GIFTS.length) {
    setTimeout(() => {
      $('#finale').classList.add('show');
      celebrate(3000);
      setTimeout(() => $('#finale').scrollIntoView({ behavior: 'smooth', block: 'center' }), 600);
    }, 1200);
  }
});

$('#againBtn').addEventListener('click', () => celebrate(2400));

// ---------- Ajustes al cambiar el tamaño ----------
let lastW = innerWidth;
addEventListener('resize', () => {
  if (Math.abs(innerWidth - lastW) < 60) return;
  lastW = innerWidth;
  buildBunting();
});
