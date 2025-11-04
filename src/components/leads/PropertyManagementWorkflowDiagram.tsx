const PropertyManagementWorkflowDiagram = () => {
  return (
    <div className="relative">
      <svg viewBox="0 0 1200 400" className="w-full">
        <defs>
          <marker
            id="arrowhead-pm"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
          </marker>
        </defs>

        {/* Nodes */}
        <WorkflowNode x={50} y={200} label="Incident" icon="🚨" color="#ef4444" />
        <WorkflowNode x={200} y={200} label="Formulaire" icon="📝" color="#06b6d4" />
        <WorkflowNode x={400} y={200} label="IA Classif." icon="🤖" color="#a855f7" />
        
        {/* Branches */}
        <WorkflowNode x={650} y={80} label="Plombier" icon="💧" color="#3b82f6" />
        <WorkflowNode x={650} y={160} label="Électricien" icon="⚡" color="#eab308" />
        <WorkflowNode x={650} y={240} label="Chauffagiste" icon="🔥" color="#ef4444" />
        <WorkflowNode x={650} y={320} label="Serrurier" icon="🔑" color="#8b5cf6" />
        
        {/* Final nodes */}
        <WorkflowNode x={950} y={200} label="Suivi" icon="📊" color="#10b981" />
        <WorkflowNode x={1100} y={200} label="Notif" icon="🔔" color="#f59e0b" />
        
        {/* Connections */}
        <line x1="125" y1="200" x2="200" y2="200" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-pm)" />
        <line x1="275" y1="200" x2="400" y2="200" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-pm)" />
        
        {/* Branch connections */}
        {[80, 160, 240, 320].map((y, i) => (
          <line 
            key={i}
            x1="475" 
            y1="200" 
            x2="650" 
            y2={y}
            stroke="#a855f7"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.5"
          />
        ))}
        
        {/* Return connections */}
        {[80, 160, 240, 320].map((y, i) => (
          <line 
            key={`return-${i}`}
            x1="725" 
            y1={y} 
            x2="950" 
            y2="200"
            stroke="#10b981"
            strokeWidth="2"
            markerEnd="url(#arrowhead-pm)"
          />
        ))}
        
        <line x1="1025" y1="200" x2="1100" y2="200" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-pm)" />
      </svg>

      {/* Time badges */}
      <div className="mt-8 flex items-center justify-center gap-4 text-sm flex-wrap">
        <div className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
          ⏱️ Détection : instantanée
        </div>
        <div className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
          ⏱️ IA : 30s
        </div>
        <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
          ⏱️ Assignation : 2 min
        </div>
      </div>
    </div>
  );
};

interface WorkflowNodeProps {
  x: number;
  y: number;
  label: string;
  icon: string;
  color: string;
}

const WorkflowNode = ({ x, y, label, icon, color }: WorkflowNodeProps) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect 
        x={-75} 
        y={-30} 
        width={150} 
        height={60} 
        rx={8}
        fill={color}
        opacity={0.2}
        stroke={color}
        strokeWidth={2}
      />
      <text 
        x={0} 
        y={-5} 
        textAnchor="middle" 
        fill="#ffffff"
        fontSize={24}
      >
        {icon}
      </text>
      <text 
        x={0} 
        y={20} 
        textAnchor="middle" 
        fill="#ffffff"
        fontSize={12}
        fontWeight="bold"
      >
        {label}
      </text>
    </g>
  );
};

export default PropertyManagementWorkflowDiagram;
