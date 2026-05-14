export default function Loader() {
  return (
    <div className="flex flex-col gap-3 p-4 justify-end pb-20">
      
      {/* bot skeleton */}
      <div className="flex justify-start">
        <div className="h-10 w-40 rounded-2xl bg-white/10 animate-pulse" />
      </div>

      {/* user skeleton */}
      <div className="flex justify-end">
        <div className="h-20 w-52 rounded-2xl bg-white/10 animate-pulse" />
      </div>

      <div className="flex justify-start">
        <div className="h-40 w-64 rounded-2xl bg-white/10 animate-pulse" />
      </div>

      <div className="flex justify-end">
        <div className="h-10 w-40 rounded-2xl bg-white/10 animate-pulse" />
      </div>

    </div>
  );
}