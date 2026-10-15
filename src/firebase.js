import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxIwNdvD_JHMvGfyqEuC8ZGHE3i0sHM5Q",
  authDomain: "guia-viatges.firebaseapp.com",
  projectId: "guia-viatges",
  storageBucket: "guia-viatges.firebasestorage.app",
  messagingSenderId: "810022660605",
  appId: "1:810022660605:web:1cbfe30d893ea9b4401194",
  measurementId: "G-QM101KR3S3"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)