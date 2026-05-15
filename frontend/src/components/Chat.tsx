import UserChatBubble from "./UserChatBubble";
import BotChatBubble from "./BotChatBubble";
import type { ChatMessage } from "../../lib/types";
import { useRef, useEffect } from "react";

type Props = {
  messages: ChatMessage[];
};

export default function Chat({ messages }: Props) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full flex mx-auto">
      
      <div className="w-full flex flex-col gap-4 pb-25">
        
        {messages.map((msg) => {
          if (msg.role === "user") {
            return (
              <UserChatBubble
                key={msg?.id || msg.content}
                id={msg?.id || msg.content}
                text={msg.content}
              />
            );
          }

          if (msg.role === "error") {
            return (
              <div key={msg?.id || msg.content} className="flex justify-start">
                <div className="max-w-[75%] px-4 py-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
                  
                  <p className="mb-2">{msg.content}</p>

                  <div className="flex gap-3 text-xs">
                    <button
                      className="underline text-red-300 hover:text-red-200"
                      onClick={() => window.location.reload()}
                    >
                      Retry
                    </button>

                    <button
                      className="underline text-red-300 hover:text-red-200"
                      onClick={() => window.location.reload()}
                    >
                      Reload
                    </button>
                  </div>

                </div>
              </div>
            );
          }

          return (
            <BotChatBubble
              key={msg?.id || msg.content}
              id={msg?.id || msg.content}
              text={msg.content}
            />
          );
        })}

        <div ref={endRef} />
      </div>

    </div>
  );
}