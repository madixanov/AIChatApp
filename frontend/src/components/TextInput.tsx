import { Mic, ArrowRight } from "lucide-react";
import { useState } from "react";

type Props = {
    onSend: (text: string) => void;
}

export default function TextInput({ onSend }: Props) {
    const [value, setValue] = useState("");

    const handleSend = () => {
        if (!value.trim()) return;

        onSend(value);
        setValue("");
    }

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full md:max-w-5xl lg:max-w-250 xl:ma-w-350 px-4 z-30">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-light px-4 py-3 shadow-lg backdrop-blur-md">
                
                {/* mic */}
                <button className="text-white/70 hover:text-white transition">
                <Mic size={22} />
                </button>

                <form className="flex flex-1" onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleSend();
                                                }}>
                    {/* input */}
                    <input
                    type="text"
                    placeholder="Send a message..."
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    />

                    {/* send */}
                    <button type="submit" className="text-white/70 hover:text-white transition">
                        <ArrowRight size={22} />
                    </button>
                </form>

            </div>
            <span className="text-center">Made by Madixanov. Github: <a href="https://github.com/madixanov" className="underline" target="_blank" rel="noopener noreferrer">github.com/madixanov</a></span>
        </div>
    )
}