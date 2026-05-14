import UserChatBubble from "./UserChatBubble";
import BotChatBubble from "./BotChatBubble";
import type { Message } from "../mocks/messages";
import { useRef, useEffect } from "react";

type Props = {
  messages: Message[];
};

export default function Chat({ messages }: Props) {
    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
   return (
    <div className="flex h-full flex-col gap-3 justify-end pb-20">
      {messages.map((msg) =>
        msg.role === "user" ? (
          <UserChatBubble key={msg.id} text={msg.text} />
        ) : (
          <BotChatBubble key={msg.id} text={msg.text} />
        )
      )}
      <div ref={endRef} />
    </div>
  );
}