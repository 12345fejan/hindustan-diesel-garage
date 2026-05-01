import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTc0hEadSUhFcqm8t7FRI5C6BNB29ocOg",
  authDomain: "hindustan---diesel---garage.firebaseapp.com",
  projectId: "hindustan---diesel---garage",
  storageBucket: "hindustan---diesel---garage.firebasestorage.app",
  messagingSenderId: "749014803797",
  appId: "1:749014803797:web:edb1721d9950606ad7fbdc",
  measurementId: "G-Q1EWN8WQ33"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
