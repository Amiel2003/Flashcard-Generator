import axios from "axios"
import { showToast } from "../../../functions/toast"

export const getUserFromBackend = async (idToken: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_AUTH_ROUTE}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${idToken}`
            }
        })

        const user = response.data.user
        return user
    } catch (error) {
        console.error("Error verifying registered user: ", error)
        showToast("Error verifying registered user: ", "error")
        return null
    }
}