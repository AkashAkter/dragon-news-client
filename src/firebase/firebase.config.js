// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwdsErbau6lBVOiNjGdSDviK3Nh6fR_NY",
    authDomain: "dragon-news-eb4e2.firebaseapp.com",
    projectId: "dragon-news-eb4e2",
    storageBucket: "dragon-news-eb4e2.appspot.com",
    messagingSenderId: "853487730065",
    appId: "1:853487730065:web:6b9d92817b70d7eee66e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;