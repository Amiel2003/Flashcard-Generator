
async function preparePrompt(prompt, number, difficulty) {
    const backendPrompt = `If the word/phrase "${prompt}" sounds wrong, discriminating, doesn't make sense, random sets of letters, or vulgar, respond with the JSON {status: 400, message: "Innapropriate Prompt"}. However, if it sounds alright, then generate ${number} flashcard/s with the topic of "${prompt}", make it ${difficulty} level. Respond the flashcard/s in JSON format like this {flashcards: [{flashcard1}, {flashcard2}...]}, with each flashcards having "answer" and "question" fields. Don't add any unecessary intro or answers, just get into the flashcards`
    return backendPrompt;
}

module.exports = preparePrompt