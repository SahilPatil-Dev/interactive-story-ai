import { useTypewriter } from "./useTypewriter";

export default function StoryText({ content }) {
  const animatedText = useTypewriter(content || "", 15);
  const isTyping = animatedText !== content;

  return (
    <div className="max-h-[260px] overflow-y-auto pr-2">
      <p className="text-black leading-relaxed text-lg whitespace-pre-line">
        {animatedText}
        <span className={`${isTyping ? "animate-pulse" : "opacity-0"}`}>
          |
        </span>
      </p>
    </div>
  );
}