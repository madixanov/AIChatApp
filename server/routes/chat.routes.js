import { Router } from "express";
import { chatController } from "../controllers/chat.controllers";

const router = Router();

router.post("/app", chatController);

export default router;