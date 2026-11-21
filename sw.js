const CACHE_NAME = 'myradio-cache-v8';
const ASSETS = [
  './',
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
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Never cache audio streams or live chunks
  if (
    e.request.url.includes('.mp3') ||
    e.request.url.includes('.aac') ||
    e.request.url.includes('.m3u8') ||
    e.request.url.includes('.ts') ||
    e.request.url.includes('stream') ||
    e.request.url.includes('archive.org') ||
    e.request.url.includes('zeno.fm') ||
    e.request.url.includes('revma.com') ||
    e.request.url.includes('streamtheworld.com')
  ) {
    return;
  }
  
  // Network first for HTML, JS and JSON
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, cloned));
        }
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
