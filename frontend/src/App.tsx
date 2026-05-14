import TextInput from "./components/TextInput";
import WelcomingSection from "./components/WelcomingSection";
import Chat from "./components/Chat";
import Loader from "./components/Loader";
import { messages } from "./mocks/messages";
import type { Message } from "./mocks/messages";

import { useState, useEffect } from "react";


export default function App() {
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      setTimeout(() => {
        setChat(messages);
        setLoading(false);
      }, 1000)
    }

    fetchData();
  }, [chat]);

  return (
    <main className={`w-full md:max-w-5xl lg:max-w-300 xl:max-w-337.5 min-h-screen flex flex-col ${chat.length === 0 && !loading ? "justify-center" : "justify-end"} p-5 relative`}>
      {loading ? <Loader /> : (chat.length > 0 ? <Chat messages={chat} /> : <WelcomingSection />)}
      <TextInput />

      {/* Gradient overlay */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg to-transparent z-10" />
    </main>
  );
}