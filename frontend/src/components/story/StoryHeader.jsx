import GradientText from "../ui/GradientText";

export default function StoryHeader({ title }) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl font-extrabold">
        <GradientText>{title}</GradientText>
      </h1>
    </div>
  );
}