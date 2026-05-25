const CACHE_NAME = 'tawakkal-cell-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap',
  'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js',
  'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
