import React, { useState } from 'react';
import { Trees, Home, UtensilsCrossed, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { LeafBranch } from './BotanicalDecoration';

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    {
      title: "Nature Surroundings",
      desc: "Betel groves, birdwatching & quiet flora",
      icon: Trees,
    },
    {
      title: "Comfortable Stay",
      desc: "Spacious AC rooms, geysers & balconies",
      icon: Home,
    },
    {
      title: "Delicious Home Food",
      desc: "Fresh Ghawane & farm-grown vegetables",
      icon: UtensilsCrossed,
    },
    {
      title: "Personalized Care",
      desc: "Warm hospitality by Dr. Ravrane & team",
      icon: Star,
    },
  ];

  const exploreShowcase = [
    {
      title: "Evening Patio Dining",
      subtitle: "Al-fresco seating under warm string lights",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=800&auto=format&fit=crop"
    },
    {
      title: "Illuminated Gazebo",
      subtitle: "Poetry sessions & family celebrations",
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfJdu132n4YFj8sAjBfXekeIni-UAViOZrqk7WM4yYzC57LvS9j9GFNxgAUrE_tNJuy4sq2RDvn2PImvQa2ZeCr6kj0j8OUXoZE4Oys2LY3XZpSGVVlCR3vCTS1-HynkLCXdE8dXOEzGy4G=w800-no"
    },
    {
      title: "Bonfire Nights",
      subtitle: "Stargazing and cozy fireside warmth",
      url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=85&w=800&auto=format&fit=crop"
    },
    {
      title: "Palm Garden Walkway",
      subtitle: "Paved trails through betel nut trees",
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfIU7VnAFJqrJU5clh3B1QNCVI80ICYOsSZQPYmSX8q62eSc-LNG4_lE3LYmyu7KMNmFOtPruLM6U9hfOLg64XDTpqcUk4sORaAWhyf6p3WiEUQyCielnM7OVSZQnyGiU3MozL5qMR0lj4=w800-no"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % exploreShowcase.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + exploreShowcase.length) % exploreShowcase.length);
  };

  return (
    <section className="relative bg-forest-900 text-ivory pt-16 pb-20 sm:pt-24 sm:pb-28 curve-top curve-bottom overflow-hidden shadow-elevated">
      
      {/* Botanical Watermark Backgrounds */}
      <div className="absolute top-4 left-6 pointer-events-none opacity-10 text-sand">
        <LeafBranch className="w-48 h-48" />
      </div>
      <div className="absolute bottom-4 right-8 pointer-events-none opacity-10 text-gold">
        <LeafBranch className="w-56 h-56" flip={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Leaf Accents */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-4">
            <span className="w-12 sm:w-20 h-px bg-gold/40" />
            <h3 className="font-serif text-2xl sm:text-4xl text-sand tracking-wide font-normal">
              What Makes Us Special ?
            </h3>
            <span className="w-12 sm:w-20 h-px bg-gold/40" />
          </div>
          <p className="font-script text-xl sm:text-2xl text-sand/80 mt-2">
            The authentic essence of Konkani hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 sm:mb-20">
          
          {/* 4 Circular Feature Badges (matching reference!) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 text-center">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sand text-forest-900 flex items-center justify-center shadow-lg mb-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-ivory mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-sand/70 font-sans max-w-[140px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Scrapbook Tilted Polaroid Photo with Tape & Handwritten Script */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[280px]">
              
              {/* Taped Mask Effect on Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-sand/80 backdrop-blur-sm shadow-sm rotate-[-1deg] border-x border-dashed border-terracotta/40 z-20 flex items-center justify-center">
                <span className="text-[9px] uppercase tracking-widest font-mono text-forest-900 font-bold">
                  RAMPUR · CHIPLUN
                </span>
              </div>

              {/* Polaroid Frame */}
              <div className="bg-ivory p-3.5 pb-10 rounded-sm shadow-polaroid border border-sand/40">
                <div className="overflow-hidden rounded-xs bg-sand/30 aspect-[4/3]">
                  <img
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLcbmyEL7qZIfTTttJ011mAWZFgX5sX6RtkZO1hCfwENS4wcsdqXGYedRdzh7N4c1C09SuJRqR-uwk8CkJ2_48AaAtX4_7sWV_n0IDo0eVEyp299SoWYeN-KyCWX49o0PztN7aJqymvdhAh3=w1200-no"
                    alt="Scenic nature surroundings at Nature's Harmony Resort"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Handwritten Cursive Note */}
                <div className="mt-4 text-center">
                  <span className="font-script text-2xl sm:text-3xl text-terracotta font-semibold tracking-wide">
                    Feel the Nature...
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Explore Our Resort 4-Photo Showcase (Matching Reference Design Strip!) */}
        <div className="pt-8 border-t border-ivory/15">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl text-sand font-normal">
                Explore Our Resort
              </h4>
              <p className="text-xs sm:text-sm text-sand/70 font-sans mt-0.5">
                Authentic spaces for serenity, warmth, and togetherness
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-forest-800 hover:bg-gold text-sand hover:text-forest-950 flex items-center justify-center transition-colors border border-sand/30"
                aria-label="Previous showcase photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-forest-800 hover:bg-gold text-sand hover:text-forest-950 flex items-center justify-center transition-colors border border-sand/30"
                aria-label="Next showcase photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {exploreShowcase.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-forest-950/60 border shadow-warm transition-all duration-300 ${
                  idx === activeSlide
                    ? 'border-gold shadow-gold/20 scale-[1.02]'
                    : 'border-sand/20 hover:border-gold/60'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-forest-950 via-forest-950/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <h5 className="font-serif text-base sm:text-lg text-ivory font-medium group-hover:text-gold transition-colors">
                      {item.title}
                    </h5>
                    {idx === activeSlide && (
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs text-sand/70 font-sans mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {exploreShowcase.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide ? 'w-6 bg-gold' : 'w-2 bg-sand/30 hover:bg-sand/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
