import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBka4H7-Dz9VDp47TtU4eX8Vlq6PXzn0-E",
  authDomain: "reminder-app-d42e6.firebaseapp.com",
  projectId: "reminder-app-d42e6",
  storageBucket: "reminder-app-d42e6.appspot.com",
  messagingSenderId: "711882461700",
  appId: "1:711882461700:web:eca5dcb461a9df169c9b51"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()