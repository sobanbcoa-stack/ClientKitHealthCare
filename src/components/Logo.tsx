import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  theme?: 'dark' | 'light' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  theme = 'dark',
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  }[size];

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  }[size];

  const textColor =
    theme === 'light'
      ? 'text-slate-900'
      : theme === 'white'
      ? 'text-white'
      : 'text-slate-900';

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* 3D Dimensional Layered Logo Icon */}
      <div className={`relative ${iconDimensions} shrink-0`}>
        {/* Ambient Neon Backlight Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/40 via-teal-500/30 to-cyan-400/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Outer Bevel Frame */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-white/20 via-slate-700/40 to-slate-900/90 p-[1.5px] shadow-[0_8px_16px_-4px_rgba(16,185,129,0.35),0_2px_4px_-1px_rgba(0,0,0,0.2)]">
          {/* Inner Depth Chamber */}
          <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-[#0e1626] via-[#090f1d] to-[#04070e] flex items-center justify-center p-1.5 relative overflow-hidden">
            {/* Top Specular Glare */}
            <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/15 to-transparent pointer-events-none rounded-t-[10px]" />

            {/* Dimensional Growth Icon with Medical Cross Alignment */}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            >
              <defs>
                <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="barHigh" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
              </defs>

              {/* Bar 1 */}
              <rect
                x="4.5"
                y="19"
                width="4.5"
                height="8"
                rx="1.5"
                fill="url(#barGlow)"
                fillOpacity="0.45"
              />
              {/* Bar 2 */}
              <rect
                x="11"
                y="14"
                width="4.5"
                height="13"
                rx="1.5"
                fill="url(#barGlow)"
                fillOpacity="0.75"
              />
              {/* Bar 3 */}
              <rect
                x="17.5"
                y="9"
                width="4.5"
                height="18"
                rx="1.5"
                fill="url(#barGlow)"
              />
              {/* Bar 4: Apex Peak */}
              <rect
                x="24"
                y="4.5"
                width="4.5"
                height="22.5"
                rx="1.5"
                fill="url(#barHigh)"
              />

              {/* Upward Dominance Trendline Arrow */}
              <path
                d="M5 17L12 11.5L18 8L26.5 3.5M26.5 3.5H21M26.5 3.5V9"
                stroke="#FFFFFF"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Wordmark with Typographic Depth */}
      <div>
        <div
          className={`font-black tracking-tight font-sans ${textSizes} ${textColor} leading-none flex items-center`}
        >
          <span>Client</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 ml-0.5">
            Kit
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 shadow-[0_0_8px_#10b981]" />
        </div>
        {showTagline && (
          <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
            Territory Patient Monopoly
          </p>
        )}
      </div>
    </div>
  );
};
