export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">

        <div className="absolute w-16 h-16 rounded-full border border-cyan-400/20"></div>

        <div className="w-12 h-12 rounded-full border-4 
          border-cyan-400/30 border-t-cyan-400 
          animate-spin shadow-[0_0_20px_rgba(34,211,238,0.6)]">
        </div>

      </div>
    </div>
  );
}