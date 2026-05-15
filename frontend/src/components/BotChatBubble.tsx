import MarkdownMessage from "./MarkdownMessage";

type Props = {
    text: string,
    id: string
}

export default function BotChatBubble({ text, id }: Props) {
    return (
        <div className="flex justify-start w-full" key={id}>
            <div className="
                max-w-[75%]
                px-4 py-3
                rounded-2xl
                bg-neutral-900/60
                border border-white/10
                text-white
                shadow-sm
                backdrop-blur-md
                break-words
                leading-relaxed
            ">
                <MarkdownMessage content={text} />
            </div>
        </div>
    )
}