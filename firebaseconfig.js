// firebaseconfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKY-vuLGadHuUE3iY8GHptln3cC7Xxm88",
  authDomain: "instagram-6e0ad.firebaseapp.com",
  databaseURL: "https://instagram-6e0ad-default-rtdb.firebaseio.com",
  projectId: "instagram-6e0ad",
  storageBucket: "instagram-6e0ad.firebasestorage.app",
  messagingSenderId: "404934852858",
  appId: "1:404934852858:web:ba9396d2b204f3ec110943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Expose Firebase functions globally for your application scripts
window.firebaseDb = db;
window.firebaseRef = ref;
window.firebaseSet = set;
window.firebaseOnValue = onValue;
