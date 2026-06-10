// Shared Firebase initialization (loaded before page scripts)
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCtKA71KjRHQvMPtYcURVjuSKaOanoEh7Y",
  authDomain: "madoguchi-guidance.firebaseapp.com",
  projectId: "madoguchi-guidance",
  storageBucket: "madoguchi-guidance.firebasestorage.app",
  messagingSenderId: "1080989158935",
  appId: "1:1080989158935:web:4b75da9e3252e8086a5652"
};
const ALLOWED_DOMAIN = 'madoguchi.inc';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const db   = firebase.firestore();
const auth = firebase.auth();
