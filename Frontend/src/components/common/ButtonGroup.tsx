import { NavLink } from "react-router-dom";

export const ButtonGroup = () => {

    const baseClass =
        "px-8 py-3 text-md font-bold transition-colors duration-200 bg-[#252527]";

    return (
        <div className="flex w-fit border-white/10 shadow-lg">

            <NavLink
                to="/dashboard/player"
                className={({ isActive }) =>
                    `${baseClass} rounded-l-md ${isActive
                        ? "bg-indigo-600 text-white shadow"
                        : "text-gray-600 hover:bg-stone-500/30 hover:text-white"
                    }`
                }
            >
                Player
            </NavLink>

            <NavLink
                to="/dashboard/track"
                className={({ isActive }) =>
                    `${baseClass} rounded-r-md ${isActive
                        ? "bg-indigo-600 text-white shadow"
                        : "text-gray-600 hover:bg-stone-500/30 hover:text-white"
                    }`
                }
            >
                Track
            </NavLink>

        </div>
    );
};