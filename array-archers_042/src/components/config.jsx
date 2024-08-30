
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAmj1TkxknrQRXo9D2i3Ukbyxc6vj2BDHc",
  authDomain: "harley-auth-ac2d9.firebaseapp.com",
  projectId: "harley-auth-ac2d9",
  storageBucket: "harley-auth-ac2d9.appspot.com",
  messagingSenderId: "619190042180",
  appId: "1:619190042180:web:5525ecf809000a11764611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider}