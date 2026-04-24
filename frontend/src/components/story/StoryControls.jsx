import GlowButton from "../ui/GlowButton";

export default function StoryControls({ onRestart, onNew }) {
  return (
    <div className="mt-8 flex justify-center gap-3 flex-wrap">

      <GlowButton onClick={onRestart}>
        Restart
      </GlowButton>

      {onNew && (
        <GlowButton onClick={onNew}>
          New Story
        </GlowButton>
      )}

    </div>
  );
}