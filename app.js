/* ============================================================
   app.js — أذكاري | Islamic PWA — التطبيق الرئيسي
   ============================================================ */
"use strict";

// ── STATE ──
const STATE = {
  currentPage:    "home",
  currentCat:     null,
  theme:          "dark-mode",
  favorites:      new Set(),
  viewed:         new Set(),
  tasbeehCurrent: 0,
  tasbeehSelected:0,
  soundOn:        true,
  tasbeeh: {
    lifetimeTotal: 0,
    todayTotal:    0,
    todayDate:     "",
    bestDay:       0,
    sessionTotal:  0,
    streak:        0,
    lastDate:      "",
    weekly:        [0,0,0,0,0,0,0],
    perItem:       {}
  }
};

// ── STORAGE HELPERS ──
function save(key, val) { try { localStorage.setItem("azkar_"+key, JSON.stringify(val)); } catch(e){} }
function load(key, def) { try { const v = localStorage.getItem("azkar_"+key); return v ? JSON.parse(v) : def; } catch(e){ return def; } }

function persistAll() {
  save("theme",     STATE.theme);
  save("favorites", [...STATE.favorites]);
  save("viewed",    [...STATE.viewed]);
  save("tasbeeh",   STATE.tasbeeh);
  save("tasbeehSel",STATE.tasbeehSelected);
}

function loadAll() {
  STATE.theme          = load("theme", "dark-mode");
  STATE.favorites      = new Set(load("favorites", []));
  STATE.viewed         = new Set(load("viewed", []));
  STATE.tasbeeh        = { ...{
    lifetimeTotal:0, todayTotal:0, todayDate:"", bestDay:0,
    sessionTotal:0, streak:0, lastDate:"", weekly:[0,0,0,0,0,0,0], perItem:{}
  }, ...load("tasbeeh", {}) };
  STATE.tasbeehSelected = load("tasbeehSel", 0);
}

// ── ARABIC NUMBERS ──
function toArabicNum(n) {
  return String(n).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
}

// ── DATES ──
function getGregorianDate() {
  const now = new Date();
  const days   = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
  const months = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
  return `${days[now.getDay()]}، ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}م`;
}

function getHijriDate() {
  const now = new Date();
  try {
    const hd = new Intl.DateTimeFormat("ar-SA-u-ca-islamic-umalqura", {
      day:"numeric", month:"long", year:"numeric"
    }).format(now);
    return hd;
  } catch(e) {
    return "—";
  }
}

function todayStr() { return new Date().toISOString().split("T")[0]; }
function dayOfWeek(){ return new Date().getDay(); }

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  loadAll();
  applyTheme();
  startApp();
});

function startApp() {
  // hide loader after short delay
  setTimeout(() => {
    document.getElementById("loader")?.classList.add("hidden");
  }, 1200);

  initDates();
  initQuote();
  initReminder();
  initNavigation();
  initThemeToggle();
  initSearch();
  initDrawer();
  initQuickGrid();
  initLibrary();
  initTasbeeh();
  initBackToTop();
  initStarCanvas();
  initInstallPWA();
  initReveal();
  updateMiniStats();
  updateDashboard();
  navigateTo("home");
}

// ── DATES ──
function initDates() {
  const gEl = document.getElementById("gregorianDate");
  const hEl = document.getElementById("hijriDate");
  if(gEl) gEl.textContent = getGregorianDate();
  if(hEl) hEl.textContent = getHijriDate();
}

// ── ROTATING QUOTE ──
function initQuote() {
  let idx = Math.floor(Math.random() * DAILY_REMINDERS.length);
  function showQuote() {
    const q = DAILY_REMINDERS[idx % DAILY_REMINDERS.length];
    const qAr  = document.getElementById("quoteArabic");
    const qSrc = document.getElementById("quoteSource");
    const qNt  = document.getElementById("quoteNote");
    if(qAr)  { qAr.style.opacity="0"; setTimeout(()=>{ qAr.textContent = "﴿ "+q.arabic+" ﴾"; qAr.style.opacity="1"; },300); }
    if(qSrc) qSrc.textContent = q.source;
    if(qNt)  qNt.textContent  = q.note;
    idx++;
  }
  showQuote();
  setInterval(showQuote, 12000);
  const qAr = document.getElementById("quoteArabic");
  if(qAr) qAr.style.transition = "opacity .4s";
}

