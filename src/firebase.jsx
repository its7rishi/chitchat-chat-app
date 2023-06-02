// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChGzrDdzOCKQ-vYD5i2BxQCPKYIwKLtgU',
  authDomain: 'chitchat-97d0f.firebaseapp.com',
  projectId: 'chitchat-97d0f',
  storageBucket: 'chitchat-97d0f.appspot.com',
  messagingSenderId: '41176355773',
  appId: '1:41176355773:web:63ec6a28eb3a55b15778d4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
