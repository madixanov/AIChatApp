type Message = {
    text: string;
}

export default function BotChatBubble({ text }: Message) {
    return (
        <div className="flex justify-start">
            <div className="max-w-[70%] px-4 py-2 rounded-2xl bg-accent-bg text-white">
                {text}
            </div>
        </div>
    )
}