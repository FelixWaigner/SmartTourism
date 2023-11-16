import firebase_app from "../firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";


// get the authentication instance using the Firebase app
const auth = getAuth( firebase_app );

// function to sign in with email and password
export default async function signIn(
    email: string, 
    password: string
){
    // variable to store the sign-in result and any error that occurs
    let result = null, error = null;

    try {
        // sign in with email and password
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch ( error ) {
        // catch and store any error that occurs during sign-in
        error = error;
    }

    return { result, error }; // return the sign-in result and error (if any)
}