// ── DAILY REMINDER ──
function initReminder() {
  const idx = new Date().getDate() % DAILY_REMINDERS.length;
  const r = DAILY_REMINDERS[idx];
  const rAr  = document.getElementById("reminderArabic");
  const rSrc = document.getElementById("reminderSource");
  const rNt  = document.getElementById("reminderNote");
  if(rAr)  rAr.textContent  = "﴿ "+r.arabic+" ﴾";
  if(rSrc) rSrc.textContent = r.source;
  if(rNt)  rNt.textContent  = r.note;
}

// ── NAVIGATION ──
function initNavigation() {
  document.querySelectorAll(".nav-link, .bn-item, .drawer-link").forEach(el => {
    el.addEventListener("click", e => {
      if(el.classList.contains("nav-link") || el.classList.contains("drawer-link")) e.preventDefault();
      const p = el.dataset.page;
      if(el.classList.contains("drawer-link")) closeDrawer();
      navigateTo(p);
    });
  });
}

function navigateTo(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById("page-"+page);
  if(target) { target.classList.add("active"); window.scrollTo(0,0); }
  STATE.currentPage = page;
  setNavActive(page, ".nav-link");
  setNavActive(page, ".bn-item");

  if(page === "favorites") renderFavorites();
  if(page === "dashboard") updateDashboard();
  if(page === "library")    renderLibrary();
  if(page === "tasbeeh")    refreshTasbeehUI();

  // page footer: show on non-home pages
  const pf = document.getElementById("pageFooter");
  if(pf) pf.classList.toggle("hidden", page === "home");
}

function setNavActive(page, selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.toggle("active", (el.dataset.page||"") === page);
  });
}

// ── THEME ──
function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if(!btn) return;
  updateThemeBtn();
  btn.addEventListener("click", () => {
    STATE.theme = STATE.theme === "dark-mode" ? "light-mode" : "dark-mode";
    applyTheme();
    save("theme", STATE.theme);
  });
}
function applyTheme() {
  document.body.classList.remove("dark-mode","light-mode");
  document.body.classList.add(STATE.theme);
  updateThemeBtn();
}
function updateThemeBtn() {
  const btn = document.getElementById("themeToggle");
  if(btn) btn.innerHTML = STATE.theme === "dark-mode" ? '<span class="m-icon">dark_mode</span>' : '<span class="m-icon">light_mode</span>';
}

// ── DRAWER ──
function initDrawer() {
  const ham     = document.getElementById("hamburger");
  const drawer  = document.getElementById("mobileDrawer");
  const overlay = document.getElementById("drawerOverlay");
  const close   = document.getElementById("drawerClose");
  ham?.addEventListener("click",     openDrawer);
  overlay?.addEventListener("click", closeDrawer);
  close?.addEventListener("click",   closeDrawer);
}
function openDrawer() {
  document.getElementById("mobileDrawer")?.classList.add("open");
  document.getElementById("drawerOverlay")?.classList.add("active");
}
function closeDrawer() {
  document.getElementById("mobileDrawer")?.classList.remove("open");
  document.getElementById("drawerOverlay")?.classList.remove("active");
}

// ── SEARCH ──
function initSearch() {
  const toggle   = document.getElementById("searchToggle");
  const overlay  = document.getElementById("searchOverlay");
  const closeBtn = document.getElementById("searchClose");
  const input    = document.getElementById("searchInput");
  toggle?.addEventListener("click",   () => { overlay?.classList.add("visible"); input?.focus(); });
  closeBtn?.addEventListener("click", () => { overlay?.classList.remove("visible"); input.value=""; clearSearchResults(); });
  input?.addEventListener("input",    debounce(() => doSearch(input.value.trim()), 200));
  document.addEventListener("keydown", e => { if(e.key==="Escape") overlay?.classList.remove("visible"); });
}
function doSearch(q) {
  const res = document.getElementById("searchResults");
  if(!res) return;
  if(q.length < 2) { clearSearchResults(); return; }
  q = q.toLowerCase();
  const hits = [];
  function searchGroup(group, groupKey) {
    Object.entries(group).forEach(([catKey, items]) => {
      items.forEach(item => {
        const searchable = `${item.arabic} ${item.title} ${item.benefits || ""} ${item.source || ""}`;
        if(searchable.toLowerCase().includes(q)) hits.push({ ...item, _group:groupKey, _cat:catKey });
      });
    });
  }
  searchGroup(ISLAMIC_DATA.azkar, "azkar");
  searchGroup(ISLAMIC_DATA.duas,  "duas");
  if(hits.length === 0) {
    res.innerHTML = `<p style="color:var(--text3);text-align:center;padding:2rem">لا نتائج لـ "${q}"</p>`;
    return;
  }
  res.innerHTML = hits.slice(0,20).map(item => `
    <div class="search-card" data-group="${item._group}" data-cat="${item._cat}" data-id="${item.id}">
      <div class="search-card-title">${getCatLabel(item._group, item._cat)} — ${item.title}</div>
      <div class="search-card-arabic">${item.arabic.substring(0,80)}…</div>
    </div>
  `).join("");
  res.querySelectorAll(".search-card").forEach((card, i) => {
    card.addEventListener("click", () => {
      document.getElementById("searchOverlay")?.classList.remove("visible");
      document.getElementById("searchInput").value = "";
      clearSearchResults();
      openCategory(card.dataset.group, card.dataset.cat, card.dataset.id);
    });
  });
}
function clearSearchResults() {
  const res = document.getElementById("searchResults");
  if(res) res.innerHTML = "";
}
function getCatLabel(group, cat) {
  return (CATEGORY_META[group]?.[cat]?.label) || cat;
}

