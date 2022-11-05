import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpFGWIq98he_O80zUqM0bBQ3XGgq1nUAM",
  authDomain: "alumni-database-f2f96.firebaseapp.com",
  projectId: "alumni-database-f2f96",
  storageBucket: "alumni-database-f2f96.appspot.com",
  messagingSenderId: "496761602966",
  appId: "1:496761602966:web:2fc84e931b1994117413b7",
  measurementId: "G-RFEQSDTSG4",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
