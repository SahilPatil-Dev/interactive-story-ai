import { useState } from "react";
import { register } from "../api/auth";
import GlassCard from "../components/ui/GlassCard";
import GradientText from "../components/ui/GradientText";
import GlowButton from "../components/ui/GlowButton";
import InputField from "../components/ui/InputField";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");
      const res = await register(form);
      setMsg("Registration successful. Please login.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <GlassCard className="max-w-md w-full">

        <h2 className="text-3xl font-bold text-center mb-6">
          <GradientText>Register</GradientText>
        </h2>


        <div className="flex flex-col gap-4">
            
          <InputField
            placeholder="Username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <InputField
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <InputField
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {error && <p className="text-red-400">{error}</p>}
          {msg && <p className="text-green-400">{msg}</p>}

          <GlowButton onClick={handleSubmit}>
            Register
          </GlowButton>
        </div>

      </GlassCard>
    </div>
  );
}