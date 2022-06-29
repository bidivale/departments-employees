import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// Firebase configuration object containing keys and identifiers
const firebaseConfig = {
    apiKey: "AIzaSyDNrrXdFAlW_beCvGqqL0woEo1KK-0m8bI",
    authDomain: "departments-employees.firebaseapp.com",
    projectId: "departments-employees",
    storageBucket: "departments-employees.appspot.com",
    messagingSenderId: "877770913838",
    appId: "1:877770913838:web:f12f89b36c11a28cda47bf",
    measurementId: "G-RLM6HNSN05"
  };

//init firebase
initializeApp(firebaseConfig);

//init firestore service
const db = getFirestore();

//collection ref
export const colRef = collection(db, 'organization')








