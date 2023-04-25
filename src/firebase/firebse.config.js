// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbuleKmpLogJ4ATa7KicP7QMjvLkaDfgs",
    authDomain: "the-spread-news.firebaseapp.com",
    projectId: "the-spread-news",
    storageBucket: "the-spread-news.appspot.com",
    messagingSenderId: "905549625635",
    appId: "1:905549625635:web:3a104c0b937fcf1b82b496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;