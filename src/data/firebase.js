import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1iygW2-djjCIlQJbx_TJ6QBsFccCPbDc",
  authDomain: "cobijado-fcf04.firebaseapp.com",
  projectId: "cobijado-fcf04",
  storageBucket: "cobijado-fcf04.appspot.com",
  messagingSenderId: "894604991829",
  appId: "1:894604991829:web:527735e0893707b59d23dc",
  measurementId: "G-VXGN84327X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
