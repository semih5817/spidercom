import { useState } from 'react';
import { motion } from 'framer-motion';

interface Platform {
  name: string;
  icon: string;
  status: string;
  published_at: string;
}

interface Publication {
  id: string;
  title: string;
  location: string;
  price: number;
  platforms: Platform[];
  status: string;
  visibility_boost: number;
  date: string;
  time: string;
  total_time: string;
  time_saved: string;
  estimated_reach: string;
}

interface PublicationTableRowProps {
  publication: Publication;
  index: number;
}

export function PublicationTableRow({ publication, index }: PublicationTableRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.tr
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="border-b border-gray-800 hover:bg-gray-800/50 transition-all cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Bien */}
        <td className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
            <div>
              <div className="font-bold text-white text-sm">{publication.title}</div>
              <div className="text-xs text-gray-400">{publication.location}</div>
            </div>
          </div>
        </td>

        {/* Prix */}
        <td className="p-4">
          <div className="font-bold text-white text-lg">
            {publication.price.toLocaleString()}€
          </div>
        </td>

        {/* Portails */}
        <td className="p-4">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {publication.platforms.map((platform) => (
              <div 
                key={platform.name}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-lg
                           ${platform.status === 'success' ? 'bg-green-500/20' :
                             platform.status === 'error' ? 'bg-red-500/20' :
                             'bg-yellow-500/20'}`}
                title={`${platform.name} - ${platform.status === 'success' ? 'Publié' : 
                         platform.status === 'error' ? 'Erreur' : 'En cours'}`}
              >
                {platform.icon}
              </div>
            ))}
          </div>
          <div className="text-center text-xs text-gray-400 mt-1">
            {publication.platforms.filter(p => p.status === 'success').length}/{publication.platforms.length} publiés
          </div>
        </td>

        {/* Statut global */}
        <td className="p-4">
          <div className="flex justify-center">
            {publication.status === 'completed' && (
              <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 
                             rounded-full text-xs font-semibold flex items-center gap-1">
                <span>✅</span>
                <span>Publié</span>
              </span>
            )}
            {publication.status === 'error_fixed' && (
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 
                             rounded-full text-xs font-semibold flex items-center gap-1">
                <span>⚠️</span>
                <span>Corrigé</span>
              </span>
            )}
            {publication.status === 'publishing' && (
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 
                             rounded-full text-xs font-semibold flex items-center gap-1 animate-pulse">
                <span>🔄</span>
                <span>En cours</span>
              </span>
            )}
          </div>
        </td>

        {/* Visibilité */}
        <td className="p-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-2xl font-black text-purple-400 font-orbitron">
              +{publication.visibility_boost}%
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-1">
            vs manuel
          </div>
        </td>

        {/* Date */}
        <td className="p-4 text-right">
          <div className="text-white text-sm font-semibold">
            {publication.date}
          </div>
          <div className="text-xs text-gray-400">
            {publication.time}
          </div>
        </td>

        {/* Actions */}
        <td className="p-4">
          <div className="flex items-center justify-center gap-2">
            <button 
              className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg 
                         text-white transition-all"
              title="Voir les détails"
            >
              👁️
            </button>
            <button 
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg 
                         text-white transition-all"
              title="Republier"
            >
              🔄
            </button>
          </div>
        </td>
      </motion.tr>

      {/* Ligne expandable avec détails */}
      {isExpanded && (
        <motion.tr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900/50"
        >
          <td colSpan={7} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Détails par plateforme */}
              <div className="col-span-2">
                <h4 className="text-lg font-bold text-white mb-4">
                  📊 Détails par Portail
                </h4>
                <div className="space-y-3">
                  {publication.platforms.map((platform) => (
                    <div 
                      key={platform.name}
                      className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{platform.icon}</span>
                        <span className="font-semibold text-white">{platform.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400">
                          {platform.published_at}
                        </span>
                        {platform.status === 'success' && (
                          <span className="text-green-400 font-bold">✅ OK</span>
                        )}
                        {platform.status === 'error' && (
                          <span className="text-orange-400 font-bold">⚠️ Corrigé</span>
                        )}
                        <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                          Voir l'annonce →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Métriques */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">
                  📈 Performance
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-950/30 border border-green-500/30 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Temps total</div>
                    <div className="text-2xl font-black text-green-400">
                      {publication.total_time}
                    </div>
                  </div>
                  <div className="p-3 bg-purple-950/30 border border-purple-500/30 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Économie vs manuel</div>
                    <div className="text-2xl font-black text-purple-400">
                      -{publication.time_saved}
                    </div>
                  </div>
                  <div className="p-3 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Reach estimé</div>
                    <div className="text-2xl font-black text-cyan-400">
                      +{publication.estimated_reach}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </motion.tr>
      )}
    </>
  );
}
