import { motion } from 'framer-motion';

interface FunnelStageProps {
  icon: string;
  title: string;
  valueBefore: number;
  valueAfter: number;
  mode: 'before' | 'after';
  color: 'cyan' | 'purple' | 'yellow' | 'green';
  width: string;
  description: string;
}

const FunnelStage = ({ icon, title, valueBefore, valueAfter, mode, color, width, description }: FunnelStageProps) => {
  const value = mode === 'before' ? valueBefore : valueAfter;
  const prevValue = mode === 'before' ? null : valueBefore;
  
  const colorClasses = {
    cyan: 'from-cyan-600 to-cyan-500 border-cyan-400',
    purple: 'from-purple-600 to-purple-500 border-purple-400',
    yellow: 'from-yellow-600 to-yellow-500 border-yellow-400',
    green: 'from-green-600 to-green-500 border-green-400'
  };

  return (
    <div className="relative mb-8" style={{ width: width, margin: '2rem auto' }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-r ${colorClasses[color]} 
                   rounded-2xl p-8 border-4 shadow-2xl
                   hover:scale-105 transition-transform duration-300`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{icon}</div>
            <div>
              <h3 className="text-2xl font-black text-white">{title}</h3>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          </div>
          
          <div className="text-right">
            <motion.div
              key={value}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-black text-white font-['Orbitron'] tabular-nums"
            >
              {value}
            </motion.div>
            {prevValue && (
              <div className="text-sm text-white/70 line-through">
                vs {prevValue} avant
              </div>
            )}
          </div>
        </div>

        <div className="h-4 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(value / 420) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-white/90 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FunnelStage;