// ── QUICK GRID ──
function initQuickGrid() {
  const countEls = {
    morning:      ISLAMIC_DATA.azkar.morning.length,
    evening:      ISLAMIC_DATA.azkar.evening.length,
    sleep:        ISLAMIC_DATA.azkar.sleep.length,
    after_prayer: ISLAMIC_DATA.azkar.after_prayer.length,
    quranic_duas: ISLAMIC_DATA.duas.quranic_duas.length,
    food:         ISLAMIC_DATA.azkar.food.length,
    wudu:         ISLAMIC_DATA.azkar.wudu.length,
    mosque:       ISLAMIC_DATA.azkar.mosque.length,
    prophets:     ISLAMIC_DATA.duas.prophets.length,
    study:        ISLAMIC_DATA.duas.study.length,
  };
  Object.entries(countEls).forEach(([k,v]) => {
    const el = document.getElementById("qc-"+k);
    if(el) el.textContent = toArabicNum(v)+" ذكر";
  });
  document.querySelectorAll(".quick-card").forEach(card => {
    card.addEventListener("click", () => {
      const goto = card.dataset.goto;
      const page = card.dataset.page;
      if(page) { navigateTo(page); return; }
      if(goto) openCategory(findGroup(goto), goto);
    });
  });
}
function findGroup(cat) {
  if(ISLAMIC_DATA.azkar[cat]) return "azkar";
  if(ISLAMIC_DATA.duas[cat])  return "duas";
  return "azkar";
}

// ── LIBRARY ──
const LIB_STATE = { group:"all", cats:new Set(), panelOpen:false };

function initLibrary() {
  document.querySelectorAll(".lib-grp-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lib-grp-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      LIB_STATE.group = btn.dataset.group;
      LIB_STATE.cats.clear();
      document.querySelectorAll(".lib-cat-chip").forEach(c => c.classList.remove("checked"));
      renderLibrary();
    });
  });
  document.getElementById("libToggleCats")?.addEventListener("click", toggleLibPanel);
  document.getElementById("libResetFilter")?.addEventListener("click", resetLibFilter);
  buildLibCatPanel();
}

function buildLibCatPanel() {
  const panel = document.getElementById("libCatPanel");
  if(!panel) return;
  let html = "";
  function addGroup(group, gKey, label) {
    const entries = Object.entries(group);
    if(!entries.length) return;
    html += `<div class="lib-cat-divider"><span class="m-icon sm">${gKey === "azkar" ? "wb_sunny" : "book"}</span> ${label}</div>`;
    entries.forEach(([key]) => {
      const m = CATEGORY_META[gKey]?.[key] || { label:key, icon:"✦" };
      html += `<button class="lib-cat-chip" data-cat="${key}">${m.icon} ${m.label}</button>`;
    });
  }
  addGroup(ISLAMIC_DATA.azkar, "azkar", "الأذكار");
  addGroup(ISLAMIC_DATA.duas,  "duas",  "الأدعية");
  panel.innerHTML = html;
  panel.querySelectorAll(".lib-cat-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const cat = chip.dataset.cat;
      LIB_STATE.cats.has(cat) ? LIB_STATE.cats.delete(cat) : LIB_STATE.cats.add(cat);
      chip.classList.toggle("checked");
      renderLibrary();
    });
  });
}

