/* ============================================================
   service-worker.js — أذكاري PWA
   ============================================================ */

const CACHE_NAME  = "azkar-v1.2";
const SHELL_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./data.js",
  "./manifest.json"
];

/* ── INSTALL: cache shell ── */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(SHELL_FILES);
    }).then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: clear old caches ── */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: cache-first for shell, network-first for Google Fonts ── */
self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  // Google Fonts — network first, fallback to cache
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(
      fetch(request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return response;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // Shell / app files — cache first
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return response;
      }).catch(() => caches.match("./index.html")); // offline fallback
    })
  );
});

/* ── PUSH (future use) ── */
self.addEventListener("push", event => {
  if (!event.data) return;
  const data = event.data.json();
  self.registration.showNotification(data.title || "أذكاري", {
    body:    data.body    || "حان وقت الذكر",
    icon:    "./assets/icon-192.png",
    badge:   "./assets/icon-192.png",
    dir:     "rtl",
    lang:    "ar",
    vibrate: [200, 100, 200]
  });
});
