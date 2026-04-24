import { useEffect, useState, useRef } from "react";
import { getJobStatus } from "../api/jobs";

export const useJobPolling = (jobId, interval = 2000) => {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!jobId) return;

    const fetchStatus = async () => {
      try {
        const data = await getJobStatus(jobId);
        setJob(data);

        // Stop polling when done
        if (data.status === "completed" || data.status === "failed") {
          clearInterval(intervalRef.current);
        }
      } catch (err) {
        setError(err.message);
        clearInterval(intervalRef.current);
      }
    };

    // Initial call
    fetchStatus();

    // Start polling
    intervalRef.current = setInterval(fetchStatus, interval);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [jobId, interval]);

  return { job, error };
};