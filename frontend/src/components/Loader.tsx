export default function Loader() {
  return (
    <div className="mx-auto flex flex-col gap-3 px-3 sm:px-4 md:px-6 pb-25">
      <div className="flex justify-start">
        <div className="max-w-[85%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] px-4 py-3 rounded-2xl bg-white/10 text-white flex items-center gap-2 break-words">
          
          <span className="text-xs sm:text-sm opacity-80">
            AI is thinking
          </span>

          <div className="flex gap-1 items-end">
            <span className="dot" />
            <span className="dot delay-150" />
            <span className="dot delay-300" />
          </div>
        </div>
      </div>

      {/* shimmer placeholder */}
      <div className="flex justify-start">
        <div className="w-[70%] sm:w-[55%] md:w-[40%] lg:w-[30%] h-10 sm:h-12 rounded-2xl bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}