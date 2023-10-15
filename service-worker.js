self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache-name')
      .then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/styles.css',
          '/script.js',
          // Add other resources you want to cache
        ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
