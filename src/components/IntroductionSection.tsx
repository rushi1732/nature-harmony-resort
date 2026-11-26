import React from 'react';
import { ArrowRight, Trees, Sparkles } from 'lucide-react';
import { LeafBranch } from './BotanicalDecoration';

interface IntroductionSectionProps {
  onLearnMore: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-ivory text-charcoal overflow-hidden scroll-mt-20">
      
      {/* Decorative background leaf illustration */}
      <div className="absolute top-10 right-4 pointer-events-none opacity-20 text-moss">
        <LeafBranch className="w-40 h-40" />
      </div>
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-15 text-gold">
        <LeafBranch className="w-36 h-36" flip={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Narrative */}
          <div className="lg:col-span-5 relative z-10">
            
            {/* Small handwritten decorative text */}
            <span className="font-script text-2xl text-terracotta block mb-2">
              Warm Konkani Hospitality · Since Inception
            </span>

            {/* Editorial Heading Matching Inspiration */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-normal text-forest-900 leading-[1.15] mb-5">
              A Stay Beyond
              <br />
              <span className="font-script italic text-gold font-normal">Just a Room</span>
            </h2>

            {/* Verified narrative based strictly on actual resort details */}
            <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed mb-6">
              Relax in our peaceful nature retreat surrounded by tropical greenery, savor wholesome Konkani home-cooked meals, and create unforgettable memories with loved ones.
            </p>

            <p className="text-sm sm:text-base text-charcoal/70 font-sans leading-relaxed mb-8">
              Hosted with personal devotion by <strong className="text-forest-900">Dr. Ravrane, Dr. Ma’am, Khedekar Ji, and Shree</strong>, Nature’s Harmony Resort on Chiplun-Guhagar Road in Rampur offers fresh Konkani farm food, covered swimming pool relaxation, and pristine Konkan mountain air.
            </p>

            {/* Key highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-sand/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sand/60 text-forest-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Trees className="w-4 h-4 text-moss" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-forest-900 text-base">Serene Greenery</h4>
                  <p className="text-xs text-charcoal/70">Betel palms, fruit groves, & forest birds</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sand/60 text-forest-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-forest-900 text-base">Homely Feasts</h4>
                  <p className="text-xs text-charcoal/70">Fresh Ghawane, fish thali & farm veg</p>
                </div>
              </div>
            </div>

            {/* Know More CTA Button */}
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-ivory font-semibold text-xs uppercase tracking-wider transition-all duration-300 group shadow-sm"
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: 3-Photo Editorial Composition (Matching User Uploaded Mockup) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 items-stretch">
              
              {/* Photo 1: Cozy Wooden Bedroom */}
              <div className="overflow-hidden rounded-2xl sm:rounded-t-[2.5rem] sm:rounded-b-2xl shadow-elevated border-2 border-ivory group bg-sand/20">
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=90&w=800&auto=format&fit=crop"
                    alt="Cozy wooden resort bedroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 inset-x-3 text-center text-xs font-serif text-ivory drop-shadow-md">
                    Cozy Cottage Rooms
                  </span>
                </div>
              </div>

              {/* Photo 2: Traditional Konkani Dining Spread */}
              <div className="overflow-hidden rounded-2xl shadow-elevated border-2 border-ivory group bg-sand/20 sm:translate-y-4">
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=90&w=800&auto=format&fit=crop"
                    alt="Freshly cooked Konkani feast served on banana leaf"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 inset-x-3 text-center text-xs font-serif text-ivory drop-shadow-md">
                    Home-Cooked Feasts
                  </span>
                </div>
              </div>

              {/* Photo 3: Balcony Sitting Area Overlooking Nature */}
              <div className="overflow-hidden rounded-2xl sm:rounded-t-2xl sm:rounded-b-[2.5rem] shadow-elevated border-2 border-ivory group bg-sand/20 sm:-translate-y-2">
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=90&w=800&auto=format&fit=crop"
                    alt="Verandah balcony overlooking lush trees"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 inset-x-3 text-center text-xs font-serif text-ivory drop-shadow-md">
                    Nature Balcony Views
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
