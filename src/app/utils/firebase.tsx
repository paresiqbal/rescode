// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCCA9zx1l6MpH_a7ZY4H8pMKaSR1QvjfQ",
  authDomain: "rescode-28213.firebaseapp.com",
  projectId: "rescode-28213",
  storageBucket: "rescode-28213.appspot.com",
  messagingSenderId: "901047016392",
  appId: "1:901047016392:web:22b6b099b67efcd3be7efd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFireStore(app);
