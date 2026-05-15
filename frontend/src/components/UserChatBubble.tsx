type Props = {
    text: string,
    id: string
}

export default function UserChatBubble({ text, id }: Props) {
    return (
        <div className="flex justify-end" key={id}>
            <div className="max-w-[70%] px-4 py-2 rounded-2xl bg-accent text-white">
                {text}
            </div>
        </div>
    )
}