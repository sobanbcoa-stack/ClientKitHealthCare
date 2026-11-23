import React from 'react';
import { PixelHeart } from './BrandArt';

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
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  }[size];

  const primaryColor = theme === 'white' ? 'text-white' : 'text-[#0B0B0B]';

  return (
    <div className={`inline-flex flex-col select-none whitespace-nowrap shrink-0 ${className}`}>
      <div
        className={`font-display font-black uppercase tracking-tight ${textSizes} leading-none flex items-center gap-1`}
      >
        <span className={primaryColor}>CLIENT</span>
        <span className="text-[#D81919]">KIT</span>
        <PixelHeart className="w-3.5 h-3 ml-0.5 shrink-0" color="#D81919" />
      </div>
      {showTagline && (
        <span
          className={`text-[10px] font-mono uppercase tracking-[0.16em] mt-1.5 ${
            theme === 'white' ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          10-KM Healthcare Dominance
        </span>
      )}
    </div>
  );
};