function toggleLibPanel() {
  const p = document.getElementById("libCatPanel");
  if(!p) return;
  p.classList.toggle("hidden");
  LIB_STATE.panelOpen = !p.classList.contains("hidden");
  document.getElementById("libToggleCats")?.classList.toggle("active", LIB_STATE.panelOpen);
  const a = document.querySelector(".lib-toggle-arrow");
  if(a) a.textContent = LIB_STATE.panelOpen ? "▼" : "▲";
}

function resetLibFilter() {
  LIB_STATE.group = "all"; LIB_STATE.cats.clear(); LIB_STATE.panelOpen = false;
  document.querySelectorAll(".lib-grp-btn").forEach(b => b.classList.remove("active"));
  document.querySelector('.lib-grp-btn[data-group="all"]')?.classList.add("active");
  document.querySelectorAll(".lib-cat-chip").forEach(c => c.classList.remove("checked"));
  const p = document.getElementById("libCatPanel");
  if(p) p.classList.add("hidden");
  document.getElementById("libToggleCats")?.classList.remove("active");
  const a = document.querySelector(".lib-toggle-arrow");
  if(a) a.textContent = "▲";
  renderLibrary();
}

function renderLibrary() {
  const container = document.getElementById("duaCards");
  if(!container) return;
  let items = [];
  function collect(group, gKey) {
    Object.entries(group).forEach(([key, vals]) => {
      if(LIB_STATE.cats.size > 0 && !LIB_STATE.cats.has(key)) return;
      vals.forEach(v => items.push({...v, _group:gKey, _cat:key}));
    });
  }
  if(LIB_STATE.group === "all" || LIB_STATE.group === "azkar") collect(ISLAMIC_DATA.azkar, "azkar");
  if(LIB_STATE.group === "all" || LIB_STATE.group === "duas")  collect(ISLAMIC_DATA.duas,  "duas");
  if(!items.length) {
    container.innerHTML = '<p style="color:var(--text3);text-align:center;padding:2rem">لا توجد نتائج</p>';
    return;
  }
  renderDuaCards(items);
}

function openCategory(group, cat, itemId) {
  navigateTo("library");
  LIB_STATE.group = group;
  LIB_STATE.cats = new Set([cat]);
  LIB_STATE.panelOpen = false;
  document.querySelectorAll(".lib-grp-btn").forEach(b => b.classList.toggle("active", b.dataset.group === group));
  document.querySelectorAll(".lib-cat-chip").forEach(c => c.classList.toggle("checked", c.dataset.cat === cat));
  const p = document.getElementById("libCatPanel");
  if(p) p.classList.add("hidden");
  document.getElementById("libToggleCats")?.classList.remove("active");
  const a = document.querySelector(".lib-toggle-arrow");
  if(a) a.textContent = "▲";
  renderLibrary();

  if(itemId) {
    setTimeout(() => {
      const card = document.querySelector(`.dua-card[data-id="${itemId}"]`);
      if(card) {
        card.scrollIntoView({ behavior:"smooth", block:"center" });
        card.classList.add("dua-card--highlight");
        setTimeout(() => card.classList.remove("dua-card--highlight"), 2500);
      }
    }, 400);
  }
}

function renderDuaCards(items) {
  const container = document.getElementById("duaCards");
  if(!container) return;
  container.innerHTML = items.map((item, i) => buildDuaCard(item, i)).join("");
  container.querySelectorAll(".btn-fav").forEach(btn => {
    btn.addEventListener("click", e => { e.stopPropagation(); toggleFav(btn.dataset.id, btn); });
  });
  container.querySelectorAll(".btn-copy").forEach(btn => {
    btn.addEventListener("click", e => { e.stopPropagation(); copyDua(btn.dataset.id); });
  });
  // mark viewed
  items.forEach(item => { STATE.viewed.add(item.id); save("viewed", [...STATE.viewed]); });
}

