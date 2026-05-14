import { MessageCircle } from "lucide-react"

export default function WelcomingSection() {
    return (
        <section className="flex flex-col mx-auto gap-10">
            {/* Logo */}
            <div className="h-10 w-10 bg-surface-light rounded-md flex items-center justify-center">
                <MessageCircle size={30} className="text-text-h" />
            </div>

            {/* text */}
            <article className="flex flex-col gap-2 items-start justify-center">
                <h2 className="text-xl lg:text-2xl text-text-h font-semibold">Hi there!</h2>
                <h1 className="text-2xl lg:text-3xl text-text-h font-semibold">What would you like to know?</h1>
                <p className="text-lg lg:text-xl text-text font-light">Use one of the most common prompts below or ask your question</p>
            </article>
        </section>
    )
}