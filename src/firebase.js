import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpSiXEQizUnNiGWmwk_osOcRFsUJ_STrU",
  authDomain: "linkedin-clone-8bc71.firebaseapp.com",
  projectId: "linkedin-clone-8bc71",
  storageBucket: "linkedin-clone-8bc71.appspot.com",
  messagingSenderId: "1046292064199",
  appId: "1:1046292064199:web:7d970269d9abc843419be2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
