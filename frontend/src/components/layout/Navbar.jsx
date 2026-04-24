import { useAuth } from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";
import GradientText from "../ui/GradientText";
import GlowButton from "../ui/GlowButton";
import NavItem from "./NavItem";

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">

            <div
                className="
        max-w-4xl mx-auto
        flex items-center justify-between
        px-4 py-2 rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,0.6)]
      "
            >

                {/* Logo */}
                <div
                    className="cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <GradientText className="text-lg font-bold">
                        StoryAI
                    </GradientText>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-2">
                    {isAuthenticated && (
                        <>
                            <NavItem to="/">Home</NavItem>
                        </>
                    )}
                </div>

                {/* Auth Actions */}
                <GradientText>

                    <div className="flex items-center gap-2">

                        {!isAuthenticated ? (
                            <>
                                <NavItem to="/login">Login</NavItem>
                                <NavItem to="/register">Register</NavItem>
                            </>
                        ) : (
                            <GlowButton variant="danger" onClick={handleLogout}>
                                Logout
                            </GlowButton>
                        )}

                    </div>
                </GradientText>

            </div>
        </div>
    );
}