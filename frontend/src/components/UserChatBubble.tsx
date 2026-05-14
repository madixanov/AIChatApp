type Message = {
    text: string;
}

export default function UserChatBubble({ text }: Message) {
    return (
        <div className="flex justify-end">
            <div className="max-w-[70%] px-4 py-2 rounded-2xl bg-accent text-white">
                {text}
            </div>
        </div>
    )
}