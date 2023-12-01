// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcIh2NQsW4E8iAJL-2jqxc5O-gRADK-b8",
  authDomain: "realtor-clone-react-47e77.firebaseapp.com",
  projectId: "realtor-clone-react-47e77",
  storageBucket: "realtor-clone-react-47e77.appspot.com",
  messagingSenderId: "290041383407",
  appId: "1:290041383407:web:c7c826cd0522080b3a0e1a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
