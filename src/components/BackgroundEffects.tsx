const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Subtle radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        }}
      />
      
      {/* Tech grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Subtle horizontal lines */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ top: '25%' }}
        />
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-spider-cyan to-transparent"
          style={{ top: '75%' }}
        />
      </div>
    </div>
  );
};

export default BackgroundEffects;
