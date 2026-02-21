import mt03Bg from "@/assets/mt03-bg.jpg";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* MT03 Circuit Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mt03Bg})`,
          opacity: 0.6,
        }}
      />

      {/* Radial glow at center - cobalt */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-glow"
        style={{
          background: 'radial-gradient(circle, hsl(224 100% 65% / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(224 100% 65% / 0.02) 1px, transparent 1px),
            linear-gradient(90deg, hsl(224 100% 65% / 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scan line - indigo */}
      <div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-spider-cyan to-transparent animate-scan opacity-20"
        style={{
          boxShadow: '0 0 20px hsl(253 100% 69% / 0.3)',
        }}
      />

      {/* Floating particles - cobalt */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-spider-red rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: 0.2,
          }}
        />
      ))}

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(222 45% 5% / 0.7) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
