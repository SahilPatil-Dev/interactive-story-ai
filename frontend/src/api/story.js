import API from "./client";

// Create Story (returns job)
export const createStory = async (theme) => {
  const res = await API.post("/stories/create", { theme });
  return res.data;
};

// Get Full Story
export const getCompleteStory = async (storyId) => {
  const res = await API.get(`/stories/${storyId}/complete`);
  return res.data;
};