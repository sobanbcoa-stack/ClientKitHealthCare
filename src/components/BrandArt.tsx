import React from 'react';

/**
 * Iconic checkered-spine pixel T-Rex mascot directly inspired by the brand theme PDF.
 * Drawn on a crisp 22x23 pixel grid with zero anti-aliasing blur.
 */
export const PixelDino: React.FC<{
  className?: string;
  flip?: boolean;
}> = ({ className = 'w-32 h-32', flip = false }) => {
  // 22 columns x 23 rows bitmap:
  // 'B' = pure black pixel, 'W' = white checkered dorsal pixel, '.' = transparent
  const grid = [
    '..........BBBBBBBBBB..',
    '.........BWBWBBBBBBBB.',
    '........BWBWWBBBBBBBBB',
    '........WBWBBWWBBBBBBB',
    '........BWBWWBBBBBBBBB',
    '........WBWBBBBBBBBBBB',
    '........BWBBBBBBBBBBBB',
    '........WBWBBBBBB.....',
    '........BWBBBBBBBBBB..',
    '........WBWBBBBBBB....',
    'B.......BWBBBBBBB.....',
    'BB.....BWBWBBBBBBBB...',
    'BBB...BWBWBBBBBBBB.B..',
    'BWB..BWBWBBBBBBBB.....',
    'BBBBWBWBBBBBBBBBB.....',
    '.BBWBWBBBBBBBBBBB.....',
    '..BWBWBBBBBBBBBB......',
    '...BBBBBBBBBBBB.......',
    '....BBBBBBBBBB........',
    '.....BBB..BBB.........',
    '.....BB....BB.........',
    '.....BB....BB.........',
    '.....BBB...BBB........',
  ];

  const rects: React.ReactNode[] = [];
  grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === 'B' || ch === 'W') {
        rects.push(
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={1.03}
            height={1.03}
            fill={ch === 'B' ? '#050505' : '#FFFFFF'}
          />
        );
      }
    }
  });

  return (
    <svg
      viewBox="0 0 22 23"
      className={`pixel-crisp select-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      {rects}
    </svg>
  );
};

/**
 * Pixel red-capped spotted mushroom sitting on the green meadow grass.
 */
export const PixelMushroom: React.FC<{
  className?: string;
}> = ({ className = 'w-14 h-14' }) => {
  // 16x15 pixel grid:
  // K=#0B0B0B, R=#D81919, L=#F24444, D=#9A0E0E, W=#FFFFFF, C=#F7DFC2, S=#D9B38C
  const palette: Record<string, string> = {
    K: '#0B0B0B',
    R: '#D81919',
    L: '#F53B3B',
    D: '#9E1010',
    W: '#FFFFFF',
    C: '#FCE4C4',
    S: '#D4A87E',
  };

  const grid = [
    '.....KKKKKK.....',
    '...KKRRWWRRKK...',
    '..KRRWWLLWWRRK..',
    '.KRRRWWLLLRRRRK.',
    '.KRLRRRRRRWWRRK.',
    'KRRWWRRRRRWWRRRK',
    'KRRWWRRLLRRRRDRK',
    'KRRRRRWWLLRRRDRK',
    'KDRRRRWWRRRRRDDK',
    '.KKKKKKKKKKKKKK.',
    '....KSSCCCK.....',
    '....KSSCCCK.....',
    '....KSSCCCK.....',
    '...KKSSCCCKK....',
    '...KKKKKKKKK....',
  ];

  const rects: React.ReactNode[] = [];
  grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (palette[ch]) {
        rects.push(
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={1.04}
            height={1.04}
            fill={palette[ch]}
          />
        );
      }
    }
  });

  return (
    <svg viewBox="0 0 16 15" className={`pixel-crisp select-none ${className}`} aria-hidden="true">
      {rects}
    </svg>
  );
};

/**
 * Single crisp pixel heart icon used inside brand clusters and accents.
 */
export const PixelHeart: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = 'w-6 h-6', color = '#D81919' }) => {
  const grid = [
    '.XX.XX.',
    'XXXXXXX',
    'XXXXXXX',
    '.XXXXX.',
    '..XXX..',
    '...X...',
  ];

  const rects: React.ReactNode[] = [];
  grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === 'X') {
        rects.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={1.05} height={1.05} fill={color} />
        );
      }
    }
  });

  return (
    <svg viewBox="0 0 7 6" className={`pixel-crisp select-none ${className}`} aria-hidden="true">
      {rects}
    </svg>
  );
};

/**
 * Signature 3-heart asymmetric pixel cluster from Pages 1, 2, 3, 9, 10, 14 of the PDF.
 */
export const PixelHeartCluster: React.FC<{
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', color = '#D81919', size = 'md' }) => {
  const dims =
    size === 'sm'
      ? { box: 'w-14 h-12', h1: 'w-4 h-3.5', h2: 'w-4 h-3.5', h3: 'w-4 h-3.5' }
      : size === 'lg'
      ? { box: 'w-32 h-28', h1: 'w-10 h-9', h2: 'w-10 h-9', h3: 'w-10 h-9' }
      : { box: 'w-20 h-16', h1: 'w-6 h-5', h2: 'w-6 h-5', h3: 'w-6 h-5' };

  return (
    <div className={`select-none pointer-events-none ${dims.box} ${className}`} aria-hidden="true">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0">
          <PixelHeart className={dims.h1} color={color} />
        </div>
        <div className="absolute top-[30%] right-0">
          <PixelHeart className={dims.h2} color={color} />
        </div>
        <div className="absolute bottom-0 left-[26%]">
          <PixelHeart className={dims.h3} color={color} />
        </div>
      </div>
    </div>
  );
};

/**
 * Hand-drawn crimson highlighter circle matching Pages 4, 5, 6 of the PDF.
 */
export const RedMarkerCircle: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 86"
    fill="none"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M28 16C64 3 136 5 162 24C182 39 172 68 132 77C92 86 26 80 11 58C-1 40 16 14 58 10"
      stroke="#D81919"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);
