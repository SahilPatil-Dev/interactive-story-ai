import { NavLink } from "react-router-dom";
import GradientText from "../ui/GradientText";

export default function NavItem({ to, children }) {
    return (
        <GradientText >
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition
        ${isActive
                        ? "bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }
      `
                }
            >
                {children}
            </NavLink>
        </GradientText>
    );
}