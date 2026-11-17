const CACHE_NAME = 'myradio-cache-v3';
const ASSETS = [
  './index.html',
  './manifest.json',
  './stations.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('.mp3') || e.request.url.includes('.aac') || e.request.url.includes('.m3u8') || e.request.url.includes('stream')) {
    return;
  }
  // Network first supaya sentiasa dapat update terkini
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        const cloned = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, cloned));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
