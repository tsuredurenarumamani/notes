// ランダム名言（好きな人の名言に差し替えてOK）
const QUOTES = [
  { t: "El hombre moderno anda siempre apurado, porque si la economía no crece es una tragedia.", a: "José Mujica" },
  { t: "Enfrentamos el sedentarismo con caminadores, al insomnio con pastillas y a la soledad con electrónica.", a: "José Mujica" },
  { t: "Soy un paisano terco. No razono en términos económicos. Pero estoy peleado con la civilización en la que estoy viviendo.", a: "José Mujica" },
  { t: "La política no es un pasatiempo, no es una profesión para vivir de ella, es una pasión con el sueño de intentar construir un futuro social mejor; a los que les gusta la plata, bien lejos de la política.", a: "José Mujica" },
  { t: "Prometemos una vida de derroche y despilfarro, que en el fondo constituye una cuenta regresiva contra la naturaleza y contra la humanidad como futuro.", a: "José Mujica" },
  { t: "Ser libre es gastar la mayor cantidad de tiempo de nuestra vida en aquello que nos gusta hacer.", a: "José Mujica" },
  { t: "La economía sucia, el narcotráfico, la estafa, el fraude y la corrupción son plagas contemporáneas cobijadas por ese antivalor, ese que sostiene que somos más felices si nos enriquecemos sea como sea.", a: "José Mujica" },
  { t: "No soy pobre, soy sobrio, liviano de equipaje, vivo con lo justo para que las cosas no me roben la libertad.", a: "José Mujica" },
  { t: "Hay cosas que adquieren valor cuando se pierden.", a: "José Mujica" },
  { t: "Nadie es más que nadie, las repúblicas se deforman y ellas se deben a las mayorías.", a: "José Mujica" },
  { t: "Pobres no son los que tienen poco. Son los que quieren mucho. Yo no vivo con pobreza, vivo con austeridad, con renunciamiento. Preciso poco para vivir.", a: "José Mujica" },
  { t: "Nos tenemos que juntar por el susto, para hacer algo en el mundo que se nos viene.", a: "José Mujica" },
  { t: "Siento rabia, me caliento, digo disparates, pero no puedo cultivar el odio. Hay que respetar, sobre todo cuando más duele.", a: "José Mujica" },
  { t: "Si aspiráramos en esta humanidad a consumir como un americano promedio, son imprescindibles tres planetas para poder vivir.", a: "José Mujica" },
  { t: "Nuestro mundo necesita menos organismos mundiales que sirvan a las cadenas hoteleras, y más humanidad y ciencia.", a: "José Mujica" },
  { t: "Arrasamos las selvas verdaderas e implantamos selvas anónimas de cemento.", a: "José Mujica" },
  { t: "Por el camino más largo es el viaje más corto.", a: "José Mujica" },
  { t: "Desarrollo sin felicidad no sirve.", a: "José Mujica" },
  { t: "Una cosa es vivir porque se nació o vivir por una causa.", a: "José Mujica" },
  { t: "El poder no cambia a las personas, sólo revela quiénes verdaderamente son.", a: "José Mujica" },
  { t: "El hombre instruido puede ser mucho más bestia que alguien que no lo está. Detrás de la enseñanza tiene que haber valores.", a: "José Mujica" },
  { t: "Quizá esté equivocado, porque yo me equivoco mucho; pero digo lo que pienso.", a: "José Mujica" },
  { t: "Cuando te empiezan a decir qué bien que estás, estás frito.", a: "José Mujica" },
  { t: "No defiendo las adicciones pero que las hay, las hay. Ninguna adicción es buena salvo el amor.", a: "José Mujica" },
  { t: "La economía globalizada no tiene otra conducción que el interés privado de muy pocos.", a: "José Mujica" },
  { t: "La política es la lucha por la felicidad de todos.", a: "José Mujica" },
  { t: "Sí, es posible un mundo con una humanidad mejor. Pero tal vez hoy la primera tarea sea salvar la vida.", a: "José Mujica" },
  { t: "El hombre es el único bicho que entierra sus muertos. Por qué será…", a: "José Mujica" },
  { t: "Los únicos derrotados son los que bajan los abrazos La derrota es un estado psicológico de la vida.", a: "José Mujica" },
  { t: "Yo quiero saber la verdad, pero en la justicia no creo un carajo.", a: "José Mujica" },
  { t: "No se vive de nostalgias, ni de recuerdos, sino de porvenir.", a: "José Mujica" },
  { t: "Los políticos tenemos que vivir como vive la mayoría y no como vive la minoría.", a: "José Mujica" },
  { t: "Cargo con las consecuencias de la vigilancia electrónica que nos envenena inútilmente.", a: "José Mujica" },
  { t: "Yo soy un luchador social y ando por el mundo hablando con los jóvenes.", a: "José Mujica" },
  { t: "Los hombres van detrás de las ideas como los carros de los bueyes.", a: "José Mujica" },
  { t: "Hemos nacido sólo para consumir y consumir y cuando no podemos, cargamos con la frustración, la pobreza y hasta la autoexclusión.", a: "José Mujica" },
  { t: "Lo inevitable no se lloriquea. Lo inevitable hay que afrontarlo.", a: "José Mujica" },
  { t: "Vivir mejor no es sólo tener más, sino que es ser más feliz.", a: "José Mujica" },
  { t: "Continuará la guerra hasta que la naturaleza nos llame y haga inevitable nuestra civilización.", a: "José Mujica" },
  { t: "El hombrecito promedio a veces sueña con vacaciones y libertad. Siempre sueña con concluir las cuentas, hasta que un día el corazón se para y adiós.", a: "José Mujica" }
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

// ヘッダーの検索フォーム → /search/?q=... に飛ばす
(function () {
  const form = document.querySelector('.header-search');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = form.querySelector('input[name="q"]');
    const query = (input.value || '').trim();
    if (!query) return;

    const base = form.getAttribute('action') || '/search/';
    window.location.href = base + '?q=' + encodeURIComponent(query);
  });
})();

// /search/ ページで結果を表示
(function () {
  const resultsBox = document.getElementById('search-results');
  if (!resultsBox || !window.__POSTS__) return;

  const params = new URLSearchParams(window.location.search);
  const q = (params.get('q') || '').trim();

  if (!q) {
    resultsBox.textContent = '検索ワードを入力してください。';
    return;
  }

  const heading = document.createElement('p');
  heading.textContent = `「${q}」の検索結果`;
  resultsBox.appendChild(heading);

  const qLower = q.toLowerCase();

  const hits = window.__POSTS__.filter(post => {
    const text =
      (post.title || '') + ' ' +
      (post.content || '') + ' ' +
      (post.tags || []).join(' ');
    return text.toLowerCase().includes(qLower);
  });

  if (!hits.length) {
    const p = document.createElement('p');
    p.textContent = '該当する投稿はありませんでした。';
    resultsBox.appendChild(p);
    return;
  }

  const ul = document.createElement('ul');
  hits.forEach(post => {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = post.url;
    a.textContent = post.title;
    li.appendChild(a);

    const meta = document.createElement('small');
    meta.textContent = ' – ' + post.date;
    li.appendChild(document.createElement('br'));
    li.appendChild(meta);

    ul.appendChild(li);
  });

  resultsBox.appendChild(ul);
})();

