import React from 'react';
import { Compass, Calendar, Star, ArrowDown, Sparkles } from 'lucide-react';
import { LeafBranch } from './BotanicalDecoration';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Photograph from genuine resort gallery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/grass-cs/AABkmLcjDfWyeq_u1I-nl-xSRBdeJJmOhhEqAjnt7lmGPH0mfRkVOPo4vLahMu5sO77ml06Ni0FpGUGZsAvyFN8eKKSxAYB9bEmVwMqqCRTIbz1xXUR2QVVXSzXZdwU2X1GU2ma6LjOBHzXaxWDv=s0"
          alt="Nature's Harmony Resort cottage at dusk"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          loading="eager"
        />
        {/* Editorial Gradients & Forest Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/50 to-forest-950/70" />
        <div className="absolute inset-0 bg-forest-900/25 backdrop-contrast-[1.05]" />
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,26,16,0.6)_100%)]" />
      </div>

      {/* Decorative Botanical Leaf Accents */}
      <div className="absolute top-24 left-6 pointer-events-none opacity-20 text-gold hidden sm:block">
        <LeafBranch className="w-28 h-28" />
      </div>
      <div className="absolute bottom-28 right-8 pointer-events-none opacity-20 text-sand hidden sm:block">
        <LeafBranch className="w-36 h-36" flip={true} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-36 md:pb-32 w-full">
        <div className="max-w-3xl">
          
          {/* Subtle Cursive Header Tag */}
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-forest-900/70 backdrop-blur-md border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-script text-lg sm:text-xl text-sand tracking-wide">
              Escape · Unwind · Reconnect
            </span>
          </div>

          {/* Asymmetric Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-ivory leading-[1.1] tracking-tight mb-6">
            Find Your Peace.
            <br />
            <span className="italic font-light text-sand">Discover Your Harmony.</span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-base sm:text-lg text-ivory/85 font-sans font-normal leading-relaxed max-w-2xl mb-8">
            Escape the everyday and reconnect with nature, comfort, and unforgettable Konkani hospitality. 
            Tucked into the lush green landscapes of Chiplun, Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 bg-sand hover:bg-gold rounded-full shadow-elevated transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4 mr-2 text-forest-900" />
              <span>Explore The Resort</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ivory hover:text-gold bg-forest-900/60 hover:bg-forest-900/90 border border-sand/40 hover:border-gold rounded-full backdrop-blur-md transition-all duration-300"
            >
              <Calendar className="w-4 h-4 mr-2 text-gold" />
              <span>Plan Your Stay</span>
            </button>
          </div>

          {/* Real Social Proof / Rating Strip */}
          <div className="inline-flex items-center gap-4 pt-4 border-t border-ivory/15">
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-ivory/80 font-sans">
              <span className="font-bold text-ivory">4.7 / 5</span> on Google ·{' '}
              <span className="text-sand">Based on 628+ authentic guest reviews</span>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-ivory/60 hover:text-gold transition-colors duration-300 group"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
      </a>
    </section>
  );
};
