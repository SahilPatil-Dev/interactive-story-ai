import { useState, useEffect } from "react";
import { createStory, getCompleteStory } from "../api/story";
import { useJobPolling } from "./useJobPolling";
import { useNavigate } from "react-router-dom";

export const useStoryFlow = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState("");
  const [jobId, setJobId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { job, error: jobError } = useJobPolling(jobId);

  // Create story
  const generateStory = async (themeInput) => {
    setLoading(true);
    setError(null);
    setTheme(themeInput);

    try {
      const res = await createStory(themeInput);
      setJobId(res.job_id);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Handle job result
  useEffect(() => {
    if (!job) return;

    if (job.status === "completed" && job.story_id) {
      setLoading(false);
      navigate(`/story/${job.story_id}`);
    }

    if (job.status === "failed" || jobError) {
      setError(jobError || "Failed to generate story");
      setLoading(false);
    }
  }, [job, jobError, navigate]);

  const reset = () => {
    setTheme("");
    setJobId(null);
    setLoading(false);
    setError(null);
  };

  return {
    theme,
    loading,
    error,
    generateStory,
    reset,
  };
};