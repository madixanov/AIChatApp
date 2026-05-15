import { Router } from "express";
import { chatController } from "../controllers/chat.controllers.js";

const router = Router();

router.post("/chat", chatController);

export default router;