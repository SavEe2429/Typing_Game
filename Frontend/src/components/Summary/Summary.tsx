import { useSaveScore } from "../../hooks/ีuseSavePerformance";
import { RestartButton } from "../common/RestartButton";
import { Localfile } from "../LocalStorage";
import MatchView from "./MatchView";
import StatisticCard from "./StatisticCard";

interface SummaryProps {
  userInput: string;
  targetWords: string;
  totalKeystrokes: number;
  errorCount: number;
  wrongWords: number[];
  startTime: number;
  endTime: number;
  onRestart: () => void;
  gameMode?: string;
  disableSave?: boolean;
}

export const Summary = ({
  userInput,
  targetWords,
  totalKeystrokes,
  errorCount,
  wrongWords,
  startTime,
  endTime,
  onRestart,
  gameMode = "quickplay",
  disableSave = false
}: SummaryProps) => {
  const time_sec = (endTime - startTime) / 1000;
  const wpm = time_sec > 0 ? Math.round((userInput.length / 5) / (time_sec / 60)) : 0;
  const acc = totalKeystrokes > 0 ? Math.round(((totalKeystrokes - errorCount) / totalKeystrokes) * 100) : 0;

  //ใช้ set เพื่อที่จะไม่เก็บ array  ซ้ำ
  const MistakesWords = new Set(wrongWords).size;

  const { email, username } = Localfile();

  useSaveScore(email,username , wpm, acc, time_sec, gameMode, disableSave);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl px-6 sm:px-8 animate-in fade-in zoom-in duration-500 pb-6 lg:pb-10">
      <div className="flex gap-8 w-full justify-center pb-3">
        <p className="px-6 py-2 text-white text-3xl font-bold border-b-2 border-indigo-500">Summary</p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
        {/* Statistic */}
        <div className="col-span-1 grid grid-cols-2 gap-4 sm:gap-6 h-">
          <StatisticCard label={<>Words Per<br />Minute (WPM)</>} value={wpm} />
          <StatisticCard label="Accuracy" value={acc} unit="%" />
          <StatisticCard label={<>Elapsed<br />Time</>} value={time_sec.toFixed(2)} unit="s" />
          <StatisticCard label="Mistakes (words)" value={MistakesWords} />
        </div>

        {/* MatchView */}
        <div className="col-span-1 lg:col-span-2 lg:h-full ">
          <MatchView
            targetWords={targetWords.split(" ")}
            wrongWords={wrongWords} />
        </div>
      </div>
      
      <div className="mt-6 lg:mt-12 flex gap-4">
        <RestartButton onRestart={onRestart} />
      </div>
    </div>
  );
};