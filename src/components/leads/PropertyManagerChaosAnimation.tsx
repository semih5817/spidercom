import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Incident {
  type: string;
  icon: string;
  emoji: string;
  color: string;
  time: string;
}

const PropertyManagerChaosAnimation = () => {
  const [activeIncident, setActiveIncident] = useState(0);
  const [stressLevel, setStressLevel] = useState(0);

  const incidents: Incident[] = [
    { type: 'Plomberie', icon: '💧', emoji: '😰', color: '#3b82f6', time: '08:47' },
    { type: 'Électricité', icon: '⚡', emoji: '😱', color: '#eab308', time: '09:12' },
    { type: 'Chauffage', icon: '🔥', emoji: '😤', color: '#ef4444', time: '10:05' },
    { type: 'Serrurerie', icon: '🔑', emoji: '😵', color: '#8b5cf6', time: '11:20' },
    { type: 'Loyer impayé', icon: '💰', emoji: '🤯', color: '#f59e0b', time: '14:30' },
    { type: 'Quittance', icon: '📄', emoji: '😭', color: '#06b6d4', time: '15:45' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIncident((prev) => (prev + 1) % incidents.length);
      setStressLevel((prev) => Math.min(prev + 15, 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                    rounded-2xl border border-gray-700 overflow-hidden p-8">
      
      {/* Agent au centre (stress qui monte) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: stressLevel > 50 ? [-5, 5, -5] : 0
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className={`w-40 h-40 rounded-full flex flex-col items-center justify-center
                     ${stressLevel > 75 ? 'bg-red-600' : 
                       stressLevel > 50 ? 'bg-orange-600' : 
                       'bg-yellow-600'}
                     border-4 border-white/30 shadow-[0_0_40px_rgba(239,68,68,0.6)]`}
        >
          <div className="text-6xl mb-2">{incidents[activeIncident].emoji}</div>
          <div className="text-white font-bold text-sm">AGENT</div>
          <div className="text-white/80 text-xs">DÉBORDÉ</div>
        </motion.div>

        {/* Barre de stress */}
        <div className="mt-4 w-48 bg-gray-800 rounded-full h-4 overflow-hidden">
          <motion.div 
            animate={{ width: `${stressLevel}%` }}
            className={`h-full ${
              stressLevel > 75 ? 'bg-red-500' : 
              stressLevel > 50 ? 'bg-orange-500' : 
              'bg-yellow-500'
            }`}
          />
        </div>
        <div className="text-center text-xs text-gray-400 mt-1">
          Niveau de stress : {stressLevel}%
        </div>
      </div>

      {/* Incidents qui affluent en cercle */}
      {incidents.map((incident, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const distance = 160;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const isActive = i === activeIncident;
        
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isActive ? 1.3 : 1,
              opacity: isActive ? 1 : 0.5
            }}
            className={`absolute top-1/2 left-1/2 w-28 h-28 rounded-xl 
                       flex flex-col items-center justify-center text-center
                       border-2 transition-all duration-500
                       ${isActive ? 'border-red-500 bg-red-500/20 animate-pulse' : 
                         'border-gray-600 bg-gray-800'}`}
            style={{ 
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
            }}
          >
            <div className="text-4xl mb-1">{incident.icon}</div>
            <div className="text-xs text-white font-bold">{incident.type}</div>
            {isActive && (
              <div className="text-xs text-red-400 mt-1 animate-pulse font-bold">
                {incident.time}
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Lignes de connexion animées */}
      <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
        {incidents.map((_, i) => {
          if (i !== activeIncident) return null;
          const angle = (i * 60) * (Math.PI / 180);
          const distance = 160;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          
          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${x}px)`}
              y2={`calc(50% + ${y}px)`}
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </svg>

      {/* Compteur incidents */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-red-950/80 border border-red-500 rounded-lg px-8 py-4 backdrop-blur-sm">
        <div className="text-center">
          <p className="text-red-400 text-sm mb-1">INCIDENTS ACTIFS</p>
          <div className="text-5xl font-black text-white font-orbitron tabular-nums">
            {activeIncident + 1}/{incidents.length}
          </div>
          <p className="text-xs text-gray-400 mt-1">
            +3h perdues aujourd'hui
          </p>
        </div>
      </div>

      {/* Badge appels */}
      <div className="absolute top-4 right-4 
                      bg-orange-950/80 border border-orange-500 rounded-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="text-2xl animate-bounce">📞</div>
          <div>
            <div className="text-orange-400 text-xs">Appels en attente</div>
            <div className="text-white font-bold text-lg">12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerChaosAnimation;
