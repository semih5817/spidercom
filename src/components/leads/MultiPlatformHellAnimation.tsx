import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function MultiPlatformHellAnimation() {
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const platforms = [
    { name: 'SeLoger', icon: '🏠', color: '#f59e0b', time: 15 },
    { name: 'Leboncoin', icon: '🔵', color: '#3b82f6', time: 18 },
    { name: "Bien'ici", icon: '🏡', color: '#8b5cf6', time: 20 },
    { name: 'Logic-Immo', icon: '📊', color: '#10b981', time: 12 },
    { name: 'Facebook', icon: '📘', color: '#06b6d4', time: 15 },
    { name: 'Google', icon: '🔍', color: '#ef4444', time: 10 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => {
        const next = (prev + 1) % platforms.length;
        if (next === 0) setTotalTime(0);
        else setTotalTime((t) => t + platforms[prev].time);
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                    rounded-2xl border border-gray-700 overflow-hidden p-8">
      
      {/* Fiche bien au centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-48 h-64 bg-gradient-to-br from-indigo-600 to-purple-600 
                      rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.5)]
                      flex flex-col items-center justify-center p-4 z-10">
        <div className="w-full h-32 bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
          <span className="text-4xl">🏠</span>
        </div>
        <div className="text-white text-center">
          <div className="font-bold text-sm mb-1">T3 Parisien</div>
          <div className="text-xs text-indigo-200">280 000€</div>
        </div>
      </div>

      {/* Plateformes en cercle */}
      {platforms.map((platform, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const distance = 160;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const isActive = i === currentPlatform;
        const isDone = i < currentPlatform;
        
        return (
          <motion.div
            key={i}
            animate={{
              scale: isActive ? 1.3 : 1,
              opacity: isActive ? 1 : isDone ? 0.5 : 0.3
            }}
            className={`absolute top-1/2 left-1/2 w-24 h-24 rounded-xl 
                       flex flex-col items-center justify-center text-center
                       border-2 transition-all duration-500
                       ${isActive ? 'border-yellow-500 bg-yellow-500/20' : 
                         isDone ? 'border-green-500 bg-green-500/10' : 
                         'border-gray-600 bg-gray-800'}`}
            style={{ 
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
            }}
          >
            <div className="text-3xl mb-1">{platform.icon}</div>
            <div className="text-xs text-white font-bold">{platform.name}</div>
            {isActive && (
              <div className="text-xs text-yellow-400 mt-1 animate-pulse">
                {platform.time} min...
              </div>
            )}
            {isDone && (
              <div className="text-lg text-green-500">✓</div>
            )}
          </motion.div>
        );
      })}

      {/* Ligne de connexion animée */}
      {currentPlatform > 0 && (
        <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
          {platforms.slice(0, currentPlatform).map((_, i) => {
            const angle2 = ((i + 1) * 60) * (Math.PI / 180);
            const distance = 160;
            const centerX = '50%';
            const centerY = '50%';
            
            return (
              <line 
                key={i}
                x1={centerX} 
                y1={centerY} 
                x2={`calc(50% + ${Math.cos(angle2) * distance}px)`} 
                y2={`calc(50% + ${Math.sin(angle2) * distance}px)`}
                stroke="#fbbf24"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.5"
              />
            );
          })}
        </svg>
      )}

      {/* Timer total */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-red-950/80 border border-red-500 rounded-lg px-8 py-4 backdrop-blur-sm z-20">
        <div className="text-center">
          <p className="text-red-400 text-sm mb-1">TEMPS ÉCOULÉ</p>
          <div className="text-4xl font-black text-white font-orbitron tabular-nums">
            {totalTime} min
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {currentPlatform === 0 ? 'Recommence...' : `${currentPlatform}/6 plateformes`}
          </p>
        </div>
      </div>

      {/* Agent stressé */}
      <div className="absolute top-4 left-4 flex items-center gap-3 
                      bg-gray-950/80 border border-gray-700 rounded-lg px-4 py-2 z-20">
        <div className="text-3xl animate-bounce">😫</div>
        <div>
          <div className="text-white text-sm font-bold">Agent submergé</div>
          <div className="text-xs text-gray-400">Encore {6 - currentPlatform} portails...</div>
        </div>
      </div>
    </div>
  );
}
