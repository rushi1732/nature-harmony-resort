import React, { useState, useEffect } from 'react';
import { Compass, Calendar, Star, ArrowDown, Sparkles, Eye, Check } from 'lucide-react';
import { LeafBranch } from './BotanicalDecoration';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

interface HeroScene {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  url: string;
}

const HERO_SCENES: HeroScene[] = [
  {
    id: 'twilight-villa',
    title: 'Twilight Homestay Villa',
    subtitle: 'Warm evening glow, glowing lights & verandah',
    badge: '4K Ultra HD',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=92&w=2560&auto=format&fit=crop'
  },
  {
    id: 'resort-cottage-4k',
    title: "Nature's Harmony 48MP Cottage",
    subtitle: 'Authentic 2-story brick cottage & palm groves',
    badge: '8K / 48MP Authentic',
    url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfIU7VnAFJqrJU5clh3B1QNCVI80ICYOsSZQPYmSX8q62eSc-LNG4_lE3LYmyu7KMNmFOtPruLM6U9hfOLg64XDTpqcUk4sORaAWhyf6p3WiEUQyCielnM7OVSZQnyGiU3MozL5qMR0lj4=w2560-no'
  },
  {
    id: 'mountain-canopy',
    title: 'Konkan Nature Canopy & Mist',
    subtitle: 'Authentic 4K morning sun & Western Ghats trees',
    badge: '4K Ultra HD',
    url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcbmyEL7qZIfTTttJ011mAWZFgX5sX6RtkZO1hCfwENS4wcsdqXGYedRdzh7N4c1C09SuJRqR-uwk8CkJ2_48AaAtX4_7sWV_n0IDo0eVEyp299SoWYeN-KyCWX49o0PztN7aJqymvdhAh3=w2560-no'
  },
  {
    id: 'dusk-cottage',
    title: 'Resort Cottage Twilight Glow',
    subtitle: 'Warm illuminated balconies & peaceful dusk',
    badge: 'Authentic Dusk',
    url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcjDfWyeq_u1I-nl-xSRBdeJJmOhhEqAjnt7lmGPH0mfRkVOPo4vLahMu5sO77ml06Ni0FpGUGZsAvyFN8eKKSxAYB9bEmVwMqqCRTIbz1xXUR2QVVXSzXZdwU2X1GU2ma6LjOBHzXaxWDv=s0'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const activeScene = HERO_SCENES[activeSceneIndex];

  // Auto-rotate scenes smoothly every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % HERO_SCENES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Photographs with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 bg-forest-950">
        {HERO_SCENES.map((scene, idx) => (
          <div
            key={scene.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSceneIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={scene.url}
              alt={scene.title}
              className="w-full h-full object-cover object-center transform transition-transform duration-[12000ms] scale-100 hover:scale-105"
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}

        {/* Refined Directional Overlays: Asymmetric Left Gradient for Crisp Legibility, Center/Right Crystal Clear */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-forest-950/95 via-forest-950/65 via-45% to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-32 z-20 bg-gradient-to-b from-forest-950/85 via-forest-950/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 z-20 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent pointer-events-none" />
      </div>

      {/* Decorative Botanical Leaf Accents */}
      <div className="absolute top-28 left-6 pointer-events-none opacity-25 text-gold hidden sm:block z-30">
        <LeafBranch className="w-28 h-28" />
      </div>
      <div className="absolute bottom-32 right-8 pointer-events-none opacity-20 text-sand hidden sm:block z-30">
        <LeafBranch className="w-36 h-36" flip={true} />
      </div>

      {/* Top-Right HD Quality Indicator */}
      <div className="absolute top-24 right-6 sm:right-10 z-30 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/80 backdrop-blur-md border border-gold/40 text-sand text-xs shadow-warm">
        <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
        <span className="font-mono text-[11px] tracking-wider uppercase">
          {activeScene.badge}
        </span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28 md:pt-36 md:pb-36 w-full">
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

        {/* Interactive HD Photo Scene Switcher Pills */}
        <div className="mt-12 pt-6 border-t border-ivory/15 hidden sm:flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-sand/80 flex items-center gap-1.5 mr-2">
            <Eye className="w-3.5 h-3.5 text-gold" /> View HD Scenes:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {HERO_SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`group px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  idx === activeSceneIndex
                    ? 'bg-sand text-forest-950 font-semibold shadow-warm scale-105'
                    : 'bg-forest-900/60 hover:bg-forest-900/90 text-ivory/80 hover:text-gold border border-ivory/15'
                }`}
                title={scene.subtitle}
              >
                {idx === activeSceneIndex && <Check className="w-3 h-3 text-forest-900" />}
                <span>{scene.title}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                  idx === activeSceneIndex ? 'bg-forest-900/20 text-forest-950' : 'bg-forest-950/40 text-gold'
                }`}>
                  {scene.badge.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-ivory/70 hover:text-gold transition-colors duration-300 group"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
      </a>
    </section>
  );
};
