import { useFetchPerformance, useFetchUser } from "../hooks/useFetch";
import { Link } from "react-router-dom";

export const RankingPage = () => {
    const rankGradients = [
        "bg-gradient-to-r from-[#b48811] via-[#FFBC2E] to-transparent text-white", // Gold
        "bg-gradient-to-r from-[#3F4040] via-[#7D7F7F] to-transparent text-white",   // Silver
        "bg-gradient-to-r from-[#40240C] via-[#73451D] to-transparent text-white" // Bronze
    ];
    const { performances } = useFetchPerformance();

    return (
        <div className=" text-center p-20 border-2 border-white/10 rounded-3xl  min-h-screen p-8 text-white">
            <div className=" max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-2xl font-bold mb-2 uppercase">Ranking</h1>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-[#1F2937]/50 rounded-lg overflow-hidden border border-gray-700">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-700 text-gray-300 ">
                                <th className="px-6 py-4 font-semibold text-white hidden md:table-cell ">#</th>
                                <th className="px-6 py-4 font-semibold w-2xl text-white">Username</th>
                                <th className="px-6 py-4 font-semibold text-white hidden md:table-cell">WPM</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {performances.map((performance: any, index: number) => (
                                <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                                    <td className='px-6 py-4 font-medium text-gray-400 hidden md:table-cell '>{index + 1}</td>
                                    <td className={`px-6 py-4 font-bold text-gray-400 md:table-cell left-0 ${index < 3 ? rankGradients[index] : ' '}`}>{performance.username}</td>
                                    <td className="px-6 py-4 text-gray-400 hidden md:table-cell">{performance.wpm}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
