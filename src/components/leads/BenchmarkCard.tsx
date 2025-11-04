interface BenchmarkCardProps {
  label: string;
  value: string;
  icon: string;
  source: string;
}

const BenchmarkCard = ({ label, value, icon, source }: BenchmarkCardProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-black text-white mb-2 font-orbitron">{value}</div>
      <div className="text-sm text-gray-400 mb-2">{label}</div>
      <div className="text-xs text-gray-600">Source: {source}</div>
    </div>
  );
};

export default BenchmarkCard;
