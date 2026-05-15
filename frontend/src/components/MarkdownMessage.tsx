import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownMessage({ content }: { content: string }) {
     const fixed = content
        .replace(/\\n/g, "\n")
    return (
        <div className="prose prose-invert prose-sm max-w-none 
            prose-p:leading-relaxed
            prose-pre:bg-black/40
            prose-pre:border
            prose-pre:border-white/10
            prose-pre:rounded-lg
            prose-code:text-emerald-300
            ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {fixed}
            </ReactMarkdown>
        </div>
    )
}