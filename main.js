// main.js – Core logic V MASTER PWA
(function () {
  'use strict';

  // Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(reg => console.log('[V MASTER] SW registered:', reg.scope))
        .catch(err => console.error('[V MASTER] SW failed:', err));
    });
  }

  // Online / Offline detection
  function updateNetworkStatus() {
    if (!navigator.onLine) {
      console.warn('[V MASTER] Offline mode active');
    } else {
      console.log('[V MASTER] Online mode');
    }
  }

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();
})();
