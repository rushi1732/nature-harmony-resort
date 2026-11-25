import React, { useState } from 'react';
import {
  ShieldCheck,
  Users,
  Palmtree,
  Heart,
  Leaf,
  Sparkles,
  Waves,
  Calendar,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { SERVICES, ServiceItem, getOptimizedPhotoUrl } from '../data/resortData';
import { LeafBranch } from './BotanicalDecoration';

interface ServicesSectionProps {
  onEnquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Users': return Users;
      case 'Palmtree': return Palmtree;
      case 'Heart': return Heart;
      case 'Leaf': return Leaf;
      case 'Sparkles': return Sparkles;
      case 'Waves': return Waves;
      case 'Calendar': return Calendar;
      default: return Leaf;
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-ivory text-charcoal overflow-hidden">
      
      {/* Decorative Botanical Leaf Accents */}
      <div className="absolute top-12 left-4 pointer-events-none opacity-20 text-moss">
        <LeafBranch className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="font-script text-2xl text-terracotta block mb-1">
            Curated Hospitality & Amenities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-forest-900 leading-tight mb-4">
            Services & Resort Offerings
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans leading-relaxed">
            From all-inclusive family holidays and romantic honeymoons to group reunions and covered pool dips, discover everything awaiting your arrival.
          </p>
        </div>

        {/* Asymmetrical Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-warm border border-sand/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden bg-sand/30">
                  <img
                    src={getOptimizedPhotoUrl(service.photoUrl, 600)}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-ivory/90 text-forest-900 shadow-sm backdrop-blur-sm">
                    {service.badge}
                  </span>

                  {/* Icon badge floating on image */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-forest-900/90 text-gold flex items-center justify-center border border-gold/30 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-forest-900 mb-2 group-hover:text-terracotta transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed line-clamp-3 mb-4">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-3 border-t border-sand/50 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-moss hover:text-forest-900 underline underline-offset-4 decoration-sand"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => onEnquireService(service.title)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-900 bg-sand/80 hover:bg-gold rounded-full transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-ivory rounded-3xl max-w-lg w-full overflow-hidden shadow-elevated border border-sand">
            {/* Modal Image */}
            <div className="relative h-56 bg-forest-950">
              <img
                src={selectedService.photoUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4">
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-gold text-forest-900 font-bold">
                  {selectedService.badge}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-forest-900 mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm text-charcoal/85 leading-relaxed mb-6 font-sans">
                {selectedService.fullDesc}
              </p>

              <div className="bg-sand/40 rounded-xl p-3 mb-6 flex items-center gap-3 border border-sand">
                <CheckCircle2 className="w-5 h-5 text-moss shrink-0" />
                <span className="text-xs text-charcoal/80">
                  Direct enquiry via WhatsApp to verify dates and custom packages.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal/70 hover:text-charcoal"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onEnquireService(title);
                  }}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-forest-900 bg-sand hover:bg-gold rounded-full shadow-md"
                >
                  Enquire About {selectedService.title} →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
