import { motion } from 'framer-motion';

interface EmailSequenceTimelineProps {
  selectedStep: string;
  onSelectStep: (step: string) => void;
}

interface EmailTemplate {
  stats: {
    open: number;
    click: number;
    book: number;
  };
}

interface EmailTemplates {
  [key: string]: EmailTemplate;
}

const emailTemplates: EmailTemplates = {
  j0: { stats: { open: 0.52, click: 0.095, book: 0.14 } },
  j1: { stats: { open: 0.48, click: 0.085, book: 0.11 } },
  j3: { stats: { open: 0.45, click: 0.12, book: 0.16 } },
  j7: { stats: { open: 0.41, click: 0.07, book: 0.08 } },
  noshow: { stats: { open: 0.61, click: 0.28, book: 0.34 } },
  dossier: { stats: { open: 0.55, click: 0.19, book: 0.12 } }
};

const EmailSequenceTimeline = ({ selectedStep, onSelectStep }: EmailSequenceTimelineProps) => {
  const steps = [
    { 
      id: 'j0', 
      day: 'J+0 (H+1)', 
      title: 'Merci & Créneaux', 
      icon: '🎯',
      color: 'cyan',
      timing: '1h après la visite',
      goal: 'Capitaliser sur l\'intérêt chaud'
    },
    { 
      id: 'j1', 
      day: 'J+1', 
      title: 'Valeur & FAQ', 
      icon: '💎',
      color: 'purple',
      timing: '24h après visite',
      goal: 'Répondre aux objections'
    },
    { 
      id: 'j3', 
      day: 'J+3', 
      title: 'Urgence & Preuve Sociale', 
      icon: '🔥',
      color: 'orange',
      timing: 'Si pas de clic J+1',
      goal: 'Créer le FOMO'
    },
    { 
      id: 'j7', 
      day: 'J+7', 
      title: 'Alternatives', 
      icon: '🏠',
      color: 'green',
      timing: 'Si toujours inactif',
      goal: 'Garder le contact'
    },
    { 
      id: 'noshow', 
      day: 'No-Show', 
      title: 'Récupération', 
      icon: '⚠️',
      color: 'red',
      timing: 'Si absence RDV',
      goal: 'Rebook immédiat'
    },
    { 
      id: 'dossier', 
      day: 'Dossier', 
      title: 'Documents Manquants', 
      icon: '📄',
      color: 'yellow',
      timing: 'Si dossier incomplet',
      goal: 'Faciliter la complétion'
    }
  ];

  const getColorClasses = (color: string, isSelected: boolean) => {
    const baseClasses = {
      cyan: isSelected ? 'border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)]' : '',
      purple: isSelected ? 'border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : '',
      orange: isSelected ? 'border-orange-400 shadow-[0_0_30px_rgba(251,146,60,0.4)]' : '',
      green: isSelected ? 'border-green-400 shadow-[0_0_30px_rgba(74,222,128,0.4)]' : '',
      red: isSelected ? 'border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]' : '',
      yellow: isSelected ? 'border-yellow-400 shadow-[0_0_30px_rgba(251,191,36,0.4)]' : ''
    };
    return baseClasses[color as keyof typeof baseClasses] || '';
  };

  const getIconBgClasses = (color: string, isSelected: boolean) => {
    if (isSelected) {
      const bgClasses = {
        cyan: 'bg-gradient-to-br from-cyan-600 to-cyan-500 border-cyan-400',
        purple: 'bg-gradient-to-br from-purple-600 to-purple-500 border-purple-400',
        orange: 'bg-gradient-to-br from-orange-600 to-orange-500 border-orange-400',
        green: 'bg-gradient-to-br from-green-600 to-green-500 border-green-400',
        red: 'bg-gradient-to-br from-red-600 to-red-500 border-red-400',
        yellow: 'bg-gradient-to-br from-yellow-600 to-yellow-500 border-yellow-400'
      };
      return bgClasses[color as keyof typeof bgClasses] || '';
    }
    return 'bg-gray-800 border-gray-700';
  };

  return (
    <div className="relative">
      {/* Ligne verticale connectrice */}
      <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b 
                      from-cyan-500 via-purple-500 via-orange-500 to-green-500 
                      opacity-30" />
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const isSelected = selectedStep === step.id;
          
          return (
            <motion.div
              key={step.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectStep(step.id)}
              className="relative cursor-pointer group"
            >
              {/* Numéro de l'étape */}
              <div className={`absolute left-0 w-12 h-12 rounded-full 
                              flex items-center justify-center font-black text-2xl
                              transition-all duration-300 z-10 border-4
                              ${getIconBgClasses(step.color, isSelected)}
                              ${isSelected ? 'shadow-2xl scale-125' : 'scale-100'}`}>
                {step.icon}
              </div>

              {/* Carte */}
              <div className={`ml-16 bg-gradient-to-br from-gray-900 to-gray-800 
                              rounded-xl p-6 border-2 transition-all duration-300
                              ${isSelected 
                                ? `${getColorClasses(step.color, true)} scale-105` 
                                : 'border-gray-700 hover:border-gray-600'}`}>
                
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {step.day}
                    </div>
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                  </div>
                  {isSelected && (
                    <div className="text-2xl animate-pulse">👁️</div>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-orange-400">⏰</span>
                    <span>{step.timing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-cyan-400">🎯</span>
                    <span>{step.goal}</span>
                  </div>
                </div>

                {/* Métriques rapides */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-black/30 rounded px-2 py-1 text-center">
                    <div className="text-xs text-gray-500">Open</div>
                    <div className="text-sm font-bold text-cyan-400">
                      {(emailTemplates[step.id]?.stats.open * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div className="bg-black/30 rounded px-2 py-1 text-center">
                    <div className="text-xs text-gray-500">Clic</div>
                    <div className="text-sm font-bold text-purple-400">
                      {(emailTemplates[step.id]?.stats.click * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-black/30 rounded px-2 py-1 text-center">
                    <div className="text-xs text-gray-500">RDV</div>
                    <div className="text-sm font-bold text-green-400">
                      {(emailTemplates[step.id]?.stats.book * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EmailSequenceTimeline;
