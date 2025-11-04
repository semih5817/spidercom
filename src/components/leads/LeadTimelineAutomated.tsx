import { Bot, Calendar, Database, Mail, Zap } from 'lucide-react';

const LeadTimelineAutomated = () => {
  const steps = [
    { time: '10:23:00', icon: Zap, label: 'Lead reçu - IA activée', color: 'text-cyan-400' },
    { time: '10:23:02', icon: Bot, label: 'Analyse & scoring automatique (98/100)', color: 'text-green-400' },
    { time: '10:23:05', icon: Mail, label: 'Email personnalisé envoyé', color: 'text-blue-400' },
    { time: '10:23:42', icon: Calendar, label: 'Client réserve un créneau', color: 'text-purple-400' },
    { time: '10:23:45', icon: Database, label: 'CRM mis à jour automatiquement', color: 'text-emerald-400' },
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex items-center justify-center animate-pulse">
              <step.icon className={`w-5 h-5 ${step.color}`} />
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 mt-2" />
            )}
          </div>
          <div className="flex-1 pt-2">
            <div className="text-sm font-mono text-cyan-400">{step.time}</div>
            <div className={`text-sm font-semibold ${step.color}`}>{step.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadTimelineAutomated;
