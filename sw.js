// Service Worker for M&S Onsite Website
// Provides caching for better performance on GitHub Pages

// Update version number when you want to force cache refresh
// Increment this number whenever you deploy changes to force cache refresh
const CACHE_NAME = 'msonsite-v2.2';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/js/main.js',
  '/js/projects.js',
  '/js/partners.js',
  '/js/cookie-banner.js',
  '/images/branding/MsOnsite LogoSpacing.png',
  '/images/assets/heroframe.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_CACHE_URLS).catch((err) => {
        console.log('Cache addAll failed:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Force all clients to use the new service worker
      return self.clients.claim();
    })
  );
});

// Fetch event - network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(event.request.url);
  const isHTML = url.pathname === '/' || url.pathname.endsWith('.html') || !url.pathname.includes('.');
  const extension = url.pathname.split('.').pop();
  const isStaticAsset = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'css', 'js', 'woff', 'woff2', 'ttf', 'otf', 'ico'].includes(extension?.toLowerCase());

  // For HTML files: Network-first strategy (always try network first, fallback to cache)
  if (isHTML) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If network request succeeds, update cache and return response
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // For static assets: Cache-first strategy (check cache first, fallback to network)
  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache the asset
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
    return;
  }

  // For other requests, just fetch normally
  event.respondWith(fetch(event.request));
});

