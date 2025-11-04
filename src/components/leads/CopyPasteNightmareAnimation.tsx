import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CopyPasteNightmareAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { source: 'SeLoger', target: 'Copier nom...', color: 'orange', time: '2min' },
    { source: 'Email', target: 'Copier email...', color: 'blue', time: '1min' },
    { source: 'Téléphone', target: 'Erreur format 😤', color: 'red', time: '3min' },
    { source: 'Budget', target: 'Re-taper...', color: 'orange', time: '1min' },
    { source: 'CRM', target: 'Créer fiche...', color: 'purple', time: '2min' },
    { source: 'Doublon?', target: 'Vérifier...', color: 'yellow', time: '1min' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((c) => (c + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-80 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                    rounded-2xl border border-gray-700 overflow-hidden p-8">
      
      {/* Agent stressé au centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-600 
                      rounded-full flex items-center justify-center
                      border-4 border-red-500 animate-pulse">
        <div className="text-center text-white">
          <div className="text-4xl mb-1">😫</div>
          <div className="text-xs font-bold">AGENT</div>
        </div>
      </div>

      {/* Tâches qui tournent autour */}
      {steps.map((step, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const distance = 140;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const isActive = i === currentStep;
        
        return (
          <motion.div
            key={i}
            animate={{
              scale: isActive ? 1.2 : 1,
              opacity: isActive ? 1 : 0.5
            }}
            className={`absolute top-1/2 left-1/2 w-24 h-24 rounded-xl 
                       flex flex-col items-center justify-center text-center
                       border-2 ${isActive ? 'border-red-500' : 'border-gray-600'}
                       ${isActive ? 'bg-red-500/20' : 'bg-gray-800'}`}
            style={{ 
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
            }}
          >
            <div className="text-2xl mb-1">
              {step.source === 'Doublon?' ? '⚠️' : 
               step.source === 'CRM' ? '💾' : 
               step.source === 'Téléphone' ? '📞' : '📋'}
            </div>
            <div className="text-xs text-white font-bold">{step.target}</div>
            {isActive && (
              <div className="text-xs text-red-400 mt-1">{step.time}</div>
            )}
          </motion.div>
        );
      })}

      {/* Timer total */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-red-950/80 border border-red-500 rounded-lg px-6 py-3 backdrop-blur-sm">
        <p className="text-red-400 font-bold text-center">
          ⏰ Temps total : <span className="text-2xl">10 minutes</span> par lead
        </p>
      </div>
    </div>
  );
};

export default CopyPasteNightmareAnimation;
