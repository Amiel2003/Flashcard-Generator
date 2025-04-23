import axios from "axios"
import { showToast } from "./toast"

export const getUserCards = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_USER_CARDS_ROUTE}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })


        return {
            prompts: response.data.flashcards,
            user: response.data.user
        }

    } catch (error) {
        console.error('Error getting your cards: ', error)
        showToast("Couldn't retrieve history", 'error')
    }
}

export const getCardsByPrompt = async (promptId: string) => {
    try {
        const token = localStorage.getItem('token')
        console.log(token)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_PROMPT_CARDS_ROUTE}`, { prompt_id: promptId }, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.flashcards
    } catch (error) {
        console.error('Error getting your cards by prompt: ', error)
        showToast("Couldn't retrieve cards for this prompt", 'error')
    }
}
