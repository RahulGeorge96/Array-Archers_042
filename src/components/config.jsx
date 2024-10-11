import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAqpUj-TMX6Ar6gSGsqaaTeUSXaeMrCLuw",
  authDomain: "bike-enthusiast.firebaseapp.com",
  databaseURL:
    "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bike-enthusiast",
  storageBucket: "bike-enthusiast.appspot.com",
  messagingSenderId: "67362709095",
  appId: "1:67362709095:web:5e9e3e72de02fb7dc17ec2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
