import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwYoDY-ZyEbIvI4fnuZ-6ouk71I_MFKEk",
  authDomain: "blogproject-95ad2.firebaseapp.com",
  projectId: "blogproject-95ad2",
  storageBucket: "blogproject-95ad2.appspot.com",
  messagingSenderId: "638898347421",
  appId: "1:638898347421:web:c76b541507863469b8e374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();