function buildDuaCard(item, idx) {
  const isFav = STATE.favorites.has(item.id);
  return `
  <div class="dua-card" data-id="${item.id}" style="animation-delay:${idx*60}ms">
    <div class="dua-card-header">
      <span class="dua-card-title">${item.title}</span>
      <div class="dua-card-actions">
        <button class="btn-fav ${isFav?"active":""}" data-id="${item.id}" title="مفضلة">${isFav?'<span class="m-icon fill" style="font-size:1.2rem">star</span>':'<span class="m-icon" style="font-size:1.2rem">star</span>'}</button>
        <button class="btn-copy" data-id="${item.id}" title="نسخ"><span class="m-icon" style="font-size:1.2rem">content_copy</span></button>
      </div>
    </div>
    <div class="dua-card-body">
      <p class="dua-arabic">${item.arabic}</p>

    </div>
    <div class="dua-footer">
      ${item.source  ? `<span class="dua-source"><span class="m-icon" style="font-size:.85rem;vertical-align:middle;margin-inline-end:4px">book</span> ${item.source}</span>` : ""}
      ${item.repeat  ? `<span class="dua-repeat">× ${toArabicNum(item.repeat)}</span>` : ""}
      ${item.benefits? `<span class="dua-benefits"><span class="m-icon" style="font-size:.85rem;vertical-align:middle;margin-inline-end:4px">lightbulb</span> ${item.benefits}</span>` : ""}
    </div>
  </div>`;
}





// ── ALL DUAS FOR SEARCH RESULTS ──
function getAllDuas() {
  const all = [];
  Object.entries(ISLAMIC_DATA.azkar).forEach(([cat, items]) => items.forEach(i => all.push({...i, _group:"azkar", _cat:cat})));
  Object.entries(ISLAMIC_DATA.duas ).forEach(([cat, items]) => items.forEach(i => all.push({...i, _group:"duas",  _cat:cat})));
  return all;
}

function findDuaById(id) {
  return getAllDuas().find(d => d.id === id);
}

// ── FAVORITES ──
function toggleFav(id, btn) {
  if(STATE.favorites.has(id)) {
    STATE.favorites.delete(id);
      if(btn) { btn.innerHTML='<span class="m-icon" style="font-size:1.2rem">star</span>'; btn.classList.remove("active"); }
      showToast("أُزيل من المفضلة");
    } else {
      STATE.favorites.add(id);
      if(btn) { btn.innerHTML='<span class="m-icon fill" style="font-size:1.2rem">star</span>'; btn.classList.add("active"); }
      showToast("أُضيف إلى المفضلة");
  }
  save("favorites", [...STATE.favorites]);
  updateMiniStats();
  updateDashboard();
}

function renderFavorites() {
  const container = document.getElementById("favCards");
  const empty     = document.getElementById("favEmpty");
  const subtitle  = document.getElementById("favSubtitle");
  if(!container) return;
  const favIds = [...STATE.favorites];
  if(favIds.length === 0) {
    container.innerHTML = "";
    empty?.classList.remove("hidden");
    return;
  }
  empty?.classList.add("hidden");
  if(subtitle) subtitle.textContent = `${toArabicNum(favIds.length)} دعاء في المفضلة`;
  const items = favIds.map(id => findDuaById(id)).filter(Boolean);
  container.innerHTML = items.map((item, i) => buildDuaCard(item, i)).join("");
  container.querySelectorAll(".btn-fav").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleFav(btn.dataset.id, btn);
      setTimeout(() => renderFavorites(), 400);
    });
  });
  container.querySelectorAll(".btn-copy").forEach(btn => {
    btn.addEventListener("click", e => { e.stopPropagation(); copyDua(btn.dataset.id); });
  });
}

// ── COPY DUA ──
function copyDua(id) {
  const item = findDuaById(id);
  if(!item) return;
  const text = `${item.title}\n\n${item.arabic}\n\n${item.benefits ? "✦ "+item.benefits+"\n\n" : ""}${item.source ? "✦ "+item.source : ""}`;
  navigator.clipboard?.writeText(text).then(() => showToast("تم النسخ")).catch(() => showToast("تعذّر النسخ"));
}

