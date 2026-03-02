import { useMemo } from "react";

export const ProgressBar = ({
    currentLength,
    totalLength,
    playerName = "Player1"
}: {
    currentLength: number;
    totalLength: number;
    playerName: string | null;
}) => {

    // คำนวณ Progress เป็น %
    const progressPercentage = useMemo(() => {
        if (totalLength === 0) return 0;
        return (currentLength / totalLength) * 100;
    }, [currentLength, totalLength]);

    return (
<div className="w-full">
            <div className="flex items-center gap-3 sm:gap-4 bg-[#252527] p-3 rounded-lg border-l-4 border-l-indigo-500 border-gray-700/50 shadow-md">
                
                <div className="font-bold text-white w-20 sm:w-32 truncate text-sm sm:text-base">
                    {playerName}
                </div>
                
                <div className="flex-grow bg-zinc-900 h-2 sm:h-3 rounded-full overflow-hidden shadow-inner">
                    <div 
                        className="bg-indigo-500 h-full transition-all duration-300 relative"
                        style={{ width: `${progressPercentage}%` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
                    </div>
                </div>
                
                <div className="font-bold text-indigo-300 whitespace-nowrap text-sm sm:text-base w-12 text-right">
                    {Math.floor(progressPercentage)}%
                </div>
                
            </div>
        </div>
    );

}