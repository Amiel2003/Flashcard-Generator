const flashCards = require('../models/flashCardModel')

exports.getFlashCards = async (req, res) => {
    try {
        const cards = await flashCards.getAll()
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ error: 'Error getting flashcards:'.error })
    }
}

exports.getByPrompt = async (req, res) => {
    try {
        const promptId = req.body.prompt_id
        const cards = await flashCards.getByPrompt(promptId)
        res.status(200).json({ flashcards: cards })
    } catch (error) {
        console.error("Error getting cards by prompt (controller)", error)
        throw error
    }
}

exports.getCardsByUser = async (req, res) => {
    try {
        const userId = req.user.uid
        const user = req.user
        const cards = await flashCards.getByUser(userId)
        res.status(200).json({ flashcards: cards, user: user })
    } catch (error) {
        res.status(500).json({ error: 'Error getting flashcards:'.error })
    }
}

exports.createFlashCard = async (req, res) => {
    try {

        // Ensure data only contains answer and question
        const flashCard = {
            question: req.body.question,
            answer: req.body.answer,
            topic: req.body.topic
        }

        // Creates flashcard
        const newCard = await flashCards.create(flashCard)
        res.status(200).json({ message: "Successfully added flashcard", card: newCard })
    } catch (error) {
        res.status(500).json({ error: 'Error storing flashcard:'.error })
    }
}