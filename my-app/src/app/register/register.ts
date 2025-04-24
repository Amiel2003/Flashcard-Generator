import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { showToast } from "../../../functions/toast";

export const register = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const idToken = userCredential.user.getIdToken()
        return idToken
    } catch (error) {
        console.error("Firebase: Error creating user: ", error)
        showToast("Firebase couldn't create your account", "error")
    }
}