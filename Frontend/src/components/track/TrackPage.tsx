import { useState } from "react";
import { AddWord } from "./AddWord";
import { WordList } from "./WordList";

export const TrackPage = () => {

    const [activeTab, setActiveTab] = useState("word");

    const tabClass = (tab: string) => {
        const base = "py-1 font-semibold text-md transition-all duration-300 outline-none";
        // สีตอนที่กดเลือก (กลืนไปกับพื้นหลังเนื้อหา)
        const active = "bg-[#252527] text-indigo-400 border-t-4 border-indigo-600";
        // สีตอนที่ไม่ได้เลือก
        const inactive = "bg-[#1A1A1D] text-gray-400 hover:text-white hover:bg-[#323236] border-t-4 border-transparent";

        return `${base} ${activeTab === tab ? active : inactive}`;
    };

    return (
        <div>
            <main className="w-full max-w-5xl mx-auto bg-[#252527] backdrop-blur-sm  rounded-2xl shadow-1xl border border-gray-700/50 mb-6">
                <div className="grid grid-cols-2 bg-[#2A2A2E] rounded-t-2xl">
                    <button
                        onClick={() => setActiveTab("word")}
                        className={`${tabClass("word")} rounded-tl-2xl`}
                    >
                        Word List
                    </button>

                    <button
                        onClick={() => setActiveTab("add")}
                        className={`${tabClass("add")} rounded-tr-2xl`}
                    >
                        Add Word
                    </button>
                </div>

                {/* CONTENT SWITCH */}
                <div>
                    {activeTab === "word" && <WordList />}
                    {activeTab === "add" && <AddWord />}
                </div>
            </main>
        </div>
    );
};