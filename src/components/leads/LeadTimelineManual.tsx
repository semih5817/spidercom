import { Clock, Mail, PhoneOff, Users } from 'lucide-react';

const LeadTimelineManual = () => {
  const steps = [
    { time: '10:23', icon: Mail, label: 'Lead reçu par email', color: 'text-gray-400' },
    { time: '10:24', icon: PhoneOff, label: 'Aucune réponse (agent en visite)', color: 'text-gray-500' },
    { time: '12:15', icon: Users, label: 'Agent voit le lead (1h52 plus tard)', color: 'text-orange-400' },
    { time: '14:35', icon: Mail, label: 'Email de réponse envoyé (4h12 après)', color: 'text-red-400' },
    { time: '14:36', icon: PhoneOff, label: 'Client a déjà visité 2 concurrents', color: 'text-red-500' },
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
              <step.icon className={`w-5 h-5 ${step.color}`} />
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-12 bg-gray-700 mt-2" />
            )}
          </div>
          <div className="flex-1 pt-2">
            <div className="text-sm font-mono text-gray-500">{step.time}</div>
            <div className={`text-sm ${step.color}`}>{step.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadTimelineManual;
