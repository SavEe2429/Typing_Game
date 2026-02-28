import { useState } from "react";

interface CustomInputTextProps {
    onStart: (text: string) => void;
}

export const CustomInputText = ({ onStart }: CustomInputTextProps) => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleStart = () => {
        // ตัดช่องว่างหัวท้าย
        const InputText = text.trim();

        if (InputText.length < 1) {
            setError("Please enter at least 1 characters to play.");
            return;
        }

        setError("");
        onStart(InputText); // ส่งข้อความกลับไปให้หน้าหลัก
    };

    return (
        <>
            <div className="flex gap-8 w-full justify-center pb-3">
                <p className="px-6 py-2 text-white text-3xl font-bold border-b-2 border-indigo-500">Custom Text</p>
            </div>
            <div className="w-full max-w-5xl bg-[#252527] backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-700/50 mb-6 mt-3">
                <textarea
                    className="w-full h-48 bg-[#1A1A1C] text-gray-300 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono resize-none transition-all"
                    placeholder="Custom your text here..."
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        if (error) setError("");
                    }}
                />

                {/* กล่องแสดง Error */}
                <div className="min-h-[24px] mt-2">
                    {error && <p className="text-red-300 text-sm font-bold">{error}</p>}
                </div>
                <div className="flex justify-center">
                    <button onClick={handleStart} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20 flex items-center gap-2">Play</button>
                </div>
            </div>
        </>
    );
};