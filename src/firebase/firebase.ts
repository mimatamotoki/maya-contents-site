import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const signInEmailPassword = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};
