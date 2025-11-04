import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LeadTimelineManual = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { time: '0s', icon: '📱', text: 'Lead arrive sur le site', status: 'neutral' },
    { time: '30s', icon: '⏰', text: 'Formulaire rempli...', status: 'neutral' },
    { time: '2min', icon: '📧', text: 'Email automatique de confirmation', status: 'waiting' },
    { time: '45min', icon: '👀', text: 'Un agent voit la notification', status: 'waiting' },
    { time: '2h30', icon: '☕', text: 'Agent en pause déjeuner', status: 'waiting' },
    { time: '4h12', icon: '📞', text: "Tentative d'appel (pas de réponse)", status: 'issue' },
    { time: '6h', icon: '✉️', text: 'Email envoyé (trop tard)', status: 'failed' },
    { time: '1j', icon: '❌', text: 'Lead a déjà visité ailleurs', status: 'lost' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((c) => (c + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: i <= currentStep ? 1 : 0.3,
            scale: i === currentStep ? 1.05 : 1
          }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
            i === currentStep 
              ? 'bg-white/10 shadow-lg scale-105' 
              : 'bg-white/5'
          } ${
            step.status === 'lost' ? 'border-2 border-red-500' :
            step.status === 'failed' ? 'border border-red-500/50' :
            step.status === 'issue' ? 'border border-orange-500/50' :
            'border border-gray-700'
          }`}
        >
          <div className="text-3xl">{step.icon}</div>
          <div className="flex-1">
            <div className="font-mono text-xs text-gray-500 mb-1">{step.time}</div>
            <div className={`font-semibold ${
              step.status === 'lost' ? 'text-red-400' :
              step.status === 'failed' ? 'text-red-300' :
              step.status === 'issue' ? 'text-orange-400' :
              step.status === 'waiting' ? 'text-orange-300' :
              'text-gray-300'
            }`}>
              {step.text}
            </div>
          </div>
          {i === currentStep && (
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-150" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default LeadTimelineManual;
