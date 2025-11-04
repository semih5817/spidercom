import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LeadTimelineAutomated = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { time: '0s', icon: '📱', text: 'Lead arrive sur le site', status: 'active' },
    { time: '2s', icon: '🤖', text: 'IA détecte et analyse le formulaire', status: 'processing' },
    { time: '5s', icon: '📊', text: 'Scoring automatique: 82/100 (CHAUD)', status: 'success' },
    { time: '12s', icon: '🔍', text: 'Enrichissement data (email validé, tel mobile)', status: 'processing' },
    { time: '18s', icon: '✉️', text: 'Email personnalisé envoyé', status: 'success' },
    { time: '19s', icon: '📱', text: 'SMS avec lien Calendly envoyé', status: 'success' },
    { time: '42s', icon: '💬', text: 'Chatbot engage la conversation', status: 'active' },
    { time: '3min', icon: '📅', text: 'RDV pris automatiquement (mercredi 18h)', status: 'success' },
    { time: '3min10s', icon: '💾', text: 'CRM mis à jour • Agent Sophie notifiée', status: 'complete' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((c) => (c + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ x: 20, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: i <= currentStep ? 1 : 0.3,
            scale: i === currentStep ? 1.05 : 1
          }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
            i === currentStep 
              ? 'bg-cyan-500/20 shadow-lg shadow-cyan-500/20 scale-105' 
              : 'bg-white/5'
          } ${
            step.status === 'complete' ? 'border-2 border-green-500' :
            step.status === 'success' ? 'border border-green-500/50' :
            step.status === 'processing' ? 'border border-cyan-500/50' :
            'border border-gray-700'
          }`}
        >
          <div className="text-3xl">{step.icon}</div>
          <div className="flex-1">
            <div className="font-mono text-xs text-gray-500 mb-1">{step.time}</div>
            <div className={`font-semibold ${
              step.status === 'complete' ? 'text-green-400 font-bold' :
              step.status === 'success' ? 'text-green-300' :
              step.status === 'processing' ? 'text-cyan-300' :
              'text-gray-300'
            }`}>
              {step.text}
            </div>
          </div>
          {i === currentStep && (
            <div className="flex gap-1">
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                step.status === 'success' || step.status === 'complete'
                  ? 'bg-green-400'
                  : 'bg-cyan-400'
              }`} />
            </div>
          )}
          {i < currentStep && step.status === 'success' && (
            <div className="text-green-500 text-xl">✓</div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default LeadTimelineAutomated;
