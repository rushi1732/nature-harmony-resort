import React from 'react';

// Elegant SVG botanical leaves matching the organic editorial reference
export const LeafBranch: React.FC<{ className?: string; color?: string; flip?: boolean }> = ({
  className = "w-16 h-16",
  color = "currentColor",
  flip = false
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? '-scale-x-100' : ''}`}
      aria-hidden="true"
    >
      {/* Central Stem */}
      <path
        d="M20 85 C35 70, 50 45, 80 15"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Leaves with delicate veins */}
      <path
        d="M30 75 C25 60, 10 65, 12 78 C15 85, 25 80, 30 75 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M40 60 C40 45, 25 45, 28 58 C30 65, 38 65, 40 60 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M52 48 C65 42, 68 28, 55 32 C48 35, 48 45, 52 48 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M62 36 C55 22, 40 22, 45 35 C48 40, 58 40, 62 36 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M72 24 C85 18, 88 5, 75 10 C68 13, 68 22, 72 24 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Terminal Bud */}
      <path
        d="M80 15 C85 8, 92 6, 90 12 C88 16, 84 18, 80 15 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

export const OrganicStamp: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center border-2 border-gold/60 rounded-full w-28 h-28 p-2 text-center text-gold select-none rotate-[-6deg] ${className}`}>
      <span className="text-[9px] uppercase tracking-widest font-mono">KONKAN RETREAT</span>
      <span className="font-serif text-lg font-bold text-forest-900 leading-tight">4.7 ★</span>
      <span className="text-[8px] uppercase tracking-wider text-charcoal/70">CHIPLUN · 628+ REVIEWS</span>
    </div>
  );
};

export const TapeSnippet: React.FC<{ className?: string; text?: string }> = ({
  className = "",
  text = "Feel the Nature..."
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] bg-sand/80 backdrop-blur-sm border-x border-dashed border-terracotta/40 px-4 py-0.5 text-[11px] font-mono tracking-wider text-forest-900 shadow-sm z-10">
        NATURE'S HARMONY
      </div>
      {text && (
        <span className="font-script text-2xl text-terracotta transform -rotate-3 block">
          {text}
        </span>
      )}
    </div>
  );
};
