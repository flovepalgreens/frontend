const API_KEY = "AIzaSyAtA_tp60gNqbGt1HDqa9v3okiyYqwKHI8"; // Replace with your actual Gemini API Key
const MODEL_NAME = "gemini-1.5-pro"; // Use the latest Pro model
const API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

export async function chatWithGemini(userInput) {
    const payload = {
        contents: [{ role: "user", parts: [{ text: userInput }] }]
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    } catch (error) {
        console.error("API Error:", error);
        return "An error occurred. Please try again.";
    }
}
