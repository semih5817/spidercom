import { motion } from 'framer-motion';

export function PublicationLineChart() {
  const data = [
    { week: 'S1', manuel: 18, auto: 25 },
    { week: 'S2', manuel: 15, auto: 28 },
    { week: 'S3', manuel: 20, auto: 32 },
    { week: 'S4', manuel: 17, auto: 35 }
  ];

  const maxValue = 40;

  return (
    <div className="space-y-8">
      {/* Graphique */}
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 800 256">
          {/* Grille */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line 
              key={i}
              x1="50" 
              y1={50 + i * 50} 
              x2="750" 
              y2={50 + i * 50}
              stroke="#374151"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          ))}

          {/* Ligne Manuel (rouge) */}
          <motion.polyline
            points={data.map((d, i) => 
              `${50 + i * 233},${250 - (d.manuel / maxValue) * 200}`
            ).join(' ')}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Ligne Auto (vert) */}
          <motion.polyline
            points={data.map((d, i) => 
              `${50 + i * 233},${250 - (d.auto / maxValue) * 200}`
            ).join(' ')}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />

          {/* Points Manuel */}
          {data.map((d, i) => (
            <circle
              key={`manuel-${i}`}
              cx={50 + i * 233}
              cy={250 - (d.manuel / maxValue) * 200}
              r="6"
              fill="#ef4444"
              stroke="#fff"
              strokeWidth="2"
            />
          ))}

          {/* Points Auto */}
          {data.map((d, i) => (
            <circle
              key={`auto-${i}`}
              cx={50 + i * 233}
              cy={250 - (d.auto / maxValue) * 200}
              r="6"
              fill="#10b981"
              stroke="#fff"
              strokeWidth="2"
            />
          ))}

          {/* Labels X */}
          {data.map((d, i) => (
            <text
              key={`label-${i}`}
              x={50 + i * 233}
              y="270"
              textAnchor="middle"
              fill="#9ca3af"
              fontSize="14"
            >
              {d.week}
            </text>
          ))}
        </svg>
      </div>

      {/* Légende */}
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-gray-400 text-sm">Manuel (ancien)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span className="text-gray-400 text-sm">Automatique (nouveau)</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-950/30 border border-green-500/30 rounded-lg text-center">
          <div className="text-2xl font-black text-green-400 font-orbitron">
            +94%
          </div>
          <div className="text-xs text-gray-400 mt-1">Volume augmenté (S4 vs S1)</div>
        </div>
        <div className="p-4 bg-purple-950/30 border border-purple-500/30 rounded-lg text-center">
          <div className="text-2xl font-black text-purple-400 font-orbitron">
            120
          </div>
          <div className="text-xs text-gray-400 mt-1">Annonces publiées ce mois</div>
        </div>
        <div className="p-4 bg-cyan-950/30 border border-cyan-500/30 rounded-lg text-center">
          <div className="text-2xl font-black text-cyan-400 font-orbitron">
            708
          </div>
          <div className="text-xs text-gray-400 mt-1">Portails touchés (total)</div>
        </div>
      </div>
    </div>
  );
}
