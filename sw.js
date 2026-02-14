const CACHE_NAME = 'coil-pro-v7';
const ASSETS = [
  './index.html',
  'https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js',
  'https://unpkg.com/html5-qrcode'
];

// Instalación: Guardar archivos en memoria
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Estrategia: Buscar en internet, si falla, usar caché
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    fetch(evt.request).catch(() => caches.match(evt.request))
  );
});
