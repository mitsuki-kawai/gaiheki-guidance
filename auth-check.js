// Auth guard — requires firebase-app.js loaded first (provides auth, ALLOWED_DOMAIN)
// Each page handles its own Firestore data loading after auth.
// This file only redirects unauthenticated / wrong-domain users.
(function() {
  function waitForAuth(cb, n) {
    if (typeof auth !== 'undefined') { cb(); return; }
    if ((n || 0) > 50) return;
    setTimeout(() => waitForAuth(cb, (n || 0) + 1), 100);
  }
  waitForAuth(() => {
    auth.onAuthStateChanged(user => {
      if (!user || !(user.email || '').endsWith('@' + ALLOWED_DOMAIN)) {
        location.replace('login.html');
      }
    });
  });
})();
