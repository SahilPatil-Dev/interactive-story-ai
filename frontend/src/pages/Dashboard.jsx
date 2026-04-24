import ThemeInput from "../components/ThemeInput";
import LoadingStatus from "../components/LoadingStatus";
import { useStoryFlow } from "../hooks/useStoryFlow";
import GlassCard from "../components/ui/GlassCard";

export default function Dashboard() {
  const { theme, loading, error, generateStory, reset } = useStoryFlow();

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">

      <div className="w-full max-w-2xl">

        {error && (
          <GlassCard className="text-center">
            <p className="text-red-400 mb-4">{error}</p>
            <button onClick={reset}>Try Again</button>
          </GlassCard>
        )}

        {!loading && !error && (
          <ThemeInput onSubmit={generateStory} />
        )}

        {loading && (
          <LoadingStatus theme={theme} />
        )}

      </div>

    </div>
  );
}