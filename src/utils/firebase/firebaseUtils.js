// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1qkDf-s9xhGl22vV8pWRMIZpsi6NV41U",
  authDomain: "crown-cloth-app-db.firebaseapp.com",
  projectId: "crown-cloth-app-db",
  storageBucket: "crown-cloth-app-db.firebasestorage.app",
  messagingSenderId: "264630309086",
  appId: "1:264630309086:web:2c31ff07741b27ddb3f24f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
