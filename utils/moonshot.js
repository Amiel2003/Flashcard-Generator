const fetch = require("node-fetch");

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

async function openrouter(userPrompt) {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            // Optional but recommended for ranking purposes:
            // "HTTP-Referer": "http://localhost:3000", // or your actual dev site
            // "X-Title": "MyFlashcardApp",
        },
        body: JSON.stringify({
            model: "mistralai/mistral-7b-instruct:free",
            messages: [
                {
                    role: "user",
                    content: userPrompt
                }
            ],
            max_tokens: 2048
        })
    });

    const data = await response.json();


    if (!response.ok || !data.choices) {
        throw new Error(data?.error?.message || "OpenRouter API error");
    }
    console.log(data.choices[0].message.content)
    return data.choices[0].message.content;
}

module.exports = openrouter;
