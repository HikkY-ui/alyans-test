// Minimal service worker — required by Android/Chrome to treat the app as installable.
// Data always comes fresh from the network (Google Apps Script), so we don't cache API calls.
self.addEventListener("install", (e) => {
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  // Pass-through — no offline caching, since the app needs live data anyway.
  e.respondWith(fetch(e.request));
});
