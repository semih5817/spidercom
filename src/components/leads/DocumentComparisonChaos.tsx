import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DocumentComparisonChaos = () => {
  const [errors, setErrors] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const errorInterval = setInterval(() => {
      setErrors(prev => (prev + 1) % 25);
    }, 800);

    const timeInterval = setInterval(() => {
      setTime(prev => (prev + 1) % 46);
    }, 200);

    return () => {
      clearInterval(errorInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-spider-red/30">
      {/* Background chaos lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-spider-red"
            style={{ top: `${i * 5}%`, width: '100%' }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2 + i * 0.1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Two documents side by side */}
      <div className="absolute inset-0 flex items-center justify-around p-8">
        {/* Left document */}
        <motion.div
          className="w-[35%] h-[80%] bg-white/10 border-2 border-spider-cyan/50 rounded-lg p-4 overflow-hidden"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-xs text-white/70 space-y-2">
            <div className="h-2 bg-spider-cyan/30 rounded w-3/4" />
            <div className="h-2 bg-white/20 rounded w-full" />
            <div className="h-2 bg-white/20 rounded w-5/6" />
            <motion.div 
              className="h-2 bg-spider-red/50 rounded w-2/3"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <div className="h-2 bg-white/20 rounded w-full" />
            <div className="h-2 bg-white/20 rounded w-4/5" />
            <motion.div 
              className="h-2 bg-spider-red/50 rounded w-3/4"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
            />
          </div>
          <div className="absolute top-2 left-2 text-spider-cyan font-orbitron text-xs">ENTRÉE</div>
        </motion.div>

        {/* Center - Stressed agent */}
        <div className="relative flex flex-col items-center">
          <motion.div
            className="text-6xl mb-2"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            😰
          </motion.div>
          <motion.div
            className="font-orbitron text-spider-red text-4xl font-black"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {time}:00
          </motion.div>
          <div className="text-white/60 text-sm mt-1">min perdues</div>
        </div>

        {/* Right document */}
        <motion.div
          className="w-[35%] h-[80%] bg-white/10 border-2 border-orange-500/50 rounded-lg p-4 overflow-hidden"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <div className="text-xs text-white/70 space-y-2">
            <div className="h-2 bg-orange-500/30 rounded w-3/4" />
            <div className="h-2 bg-white/20 rounded w-full" />
            <motion.div 
              className="h-2 bg-spider-red/50 rounded w-5/6"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <div className="h-2 bg-white/20 rounded w-2/3" />
            <div className="h-2 bg-white/20 rounded w-full" />
            <motion.div 
              className="h-2 bg-spider-red/50 rounded w-4/5"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.3, repeat: Infinity, delay: 0.5 }}
            />
            <div className="h-2 bg-white/20 rounded w-3/4" />
          </div>
          <div className="absolute top-2 left-2 text-orange-500 font-orbitron text-xs">SORTIE</div>
        </motion.div>
      </div>

      {/* Error counter */}
      <motion.div
        className="absolute bottom-4 right-4 px-6 py-3 bg-spider-red/20 border border-spider-red rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <span className="text-spider-red text-2xl">⚠️</span>
          <div>
            <div className="font-orbitron text-spider-red text-xl font-black">{errors}</div>
            <div className="text-xs text-white/60">erreurs potentielles</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentComparisonChaos;
