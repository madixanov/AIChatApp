import TextInput from "./components/TextInput";
import WelcomingSection from "./components/WelcomingSection";

export default function App() {
  return (
    <main className="w-full md:max-w-5xl lg:max-w-300 xl:max-w-337.5 min-h-screen flex flex-col justify-center p-5">
      <WelcomingSection />
      <TextInput />
    </main>
  );
}