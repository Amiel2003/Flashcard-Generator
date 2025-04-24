import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";

export const login = async (email: string, password: string): Promise<string> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        console.log("ID Token:", idToken);

        return idToken;
    } catch (error: any) {
        console.error("Login failed", error.message);
        throw new Error(error.message);
    }
};
