export type ChatMessage = {
    id?: string;
    role: "system" | "user" | "assistant" | "error";
    content: string;
};;