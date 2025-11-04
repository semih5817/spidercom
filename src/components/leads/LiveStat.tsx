interface LiveStatProps {
  icon: string;
  value: string;
  label: string;
  color: 'green' | 'cyan' | 'purple' | 'blue';
  live?: boolean;
}

const LiveStat = ({ icon, value, label, color, live }: LiveStatProps) => {
  const colors = {
    green: 'from-green-600 to-green-500 border-green-400',
    cyan: 'from-cyan-600 to-cyan-500 border-cyan-400',
    purple: 'from-purple-600 to-purple-500 border-purple-400',
    blue: 'from-blue-600 to-blue-500 border-blue-400'
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} 
                     rounded-xl p-6 border-2 text-center
                     ${live ? 'animate-pulse' : ''}`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-4xl font-black text-white font-orbitron mb-2">
        {value}
      </div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
};

export default LiveStat;
