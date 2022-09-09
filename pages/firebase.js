/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATaL-xHVjegnNtFlr-7aWCndM5-oxCgtc",
  authDomain: "spar-14070.firebaseapp.com",
  projectId: "spar-14070",
  storageBucket: "spar-14070.appspot.com",
  messagingSenderId: "692689008796",
  appId: "1:692689008796:web:3eb5ca0943febefa66d559",
  measurementId: "G-M051Z10KK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
