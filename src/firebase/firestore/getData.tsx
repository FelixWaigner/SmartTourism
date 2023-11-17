import firebase_app from "../firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// get the firestore instance
const db = getFirestore( firebase_app );

// function to retrieve a document from a firestore collection
export default async function getDocument(
    collection: string, 
    id: string
){
    // create a document reference using the provided collection and ID
    const docRef = doc(db, collection, id);
    // variable to store the result of the operation
    let result = null;
    // variable to store any error that occurs during the operation
    let error = null;

    try {
        // retrieve the document using the document reference
        result = await getDoc( docRef );
    } catch ( error ) {
        // catch and store any error that occurs during the operation
        error = error;
    }

    // return the result and error as an object
    return { result, error };
}