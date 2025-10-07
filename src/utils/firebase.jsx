// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMUPTmM4Tj1CFy_MZ7YkWxFjdudpx_98w",
  authDomain: "cinehubgpt-2800f.firebaseapp.com",
  projectId: "cinehubgpt-2800f",
  storageBucket: "cinehubgpt-2800f.firebasestorage.app",
  messagingSenderId: "443461954357",
  appId: "1:443461954357:web:c0ca1b41fac05b4c363a7c",
  measurementId: "G-Y3VY0F62NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
