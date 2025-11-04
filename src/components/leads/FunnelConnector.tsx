import { motion } from 'framer-motion';

interface FunnelConnectorProps {
  lossBefore: number;
  lossAfter: number;
  mode: 'before' | 'after';
  reason: string;
}

const FunnelConnector = ({ lossBefore, lossAfter, mode, reason }: FunnelConnectorProps) => {
  const loss = mode === 'before' ? lossBefore : lossAfter;
  
  return (
    <div className="relative h-16 flex items-center justify-center mb-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-px h-full bg-gradient-to-b from-red-500/50 to-transparent" />
      </div>
      
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="relative bg-red-950/80 border border-red-500/30 rounded-lg px-4 py-2 
                   flex items-center gap-3 backdrop-blur-sm"
      >
        <div className="text-2xl">⚠️</div>
        <div>
          <div className="text-red-400 font-bold text-lg tabular-nums">-{loss} leads</div>
          <div className="text-xs text-gray-400">{reason}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default FunnelConnector;
