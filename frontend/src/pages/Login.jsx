import { useState } from "react";
import { login as loginAPI } from "../api/auth";
import { useAuth } from "../auth/useAuth";
import GlassCard from "../components/ui/GlassCard";
import GradientText from "../components/ui/GradientText";
import GlowButton from "../components/ui/GlowButton";
import InputField from "../components/ui/InputField";

export default function Login() {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            setError("");
            const res = await loginAPI({ email, password });

            login(res.access_token);
            window.location.href = "/";
        } catch (err) {
            if (err.message.toLowerCase().includes("not found")) {
                setError("NOT_FOUND");
            } else {
                setError(err.message);
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <GlassCard className="max-w-md w-full">

                <h2 className="text-3xl font-bold text-center mb-6">
                    <GradientText>Login</GradientText>
                </h2>

                <div className="flex flex-col gap-4">
                    <InputField
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-400">{error}</p>}

                    <GlowButton onClick={handleLogin}>
                        Login
                    </GlowButton>
                </div>

            </GlassCard>
        </div>
    );
}