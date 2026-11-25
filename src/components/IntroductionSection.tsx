import React from 'react';
import { ArrowRight, Heart, Trees } from 'lucide-react';
import { LeafBranch } from './BotanicalDecoration';

interface IntroductionSectionProps {
  onLearnMore: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-ivory text-charcoal overflow-hidden">
      
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
          <div className="lg:col-span-6 relative z-10">
            
            {/* Small handwritten decorative text */}
            <span className="font-script text-2xl text-terracotta block mb-2">
              Warm hospitality rooted in the soil of Konkan
            </span>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-normal text-forest-900 leading-[1.15] mb-6">
              More Than a Stay.
              <br />
              <span className="italic font-light text-moss">A Feeling of Belonging.</span>
            </h2>

            {/* Verified narrative based strictly on actual resort details */}
            <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed mb-6">
              Nestled on the scenic Chiplun-Guhagar road in Rampur, <strong className="text-forest-900">Nature’s Harmony Resort</strong> is a tranquil, eco-conscious sanctuary created for travelers yearning to pause and immerse themselves in untouched nature.
            </p>

            <p className="text-sm sm:text-base text-charcoal/75 font-sans leading-relaxed mb-8">
              Hosted with personal care by <strong className="text-forest-900">Dr. Ravrane, Dr. Ma’am, Khedekar Ji, and Shree</strong>, every guest is welcomed not as a room occupant, but as extended family. Savor freshly prepared, authentic Konkani meals cooked with farm-fresh produce, breathe in pollution-free forest air, listen to the resident songbirds and pet ducks, and unwind in our covered pool.
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
                  <Heart className="w-4 h-4 text-terracotta" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-forest-900 text-base">Homely Konkani Food</h4>
                  <p className="text-xs text-charcoal/70">Fresh Ghawane, local fish & farm vegetables</p>
                </div>
              </div>
            </div>

            {/* Discover Story Button */}
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-ivory font-semibold text-xs uppercase tracking-wider transition-all duration-300 group"
            >
              <span>Discover Our Story & Hosts</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Editorial Overlapping Photo Composition */}
          <div className="lg:col-span-6">
            <div className="relative grid grid-cols-12 gap-3 sm:gap-4 items-center">
              
              {/* Photo 1: Cottage Front Facade & Palms */}
              <div className="col-span-6 relative z-10 group">
                <div className="overflow-hidden rounded-t-[2.5rem] rounded-b-2xl shadow-elevated border-2 border-ivory/80 transition-all duration-500 group-hover:-translate-y-1 bg-sand/30">
                  <img
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLe4qE_sG_5VMC3oTvTAKDieQRYHQq3EVSYWa0YS3lynhattOyIWAzepMb8rxkmt5_l2Mg7Rgpbxy9RB2Q9sOdcVwnwl6Z5qaNJVSilTiX3DMqFAmqa4LGjv_wI0dQrF8f-TaIxQ_8Oy1v8=s0"
                    alt="Two-story cottage facade at Nature's Harmony Resort"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-moss font-semibold">
                    Two-Story Cottage Verandah
                  </span>
                </div>
              </div>

              {/* Photo 2: Family Celebration in Gazebo & Evening Garden Trail */}
              <div className="col-span-6 space-y-4 relative z-20">
                {/* Celebration Feast photo */}
                <div className="overflow-hidden rounded-2xl rounded-tr-[2.5rem] shadow-warm border-2 border-ivory/80 group bg-sand/30">
                  <img
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLfEoCTUnKt2YWDPI5hFtY3g-MlJQpH575yBujL8nq9x3p4vYmZ_7jFoQITfn4tX2icZPeCkeP6Vs47TDNT83WnTiDADbb2f0X_NMLeiEiqJTO3YsawrU8OYHH9uxl9rlIgx4kAcJYEXn4DX=s0"
                    alt="Family celebration and feast in gazebo"
                    className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Evening Trail photo */}
                <div className="overflow-hidden rounded-2xl rounded-bl-[2.5rem] shadow-warm border-2 border-ivory/80 group bg-sand/30">
                  <img
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLegWOvSmpf1uGLkZMVz3WEchYQSMnQBlthExEgH7TnF2zZQXajrt4UT-SkriSsIiWqSOEb4iR03zw4pYpC8IJiRaKqA5nrsSUdpIJNsKjOo0wcsUVUB_RH8NSufiz179cqHHjyeG0MTd-w6=s0"
                    alt="Lantern-lit evening garden trail"
                    className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Organic Decorative Stamp */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-4 z-30 bg-sand/90 backdrop-blur-sm p-3 rounded-2xl border border-gold/40 shadow-polaroid rotate-3 text-center hidden sm:block">
                <span className="font-script text-terracotta text-xl block">Homely & Pure</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-forest-900 block font-semibold">
                  Fresh Farm Dining
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
