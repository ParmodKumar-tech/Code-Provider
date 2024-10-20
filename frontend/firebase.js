// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClLc-VneapGA_oH_Ag8XYrF231ZmZ3NE4",
  authDomain: "drag-coder-web.firebaseapp.com",
  projectId: "drag-coder-web",
  storageBucket: "drag-coder-web.appspot.com",
  messagingSenderId: "745839136357",
  appId: "1:745839136357:web:448a31d7e456623d32c08c",
  measurementId: "G-HW8415JKRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;