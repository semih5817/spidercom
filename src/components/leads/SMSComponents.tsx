interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg border border-purple-500/20">
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="font-bold text-white mb-1">{title}</div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </div>
  );
}

interface TimingRuleProps {
  trigger: string;
  delay: string;
  message: string;
}

export function TimingRule({ trigger, delay, message }: TimingRuleProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-black/20 rounded-lg">
      <div className="text-2xl">→</div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-orange-400 font-bold text-sm">SI</span>
          <span className="text-white text-sm">{trigger}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-cyan-400 font-bold text-sm">QUAND</span>
          <span className="text-gray-300 text-sm">{delay}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold text-sm">SMS</span>
          <span className="text-gray-400 text-xs">{message}</span>
        </div>
      </div>
    </div>
  );
}

interface BenchmarkStatProps {
  label: string;
  value: string;
}

export function BenchmarkStat({ label, value }: BenchmarkStatProps) {
  return (
    <div className="bg-black/30 rounded-lg p-4 text-center">
      <div className="text-3xl font-black text-white mb-1 font-orbitron">
        {value}
      </div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}
