import { OpenAI } from "openai/client.js"
import { APIKeys } from "openai/resources/admin/organization/projects/api-keys.js"

const CONFIG_OPENAI = {
    apiKey: process.env.OPENAI_API_KEY,
    baseUrl: process.env.AI_BASE_URL,
    model: process.env.AI_MODEL
}

const client = new OpenAI({
    apiKey: CONFIG_OPENAI.apiKey,
    baseURL: CONFIG_OPENAI.baseUrl
})

export const generateResponse = async (messages) => {
    const completion = await client.chat.completions.create({
        model: CONFIG_OPENAI.model,

        messages: [
            {
                role: "system",

                content:
                    "You are a helpful AI assistant.",
            },

            ...messages,
        ],

        temperature: 0.7
    });

    return completion.choices[0].message.content;
}