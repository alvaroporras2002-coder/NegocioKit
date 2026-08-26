import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDsLE4pV9C11CLhv0_XabH_h8IXPbuQS6g",
  authDomain: "negociokit-61f6d.firebaseapp.com",
  projectId: "negociokit-61f6d",
  storageBucket: "negociokit-61f6d.firebasestorage.app",
  messagingSenderId: "287514539365",
  appId: "1:287514539365:web:fc97a202b6aa5430b85d8c"
};


const app = initializeApp(
  firebaseConfig
);

const auth = getAuth(
  app
);

const db = getFirestore(
  app
);


export {
  app,
  auth,
  db
};
