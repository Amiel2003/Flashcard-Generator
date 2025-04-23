const deepseek = require('../utils/deepseek')
const moonshot = require('../utils/moonshot')
const backendPrompt = require('../utils/promptPreparer')
const Prompt = require('../models/promptModel')
const FlashCard = require('../models/flashCardModel')

exports.verify = async (req, res) => {
    const user = req.user
    if (!user) {
        res.status(500).json({ message: "No login session!" })
    }
    res.status(200).json({ message: "This is valid!" })
}

exports.sendPrompt = async (req, res) => {
    try {

        const userId = req.user.uid
        const { prompt, number, difficulty } = req.body
        const newPrompt = await backendPrompt(prompt, number, difficulty)

        console.log(newPrompt)
        console.log("Generating Response...")

        const response = await moonshot(newPrompt)

        if (response) {

            // Extract array from the AI response
            const arrayStr = response.match(/\[\s*{[\s\S]*?}\s*\]/)[0];
            console.log(arrayStr)

            try {
                // Parse Ai Response into JSON
                const json = JSON.parse(arrayStr)
                const storePrompt = await createPrompt(req)
                if (storePrompt) {

                    const promptId = storePrompt.id
                    // Loop through the Ai-generated flashcards and store them in database
                    json.map(async (card, index) => {
                        await storeCard(card, promptId, userId)
                    })

                    res.status(200).json({ flashcards: json })
                    console.log("Response Sent")
                    console.log(storePrompt)
                }


            } catch (error) {
                console.error("Error parsing: ", error)
                res.status(500).json({ error: 'Parsing error', shouldRetry: true })
            }
        }
    } catch (error) {
        console.error("Error sending prompt: ", error)
        res.status(500).json({ error: 'Error sending prompt', shouldRetry: true })
    }
}

async function storeCard(card, promptId, userId) {
    const newCard = {
        prompt_id: promptId,
        user_uid: userId,
        ...card
    }
    await FlashCard.create(newCard)
}

async function createPrompt(req) {
    try {
        const prompt = {
            user_uid: req.user.uid,
            prompt: req.body.prompt,
            number: req.body.number,
            difficulty: req.body.difficulty,
        }

        const newPrompt = await Prompt.create(prompt)
        return newPrompt
    } catch (error) {
        console.error("Error creating prompt: ", error)
        return null;
    }
}

exports.createPrompt = createPrompt