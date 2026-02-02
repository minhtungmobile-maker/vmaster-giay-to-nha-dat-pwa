const CACHE_NAME = "vmaster-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/offline.html",
  "/css/style.css",
  "/js/main.js",
  "/pages/dich-vu.html",
  "/pages/quy-trinh.html",
  "/pages/bang-gia.html",
  "/pages/tiep-nhan-ho-so.html",
  "/pages/lien-he.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request).catch(() => caches.match("/offline.html"))
    )
  );
});
