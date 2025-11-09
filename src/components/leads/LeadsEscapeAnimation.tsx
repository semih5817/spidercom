import { motion } from 'framer-motion';
const LeadsEscapeAnimation = () => {
  return <div className="relative h-64 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                    rounded-2xl border border-gray-700 overflow-hidden">
      {/* Visite au centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-32 h-32 bg-gradient-to-br from-cyan-600 to-blue-600 
                      rounded-full flex items-center justify-center
                      shadow-[0_0_40px_rgba(6,182,212,0.5)]">
        <div className="text-center text-white">
          <div className="text-3xl mb-1">🏠</div>
          <div className="text-xs font-bold">VISITE</div>
        </div>
      </div>

      {/* Prospects qui s'échappent (animation) */}
      {[...Array(8)].map((_, i) => {
      const angle = i * 45 * (Math.PI / 180);
      const distance = 150;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      return <motion.div key={i} initial={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1
      }} animate={{
        x: x,
        y: y,
        opacity: 0,
        scale: 0.5
      }} transition={{
        duration: 2,
        delay: i * 0.2,
        repeat: Infinity,
        repeatDelay: 1
      }} className="absolute top-1/2 left-1/2 w-12 h-12 bg-red-500 rounded-full 
                       flex items-center justify-center text-2xl" style={{
        translateX: '-50%',
        translateY: '-50%'
      }}>
            😢
          </motion.div>;
    })}

      {/* Label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-red-950/80 border border-red-500 rounded-lg px-6 py-3 backdrop-blur-sm">
        <p className="text-red-400 font-bold text-center">💸 67% s'échappent sans relance = 
-8 000€ par prospect perdu</p>
      </div>
    </div>;
};
export default LeadsEscapeAnimation;