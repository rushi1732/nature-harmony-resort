import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, Heart } from 'lucide-react';
import { RESORT_INFO, SERVICES } from '../data/resortData';
import { LeafBranch } from './BotanicalDecoration';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="relative bg-forest-950 text-ivory pt-20 pb-12 overflow-hidden border-t border-forest-900">
      
      {/* Decorative Botanical Leaf Accents */}
      <div className="absolute top-10 left-8 pointer-events-none opacity-10 text-sand">
        <LeafBranch className="w-56 h-56" />
      </div>
      <div className="absolute bottom-6 right-8 pointer-events-none opacity-10 text-gold">
        <LeafBranch className="w-64 h-64" flip={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer CTA Banner (Matching reference aesthetic!) */}
        <div className="bg-forest-900/90 rounded-3xl p-8 sm:p-12 mb-16 border border-forest-800 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-script text-2xl text-sand block mb-1">
              Ready for a peaceful escape?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ivory mb-2">
              Stay Close to Nature. Feel Closer to Yourself.
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-sans leading-relaxed">
              Book directly with our hosts for genuine Konkani home hospitality, clean covered pool recreation, and unforgettable memories.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-full bg-sand hover:bg-gold text-forest-900 font-semibold text-xs uppercase tracking-wider shadow-md transition-all hover:shadow-lg active:scale-95"
            >
              Enquire Your Stay →
            </button>
            <a
              href={`https://wa.me/${RESORT_INFO.rawPhone}?text=Hello%20Nature%27s%20Harmony%20Resort%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-forest-950/80 hover:bg-forest-950 text-sand border border-sand/30 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-forest-900">
          
          {/* Brand & Narrative */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-forest-900 text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
                  <path d="M12 2L4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-8-7z" />
                  <path d="M12 8c-1.5 2-3 3-3 5a3 3 0 0 0 6 0c0-2-1.5-3-3-5z" fill="currentColor" fillOpacity="0.25" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-ivory">
                {RESORT_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-sans mb-4">
              A nature-immersed holiday retreat in Rampur, Chiplun, Maharashtra. Known for delicious home-cooked Konkani food, family care, covered pool, and heartfelt hospitality.
            </p>

            <p className="font-script text-xl text-sand">
              "Where Nature Meets Your Soul"
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-semibold text-sand mb-4 uppercase tracking-wider text-xs">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory/75 font-sans">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">The Resort</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#experiences" className="hover:text-gold transition-colors">Experiences</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Guest Reviews</a></li>
              <li><a href="#location" className="hover:text-gold transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Resort Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-sand mb-4 uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory/75 font-sans">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-gold transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-sand mb-4 uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-ivory/75 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>On Chiplun Guhagar Road, Rampur, Chiplun, Maharashtra 415701</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${RESORT_INFO.rawPhone}`} className="hover:text-gold">
                  +91 7666173397
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Monday – Sunday: 24 Hours Open</span>
              </div>
              <div className="pt-2">
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sand hover:text-gold underline underline-offset-4"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60 font-sans">
          <p>© 2026 Nature's Harmony Resort. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta inline" />
            <span>for peaceful nature retreats in Konkan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
