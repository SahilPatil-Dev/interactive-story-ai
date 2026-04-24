import API from "./client";

// Login
export const login = async (credentials) => {
  const res = await API.post("/auth/login", credentials);

  // backend returns: access_token
  return res.data;
};

// Register
export const register = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};