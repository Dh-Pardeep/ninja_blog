// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsRP1eVmACXBBiNJoHU8AF8xVLKeKrbw4",
  authDomain: "ninja-blog-340.firebaseapp.com",
  projectId: "ninja-blog-340",
  storageBucket: "ninja-blog-340.appspot.com",
  messagingSenderId: "236408488083",
  appId: "1:236408488083:web:c427ef2c73a8c79fc70d66",
  databaseURL: "https://ninja-blog-340-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; 