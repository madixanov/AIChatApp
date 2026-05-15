import { generateResponse } from "../services/ai.service";

export const chatController = 
    async (req, res) => {
        try {
            const { messages } = req.body;

            const reply = await generateResponse(messages);

            res.json({ reply });
        } catch (err) {
            res.status(500).json({ error: "AI request failed" });
        }
    }