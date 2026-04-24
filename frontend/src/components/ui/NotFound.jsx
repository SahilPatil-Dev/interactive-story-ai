import GradientText from "./GradientText";
import GlowButton from "./GlowButton";

export default function NotFound({ message, onBack }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">

      <div className="relative mb-6">
        <div className="text-6xl animate-bounce">🚫</div>

        <div className="absolute inset-0 rounded-full 
          bg-cyan-400/10 blur-2xl animate-pulse"></div>
      </div>

      <h2 className="text-3xl font-bold mb-2">
        <GradientText>Not Found</GradientText>
      </h2>

      <p className="text-gray-400 mb-6 max-w-md">
        {message || "The content you're looking for does not exist."}
      </p>

      <GlowButton onClick={onBack}>
        Go Back
      </GlowButton>

    </div>
  );
}