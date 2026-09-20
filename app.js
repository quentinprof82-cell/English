const STORAGE_KEY = "ime_progress_v1";

const modules = [
  { id:"essential", title:"Essential 100", icon:"⭐", desc:"Les 100 mots indispensables", color:"blue", total:100 },
  { id:"everyday", title:"Vie quotidienne", icon:"🏠", desc:"Communiquer dans la vraie vie", color:"green", total:300 },
  { id:"business", title:"Commerce & vente", icon:"🛒", desc:"Ton anglais professionnel", color:"red", total:300 },
  { id:"finance", title:"Économie & finance", icon:"💰", desc:"Les bases essentielles", color:"yellow", total:200 }
];

const essential = [
  ["be","être","I want to be better at English."],
  ["have","avoir","I have a meeting at ten."],
  ["do","faire","What do you do?"],
  ["get","obtenir / recevoir / devenir","I get a lot of emails."],
  ["make","faire / fabriquer","Let's make a plan."],
  ["go","aller","I go to work every day."],
  ["come","venir","Can you come with me?"],
  ["take","prendre","Take your time."],
  ["give","donner","Can you give me a hand?"],
  ["know","savoir / connaître","I know the answer."],
  ["think","penser","I think you're right."],
  ["want","vouloir","I want to improve."],
  ["need","avoir besoin de","I need some help."],
  ["like","aimer","I like this idea."],
  ["look","regarder","Look at this."],
  ["use","utiliser","I use this every day."],
  ["find","trouver","I can't find my keys."],
  ["tell","dire / raconter","Tell me more."],
  ["ask","demander","Can I ask you a question?"],
  ["work","travailler","I work in sales."],
  ["feel","se sentir","I feel better today."],
  ["try","essayer","I'll try again."],
  ["leave","partir / laisser","I have to leave now."],
  ["call","appeler","I'll call you later."],
  ["put","mettre","Put it here."],
  ["keep","garder / continuer","Keep going!"],
  ["let","laisser","Let me know."],
  ["help","aider","Can you help me?"],
  ["show","montrer","Let me show you."],
  ["hear","entendre","Can you hear me?"],
  ["play","jouer","Do you play tennis?"],
  ["run","courir / fonctionner","The system is running."],
  ["move","bouger / déplacer","Let's move on."],
  ["live","vivre / habiter","I live in France."],
  ["believe","croire","I believe you."],
  ["bring","apporter","Bring your documents."],
  ["happen","se passer","What happened?"],
  ["write","écrire","Write it down."],
  ["provide","fournir","We provide good service."],
  ["sit","s'asseoir","Please sit down."],
  ["stand","être debout / se lever","Please stand here."],
  ["lose","perdre","Don't lose your phone."],
  ["pay","payer","I need to pay."],
  ["meet","rencontrer","Nice to meet you."],
  ["include","inclure","The price includes tax."],
  ["continue","continuer","Please continue."],
  ["set","fixer / régler / mettre","Set a goal."],
  ["learn","apprendre","I want to learn English."],
  ["change","changer","Things can change."],
  ["understand","comprendre","I understand."],
  ["watch","regarder","Watch this video."],
  ["follow","suivre","Follow me."],
  ["stop","arrêter","Please stop here."],
  ["create","créer","Let's create a plan."],
  ["speak","parler","I speak a little English."],
  ["read","lire","I read every day."],
  ["allow","permettre","This allows us to save time."],
  ["add","ajouter","Add your name here."],
  ["spend","dépenser / passer du temps","I spend too much money."],
  ["grow","grandir / augmenter","The company is growing."],
  ["open","ouvrir","Open the door."],
  ["walk","marcher","I walk to work."],
  ["win","gagner","We want to win."],
  ["offer","offrir / proposer","We can offer a discount."],
  ["remember","se souvenir","Remember this word."],
  ["love","aimer","I love this place."],
  ["consider","considérer","We should consider this option."],
  ["appear","apparaître / sembler","It appears to be correct."],
  ["buy","acheter","I want to buy it."],
  ["wait","attendre","Please wait a minute."],
  ["serve","servir","We serve our customers."],
  ["die","mourir","Plants can die without water."],
  ["send","envoyer","Send me an email."],
  ["expect","s'attendre à","I expect good results."],
  ["build","construire","We need to build trust."],
  ["stay","rester","Stay here."],
  ["fall","tomber","Prices can fall."],
  ["cut","couper","Cut the paper."],
  ["reach","atteindre","We reached our goal."],
  ["kill","tuer","The story says the character was killed."],
  ["remain","rester","Please remain calm."],
  ["suggest","suggérer","I suggest a different option."],
  ["raise","augmenter / lever","They raised the price."],
  ["pass","passer","Time passes quickly."],
  ["sell","vendre","We sell sports equipment."],
  ["require","exiger / nécessiter","This job requires experience."],
  ["report","rapporter / signaler","Please report the problem."],
  ["decide","décider","We need to decide today."],
  ["pull","tirer","Pull the door."],
  ["return","retourner / rendre","I need to return this product."],
  ["explain","expliquer","Can you explain this?"],
  ["hope","espérer","I hope you're well."],
  ["develop","développer","We want to develop the business."],
  ["carry","porter","Can you carry this box?"],
  ["break","casser / interrompre","Let's take a break."],
  ["receive","recevoir","I received your email."],
  ["agree","être d'accord","I agree with you."],
  ["support","soutenir","We support our customers."],
  ["hit","frapper / atteindre","The campaign hit its target."],
  ["produce","produire","The company produces goods."],
  ["eat","manger","Let's eat."],
  ["cover","couvrir","The price covers delivery."],
  ["catch","attraper","I need to catch the train."],
  ["draw","dessiner / tirer","Draw a line."],
  ["choose","choisir","Choose an answer."]
];

