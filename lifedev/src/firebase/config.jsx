import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2AWPVq95_j6v3_ScpMaoIwDvFej2RjmE",
  authDomain: "lifedev-prof.firebaseapp.com",
  projectId: "lifedev-prof",
  storageBucket: "lifedev-prof.appspot.com",
  messagingSenderId: "616028756636",
  appId: "1:616028756636:web:e4dfb0835dd4af800a2b59",
  measurementId: "G-2TMMM1DM2N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};