// ── TASBEEH ──
function initTasbeeh() {
  // check day reset
  const today = todayStr();
  if(STATE.tasbeeh.todayDate !== today) {
    const yesterday = STATE.tasbeeh.todayDate;
    // streak logic
    const yest = new Date(); yest.setDate(yest.getDate()-1);
    const yestStr = yest.toISOString().split("T")[0];
    if(yesterday === yestStr && STATE.tasbeeh.todayTotal > 0) {
      STATE.tasbeeh.streak++;
    } else if(yesterday !== yestStr) {
      STATE.tasbeeh.streak = STATE.tasbeeh.todayTotal > 0 ? 1 : 0;
    }
    if(STATE.tasbeeh.todayTotal > STATE.tasbeeh.bestDay) {
      STATE.tasbeeh.bestDay = STATE.tasbeeh.todayTotal;
    }
    STATE.tasbeeh.todayTotal = 0;
    STATE.tasbeeh.todayDate  = today;
    // shift weekly
    STATE.tasbeeh.weekly.push(0);
    STATE.tasbeeh.weekly = STATE.tasbeeh.weekly.slice(-7);
    save("tasbeeh", STATE.tasbeeh);
  }
  STATE.tasbeeh.sessionTotal = 0;

  buildTasbeehSelector();
  setTasbeeh(STATE.tasbeehSelected);

  const arena = document.getElementById("tasbeehArena");
  arena?.addEventListener("click", incrementTasbeeh);
  arena?.addEventListener("touchstart", e => { e.preventDefault(); incrementTasbeeh(); }, {passive:false});

  document.getElementById("resetBtn")?.addEventListener("click", resetTasbeeh);
  document.getElementById("undoBtn")?.addEventListener("click",  undoTasbeeh);
  document.getElementById("soundToggle")?.addEventListener("click", toggleSound);

  refreshTasbeehUI();
}

function buildTasbeehSelector() {
  const sel = document.getElementById("tasbeehSelector");
  if(!sel) return;
  sel.innerHTML = TASBEEH_OPTIONS.map((t, i) => `
    <button class="selector-btn ${i===STATE.tasbeehSelected?"active":""}" data-idx="${i}">
      ${t.arabic}
    </button>
  `).join("");
  sel.querySelectorAll(".selector-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setTasbeeh(+btn.dataset.idx);
    });
  });
}

function setTasbeeh(idx) {
  STATE.tasbeehSelected = idx;
  STATE.tasbeehCurrent  = 0;
  const opt = TASBEEH_OPTIONS[idx];
  document.querySelectorAll(".selector-btn").forEach((b,i) => b.classList.toggle("active", i===idx));
  const arEl = document.getElementById("tasbeehArabic");
  const tgEl = document.getElementById("tasbeehTarget");
  if(arEl) arEl.textContent = opt.arabic;
  if(tgEl) tgEl.textContent = "/ "+toArabicNum(opt.target);
  updateRing(0, opt.target);
  updateCountDisplay();
  save("tasbeehSel", idx);
}

function incrementTasbeeh() {
  STATE.tasbeehCurrent++;
  STATE.tasbeeh.sessionTotal++;
  STATE.tasbeeh.lifetimeTotal++;
  STATE.tasbeeh.todayTotal++;
  STATE.tasbeeh.weekly[STATE.tasbeeh.weekly.length-1]++;

  const id = TASBEEH_OPTIONS[STATE.tasbeehSelected].id;
  STATE.tasbeeh.perItem[id] = (STATE.tasbeeh.perItem[id]||0)+1;

  const opt = TASBEEH_OPTIONS[STATE.tasbeehSelected];
  if(STATE.tasbeehCurrent > opt.target) STATE.tasbeehCurrent = 1;

  updateCountDisplay();
  updateRing(STATE.tasbeehCurrent, opt.target);
  animateBump();
  playClick();
  vibrateDevice();
  save("tasbeeh", STATE.tasbeeh);
  updateSessionStats();
  updateMiniStats();
}

function resetTasbeeh() {
  STATE.tasbeehCurrent = 0;
  updateCountDisplay();
  updateRing(0, TASBEEH_OPTIONS[STATE.tasbeehSelected].target);
  showToast("تمت إعادة التعيين");
}

function undoTasbeeh() {
  if(STATE.tasbeehCurrent > 0) {
    STATE.tasbeehCurrent--;
    STATE.tasbeeh.sessionTotal = Math.max(0, STATE.tasbeeh.sessionTotal-1);
    STATE.tasbeeh.lifetimeTotal= Math.max(0, STATE.tasbeeh.lifetimeTotal-1);
    STATE.tasbeeh.todayTotal   = Math.max(0, STATE.tasbeeh.todayTotal-1);
    updateCountDisplay();
    updateRing(STATE.tasbeehCurrent, TASBEEH_OPTIONS[STATE.tasbeehSelected].target);
    save("tasbeeh", STATE.tasbeeh);
    updateSessionStats();
  }
}

function updateCountDisplay() {
  const el = document.getElementById("tasbeehCount");
  if(el) el.textContent = toArabicNum(STATE.tasbeehCurrent);
}

