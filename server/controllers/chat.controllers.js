import { generateResponse } from "../services/ai.service.js";
import { randomUUID } from "crypto";

export const chatController = 
    async (req, res) => {
        try {
            const { messages } = req.body;

            const reply = await generateResponse(messages);
            const id = randomUUID();

            res.json({ content: reply });
        } catch (err) {
            res.status(500).json({ error: "AI request failed", description: err });
        }
    }