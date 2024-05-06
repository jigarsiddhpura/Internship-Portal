import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);

    return result;
}

export const doSignOut = () => {
    return auth.signOut();
}