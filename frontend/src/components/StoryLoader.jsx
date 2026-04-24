import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingStatus from "./LoadingStatus.jsx";
import StoryGame from "./StoryGame.jsx";
import { API_BASE_URL } from "../util.js";

function StoryLoader() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadStory(id);
    }
  }, [id]);

  const loadStory = async (storyId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${API_BASE_URL}/stories/${storyId}/complete`
      );
      setStory(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("Story not found");
      } else {
        setError("Failed to load story");
      }
    } finally {
      setLoading(false);
    }
  };

  const createNewStory = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div
          className="w-full max-w-xl p-6 rounded-2xl
          bg-white/5 border border-white/10 backdrop-blur-xl
          shadow-[0_0_30px_rgba(34,211,238,0.15)]
          animate-[var(--animate-fadeIn)] transition-all duration-300"
        >
          <LoadingStatus theme={"story"} />

          <p className="text-center text-gray-400 mt-3">
            Preparing your story experience...
          </p>

          <div className="flex justify-center mt-6">
            <div
              className="w-10 h-10 border-4 border-cyan-400/30
              border-t-cyan-400 rounded-full animate-spin"
            ></div>
          </div>
        </div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div
          className="w-full max-w-md p-6 rounded-2xl
          bg-red-500/10 border border-red-500/20 backdrop-blur-xl
          text-center
          shadow-[0_0_25px_rgba(239,68,68,0.2)]
          animate-[var(--animate-fadeIn)] transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-red-400 mb-2">
            Story Not Found
          </h2>

          <p className="text-gray-300 mb-4">{error}</p>

          <button
            onClick={createNewStory}
            className="px-5 py-2 rounded-lg font-semibold text-white
            bg-gradient-to-r from-cyan-400 to-blue-500
            hover:scale-105 active:scale-95
            transition duration-300
            shadow-[0_0_15px_rgba(34,211,238,0.6)]
            hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            Go to Generator
          </button>
        </div>
      </div>
    );
  }


  if (story) {
    return (
      <div className="px-4 py-6 animate-[var(--animate-fadeIn)]">
        <StoryGame story={story} onNewStory={createNewStory} />
      </div>
    );
  }

  return null;
}

export default StoryLoader;