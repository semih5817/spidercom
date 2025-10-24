const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Radial glow at center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-glow"
        style={{
          background: 'radial-gradient(circle, rgba(230, 57, 70, 0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Futuristic grid */}
      <div 
        className="absolute inset-0 animate-grid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(230, 57, 70, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 57, 70, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Spider web lines - horizontal animated */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-spider-red to-transparent"
          style={{ top: '20%', animation: 'webPulse 3s ease-in-out infinite' }}
        />
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-spider-red to-transparent"
          style={{ top: '50%', animation: 'webPulse 3s ease-in-out infinite 1s' }}
        />
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-spider-red to-transparent"
          style={{ top: '80%', animation: 'webPulse 3s ease-in-out infinite 2s' }}
        />
      </div>
      
      {/* Scan line - cyan */}
      <div 
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-spider-cyan to-transparent animate-scan opacity-30"
        style={{ 
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
        }}
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-spider-red rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: 0.3,
          }}
        />
      ))}
      
      {/* Comic effect - barely visible ZAP */}
      <div 
        className="absolute top-20 right-20 font-orbitron text-9xl font-black text-spider-red rotate-12 select-none"
        style={{ opacity: 0.015 }}
      >
        ZAP
      </div>
      
      <style>{`
        @keyframes webPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default BackgroundEffects;
