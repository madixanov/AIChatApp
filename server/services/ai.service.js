import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const CONFIG_GROQ = {
    apiKey: process.env.GROQ_API_KEY,
    model: process.env.AI_MODEL || "llama-3.1-70b-versatile",
};

const client = new Groq({
    apiKey: CONFIG_GROQ.apiKey,
});

export const generateResponse = async (messages) => {
    const chatCompletion = await client.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful AI assistant.",
            },
            ...messages,
        ],
        model: CONFIG_GROQ.model,
        temperature: 0.7,
    });

    return chatCompletion.choices[0]?.message?.content || "";
};