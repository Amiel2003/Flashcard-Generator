import axios from "axios"
import { showToast } from "./toast";

export default async function verifyAccess() {

    try {
        const token = localStorage.getItem('token')
        console.log(process.env.NEXT_PUBLIC_BACKEND_ROUTE)
        if (token) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            return await response.status;
        }
    } catch (error) {
        showToast('Invalid token!', 'error')
    }




}