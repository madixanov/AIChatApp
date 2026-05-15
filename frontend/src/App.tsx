import TextInput from "./components/TextInput";
import WelcomingSection from "./components/WelcomingSection";
import Chat from "./components/Chat";
import Loader from "./components/Loader";
import { sendMessage } from "../api/api";
import type { ChatMessage } from "../lib/types";

import { useState } from "react";

export default function App() {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
  if (!text.trim()) return;

  const userMessage: ChatMessage = {
    role: "user",
    content: text,
  };

  setChat((prev) => [...prev, userMessage]);
  setLoading(true);

  try {
    const updatedChat = [...chat, userMessage];

    const res = await sendMessage(updatedChat);

    const botMessage: ChatMessage = {
      id: res.id,
      role: "assistant",
      content: res.content,
    };

    setChat((prev) => [...prev, botMessage]);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <main className={`w-full md:max-w-5xl lg:max-w-250 xl:ma-w-337.5 min-h-screen flex flex-col mx-auto ${
      chat.length === 0 ? "justify-center" : "justify-end"
    } p-5 relative`}>

      {/* CHAT ALWAYS */}
      {chat.length > 0 ? (
        <Chat messages={chat} />
      ) : (
        <WelcomingSection />
      )}

      {/* LOADER INSIDE CHAT AREA */}
      {loading && (
        <div className="mt-3">
          <Loader />
        </div>
      )}

      <TextInput onSend={handleSend} />

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg to-transparent z-10" />
    </main>
  );
}