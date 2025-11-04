export function PublicationWorkflowDiagram() {
  return (
    <div className="relative">
      <svg viewBox="0 0 1200 400" className="w-full">
        {/* Define arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
          </marker>
        </defs>

        {/* Node 1 : CRM */}
        <WorkflowNode x={50} y={200} label="CRM" icon="💾" color="#06b6d4" />
        
        {/* Node 2 : Trigger */}
        <WorkflowNode x={200} y={200} label="Nouveau bien" icon="⚡" color="#8b5cf6" />
        
        {/* Node 3 : Traitement IA */}
        <WorkflowNode x={400} y={200} label="Traitement IA" icon="🤖" color="#a855f7" />
        
        {/* Branches vers portails */}
        <WorkflowNode x={650} y={50} label="SeLoger" icon="🏠" color="#f59e0b" />
        <WorkflowNode x={650} y={110} label="Leboncoin" icon="🔵" color="#3b82f6" />
        <WorkflowNode x={650} y={170} label="Bien'ici" icon="🏡" color="#8b5cf6" />
        <WorkflowNode x={650} y={230} label="Logic-Immo" icon="📊" color="#10b981" />
        <WorkflowNode x={650} y={290} label="Facebook" icon="📘" color="#06b6d4" />
        <WorkflowNode x={650} y={350} label="Google" icon="🔍" color="#ef4444" />
        
        {/* Node final : Rapport */}
        <WorkflowNode x={950} y={200} label="Rapport" icon="📊" color="#10b981" />
        <WorkflowNode x={1100} y={200} label="Notification" icon="🔔" color="#eab308" />
        
        {/* Connexions */}
        <WorkflowConnection from={{x:125,y:200}} to={{x:200,y:200}} />
        <WorkflowConnection from={{x:275,y:200}} to={{x:400,y:200}} />
        
        {/* Vers portails */}
        {[50, 110, 170, 230, 290, 350].map((y, i) => (
          <WorkflowConnection 
            key={i}
            from={{x:475,y:200}} 
            to={{x:650,y:y}} 
            dashed 
          />
        ))}
        
        {/* Retour vers rapport */}
        {[50, 110, 170, 230, 290, 350].map((y, i) => (
          <WorkflowConnection 
            key={`return-${i}`}
            from={{x:725,y:y}} 
            to={{x:950,y:200}} 
          />
        ))}
        
        <WorkflowConnection from={{x:1025,y:200}} to={{x:1100,y:200}} />
      </svg>

      {/* Badges temporels */}
      <div className="mt-8 flex items-center justify-center gap-4 text-sm flex-wrap">
        <div className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
          ⏱️ Étape 1-2 : instantané
        </div>
        <div className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
          ⏱️ IA : 2-3 min
        </div>
        <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
          ⏱️ Publication : 8-10 min
        </div>
      </div>
    </div>
  );
}

interface NodeProps {
  x: number;
  y: number;
  label: string;
  icon: string;
  color: string;
}

function WorkflowNode({ x, y, label, icon, color }: NodeProps) {
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
}

interface ConnectionProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  dashed?: boolean;
}

function WorkflowConnection({ from, to, dashed = false }: ConnectionProps) {
  return (
    <line 
      x1={from.x} 
      y1={from.y} 
      x2={to.x} 
      y2={to.y}
      stroke="#06b6d4"
      strokeWidth={2}
      strokeDasharray={dashed ? "5,5" : "0"}
      opacity={0.5}
      markerEnd="url(#arrowhead)"
    />
  );
}