function updateRing(current, target) {
  const ring = document.getElementById("ringProgress");
  if(!ring) return;
  const circumference = 2 * Math.PI * 100; // r=100
  const pct = Math.min(current / target, 1);
  ring.style.strokeDashoffset = circumference * (1 - pct);
}

function animateBump() {
  const el = document.getElementById("tasbeehCount");
  if(!el) return;
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
  el.addEventListener("transitionend", () => el.classList.remove("bump"), {once:true});
}

function playClick() {
  if(!STATE.soundOn) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = "sine";
    o.frequency.setValueAtTime(880, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.08);
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    o.start(); o.stop(ctx.currentTime + 0.1);
  } catch(e) {}
}

function vibrateDevice() {
  if(navigator.vibrate) navigator.vibrate(20);
}

function toggleSound() {
  STATE.soundOn = !STATE.soundOn;
  const btn = document.getElementById("soundToggle");
  if(btn) btn.innerHTML = STATE.soundOn ? '<span class="m-icon" style="font-size:1.1rem">volume_up</span> صوت' : '<span class="m-icon" style="font-size:1.1rem">volume_off</span> صامت';
  showToast(STATE.soundOn ? "الصوت مفعّل" : "الصوت معطّل");
}

function updateSessionStats() {
  set("sessionCount",  toArabicNum(STATE.tasbeeh.sessionTotal));
  set("todayCount",    toArabicNum(STATE.tasbeeh.todayTotal));
  set("lifetimeCount", toArabicNum(STATE.tasbeeh.lifetimeTotal));
  set("bestDayCount",  toArabicNum(STATE.tasbeeh.bestDay));
}

function refreshTasbeehUI() {
  updateCountDisplay();
  updateRing(STATE.tasbeehCurrent, TASBEEH_OPTIONS[STATE.tasbeehSelected].target);
  updateSessionStats();
  renderWeeklyChart();
}

function renderWeeklyChart() {
  const chart = document.getElementById("weeklyChart");
  if(!chart) return;
  const days  = ["أح","اث","ث","أر","خ","ج","س"];
  const w     = STATE.tasbeeh.weekly;
  const max   = Math.max(...w, 1);
  const today = dayOfWeek();
  chart.innerHTML = w.map((val, i) => {
    const pct  = (val / max) * 60;
    const isToday = i === today;
    return `
    <div class="week-bar-wrap">
      <div class="week-bar" style="height:${Math.max(pct,4)}px;${isToday?"filter:drop-shadow(0 0 6px var(--green))":"opacity:.6"}"></div>
      <span class="week-label" style="${isToday?"color:var(--green);font-weight:700":""}">${days[i]}</span>
    </div>`;
  }).join("");
}

// ── DASHBOARD ──
function updateDashboard() {
  const t = STATE.tasbeeh;
  set("dashTotal",  toArabicNum(t.lifetimeTotal));
  set("dashToday",  toArabicNum(t.todayTotal));
  set("dashStreak", toArabicNum(t.streak));
  set("dashFavs",   toArabicNum(STATE.favorites.size));
  set("dashBest",   toArabicNum(t.bestDay));
  set("dashViewed", toArabicNum(STATE.viewed.size));

  const motives = [
    "﴿ وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ﴾",
    "﴿ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾",
    "﴿ وَذَكَرَ اللَّهَ كَثِيرًا ﴾",
    "﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾",
    "﴿ وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ﴾",
  ];
  const idx = new Date().getHours() % motives.length;
  set("motivationText", motives[idx]);

  // top tasbeeh
  const topEl = document.getElementById("topTasbeeh");
  if(topEl && t.perItem) {
    const sorted = TASBEEH_OPTIONS
      .map(opt => ({ label:opt.arabic, count:t.perItem[opt.id]||0 }))
      .filter(x => x.count > 0)
      .sort((a,b) => b.count - a.count)
      .slice(0,5);
    if(sorted.length === 0) {
      topEl.innerHTML = `<p style="color:var(--text3);text-align:center;padding:1rem">لا بيانات بعد — ابدأ التسبيح!</p>`;
    } else {
      const medals = ["🥇","🥈","🥉","4️⃣","5️⃣"];
      topEl.innerHTML = sorted.map((x,i) => `
        <div class="top-tasbeeh-item">
          <span class="top-tasbeeh-rank">${medals[i]}</span>
          <span class="top-tasbeeh-text">${x.label}</span>
          <span class="top-tasbeeh-count">${toArabicNum(x.count)}</span>
        </div>
      `).join("");
    }
  }
}

