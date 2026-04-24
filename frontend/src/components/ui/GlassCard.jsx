export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative p-6 rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        transition-all duration-300
        hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}