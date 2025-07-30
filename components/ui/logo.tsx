interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-10 h-10 sm:w-12 sm:h-12",
  }

  const textSizeClasses = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
  }

  const spacingClasses = {
    sm: "space-x-2",
    md: "space-x-2 sm:space-x-3",
    lg: "space-x-3",
  }

  return (
    <div className={`flex items-center ${spacingClasses[size]} ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background Circle with Gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F3E8FF" />
            </linearGradient>
          </defs>

          {/* Outer Ring */}
          <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" className="drop-shadow-lg" />

          {/* Inner Circle */}
          <circle cx="20" cy="20" r="14" fill="url(#innerGradient)" opacity="0.9" />

          {/* AI Brain Symbol */}
          <g transform="translate(20, 20)">
            {/* Central Node */}
            <circle cx="0" cy="0" r="2" fill="#8B5CF6" />

            {/* Neural Network Connections */}
            <g stroke="#8B5CF6" strokeWidth="1.5" opacity="0.8">
              <line x1="0" y1="0" x2="-6" y2="-4" />
              <line x1="0" y1="0" x2="6" y2="-4" />
              <line x1="0" y1="0" x2="-6" y2="4" />
              <line x1="0" y1="0" x2="6" y2="4" />
              <line x1="0" y1="0" x2="0" y2="-8" />
              <line x1="0" y1="0" x2="0" y2="8" />
            </g>

            {/* Outer Nodes */}
            <circle cx="-6" cy="-4" r="1.5" fill="#EC4899" />
            <circle cx="6" cy="-4" r="1.5" fill="#EC4899" />
            <circle cx="-6" cy="4" r="1.5" fill="#EC4899" />
            <circle cx="6" cy="4" r="1.5" fill="#EC4899" />
            <circle cx="0" cy="-8" r="1.5" fill="#EC4899" />
            <circle cx="0" cy="8" r="1.5" fill="#EC4899" />

            {/* Brand Symbol - Letter "A" integrated */}
            <path
              d="M-3,-6 L0,-10 L3,-6 M-2,-7 L2,-7"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col min-w-0">
        <span
          className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight`}
        >
          ADmyBRAND
        </span>
        <span className={`text-xs text-gray-400 -mt-1 tracking-wider ${size === "sm" ? "hidden sm:block" : ""}`}>
          AI SUITE
        </span>
      </div>
    </div>
  )
}
