import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

/*
 * NegocioKit Firebase configuration.
 *
 * These client-side values identify the Firebase project.
 * Security is enforced through Firebase Authentication,
 * Firestore/Storage Rules, App Check and backend validation.
 */

const firebaseConfig = {
  apiKey: "AIzaSyDoWNB2V-egvAU0e13BCUZC94swqiYC14",
  authDomain: "negociokit-61f6d.firebaseapp.com",
  projectId: "negociokit-61f6d",
  storageBucket: "negociokit-61f6d.firebasestorage.app",
  messagingSenderId: "287514539365",
  appId: "1:287514539365:web:fc97a202b6aa5430b85d8c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  app,
  auth
};
