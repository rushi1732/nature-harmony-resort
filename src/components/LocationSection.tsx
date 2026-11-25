import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';
import { LeafBranch } from './BotanicalDecoration';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-20 sm:py-28 bg-ivory text-charcoal overflow-hidden">
      
      {/* Decorative leaf watermarks */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-20 text-moss">
        <LeafBranch className="w-36 h-36" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-script text-2xl text-terracotta block mb-1">
            Easy Escape From Urban Life
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-forest-900 leading-tight mb-4">
            How to Reach Us
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 font-sans leading-relaxed">
            Conveniently positioned on the Chiplun-Guhagar Highway in Rampur, surrounded by serene countryside yet easily accessible by road and Konkan Railway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address & Travel Guide Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 shadow-warm border border-sand/60">
            <div>
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-forest-900 text-gold flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-forest-900 mb-1">
                    Resort Location
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                    {RESORT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Driving Distances */}
              <div className="space-y-3 pt-4 border-t border-sand/50 mb-6">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-sand/30">
                  <span className="text-charcoal/70">Guhagar Beach</span>
                  <span className="font-semibold text-forest-900">{RESORT_INFO.distance.guhagarBeach}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-sand/30">
                  <span className="text-charcoal/70">Chiplun Railway Station</span>
                  <span className="font-semibold text-forest-900">{RESORT_INFO.distance.chiplunStation}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-sand/30">
                  <span className="text-charcoal/70">Pune via Kumbharli Ghat</span>
                  <span className="font-semibold text-forest-900">{RESORT_INFO.distance.pune}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5">
                  <span className="text-charcoal/70">Mumbai via NH 66</span>
                  <span className="font-semibold text-forest-900">{RESORT_INFO.distance.mumbai}</span>
                </div>
              </div>

              {/* Business Hours & Direct Line */}
              <div className="bg-sand/30 rounded-2xl p-4 space-y-2.5 border border-sand/60">
                <div className="flex items-center gap-2.5 text-xs text-charcoal">
                  <Clock className="w-4 h-4 text-moss shrink-0" />
                  <span><strong>Business Hours:</strong> Open 24 Hours / 7 Days</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal">
                  <Phone className="w-4 h-4 text-moss shrink-0" />
                  <span><strong>Contact Host:</strong> +91 7666173397</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-sand/50 flex flex-col sm:flex-row gap-3">
              <a
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-center rounded-full bg-forest-900 hover:bg-forest-800 text-sand hover:text-ivory text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${RESORT_INFO.rawPhone}`}
                className="py-3 px-5 text-center rounded-full bg-sand hover:bg-gold text-forest-900 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Host</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-elevated border border-sand/60 relative min-h-[380px] lg:min-h-full">
            <iframe
              title="Nature's Harmony Resort Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15250.627685764024!2d73.4883404!3d17.5188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9fc5460c10361%3A0x928a0b504b3e8302!2sNature&#39;s%20Harmony%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay Banner */}
            <div className="absolute top-4 right-4 bg-forest-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/40 text-[11px] font-mono text-sand shadow-md">
              Rampur, Chiplun · Maharashtra 415701
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
