// auth-check.js: 各ページで Firebase Auth を確認し未ログインを login.html へ誘導
(function() {
  const ALLOWED_DOMAIN = 'madoguchi.inc';

  function waitForFirebase(cb, retry) {
    if (typeof firebase !== 'undefined' && firebase.auth) { cb(); return; }
    if ((retry || 0) > 30) return; // 3秒タイムアウト
    setTimeout(() => waitForFirebase(cb, (retry || 0) + 1), 100);
  }

  waitForFirebase(function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user || !(user.email || '').endsWith('@' + ALLOWED_DOMAIN)) {
        location.replace('login.html');
      }
    });
  });
})();
