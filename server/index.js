import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRouter from "./routes/chat.routes.js"

dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.use("/api", chatRouter);

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    )
})