
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('quiz-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'https://cdn-icons-png.flaticon.com/512/3135/3135755.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
