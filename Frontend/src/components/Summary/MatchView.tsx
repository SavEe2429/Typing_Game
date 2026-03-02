interface MatchViewProps {
  targetWords: string[];
  wrongWords: number[];
}

const MatchView = ({ targetWords, wrongWords }: MatchViewProps) => (
  <div className="col-span-2 bg-[#252527] p-8 rounded-3xl shadow-lg flex flex-wrap content-start gap-x-3 gap-y-2 text-xl font-mono leading-relaxed lg:min-h-[320px] border border-gray-700/50 tracking-wide">
    
    {targetWords.map((word, i) => {
      const isMistaken = wrongWords.includes(i);

      return (
        <span
          key={i}
          className={isMistaken ? "text-red-300" : "text-gray-200"}
        >
          {word}
        </span>
      );
    })}
  </div>
);

export default MatchView;