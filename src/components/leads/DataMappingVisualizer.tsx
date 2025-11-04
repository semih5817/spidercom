import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DataMappingVisualizer = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const [syncStatus, setSyncStatus] = useState<'syncing' | 'success'>('syncing');

  const sources = [
    { id: 1, name: 'SeLoger', icon: '🏠', color: '#f59e0b', leads: 120 },
    { id: 2, name: 'Leboncoin', icon: '🔵', color: '#3b82f6', leads: 100 },
    { id: 3, name: 'Site Web', icon: '🌐', color: '#8b5cf6', leads: 80 },
    { id: 4, name: 'Facebook', icon: '📘', color: '#06b6d4', leads: 50 },
    { id: 5, name: 'Email', icon: '📧', color: '#10b981', leads: 45 }
  ];

  const fields = [
    { id: 'nom', label: 'Nom complet', icon: '👤' },
    { id: 'email', label: 'Email', icon: '📧' },
    { id: 'tel', label: 'Téléphone', icon: '📞' },
    { id: 'budget', label: 'Budget', icon: '💰' },
    { id: 'type', label: 'Type de bien', icon: '🏠' },
    { id: 'ville', label: 'Ville', icon: '📍' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 5);
      setSyncStatus('syncing');
      setTimeout(() => setSyncStatus('success'), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 
                    rounded-2xl p-12 border-2 border-cyan-500/30">
      
      <div className="grid grid-cols-3 gap-12 items-center">
        
        {/* Colonne 1 : Sources */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
            📥 SOURCES
          </h3>
          <div className="space-y-4">
            {sources.map((source, index) => (
              <motion.div
                key={source.id}
                animate={{
                  scale: index === activeFlow ? 1.1 : 1,
                  opacity: index === activeFlow ? 1 : 0.5
                }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  index === activeFlow 
                    ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.3)]' 
                    : 'border-gray-700 bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{source.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-white">{source.name}</div>
                    <div className="text-xs text-gray-400">
                      {source.leads} leads/mois
                    </div>
                  </div>
                  {index === activeFlow && (
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Colonne 2 : Flux animé */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="200" height="400" className="overflow-visible">
              {/* Lignes de connexion animées */}
              {fields.map((field, i) => (
                <g key={field.id}>
                  {/* Ligne de gauche à droite */}
                  <motion.line
                    x1="0"
                    y1={i * 60 + 30}
                    x2="200"
                    y2={i * 60 + 30}
                    stroke="#06b6d4"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: activeFlow >= 0 ? 1 : 0,
                      opacity: activeFlow >= 0 ? 0.6 : 0
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  />
                  
                  {/* Particule qui se déplace */}
                  <motion.circle
                    cx="0"
                    cy={i * 60 + 30}
                    r="6"
                    fill="#06b6d4"
                    animate={{
                      cx: [0, 200],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Badge central traitement */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <motion.div
              animate={{
                rotate: syncStatus === 'syncing' ? 360 : 0,
                scale: syncStatus === 'success' ? [1, 1.2, 1] : 1
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.5 }
              }}
              className={`w-32 h-32 rounded-full flex items-center justify-center
                         ${syncStatus === 'syncing' 
                           ? 'bg-gradient-to-br from-cyan-600 to-blue-600' 
                           : 'bg-gradient-to-br from-green-600 to-emerald-600'}
                         shadow-[0_0_40px_rgba(6,182,212,0.6)]`}
            >
              <div className="text-center text-white">
                <div className="text-4xl mb-1">
                  {syncStatus === 'syncing' ? '⚙️' : '✅'}
                </div>
                <div className="text-xs font-bold">
                  {syncStatus === 'syncing' ? 'SYNC' : 'OK'}
                </div>
              </div>
            </motion.div>

            <div className="mt-6 space-y-2 text-center">
              <div className="text-sm text-cyan-400 font-bold">
                {syncStatus === 'syncing' ? 'Traitement IA...' : 'Intégré avec succès'}
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <span>🧹 Nettoyage</span>
                <span>•</span>
                <span>🔍 Dédoublonnage</span>
                <span>•</span>
                <span>📊 Enrichissement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne 3 : CRM */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">
            💾 CRM SPYDERCOM
          </h3>
          <div className="space-y-4">
            {fields.map((field) => (
              <motion.div
                key={field.id}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: fields.indexOf(field) * 0.1 }}
                className="p-4 rounded-xl border-2 border-purple-500/30 
                           bg-gradient-to-r from-purple-950/50 to-purple-900/30"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{field.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm">{field.label}</div>
                    <div className="text-xs text-gray-400 font-mono">
                      {field.id === 'nom' && 'Sophie Dubois'}
                      {field.id === 'email' && 'sophie.d@email.com'}
                      {field.id === 'tel' && '+33 6 12 34 56 78'}
                      {field.id === 'budget' && '280 000€'}
                      {field.id === 'type' && 'T3'}
                      {field.id === 'ville' && 'Paris 15e'}
                    </div>
                  </div>
                  <div className="text-green-500 text-xl">✓</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tags auto */}
          <div className="mt-6 p-4 bg-black/30 rounded-lg border border-purple-500/20">
            <div className="text-xs text-purple-400 mb-2 font-bold">TAGS AUTOMATIQUES</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold">
                📍 SeLoger
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold">
                🔥 Lead chaud
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                🆕 Nouveau
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-12 grid grid-cols-3 gap-4 text-center text-sm">
        <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
          <div className="text-cyan-400 font-bold">Normalisation</div>
          <div className="text-xs text-gray-400">Format unifié</div>
        </div>
        <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
          <div className="text-purple-400 font-bold">Enrichissement</div>
          <div className="text-xs text-gray-400">LinkedIn, réseaux sociaux</div>
        </div>
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
          <div className="text-green-400 font-bold">Classification</div>
          <div className="text-xs text-gray-400">Tags & statuts auto</div>
        </div>
      </div>
    </div>
  );
};

export default DataMappingVisualizer;
