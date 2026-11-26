import React from 'react';
import { Compass, Calendar, Star, ArrowDown, Sparkles } from 'lucide-react';
import { LeafBranch } from './BotanicalDecoration';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  return (
    <section id="home" className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Photograph: Authentic 48MP Nature's Harmony 2-Story Brick Cottage & Palm Groves */}
      <div className="absolute inset-0 z-0 bg-forest-950">
        <img
          src="https://lh3.googleusercontent.com/grass-cs/AABkmLfIU7VnAFJqrJU5clh3B1QNCVI80ICYOsSZQPYmSX8q62eSc-LNG4_lE3LYmyu7KMNmFOtPruLM6U9hfOLg64XDTpqcUk4sORaAWhyf6p3WiEUQyCielnM7OVSZQnyGiU3MozL5qMR0lj4=w2560-no"
          alt="Nature's Harmony Resort two-story cottage and tranquil palm groves"
          className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[10000ms]"
          loading="eager"
          decoding="async"
        />

        {/* Refined Directional Overlays: Asymmetric Left Gradient for Crisp Legibility, Center/Right Crystal Clear */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-forest-950/95 via-forest-950/60 via-45% to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-32 z-10 bg-gradient-to-b from-forest-950/85 via-forest-950/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 z-10 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent pointer-events-none" />
      </div>

      {/* Decorative Botanical Leaf Accents */}
      <div className="absolute top-28 left-6 pointer-events-none opacity-25 text-gold hidden sm:block z-20">
        <LeafBranch className="w-28 h-28" />
      </div>
      <div className="absolute bottom-32 right-8 pointer-events-none opacity-20 text-sand hidden sm:block z-20">
        <LeafBranch className="w-36 h-36" flip={true} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28 md:pt-36 md:pb-36 w-full">
        <div className="max-w-3xl">
          
          {/* Subtle Cursive Header Tag */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-forest-900/80 backdrop-blur-md border border-gold/40 shadow-warm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-script text-lg sm:text-2xl text-sand tracking-wide">
              Escape · Unwind · Reconnect
            </span>
          </div>

          {/* Asymmetric Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-ivory leading-[1.1] tracking-tight mb-6 drop-shadow-md">
            Find Your Peace.
            <br />
            <span className="italic font-light text-sand">Discover Your Harmony.</span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-base sm:text-lg text-ivory/90 font-sans font-normal leading-relaxed max-w-2xl mb-8 drop-shadow-sm">
            Escape the everyday and reconnect with nature, comfort, and unforgettable Konkani hospitality. 
            Tucked into the lush green landscapes of Chiplun, Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 bg-sand hover:bg-gold rounded-full shadow-elevated transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4 mr-2 text-forest-900" />
              <span>Explore The Resort</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ivory hover:text-gold bg-forest-900/70 hover:bg-forest-900/90 border border-sand/50 hover:border-gold rounded-full backdrop-blur-md transition-all duration-300 shadow-warm"
            >
              <Calendar className="w-4 h-4 mr-2 text-gold" />
              <span>Plan Your Stay</span>
            </button>
          </div>

          {/* Real Social Proof / Rating Strip */}
          <div className="inline-flex items-center gap-4 pt-4 border-t border-ivory/20">
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-ivory/90 font-sans">
              <span className="font-bold text-ivory">4.7 / 5</span> on Google ·{' '}
              <span className="text-sand">Based on 628+ authentic guest reviews</span>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-ivory/70 hover:text-gold transition-colors duration-300 group"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
      </a>
    </section>
  );
};
