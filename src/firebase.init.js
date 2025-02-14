// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfbSPgCpQZUAsuIW_Uw1XHjBOqmbTdLT4",
  authDomain: "login-users-details-control.firebaseapp.com",
  projectId: "login-users-details-control",
  storageBucket: "login-users-details-control.firebasestorage.app",
  messagingSenderId: "716634678871",
  appId: "1:716634678871:web:35532eae012d143a8fe512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;

