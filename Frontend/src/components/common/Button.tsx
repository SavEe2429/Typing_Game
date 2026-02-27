// Component ย่อยสำหรับปุ่ม (เพื่อความ Clean)
export const ModeButton = ({ icon, label, hoverColor }: { icon: any, label: string, hoverColor: string }) => (
    <button className={`
        flex items-center gap-3 bg-[#1A1A1C] text-gray-300 px-6 py-3 w-90 justify-center
        rounded-xl font-bold text-lg transition-all border border-white/10
        ${hoverColor} hover:text-white hover:-translate-y-1 active:translate-y-0
    `}>
        {icon}
        {label}
    </button>
);