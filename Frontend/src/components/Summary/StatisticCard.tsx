interface StatisticCardProps {
  label: React.ReactNode;
  value: number | string;
  unit?: string;
}

const StatisticCard = ({ label, value, unit }: StatisticCardProps) => (
  <div className="bg-[#252527] p-6 rounded-3xl border border-gray-700/50 shadow-lg flex flex-col justify-center items-center text-center">
    <p className="text-white font-bold uppercase text-[11px] tracking-wider mb-2 leading-tight">
      {label}
    </p>
    <p className="text-indigo-500 text-4xl font-black italic">
      {value}<span className="text-2xl ml-0.5">{unit}</span>
    </p>
  </div>
);

export default StatisticCard;
