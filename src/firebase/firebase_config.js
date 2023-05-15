// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBaA8QWFTkHxw6YeR3AFr5eEqqx1uoIAN4",
  authDomain: "torhok-a4139.firebaseapp.com",
  projectId: "torhok-a4139",
  storageBucket: "torhok-a4139.appspot.com",
  messagingSenderId: "159305409966",
  appId: "1:159305409966:web:8b5b3927d48d2c737e543f",
  measurementId: "G-2NJ99VW07F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const strorage = getStorage(app)