// Sem vlož konfiguraci WEBOVÉ aplikace z Firebase Console → Project settings → Your apps.
// firebaseConfig není tajný klíč. Ochranu zajišťují firestore.rules a přihlášení.
export const firebaseConfig = {
  apiKey: "VLOZ_API_KEY",
  authDomain: "VLOZ_PROJECT_ID.firebaseapp.com",
  projectId: "VLOZ_PROJECT_ID",
  storageBucket: "VLOZ_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "VLOZ_SENDER_ID",
  appId: "VLOZ_APP_ID"
};
