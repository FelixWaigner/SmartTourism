import firebase_app from "../firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";

// get the firestore instance
const db = getFirestore( firebase_app );

// function to add data to a firestore collection
export default async function addData(
    collection: string,
    id: string,
    data: any
) {
    // variable to store the result of the operation
    let result = null;

    // variable to store any error that occurs during the operation
    let error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true, // merge the new data with existing document data
        });
    } catch (error) {
        // catch and store any error that occurs during the operation
        error = error;
    }

    // return the result and error as an object
    return { result, error }
}
