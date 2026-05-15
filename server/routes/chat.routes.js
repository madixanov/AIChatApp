import { Router } from "express";

const router = Router();

router.post("/app", chatController);

export default router;