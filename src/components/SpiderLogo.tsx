const SpiderLogo = ({ size = 90, className = "" }: { size?: number; className?: string }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-float"
      >
        {/* Legs */}
        <g className="opacity-90">
          {/* Left legs */}
          <path
            d="M25 30 L10 15"
            stroke="url(#spider-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="15" r="3" fill="#E63946" className="animate-glow" />
          
          <path
            d="M20 40 L5 40"
            stroke="url(#spider-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="5" cy="40" r="3" fill="#E63946" className="animate-glow" />
          
          <path
            d="M25 50 L10 65"
            stroke="url(#spider-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="65" r="3" fill="#E63946" className="animate-glow" />
          
          {/* Right legs */}
          <path
            d="M65 30 L80 15"
            stroke="url(#spider-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="80" cy="15" r="3" fill="#E63946" className="animate-glow" />
          
          <path
            d="M70 40 L85 40"
            stroke="url(#spider-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="85" cy="40" r="3" fill="#E63946" className="animate-glow" />
          
          <path
            d="M65 50 L80 65"
            stroke="url(#spider-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="80" cy="65" r="3" fill="#E63946" className="animate-glow" />
        </g>
        
        {/* Body - hexagonal */}
        <path
          d="M35 25 L55 25 L60 40 L55 55 L35 55 L30 40 Z"
          fill="url(#body-gradient)"
          stroke="#E63946"
          strokeWidth="2"
          className="glow-red"
        />
        
        {/* Head - smaller hexagon */}
        <path
          d="M38 15 L52 15 L55 22 L52 29 L38 29 L35 22 Z"
          fill="url(#head-gradient)"
          stroke="#E63946"
          strokeWidth="2"
        />
        
        {/* Abdomen - diamond */}
        <path
          d="M45 58 L55 65 L45 72 L35 65 Z"
          fill="url(#abdomen-gradient)"
          stroke="#E63946"
          strokeWidth="2"
        />
        
        {/* Eyes - light points */}
        <circle cx="41" cy="22" r="2.5" fill="white" opacity="0.4" />
        <circle cx="49" cy="22" r="2.5" fill="white" opacity="0.4" />
        
        {/* Body patterns */}
        <circle cx="45" cy="35" r="2" fill="white" opacity="0.3" />
        <circle cx="45" cy="45" r="2" fill="white" opacity="0.3" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="spider-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#C5303C" />
          </linearGradient>
          
          <radialGradient id="body-gradient">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#A02129" />
          </radialGradient>
          
          <radialGradient id="head-gradient">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#B02832" />
          </radialGradient>
          
          <radialGradient id="abdomen-gradient">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#A02129" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SpiderLogo;
