import { Zap, Shuffle, Quote, Book } from "lucide-react";
import { ModeButton } from "./Button";

export const QuickPlayMode = () => {
    return (
        // ปรับ p-10 px-20 เป็น padding ที่น้อยลงบนมือถือ (p-6) และมากขึ้นบนจอใหญ่ (sm:p-10 sm:px-16)
        <div className="w-full max-w-2xl bg-[#252527] rounded-3xl p-6 sm:p-10 sm:px-16 flex flex-col items-center shadow-2xl border border-white/5 transition-transform hover:scale-[1.01]">
            
            {/* ส่วนหัว: หัวข้อและไอคอนสายฟ้า - ปรับขนาด Text ตามจอ */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase text-center">
                    Quick Play
                </h2>
                <div className="bg-orange-500 p-1.5 sm:p-2 rounded-xl shadow-lg shadow-orange-500/20 shrink-0">
                    <Zap className="size-5 sm:size-7 text-white fill-white" />
                </div>
            </div>

            {/* คำอธิบาย - ปรับขนาดตัวอักษรให้เล็กลงบนมือถือ */}
            <p className="text-gray-400 text-base sm:text-xl font-medium mb-8 sm:mb-10 text-center">
                Let's Play Typing Game
            </p>

            {/* กลุ่มปุ่มโหมดการเล่น - ใช้ Grid เพื่อทำ Responsive */}
            <div className="grid grid-cols-1 gap-4 w-full"> 
                {/* grid-cols-1: บนมือถือให้มี 1 คอลัมน์ (ปุ่มจะเต็มความกว้าง) 
                   ถ้าคุณมีปุ่มเยอะ และอยากให้บนคอมเรียง 2 ปุ่มต่อแถว 
                   สามารถเพิ่ม sm:grid-cols-2 เข้าไปได้ครับ
                */}
                <ModeButton 
                    icon={<Shuffle size={20} className="text-teal-400" />} 
                    label="RANDOM" 
                    hoverColor="hover:bg-teal-500/10 hover:border-teal-500/30" 
                />
            </div>
        </div>
    );
};