const moduleWords = {
  everyday: [
    ["morning","matin","I get up early in the morning."],
    ["evening","soir","See you this evening."],
    ["house","maison","I am at home."],
    ["food","nourriture","The food is good."],
    ["shopping","courses / shopping","I am going shopping."],
    ["travel","voyager / voyage","I love to travel."],
    ["weather","météo","The weather is nice today."],
    ["friend","ami(e)","She is my best friend."],
    ["family","famille","My family lives nearby."],
    ["busy","occupé","I am very busy today."]
  ],
  business: [
    ["customer","client","The customer needs help."],
    ["supplier","fournisseur","We work with several suppliers."],
    ["order","commande","The order is ready."],
    ["stock","stock","We need to check the stock."],
    ["price","prix","The price is too high."],
    ["discount","remise","We can offer a discount."],
    ["invoice","facture","I'll send the invoice."],
    ["sales","ventes","Sales are increasing."],
    ["profit","bénéfice","The company made a profit."],
    ["margin","marge","Our margin is too low."]
  ],
  finance: [
    ["income","revenus","My monthly income is stable."],
    ["expenses","dépenses","We need to reduce our expenses."],
    ["savings","épargne","I am building my savings."],
    ["debt","dette","The company has debt."],
    ["loan","prêt","They took out a loan."],
    ["interest rate","taux d'intérêt","Interest rates are rising."],
    ["inflation","inflation","Inflation affects prices."],
    ["investment","investissement","This is a long-term investment."],
    ["revenue","chiffre d'affaires / revenus","Revenue increased this year."],
    ["loss","perte","The company reported a loss."]
  ]
};

let state = loadState();
let currentModule = "essential";
let currentSession = null;
let sessionIndex = 0;
let sessionScore = 0;
let answered = false;

