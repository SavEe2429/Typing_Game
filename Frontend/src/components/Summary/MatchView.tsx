interface MatchViewProps {
  targetWords: string[];
  wrongWords: number[];
}

export const MatchView = ({ targetWords, wrongWords }: MatchViewProps) => (
  <div className="col-span-2 bg-[#252527] p-8 rounded-3xl shadow-lg flex flex-wrap content-start gap-x-3 gap-y-2 text-xl font-mono leading-relaxed min-h-[320px] border border-white/5">
    {targetWords.map((word, i) => {
      const isMistaken = wrongWords.includes(i);
      return (
        <span
          key={i}
          className={isMistaken ? "text-red-300" : "text-gray-200"}>{word}</span>
      );
    })}
  </div>
);

export default MatchView;