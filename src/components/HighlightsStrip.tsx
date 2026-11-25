import React from 'react';
import { Trees, Home, UtensilsCrossed, Star } from 'lucide-react';
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

  return (
    <section className="relative bg-forest-900 text-ivory py-16 sm:py-24 curve-top curve-bottom overflow-hidden shadow-elevated">
      
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
          <p className="font-script text-xl text-sand/80 mt-2">
            The authentic essence of Konkani hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
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

          {/* Scrapbook Tilted Polaroid Photo with Tape & Handwritten Script (as seen in user uploaded reference!) */}
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
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLcK7U9p__FGK899uzGsc4C0kgsbnTN4hTnh79TnFLzUVsY_hyPAs7ryA8GH55YnXxrvHdzkABc6muyO1SW2hH6apV1ddakQ2IRUMDi-3cYE_uUGupfOA7OD3DbEsdrnP8q-6RiksRjINqMA=s0"
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

      </div>
    </section>
  );
};
