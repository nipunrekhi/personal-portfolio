'use server'
import firebase_app from "@/firebase/config";
import { getFirestore, doc, setDoc } from "firebase/firestore"
const { v4: uuidv4 } = require('uuid');
const db = getFirestore(firebase_app)
export async function createUser(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }

    let error = null;

    try {
        const result = await setDoc(doc(db, "contact", uuidv4()), payload, {
            merge: true,
        });
        return [result, true] as const;
        
    } catch (e) {
        error = e;
        return e
    }

}