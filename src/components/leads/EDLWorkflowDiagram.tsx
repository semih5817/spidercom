import { motion } from "framer-motion";

const EDLWorkflowDiagram = () => {
  const nodes = [
    { id: 1, x: 100, y: 200, label: "Upload\nDocuments", icon: "📤", color: "#B4EBF5" },
    { id: 2, x: 250, y: 200, label: "IA OCR", icon: "🤖", color: "#a855f7" },
    { id: 3, x: 400, y: 200, label: "IA Vision", icon: "👁️", color: "#6366f1" },
    { id: 4, x: 550, y: 200, label: "Comparaison", icon: "🔍", color: "#3b82f6" },
    { id: 5, x: 700, y: 100, label: "Calcul", icon: "⚖️", color: "#f97316" },
    { id: 6, x: 700, y: 300, label: "Génération", icon: "📄", color: "#10b981" },
    { id: 7, x: 850, y: 200, label: "Envoi Auto", icon: "📧", color: "#ef4444" },
    { id: 8, x: 1000, y: 200, label: "Archivage", icon: "💾", color: "#14b8a6" },
  ];

  const connections = [
    { from: 1, to: 2, time: "15s" },
    { from: 2, to: 3, time: "30s" },
    { from: 3, to: 4, time: "20s" },
    { from: 4, to: 5, time: "10s" },
    { from: 4, to: 6, time: "15s" },
    { from: 5, to: 7, time: "5s" },
    { from: 6, to: 7, time: "5s" },
    { from: 7, to: 8, time: "7s" },
  ];

  return (
    <div className="space-y-8">
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 overflow-hidden">
        <svg viewBox="0 0 1100 400" className="w-full h-[400px]">
          <defs>
            <marker
              id="arrowhead-edl"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#B4EBF5" />
            </marker>
          </defs>

          {/* Connections */}
          {connections.map((conn, idx) => {
            const fromNode = nodes.find(n => n.id === conn.from)!;
            const toNode = nodes.find(n => n.id === conn.to)!;
            
            return (
              <g key={idx}>
                <motion.line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#B4EBF5"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-edl)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1, delay: idx * 0.2 }}
                />
                <text
                  x={(fromNode.x + toNode.x) / 2}
                  y={(fromNode.y + toNode.y) / 2 - 10}
                  fill="#B4EBF5"
                  fontSize="12"
                  textAnchor="middle"
                  opacity="0.8"
                >
                  {conn.time}
                </text>
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node, idx) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <motion.circle
                r="40"
                fill={node.color}
                opacity="0.2"
                stroke={node.color}
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.15, type: "spring" }}
              />
              <text
                y="-5"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="24"
              >
                {node.icon}
              </text>
              <text
                y="20"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="bold"
              >
                {node.label.split('\n').map((line, i) => (
                  <tspan key={i} x="0" dy={i === 0 ? 0 : 12}>{line}</tspan>
                ))}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-spider-cyan/20 border border-spider-cyan rounded-full">
            <span className="text-2xl">⚡</span>
            <div className="font-orbitron text-spider-cyan text-2xl font-black">
              Total : 2 min 07s
            </div>
          </div>
        </div>
      </div>

      {/* Détails par étape */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-spider-cyan/30 rounded-xl p-6">
          <h4 className="font-orbitron text-spider-cyan text-lg mb-4">🎯 Déclencheurs</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Upload 2 PDFs (manuel ou email)</li>
            <li>• Webhook depuis CRM</li>
            <li>• Planification auto (J-7 fin bail)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-xl p-6">
          <h4 className="font-orbitron text-purple-400 text-lg mb-4">🤖 Traitement IA</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• OCR : pdf-lib + Tesseract</li>
            <li>• Vision : OpenAI GPT-4 Vision</li>
            <li>• Comparaison : algorithme custom</li>
            <li>• Calcul : barème légal ALUR intégré</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-emerald-500/30 rounded-xl p-6">
          <h4 className="font-orbitron text-emerald-400 text-lg mb-4">✅ Actions & Suivi</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Email avec rapport PDF</li>
            <li>• SMS rappel si pas lu J+2</li>
            <li>• Update CRM (statut "EDL terminé")</li>
            <li>• Archivage Drive organisé</li>
            <li>• Notification comptabilité</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EDLWorkflowDiagram;
