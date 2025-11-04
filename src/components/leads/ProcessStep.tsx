interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
  color: 'purple' | 'cyan' | 'green';
}

const ProcessStep = ({ icon, title, description, color }: ProcessStepProps) => {
  const colors = {
    purple: 'border-purple-500/30 bg-purple-500/5',
    cyan: 'border-spider-cyan/30 bg-spider-cyan/5',
    green: 'border-green-500/30 bg-green-500/5',
  };

  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg border ${colors[color]}`}>
      <div className="text-3xl">{icon}</div>
      <div className="flex-1">
        <div className="font-bold text-white mb-1">{title}</div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
    </div>
  );
};

export default ProcessStep;
