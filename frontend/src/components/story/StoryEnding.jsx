import GradientText from "../ui/GradientText";

export default function StoryEnding({ isWinning }) {
  return (
    <div className="mt-6 text-center">

      <h2 className="text-2xl font-bold mb-2">
        <GradientText>
          {isWinning ? "🎉 You Won!" : "💀 The End"}
        </GradientText>
      </h2>

      <p className="text-gray-400">
        {isWinning
          ? "You reached a winning ending!"
          : "Your journey ends here."}
      </p>

    </div>
  );
}