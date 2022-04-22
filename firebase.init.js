// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuldlgSKWeFfduCjR4sroXtRMgLu_RQAA",
  authDomain: "dmjh-health-point.firebaseapp.com",
  projectId: "dmjh-health-point",
  storageBucket: "dmjh-health-point.appspot.com",
  messagingSenderId: "944773443912",
  appId: "1:944773443912:web:114a96c7f9c2e1f892037d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;