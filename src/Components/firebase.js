// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB5xSxnLC5hc7xLI4n0d0S2WpB_L34liw",
  authDomain: "project-planner-b95c4.firebaseapp.com",
  projectId: "project-planner-b95c4",
  storageBucket: "project-planner-b95c4.appspot.com",
  messagingSenderId: "130730154054",
  appId: "1:130730154054:web:61025300f285b6e43cd247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);