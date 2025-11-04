import { useState } from 'react';
import { motion } from 'framer-motion';

export function AutoPublishVisualizer() {
  const [publishingStep, setPublishingStep] = useState<'idle' | 'processing' | 'publishing' | 'completed'>('idle');
  const [completedPlatforms, setCompletedPlatforms] = useState<string[]>([]);
  const [currentPlatform, setCurrentPlatform] = useState<string | null>(null);

  const platforms = [
    { id: 'seloger', name: 'SeLoger', icon: '🏠', color: '#f59e0b', time: 2.1 },
    { id: 'leboncoin', name: 'Leboncoin', icon: '🔵', color: '#3b82f6', time: 2.5 },
    { id: 'bienici', name: "Bien'ici", icon: '🏡', color: '#8b5cf6', time: 1.8 },
    { id: 'logic', name: 'Logic-Immo', icon: '📊', color: '#10b981', time: 1.5 },
    { id: 'facebook', name: 'Facebook', icon: '📘', color: '#06b6d4', time: 2.2 },
    { id: 'google', name: 'Google Business', icon: '🔍', color: '#ef4444', time: 1.9 }
  ];

  const handlePublish = () => {
    setPublishingStep('processing');
    setCompletedPlatforms([]);
    setCurrentPlatform(null);
    
    setTimeout(() => {
      setPublishingStep('publishing');
      publishToPlatforms();
    }, 2000);
  };

  const publishToPlatforms = () => {
    platforms.forEach((platform, index) => {
      setTimeout(() => {
        setCurrentPlatform(platform.id);
        setTimeout(() => {
          setCompletedPlatforms(prev => [...prev, platform.id]);
          setCurrentPlatform(null);
          
          if (index === platforms.length - 1) {
            setTimeout(() => {
              setPublishingStep('completed');
            }, 500);
          }
        }, platform.time * 1000);
      }, index * 2500);
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 
                    rounded-3xl p-12 border-2 border-indigo-500/30
                    shadow-[0_0_60px_rgba(99,102,241,0.2)]">
      
      {/* Fiche bien centrale */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 
                        rounded-2xl p-8 border-4 border-white/20
                        shadow-[0_0_40px_rgba(99,102,241,0.5)]">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <div className="w-full h-48 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                <span className="text-6xl">🏠</span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white mb-4">
                T3 Lumineux Paris 15e
              </h3>
              <div className="space-y-2 text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-300">📐</span>
                  <span>68m²</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">💰</span>
                  <span className="text-3xl font-black text-white">280 000€</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">📍</span>
                  <span>Paris 15e - Convention</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton publish */}
          <div className="mt-6">
            <button
              onClick={handlePublish}
              disabled={publishingStep !== 'idle' && publishingStep !== 'completed'}
              className={`w-full py-4 rounded-xl font-black text-xl transition-all duration-300
                         ${publishingStep === 'idle' || publishingStep === 'completed'
                           ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 shadow-[0_0_30px_rgba(74,222,128,0.5)] cursor-pointer'
                           : 'bg-gray-700 cursor-not-allowed opacity-50'}`}
            >
              {publishingStep === 'idle' && '🚀 PUBLIER SUR TOUS LES PORTAILS'}
              {publishingStep === 'processing' && '⚙️ Traitement IA en cours...'}
              {publishingStep === 'publishing' && '📡 Publication en cours...'}
              {publishingStep === 'completed' && '✅ PUBLIÉ AVEC SUCCÈS - Relancer'}
            </button>
          </div>
        </div>
      </div>

      {/* Grille des plateformes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {platforms.map((platform) => {
          const isCompleted = completedPlatforms.includes(platform.id);
          const isCurrent = currentPlatform === platform.id;
          const isWaiting = publishingStep === 'publishing' && !isCompleted && !isCurrent;

          return (
            <motion.div
              key={platform.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: isCurrent ? 1.1 : 1,
                opacity: 1 
              }}
              className={`relative rounded-2xl p-6 border-2 transition-all duration-500
                         ${isCompleted ? 'border-green-500 bg-green-950/30' :
                           isCurrent ? 'border-yellow-500 bg-yellow-950/30 animate-pulse' :
                           isWaiting ? 'border-gray-600 bg-gray-800' :
                           'border-gray-700 bg-gray-900'}`}
            >
              {/* Badge statut */}
              <div className="absolute -top-3 -right-3 z-10">
                {isCompleted && (
                  <div className="w-10 h-10 rounded-full bg-green-500 
                                  flex items-center justify-center text-white text-xl
                                  shadow-[0_0_20px_rgba(74,222,128,0.6)]">
                    ✓
                  </div>
                )}
                {isCurrent && (
                  <div className="w-10 h-10 rounded-full bg-yellow-500 
                                  flex items-center justify-center animate-spin">
                    <span className="text-xl">⚙️</span>
                  </div>
                )}
              </div>

              {/* Icône plateforme */}
              <div className="text-6xl mb-4 text-center">{platform.icon}</div>

              {/* Nom */}
              <h4 className="text-xl font-bold text-white text-center mb-3">
                {platform.name}
              </h4>

              {/* Statut */}
              <div className="text-center">
                {isCompleted && (
                  <div className="space-y-2">
                    <div className="text-green-400 text-sm font-bold">
                      ✅ Publié à {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="text-xs text-gray-400">
                      MAJ auto tous les 7 jours
                    </div>
                  </div>
                )}
                {isCurrent && (
                  <div className="space-y-2">
                    <div className="text-yellow-400 text-sm font-bold animate-pulse">
                      📡 Publication en cours...
                    </div>
                    <div className="text-xs text-gray-400">
                      {platform.time}s
                    </div>
                  </div>
                )}
                {!isCompleted && !isCurrent && publishingStep === 'idle' && (
                  <div className="text-gray-500 text-sm">
                    En attente
                  </div>
                )}
                {isWaiting && (
                  <div className="text-gray-400 text-sm">
                    Dans la file...
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats temps réel */}
      {publishingStep === 'completed' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-green-950/50 to-emerald-950/50 
                     rounded-2xl p-8 border-2 border-green-500">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-5xl mb-2">⚡</div>
              <div className="text-4xl font-black text-green-400 font-orbitron">
                12 min
              </div>
              <div className="text-sm text-gray-400">temps total</div>
            </div>

            <div className="text-5xl text-gray-600">vs</div>

            <div className="text-center">
              <div className="text-5xl mb-2">🐢</div>
              <div className="text-4xl font-black text-red-400 line-through font-orbitron">
                100 min
              </div>
              <div className="text-sm text-gray-400">en manuel</div>
            </div>

            <div className="text-5xl text-green-500">=</div>

            <div className="text-center">
              <div className="text-5xl mb-2">🎉</div>
              <div className="text-4xl font-black text-green-400 font-orbitron">
                -88%
              </div>
              <div className="text-sm text-gray-400">de temps économisé</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
