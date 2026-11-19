// const firebaseConfig = { 
  apiKey : "AIzaSyBn1YYstyOVllZQjN-xy5-INiGtyKODnVM" , 
  autorizační doména : "rodinka-541fd.firebaseapp.com" , 
  ID projektu : "rodinka-541fd" , 
  úložný prostor : "rodinka-541fd.firebasestorage.app" , 
  ID odesílatele zpráv : „820473076032“ , 
  ID aplikace : "1:820473076032:web:70fd802d8b9401e2c742a5" , 
  ID měření : „G-PMS12WZBKC“ 
}; vlož konfiguraci WEBOVÉ aplikace z Firebase Console → Project settings → Your apps.
// firebaseConfig není tajný klíč. Ochranu zajišťují firestore.rules a přihlášení.
export const firebaseConfig = {
  apiKey: "VLOZ_API_KEY",
  authDomain: "VLOZ_PROJECT_ID.firebaseapp.com",
  projectId: "VLOZ_PROJECT_ID",
  storageBucket: "VLOZ_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "VLOZ_SENDER_ID",
  appId: "VLOZ_APP_ID"
};
