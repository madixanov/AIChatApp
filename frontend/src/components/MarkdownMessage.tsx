import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

export default function MarkdownMessage({ content }: { content: string }) {
     const fixed = content
        .replace(/\\n/g, "\n")
        .replace(/(\\frac\{.*?\}\{.*?\})/g, '$$$1$$')
        .replace(/(\\log\([^)]+\))/g, '$$$1$$');
        
    return (
        <div className="prose prose-invert prose-sm max-w-none 
            prose-p:leading-relaxed
            prose-pre:bg-black/40
            prose-pre:border
            prose-pre:border-white/10
            prose-pre:rounded-lg
            prose-code:text-emerald-300
            ">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[remarkMath, rehypeKatex]}>
                {fixed}
            </ReactMarkdown>
        </div>
    )
}