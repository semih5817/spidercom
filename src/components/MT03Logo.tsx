const MT03Logo = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer hexagon */}
        <path
          d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
          fill="url(#mt03-bg)"
          stroke="url(#mt03-border)"
          strokeWidth="1.5"
        />
        {/* Inner circuit lines */}
        <path
          d="M12 15 L20 11 L28 15 L28 25 L20 29 L12 25 Z"
          fill="none"
          stroke="url(#mt03-accent)"
          strokeWidth="0.8"
          opacity="0.5"
        />
        {/* Center node */}
        <circle cx="20" cy="20" r="3" fill="url(#mt03-accent)" opacity="0.9" />
        <circle cx="20" cy="20" r="5" fill="none" stroke="hsl(224 100% 65%)" strokeWidth="0.5" opacity="0.4" />
        {/* Connection dots */}
        <circle cx="12" cy="15" r="1.5" fill="hsl(253 100% 69%)" opacity="0.7" />
        <circle cx="28" cy="15" r="1.5" fill="hsl(224 100% 65%)" opacity="0.7" />
        <circle cx="28" cy="25" r="1.5" fill="hsl(253 100% 69%)" opacity="0.7" />
        <circle cx="12" cy="25" r="1.5" fill="hsl(224 100% 65%)" opacity="0.7" />
        {/* Pulse ring */}
        <circle cx="20" cy="20" r="8" fill="none" stroke="hsl(224 100% 65%)" strokeWidth="0.3" opacity="0.3">
          <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <defs>
          <linearGradient id="mt03-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(222 50% 8%)" />
            <stop offset="100%" stopColor="hsl(222 53% 13%)" />
          </linearGradient>
          <linearGradient id="mt03-border" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(224 100% 65%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(253 100% 69%)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="mt03-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(224 100% 65%)" />
            <stop offset="100%" stopColor="hsl(253 100% 69%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MT03Logo;
