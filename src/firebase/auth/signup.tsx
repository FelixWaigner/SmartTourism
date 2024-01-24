import firebase_app from "../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


// get the authentication instance using the firebase app
const auth = getAuth( firebase_app );


// function to sign up a user with email and password
export default async function signUp(
    email: string, 
    password: string
){
    // variable to store the sign-up result and store any error that occurs
    let result = null, error = null;

    try {
        // create a new user with email and password
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        // catch and store any error that occurs during sign-up
        error = error;
    }

    return { result, error }; // return the sign-up result and error (if any)
}