
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use(
  (res) => res,
  (error) => {
    let message = "Something went wrong";

    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;


      if (status === 422 && Array.isArray(data.detail)) {
        message = data.detail
          .map((err) => {
            const field = err.loc?.[err.loc.length - 1];
            return `${field}: ${err.msg}`;
          })
          .join(", ");
      }

      else if (status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        message = "Session expired. Please login again.";
      }

      else if (data?.detail) {
        message = data.detail;
      }
    } else {
      message = error.message;
    }

    return Promise.reject(new Error(message));
  }
);

export default API;
