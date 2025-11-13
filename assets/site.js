// ランダム名言（好きな人の名言に差し替えてOK）
const QUOTES = [
  { t: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", a: "Aristotle" },
  { t: "In the middle of difficulty lies opportunity.", a: "Albert Einstein" },
  { t: "本当に大切なものは、目に見えない。", a: "星の王子さま" },
  { t: "急がば回れ。", a: "ことわざ" }
];

function pickQuote(){
  const q = QUOTES[Math.floor(Math.random()*QUOTES.length)];
  return q.a ? `${q.t} — ${q.a}` : q.t;
}

document.addEventListener('DOMContentLoaded', () => {
  // トップバー名言
  const el = document.getElementById('top-quote');
  if(el){ el.textContent = pickQuote(); }

  // ドロワー開閉
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');

  function openDrawer(open){
    drawer.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    if(open){ backdrop.removeAttribute('hidden'); } else { backdrop.setAttribute('hidden',''); }
  }

  burger?.addEventListener('click', () => openDrawer(!drawer.classList.contains('open')));
  backdrop?.addEventListener('click', () => openDrawer(false));
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') openDrawer(false); });
});
