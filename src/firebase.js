import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDgUhKEONpqLX7h1NJF42Qw66GvvQ1RfS8",
  authDomain: "react-portfolio-904f0.firebaseapp.com",
  projectId: "react-portfolio-904f0",
  storageBucket: "react-portfolio-904f0.appspot.com",
  messagingSenderId: "1037908476326",
  appId: "1:1037908476326:web:2eae4adfe5fcf81f5a4f67",
  measurementId: "G-8VXRXQ72M4",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
