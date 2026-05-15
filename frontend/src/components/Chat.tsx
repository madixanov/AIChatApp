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
        
        {messages.map((msg) =>
          msg.role === "user" ? (
            <UserChatBubble
              key={msg?.id || msg.content}
              id={msg?.id || msg.content}
              text={msg.content}
            />
          ) : (
            <BotChatBubble
              key={msg?.id || msg.content}
              id={msg?.id || msg.content}
              text={msg.content}
            />
          )
        )}

        <div ref={endRef} />
      </div>

    </div>
  );
}