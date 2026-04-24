export default function GlowButton({
  children,
  onClick,
  variant = "primary",
}) {
  const styles = {
    primary:
      "from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(59,130,246,0.9)]",
    danger:
      "from-red-500 to-pink-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]",
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-lg font-semibold text-white
        bg-gradient-to-r ${styles[variant]}
        hover:scale-105 active:scale-95
        transition duration-300
      `}
    >
      {children}
    </button>
  );
}