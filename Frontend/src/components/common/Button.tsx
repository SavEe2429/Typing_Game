import {  useNavigate } from "react-router-dom";

interface VaribleButton{
    icon : any;
    label: string;
    hoverColor: string;
    path : string;
}

export const ModeButton = ({icon, label, hoverColor, path }: VaribleButton) => {
    const navigate = useNavigate();
    return (
    <button onClick={() => navigate(path)} className={`
        flex items-center gap-3 bg-[#1A1A1C] text-gray-300 px-6 py-3 w-80 justify-center
        rounded-xl font-bold text-lg transition-all border border-white/10
        ${hoverColor} hover:text-white hover:-translate-y-1 active:translate-y-0
    `}>
        {icon}
        {label}
    </button>
)};

