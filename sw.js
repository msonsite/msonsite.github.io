// Service Worker for M&S Onsite Website
// Provides caching for better performance on GitHub Pages

const CACHE_NAME = 'msonsite-v1';
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
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

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

        // Cache images, CSS, JS, and fonts
        const url = new URL(event.request.url);
        const extension = url.pathname.split('.').pop();
        const cacheableTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'css', 'js', 'woff', 'woff2', 'ttf', 'otf'];

        if (cacheableTypes.includes(extension.toLowerCase())) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      });
    })
  );
});

