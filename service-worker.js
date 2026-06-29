const STATIC_CACHE = 'static-v1';
const STATIC_ASSETS = ['/', '/index.html', '/styles.css', '/app.js', '/manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(STATIC_CACHE).then(c => c.addAll(STATIC_ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil((async()=>{ const keys = await caches.keys(); await Promise.all(keys.filter(k=>k!==STATIC_CACHE).map(k=>caches.delete(k))); await self.clients.claim(); })());
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // never intercept wa.me (external)
  if (url.origin !== location.origin) return; // let network handle
  // static: cache-first
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});