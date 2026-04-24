import { useState } from "react";
import GlassCard from "./ui/GlassCard";
import GradientText from "./ui/GradientText";
import GlowButton from "./ui/GlowButton";
import InputField from "./ui/InputField";

function ThemeInput({ onSubmit }) {
  const [theme, setTheme] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!theme.trim()) {
      setError("Please enter a theme");
      return;
    }

    setError("");
    onSubmit(theme);
  };

  return (
    <GlassCard className="max-w-xl mx-auto mt-40">

      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold">
          <GradientText>Generate Your Adventure</GradientText>
        </h2>

        <p className="text-gray-400 mt-2">
          Enter a theme for your story
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <InputField
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="e.g. Space Adventure"
        />

        {error && <p className="text-red-400">{error}</p>}

        <GlowButton>Generate Story</GlowButton>

      </form>

    </GlassCard>
  );
}

export default ThemeInput;