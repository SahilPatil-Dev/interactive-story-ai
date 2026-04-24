import ThemeInput from "./ThemeInput";
import LoadingStatus from "./LoadingStatus";
import { useStoryFlow } from "../hooks/useStoryFlow";

function StoryGenerator() {
  const { theme, loading, error, generateStory, reset } = useStoryFlow();

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">

        {error && (
          <div>
            <p>{error}</p>
            <button onClick={reset}>Try Again</button>
          </div>
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

export default StoryGenerator;