function updateMiniStats() {
  set("miniTotal",  toArabicNum(STATE.tasbeeh.lifetimeTotal));
  set("miniStreak", toArabicNum(STATE.tasbeeh.streak));
  set("miniFavs",   toArabicNum(STATE.favorites.size));
  set("miniToday",  toArabicNum(STATE.tasbeeh.todayTotal));
}

// ── STARS CANVAS ──
function initStarCanvas() {
  const canvas = document.getElementById("starCanvas");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, stars = [];

  function resize() {
    w = canvas.width  = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    stars = Array.from({length:80}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.4+0.3,
      a: Math.random(),
      spd: Math.random()*0.005+0.002
    }));
  }
  resize();
  window.addEventListener("resize", resize);

  function draw() {
    ctx.clearRect(0,0,w,h);
    stars.forEach(s => {
      s.a += s.spd;
      const alpha = (Math.sin(s.a)*0.5+0.5)*0.6+0.1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ── BACK TO TOP ──
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn?.classList.toggle("hidden", window.scrollY < 300);
  });
  btn?.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

// ── REVEAL ON SCROLL ──
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold:0.1 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

// ── TOAST ──
function showToast(msg, duration=2200) {
  const toast = document.getElementById("toast");
  if(!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), duration);
}

// ── INSTALL PWA ──
function initInstallPWA() {
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById("installBanner")?.classList.remove("hidden");
  });
  document.getElementById("installBtn")?.addEventListener("click", async () => {
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.getElementById("installBanner")?.classList.add("hidden");
    if(outcome === "accepted") showToast("تم تثبيت التطبيق!");
  });
  document.getElementById("dismissInstall")?.addEventListener("click", () => {
    document.getElementById("installBanner")?.classList.add("hidden");
  });
  if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .catch(e => console.log("SW error:", e));
  }
}

// ── UTILS ──
function set(id, val) {
  const el = document.getElementById(id);
  if(el) el.textContent = val;
}
function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(()=>fn(...args), delay); };
}



// ── NAVBAR SCROLL SHADOW ──
window.addEventListener("scroll", () => {
  document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

// ── RING DONE CELEBRATION ──
function checkRingDone() {
  const opt = TASBEEH_OPTIONS[STATE.tasbeehSelected];
  if (STATE.tasbeehCurrent === opt.target) {
    const ring = document.querySelector(".tasbeeh-ring-wrap");
    ring?.classList.add("ring-done");
    ring?.addEventListener("animationend", () => ring.classList.remove("ring-done"), { once: true });
    showToast(`أتممت ${toArabicNum(opt.target)} تسبيحة`);
  }
}

function updateCountDisplay() {
  const el = document.getElementById("tasbeehCount");
  if (el) el.textContent = toArabicNum(STATE.tasbeehCurrent);
  checkRingDone();
}

// ── KEYBOARD SHORTCUTS ──
document.addEventListener("keydown", e => {
  // Space bar = count tasbeeh (when on tasbeeh page)
  if (e.code === "Space" && STATE.currentPage === "tasbeeh") {
    e.preventDefault();
    incrementTasbeeh();
  }
  // Arrow keys = navigate pages
  if (e.altKey) {
    const pages = ["home","library","tasbeeh","dashboard","favorites"];
    const cur   = pages.indexOf(STATE.currentPage);
    if (e.key === "ArrowRight" && cur > 0)              navigateTo(pages[cur - 1]);
    if (e.key === "ArrowLeft"  && cur < pages.length-1) navigateTo(pages[cur + 1]);
  }
});

// ── PERSIST ON VISIBILITY CHANGE ──
document.addEventListener("visibilitychange", () => {
  if (document.hidden) persistAll();
});
window.addEventListener("beforeunload", persistAll);

// ── LONG PRESS on Tasbeeh = reset confirmation ──
(function initLongPress() {
  let timer;
  const arena = document.getElementById("tasbeehArena");
  if (!arena) return;
  arena.addEventListener("mousedown",  () => { timer = setTimeout(() => { if(confirm("إعادة التعيين؟")) resetTasbeeh(); }, 800); });
  arena.addEventListener("mouseup",    () => clearTimeout(timer));
  arena.addEventListener("touchstart", () => { timer = setTimeout(() => { resetTasbeeh(); showToast("تمت إعادة التعيين"); }, 900); }, { passive: true });
  arena.addEventListener("touchend",   () => clearTimeout(timer), { passive: true });
})();
