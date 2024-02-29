import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR-Z0a25l7ffSRrKcq8-CXuLEU4y-LDms",
  authDomain: "hackcunyproject.firebaseapp.com",
  projectId: "hackcunyproject",
  storageBucket: "hackcunyproject.appspot.com",
  messagingSenderId: "967693303370",
  appId: "1:967693303370:web:eed1e716dad940168970b3",
  measurementId: "G-LMP995L924"
};

// Initialize Firebase

initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)
app.mount('#app')