import API from "./client";

// Get job status
export const getJobStatus = async (jobId) => {
  const res = await API.get(`/jobs/${jobId}`);
  return res.data;
};