import { createContext, useContext, useState, useEffect } from "react";
import { getToken, setToken, removeToken } from "./auth";

const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);

  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  const login = (token) => {
    setToken(token);
    setTokenState(token);
  };

  const logout = () => {
    removeToken();
    setTokenState(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};