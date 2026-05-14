import { Mic, ArrowRight } from "lucide-react";

export default function TextInput() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-30">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-light px-4 py-3 shadow-lg backdrop-blur-md">
                
                {/* mic */}
                <button className="text-white/70 hover:text-white transition">
                <Mic size={22} />
                </button>

                {/* input */}
                <input
                type="text"
                placeholder="Send a message..."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50"
                />

                {/* send */}
                <button className="text-white/70 hover:text-white transition">
                <ArrowRight size={22} />
                </button>

            </div>
            </div>
    )
}