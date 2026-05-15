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

const systemPrompt = `
You are a professional technical assistant.

CRITICAL RULES:
- Output ONLY valid Markdown
- NEVER use HTML (<br>, <div>, etc.)
- NEVER put code inside tables
- ALWAYS wrap code in triple backticks
- Keep tables clean (text only, no code inside cells)
- If code is large, move it OUTSIDE table

FORMAT RULES:
- Use headings (##)
- Use bullet points
- Use clean tables only for short text
- Use code blocks for all code

Return structured, readable responses only.
`;

export const generateResponse = async (messages) => {
    const chatCompletion = await client.chat.completions.create({
        messages: [
            {
                role: "system",
                content: systemPrompt,
            },
            ...messages,
        ],
        model: CONFIG_GROQ.model,
        temperature: 0.7,
    });

    return chatCompletion.choices[0]?.message?.content || "";
};