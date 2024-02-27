// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCPUZqAPCV6GXLdan_AYk7fXLFpSHmvUSA",
  authDomain: "koinbx-e8f80.firebaseapp.com",
  projectId: "koinbx-e8f80",
  databaseURL:
    "https://koinbx-e8f80-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "koinbx-e8f80.appspot.com",
  messagingSenderId: "522021677888",
  appId: "1:522021677888:web:8bb73220bdde15109a28a5",
  measurementId: "G-WY8ECVYL0Q",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
