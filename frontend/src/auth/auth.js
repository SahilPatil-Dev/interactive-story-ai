// Get token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Save token
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Remove token
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Check auth
export const isAuthenticated = () => {
  return !!getToken();
};