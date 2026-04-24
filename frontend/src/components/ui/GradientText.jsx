export default function GradientText({ children, className = "" }) {
  return (
    <span
      className={`
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        bg-[length:200%_200%]
        bg-clip-text text-transparent
        animate-[var(--animate-gradient)]
        ${className}
      `}
    >
      {children}
    </span>
  );
}