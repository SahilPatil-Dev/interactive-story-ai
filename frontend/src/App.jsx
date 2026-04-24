import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./auth/useAuth";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StoryPage from "./pages/StoryPage";
import Navbar from "./components/layout/Navbar";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>

      <Navbar />

      <div className="pt-24">

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Login />}
          />

          <Route
            path="/story/:id"
            element={isAuthenticated ? <StoryPage /> : <Login />}
          />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;