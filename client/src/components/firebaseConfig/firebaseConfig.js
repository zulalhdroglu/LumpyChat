// Import the functions you need from the SDKs you need
import  {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDjn585I4qbh2zIXqNhbv8-PozoCoivGog",
  authDomain: "chatphp-6f2db.firebaseapp.com",
  projectId: "chatphp-6f2db",
  storageBucket: "chatphp-6f2db.appspot.com",
  messagingSenderId: "771120588541",
  appId: "1:771120588541:web:07f2b61cd4241fe2b34094",
  measurementId: "G-PEV88GXJX3"
  };

// Initialize Firebase
const app =initializeApp(firebaseConfig)

export default getFirestore(app);
