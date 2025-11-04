interface WorkflowNodeProps {
  x: number;
  y: number;
  label: string;
  icon: string;
  color: string;
}

function WorkflowNode({ x, y, label, icon, color }: WorkflowNodeProps) {
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

interface WorkflowConnectionProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  dashed?: boolean;
}

function WorkflowConnection({ from, to, dashed = false }: WorkflowConnectionProps) {
  return (
    <>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" opacity={0.5} />
        </marker>
      </defs>
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
    </>
  );
}

const WorkflowDiagram = () => {
  return (
    <div className="relative">
      <svg viewBox="0 0 1200 600" className="w-full">
        {/* Nodes */}
        <WorkflowNode x={50} y={250} label="Visite effectuée" icon="🏠" color="#06b6d4" />
        <WorkflowNode x={250} y={250} label="Déclencheur" icon="⚡" color="#8b5cf6" />
        
        {/* Branches */}
        <WorkflowNode x={450} y={50} label="J+0: Merci" icon="📧" color="#10b981" />
        <WorkflowNode x={450} y={150} label="J+1: Valeur" icon="💎" color="#8b5cf6" />
        <WorkflowNode x={450} y={250} label="J+3: Urgence" icon="🔥" color="#f59e0b" />
        <WorkflowNode x={450} y={350} label="J+7: Alternatives" icon="🏠" color="#10b981" />
        <WorkflowNode x={450} y={450} label="No-show" icon="⚠️" color="#ef4444" />
        <WorkflowNode x={450} y={550} label="Dossier" icon="📄" color="#eab308" />
        
        {/* Actions */}
        <WorkflowNode x={700} y={200} label="Email + SMS" icon="📬" color="#06b6d4" />
        <WorkflowNode x={700} y={350} label="Update CRM" icon="💾" color="#8b5cf6" />
        
        {/* Result */}
        <WorkflowNode x={950} y={275} label="RDV pris ✅" icon="🎯" color="#10b981" />
        
        {/* Connections */}
        <WorkflowConnection from={{x:150,y:250}} to={{x:250,y:250}} />
        
        {/* Multiple branches */}
        {[50, 150, 250, 350, 450, 550].map((yPos, i) => (
          <WorkflowConnection key={i} from={{x:350,y:250}} to={{x:450,y:yPos}} dashed />
        ))}
        
        {/* To actions */}
        <WorkflowConnection from={{x:550,y:150}} to={{x:700,y:200}} />
        <WorkflowConnection from={{x:550,y:250}} to={{x:700,y:200}} />
        <WorkflowConnection from={{x:550,y:350}} to={{x:700,y:350}} />
        
        {/* To result */}
        <WorkflowConnection from={{x:800,y:275}} to={{x:950,y:275}} />
      </svg>
    </div>
  );
};

export default WorkflowDiagram;
