import GlassCard from "./ui/GlassCard";
import GradientText from "./ui/GradientText";
import Loader from "./ui/Loader";

function LoadingStatus({ theme }) {
  return (
    <GlassCard className="text-center">

      <h2 className="text-2xl font-bold mb-4">
        <GradientText>
          Generating your {theme} story...
        </GradientText>
      </h2>

      <Loader />

      <p className="text-gray-400 mt-4">
        This may take a few seconds...
      </p>

    </GlassCard>
  );
}

export default LoadingStatus;