function defaultState() {
  return {
    streak: 7,
    mastered: 0,
    inProgress: 0,
    review: 0,
    newWords: 0,
    attempts: 0,
    correct: 0,
    words: {}
  };
}
function loadState() {
  try { return {...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")}; }
  catch { return defaultState(); }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function progressFor(id) {
  const n = id === "essential" ? 100 : modules.find(m => m.id === id)?.total || 100;
  if (id === "essential") return Math.min(100, Math.round(Object.keys(state.words).filter(k => k.startsWith("essential:") && state.words[k]?.level >= 2).length / 100 * 100));
  return Math.min(100, Math.round((state[id]?.mastered || 0) / n * 100));
}
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(window.__toast); window.__toast = setTimeout(()=>el.classList.remove("show"), 2200);
}
function setView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelector(`#view-${view}`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  const titles = {
    home:["Hello ! 👋","Prêt(e) à progresser aujourd’hui ?"],
    learn:["Apprendre 📚","Choisis ton univers et lance une session."],
    progress:["Ma progression 📈","Chaque petite victoire compte."],
    review:["Révisions ↻","Revois ce que tu risques d’oublier."],
    stats:["Statistiques 🏆","Ton activité d’apprentissage."],
    settings:["Paramètres ⚙️","Personnalise ton expérience."]
  };
  document.getElementById("pageTitle").textContent = titles[view][0];
  document.getElementById("pageSubtitle").textContent = titles[view][1];
  renderAll();
  window.scrollTo({top:0, behavior:"smooth"});
}

function moduleCard(m) {
  const p = progressFor(m.id);
  const counts = m.id==="essential" ? `${Math.max(0, Math.round(p))} / ${m.total}` : `${state[m.id]?.mastered || 0} / ${m.total}`;
  return `<article class="module-card ${m.color}" data-module="${m.id}" role="button" tabindex="0">
    <div class="module-icon">${m.icon}</div>
    <h3>${m.title}</h3>
    <p>${m.desc}</p>
    <div class="progress-bar"><div class="progress-fill fill-${m.color}" style="width:${p}%"></div></div>
    <div class="module-foot"><span>${counts}</span><span class="circle-arrow">›</span></div>
  </article>`;
}

function renderHome() {
  const mastered = Math.min(100, Math.max(state.mastered, 0));
  document.getElementById("view-home").innerHTML = `
    <section class="hero">
      <h2>Small steps.<br>Big progress.</h2>
      <p>Un peu chaque jour, de grands résultats.</p>
      <button class="primary-btn" id="startRecommended">▶ Commencer une session</button>
    </section>
    <div class="section-head">
      <h2>Choisir un module</h2>
      <button id="recommendedBtn">🔀 Session recommandée&nbsp; ›</button>
    </div>
    <div class="module-grid">${modules.map(moduleCard).join("")}</div>
    <div class="lower-grid">
      <section class="panel">
        <div class="section-head" style="margin:0"><h3>📊 Ma progression globale</h3><button onclick="setView('progress')">Voir le détail&nbsp; →</button></div>
        <div class="global-grid">
          <div class="donut"><div class="donut-inner"><strong>${mastered}%</strong><span>progression</span></div></div>
          <div class="legend">
            <div class="legend-row"><span><i class="dot" style="background:#34a853"></i>Mots maîtrisés</span><strong>${state.mastered}</strong></div>
            <div class="legend-row"><span><i class="dot" style="background:#4c9af0"></i>En cours</span><strong>${state.inProgress}</strong></div>
            <div class="legend-row"><span><i class="dot" style="background:#f2b233"></i>À réviser</span><strong>${state.review}</strong></div>
            <div class="legend-row"><span><i class="dot" style="background:#ef6262"></i>Nouveaux</span><strong>${state.newWords}</strong></div>
          </div>
        </div>
      </section>
      <section class="panel">
        <div class="section-head" style="margin:0"><h3>🕘 Ma dernière session</h3><button onclick="setView('stats')">Voir l’historique&nbsp; →</button></div>
        <div class="last-session">
          <div><strong>${localStorage.getItem("lastModule") || "Essential 100"}</strong><br><small>Aujourd’hui · ${localStorage.getItem("lastTime") || "—"}</small></div>
          <span class="score">${localStorage.getItem("lastScore") || "0 / 10"}</span>
        </div>
        <p style="font-size:19px;font-weight:800;text-align:center;margin:18px 0 0">“Great job! Keep going!”</p>
      </section>
    </div>
    <div class="quote-grid">
      <div class="quote-box"><strong>“The more you learn, the more you can do.”</strong><br><span>Plus tu apprends, plus tu peux faire.</span></div>
      <div class="goal-box"><strong>🚀 Un objectif par jour.</strong><br>Des résultats pour toujours.</div>
    </div>
  `;
  document.querySelectorAll(".module-card").forEach(card => {
    card.addEventListener("click", () => startSession(card.dataset.module));
    card.addEventListener("keydown", e => { if(e.key==="Enter") startSession(card.dataset.module); });
  });
  document.getElementById("startRecommended").onclick = recommendedSession;
  document.getElementById("recommendedBtn").onclick = recommendedSession;
}

function renderLearn() {
  document.getElementById("view-learn").innerHTML = `
    <div class="section-head"><h2>Choisis ton module</h2><button onclick="recommendedSession()">🔀 Session recommandée</button></div>
    <div class="learn-grid">
      ${modules.map(m => `<div class="learn-card">
        <span class="pill">${m.id==="essential"?"Fondamentaux":"Vocabulaire"}</span>
        <h3>${m.icon} ${m.title}</h3>
        <p>${m.desc}. Tu peux choisir librement ce module, puis l'application adapte les révisions à tes réponses.</p>
        <button class="primary-btn" style="background:var(--${m.color === "red" ? "red" : m.color === "yellow" ? "yellow" : m.color === "green" ? "green" : "blue"});font-size:18px;width:100%" onclick="startSession('${m.id}')">Commencer</button>
      </div>`).join("")}
    </div>
    <div class="panel" style="margin-top:16px">
      <h3>🤖 Comment fonctionne la session recommandée ?</h3>
      <p style="color:var(--muted)">Tu gardes le choix des modules. Si tu appuies sur « Session recommandée », l'application privilégie les mots nouveaux et ceux que tu as ratés.</p>
    </div>`;
}

function renderProgress() {
  const total = 900;
  const global = Math.round((state.mastered / total) * 100);
  document.getElementById("view-progress").innerHTML = `
    <div class="stat-grid">
      <div class="stat-card"><span>Mots maîtrisés</span><strong>${state.mastered}</strong></div>
      <div class="stat-card"><span>En cours</span><strong>${state.inProgress}</strong></div>
      <div class="stat-card"><span>À réviser</span><strong>${state.review}</strong></div>
    </div>
    <div class="panel" style="margin-top:16px">
      <div class="section-head" style="margin-top:0"><h2>Mes modules</h2></div>
      <div class="list">${modules.map(m => {
        const p = progressFor(m.id);
        return `<div class="word-row">
          <div><strong>${m.icon} ${m.title}</strong><small>${p}% du parcours</small></div>
          <span class="status-badge status-progress">${m.id==="essential"?Math.round(p):state[m.id]?.mastered||0} / ${m.total}</span>
        </div>`;
      }).join("")}</div>
    </div>`;
}

function renderReview() {
  const recent = Object.entries(state.words).filter(([,v]) => v.level < 2).slice(0,12);
  const rows = recent.length ? recent.map(([key,v]) => {
    const [moduleId, idx] = key.split(":");
    const data = getWords(moduleId)[Number(idx)];
    if(!data) return "";
    const status = v.level===0 ? ["Nouveau","status-new"] : ["À renforcer","status-progress"];
    return `<div class="word-row"><div><strong>${data[0]}</strong><small>${data[1]}</small></div><span class="status-badge ${status[1]}">${status[0]}</span></div>`;
  }).join("") : `<div class="panel" style="background:#eaf8ef"><strong>🎉 Rien d'urgent à réviser !</strong><p>Fais une nouvelle session pour apprendre du vocabulaire.</p></div>`;
  document.getElementById("view-review").innerHTML = `
    <div class="section-head"><h2>À revoir</h2><button onclick="recommendedSession()">▶ Réviser maintenant</button></div>
    <div class="panel"><div class="list">${rows}</div></div>`;
}

function renderStats() {
  const accuracy = state.attempts ? Math.round(state.correct/state.attempts*100) : 0;
  document.getElementById("view-stats").innerHTML = `
    <div class="stat-grid">
      <div class="stat-card"><span>Questions répondues</span><strong>${state.attempts}</strong></div>
      <div class="stat-card"><span>Taux de réussite</span><strong>${accuracy}%</strong></div>
      <div class="stat-card"><span>Série actuelle</span><strong>🔥 ${state.streak}</strong></div>
    </div>
    <div class="panel" style="margin-top:16px">
      <h3>📈 Ton principe d'entraînement</h3>
      <p>Tu choisis les thèmes. L'application utilise ensuite tes réponses pour remettre davantage les mots difficiles.</p>
      <p><strong>Objectif conseillé :</strong> 10 minutes par jour.</p>
    </div>`;
}

function renderSettings() {
  document.getElementById("view-settings").innerHTML = `
    <div class="settings">
      <div class="setting-row"><div><h3>🔤 Gros texte</h3><p>Optimisé pour une lecture confortable sur iPhone.</p></div><button class="toggle on" aria-label="Gros texte activé"></button></div>
      <div class="setting-row"><div><h3>📱 Interface mobile</h3><p>Navigation basse adaptée au pouce et aux écrans étroits.</p></div><span class="pill">Activée</span></div>
      <div class="setting-row"><div><h3>💾 Données locales</h3><p>Ta progression reste dans le navigateur de cet appareil.</p></div><span class="pill">Local</span></div>
      <div class="setting-row"><div><h3>♻️ Réinitialiser</h3><p>Efface uniquement la progression enregistrée sur cet appareil.</p></div><button class="secondary-btn" id="resetBtn">Réinitialiser</button></div>
    </div>`;
  document.getElementById("resetBtn").onclick = () => {
    if(confirm("Réinitialiser toute la progression sur cet appareil ?")) {
      state = defaultState(); saveState(); localStorage.removeItem("lastModule"); localStorage.removeItem("lastTime"); localStorage.removeItem("lastScore"); renderAll(); toast("Progression réinitialisée");
    }
  };
}

function getWords(moduleId) {
  if(moduleId === "essential") return essential;
  return moduleWords[moduleId] || essential;
}

function makeQuestion(moduleId, index) {
  const words = getWords(moduleId);
  const item = words[index % words.length];
  const others = words.filter((_,i)=>i !== index % words.length).sort(()=>Math.random()-0.5).slice(0,3);
  const options = [item, ...others].sort(()=>Math.random()-0.5);
  return { item, options, index: index % words.length };
}

function startSession(moduleId) {
  currentModule = moduleId;
  currentSession = Array.from({length:10}, (_,i)=>makeQuestion(moduleId, (sessionIndex+i) % getWords(moduleId).length));
  sessionIndex = 0; sessionScore = 0; answered = false;
  showSession();
}

function recommendedSession() {
  const candidates = [];
  Object.entries(state.words).forEach(([key,v]) => {
    if(v.level < 2) {
      const [m,idx] = key.split(":");
      if(getWords(m)[Number(idx)]) candidates.push(m);
    }
  });
  const m = candidates[0] || ["essential","everyday","business","finance"][Math.floor(Math.random()*4)];
  startSession(m);
}

function showSession() {
  const q = currentSession[sessionIndex];
  const view = document.getElementById("view-learn");
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  view.classList.add("active");
  document.getElementById("pageTitle").textContent = "Session 🎯";
  document.getElementById("pageSubtitle").textContent = `Question ${sessionIndex+1} sur ${currentSession.length}`;
  const moduleName = modules.find(m=>m.id===currentModule)?.title || "Vocabulaire";
  view.innerHTML = `
    <div class="session-wrap">
      <div class="session-top"><button class="secondary-btn" onclick="setView('learn')">← Retour</button><strong>${sessionScore} / ${sessionIndex}</strong></div>
      <div class="progress-bar"><div class="progress-fill fill-blue" style="width:${(sessionIndex/currentSession.length)*100}%"></div></div>
      <article class="session-card">
        <div class="session-category">${moduleName}</div>
        <div class="session-word">${q.item[0]}</div>
        <div class="session-pron">${q.item[1]}</div>
        <div class="question">Que signifie ce mot ?</div>
        <div class="answers">${q.options.map((o,i)=>`<button class="answer" data-answer="${i}">${o[1]}</button>`).join("")}</div>
        <div id="feedback" class="feedback"></div>
      </article>
    </div>`;
  document.querySelectorAll(".answer").forEach((btn,i)=>btn.onclick=()=>answerQuestion(i,q));
}

function answerQuestion(choice,q) {
  if(answered) return;
  answered = true;
  const correctIndex = q.options.findIndex(o=>o[0]===q.item[0]);
  const buttons = [...document.querySelectorAll(".answer")];
  buttons[correctIndex].classList.add("correct");
  state.attempts++;
  const isCorrect = choice === correctIndex;
  if(isCorrect) { state.correct++; sessionScore++; }
  else buttons[choice].classList.add("wrong");

  const key = `${currentModule}:${q.index}`;
  const prev = state.words[key]?.level || 0;
  state.words[key] = { level: isCorrect ? Math.min(3, prev+1) : Math.max(0, prev-1) };

  // Approximate global buckets for the first version.
  const levels = Object.values(state.words).map(v=>v.level);
  state.mastered = levels.filter(v=>v>=3).length;
  state.inProgress = levels.filter(v=>v===1 || v===2).length;
  state.review = levels.filter(v=>v===0).length;
  state.newWords = Math.max(0, 900 - state.mastered - state.inProgress - state.review);
  saveState();

  const fb = document.getElementById("feedback");
  fb.className = `feedback show ${isCorrect ? "ok":"no"}`;
  fb.innerHTML = isCorrect
    ? `<strong>✅ Excellent !</strong><div>${q.item[0]} = ${q.item[1]}</div><div class="example">💬 ${q.item[2]}</div>`
    : `<strong>❌ Pas tout à fait.</strong><div><b>${q.item[0]}</b> = ${q.item[1]}</div><div class="example">💬 ${q.item[2]}</div>`;
  setTimeout(() => {
    if(sessionIndex < currentSession.length-1) {
      sessionIndex++; answered=false; showSession();
    } else {
      finishSession();
    }
  }, 1500);
}

function finishSession() {
  const total = currentSession.length;
  localStorage.setItem("lastModule", modules.find(m=>m.id===currentModule)?.title || "Vocabulaire");
  localStorage.setItem("lastTime", new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}));
  localStorage.setItem("lastScore", `${sessionScore} / ${total}`);
  sessionIndex=0;
  const view = document.getElementById("view-learn");
  view.innerHTML = `<div class="session-wrap"><article class="session-card">
    <div style="font-size:64px">🎉</div>
    <h2 style="font-size:38px;margin:8px 0">Session terminée !</h2>
    <p style="font-size:22px;color:var(--muted)">Tu as obtenu</p>
    <div style="font-size:68px;font-weight:900;color:var(--blue)">${sessionScore} / ${total}</div>
    <p style="font-size:20px">Continue comme ça. La régularité compte plus que la perfection.</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:22px">
      <button class="primary-btn" onclick="startSession('${currentModule}')">Recommencer</button>
      <button class="secondary-btn" onclick="setView('home')">Accueil</button>
    </div>
  </article></div>`;
  document.getElementById("pageTitle").textContent = "Bravo ! 🎉";
  document.getElementById("pageSubtitle").textContent = "Une session de plus dans ta progression.";
}

function renderAll() {
  renderHome(); renderLearn(); renderProgress(); renderReview(); renderStats(); renderSettings();
}

document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));
renderAll();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
