// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBEofmxPa3jPnSQKa4amnprG8Y6CnZrK4",
  authDomain: "tanzidadmin.firebaseapp.com",
  projectId: "tanzidadmin",
  storageBucket: "tanzidadmin.appspot.com",
  messagingSenderId: "1053201584836",
  appId: "1:1053201584836:web:8ccf2d5d8cd7a8da236f91"
};

// Initialize Firebase
export const firebaseInitialize=()=>{
    initializeApp(firebaseConfig);
}