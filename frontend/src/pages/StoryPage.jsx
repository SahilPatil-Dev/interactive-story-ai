import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCompleteStory } from "../api/story";
import StoryContainer from "../components/story/StoryContainer";
import LoadingStatus from "../components/LoadingStatus";
import GlassCard from "../components/ui/GlassCard";
import NotFound from "../components/ui/NotFound";

export default function StoryPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadStory();
    }, [id]);

    const loadStory = async () => {
        setLoading(true);
        try {
            const data = await getCompleteStory(id);
            setStory(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingStatus theme="story" />;

    if (error === "NOT_FOUND") {
        return (
            <NotFound
                message="This story doesn't exist or was removed."
                onBack={() => navigate("/")}
            />
        );
    }



    if (error)
        return (
            <GlassCard className="text-center">
                <p className="text-red-400">{error}</p>
                <button onClick={() => navigate("/")}>
                    Back
                </button>
            </GlassCard>
        );

    if (!story) {
        return <LoadingStatus theme="story" />;
    }

    return <StoryContainer story={story} onNewStory={() => navigate("/")} />;
}