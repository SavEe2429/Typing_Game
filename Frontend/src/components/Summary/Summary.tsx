import MatchView from "./MatchView";
import StatisticCard from "./StatisticCard";

interface SummaryProps {
  userInput: string;
  targetText: string;
  totalKeystrokes: number;
  errorCount: number;
  wrongWords: number[];
  startTime: number;
  endTime: number;
}

export const Summary = ({
  userInput, targetText, totalKeystrokes, errorCount, wrongWords, startTime, endTime
}: SummaryProps) => {
  const time_sec = (endTime - startTime) / 1000;
  const wpm = time_sec > 0 ? Math.round((userInput.length / 5) / (time_sec / 60)) : 0;
  const acc = totalKeystrokes > 0 ? Math.round(((totalKeystrokes - errorCount) / totalKeystrokes) * 100) : 0;
  
  const targetWords = targetText.split(' ');
  const MistakesWords = new Set(wrongWords).size;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl animate-in fade-in zoom-in duration-500 pb-10">
      <div className="flex gap-8 mb-8 border-b border-gray-700/50 w-full justify-center pb-3">
        <p className="px-6 py-2 text-white text-3xl font-bold border-b-2 border-indigo-500">Summary</p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mt-4">
        {/* Statistic */}
        <div className="col-span-1 grid grid-cols-2 gap-4">
          <StatisticCard label={<>Words Per<br />Minute (WPM)</>} value={wpm} />
          <StatisticCard label="Accuracy" value={acc} unit="%" />
          <StatisticCard label={<>Elapsed<br />Time</>} value={time_sec.toFixed(2)} unit="s" />
          <StatisticCard label="Mistakes (words)" value={MistakesWords} />
        </div>

        {/* MatchView */}
        <MatchView targetWords={targetWords} wrongWords={wrongWords} />
      </div>
    </div>
  );
};