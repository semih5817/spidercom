interface StatBarProps {
  label: string;
  value: number;
  color: 'cyan' | 'green' | 'yellow' | 'purple';
}

const StatBar = ({ label, value, color }: StatBarProps) => {
  const colors = {
    cyan: 'from-spider-cyan to-cyan-400',
    green: 'from-green-500 to-green-400',
    yellow: 'from-yellow-500 to-yellow-400',
    purple: 'from-purple-500 to-purple-400',
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-sm font-bold text-white">{value}%</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colors[color]} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default StatBar;
