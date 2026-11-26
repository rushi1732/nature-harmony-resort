import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  Users,
  Check,
  Sparkles,
  MessageSquare,
  ChevronRight,
  Maximize2,
  X,
  Clock
} from 'lucide-react';
import {
  ROOM_CATEGORIES,
  RESORT_POLICIES,
  DIRECT_BOOKING_BENEFITS,
  RoomCategory
} from '../data/accommodationsData';
import { RESORT_INFO } from '../data/resortData';
import { LeafBranch } from './BotanicalDecoration';

export const AccommodationsSection: React.FC = () => {
  const navigate = useNavigate();

  // Selected room for detailed modal
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);

  // Selected plan map for each room category (e.g. room-only vs with-breakfast)
  const [selectedPlanIds, setSelectedPlanIds] = useState<Record<string, string>>({
    'semi-deluxe-ac': 'semi-with-breakfast',
    'super-deluxe-ac': 'super-with-breakfast',
    'two-story-cottage': 'cottage-stay-breakfast'
  });

  // Active photo index for modal
  const [modalPhotoIndex, setModalPhotoIndex] = useState<number>(0);

  // Lock body scroll when detail modal is active
  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedRoom]);

  const handleSelectPlan = (roomId: string, planId: string) => {
    setSelectedPlanIds((prev) => ({ ...prev, [roomId]: planId }));
  };

  const handleOpenDetails = (room: RoomCategory) => {
    setSelectedRoom(room);
    setModalPhotoIndex(0);
  };

  const handleCloseDetails = () => {
    setSelectedRoom(null);
  };

  // Direct internal navigation to "Plan Your Stay in Serenity" booking form
  const handleBookNow = (roomName: string, planName?: string) => {
    const params = new URLSearchParams();
    if (roomName) params.set('room', roomName);
    if (planName) params.set('plan', planName);
    navigate(`/booking?${params.toString()}`);
  };

  const handleWhatsAppEnquiry = (roomName: string, selectedPlanTitle?: string) => {
    const text = encodeURIComponent(
      `Hello Dr. Ravrane & Dr. Ma'am,\n\nI am visiting your website and would like to enquire about booking the *${roomName}*${
        selectedPlanTitle ? ` (${selectedPlanTitle})` : ''
      } at Nature's Harmony Resort.\n\nPlease share availability and confirm the booking procedure.\n\nThank you!`
    );
    window.open(`https://wa.me/${RESORT_INFO.rawPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="accommodations" className="relative py-20 sm:py-28 bg-ivory text-charcoal overflow-hidden border-t border-sand/40 scroll-mt-20">
      
      {/* Decorative Botanical Leaf Accents */}
      <div className="absolute top-12 left-4 pointer-events-none opacity-20 text-forest-800 hidden lg:block">
        <LeafBranch className="w-28 h-28" />
      </div>
      <div className="absolute bottom-16 right-4 pointer-events-none opacity-15 text-gold hidden lg:block">
        <LeafBranch className="w-32 h-32" flip={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-forest-900/10 border border-gold/30 text-forest-900 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Accommodations & Direct Booking</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-forest-950 tracking-tight mb-4">
            Rest in Nature's Lap
            <br />
            <span className="italic font-light text-moss">Boutique Luxury Suites & Cottages</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
            All suites are surrounded by serene betel-nut groves and feature modern split air conditioning, 
            24/7 hot water geysers, peaceful garden verandas, and complimentary access to our covered all-weather pool.
          </p>

          {/* Direct Booking Guarantee Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 text-left">
            {DIRECT_BOOKING_BENEFITS.map((b, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white border border-sand shadow-sm">
                <div className="flex items-center gap-1.5 text-forest-900 text-xs font-bold mb-1">
                  <Check className="w-3.5 h-3.5 text-forest-700 stroke-[3]" />
                  <span>{b.title}</span>
                </div>
                <p className="text-[11px] text-charcoal/70 leading-snug">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Parameters Strip */}
        <div className="bg-sand/30 border border-sand/60 rounded-2xl p-4 mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-charcoal/80 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-forest-800" />
              <span><strong>Check-in:</strong> 12:00 PM</span>
              <span className="text-charcoal/40">|</span>
              <span><strong>Check-out:</strong> 11:00 AM</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Users className="w-4 h-4 text-forest-800" />
              <span>Base Occupancy: 2 Adults + 1 Child</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-forest-900 font-semibold">Direct Resort Booking · Best Rates Guaranteed</span>
          </div>
        </div>

        {/* Room Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {ROOM_CATEGORIES.map((room) => {
            const currentPlanId = selectedPlanIds[room.id] || room.ratePlans[0]?.id;
            const currentPlan = room.ratePlans.find((p) => p.id === currentPlanId) || room.ratePlans[0];

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-sand/80 shadow-warm hover:shadow-elevated transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Room Photos (5 Cols) */}
                  <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between bg-stone-50/50">
                    <div>
                      {/* Main Room Image */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-inner">
                        <img
                          src={room.photos[0]}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-80" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          {room.isPopular && (
                            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-gold text-forest-950 rounded-full shadow-md">
                              Guest Favorite
                            </span>
                          )}
                          <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide bg-forest-900/85 backdrop-blur-md text-sand rounded-full border border-sand/20">
                            {room.subtitle}
                          </span>
                        </div>

                        {/* Photo Count and Zoom Trigger */}
                        <button
                          onClick={() => handleOpenDetails(room)}
                          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-ivory bg-forest-950/80 backdrop-blur-md border border-white/20 hover:bg-forest-900 transition-colors"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-gold" />
                          <span>{room.photos.length} Photos</span>
                        </button>
                      </div>

                      {/* Photo Thumbnails */}
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {room.photos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            onClick={() => handleOpenDetails(room)}
                            className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer border border-sand/60 hover:opacity-80 transition-opacity"
                          >
                            <img src={photo} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Room Specs */}
                    <div className="mt-4 pt-4 border-t border-sand/40 grid grid-cols-3 gap-2 text-center text-xs text-charcoal/80">
                      <div className="p-2 rounded-xl bg-ivory">
                        <span className="block text-[10px] text-charcoal/60 uppercase">Occupancy</span>
                        <span className="font-semibold text-forest-900">
                          {room.maxOccupancy.adults} Adults + {room.maxOccupancy.children} Child
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-ivory">
                        <span className="block text-[10px] text-charcoal/60 uppercase">Bedding</span>
                        <span className="font-semibold text-forest-900">{room.bedType}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-ivory">
                        <span className="block text-[10px] text-charcoal/60 uppercase">Room Size</span>
                        <span className="font-semibold text-forest-900">{room.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Room Details & Rate Plans (7 Cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Room Header */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-forest-950">
                          {room.name}
                        </h3>
                        {room.availabilityNote && (
                          <span className="text-xs text-terracotta font-medium bg-terracotta/10 px-2.5 py-1 rounded-full">
                            {room.availabilityNote}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                        {room.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.keyHighlights.map((hl, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sand/30 text-forest-900 border border-sand"
                          >
                            <Check className="w-3 h-3 text-forest-700" />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>

                      {/* Meal & Rate Plan Selection */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-forest-900">
                            Select Rate Plan & Meal Option:
                          </label>
                          <span className="text-[11px] text-forest-700 font-medium">
                            Direct Website 20% Discount
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {room.ratePlans.map((plan) => {
                            const isSelected = plan.id === currentPlanId;
                            return (
                              <div
                                key={plan.id}
                                onClick={() => handleSelectPlan(room.id, plan.id)}
                                className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                                  isSelected
                                    ? 'bg-forest-900 text-ivory border-gold shadow-md'
                                    : 'bg-stone-50 hover:bg-stone-100 text-charcoal border-stone-200'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className={`text-xs font-bold ${isSelected ? 'text-sand' : 'text-forest-950'}`}>
                                    {plan.name}
                                  </span>
                                  {plan.badge && (
                                    <span
                                      className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                                        isSelected
                                          ? 'bg-gold text-forest-950'
                                          : 'bg-forest-900/10 text-forest-900'
                                      }`}
                                    >
                                      {plan.badge}
                                    </span>
                                  )}
                                </div>

                                <div className="text-[11px] mb-2 opacity-85">
                                  {plan.mealPlan}
                                </div>

                                <div className="flex items-baseline gap-2 pt-2 border-t border-current/15">
                                  <span className="text-xs line-through opacity-60">
                                    ₹{plan.originalPrice.toLocaleString('en-IN')}
                                  </span>
                                  <span className="text-base font-bold text-gold">
                                    ₹{plan.offerPrice.toLocaleString('en-IN')}
                                  </span>
                                  <span className="text-[10px] opacity-75">/ night</span>
                                </div>
                                <div className="text-[10px] opacity-70 mt-0.5">
                                  + ₹{plan.tax.toLocaleString('en-IN')} taxes (Total ₹{plan.totalPrice.toLocaleString('en-IN')})
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Selected Plan Inclusions */}
                      {currentPlan && (
                        <div className="p-3.5 rounded-2xl bg-forest-50/60 border border-forest-100 mb-6">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-forest-900 block mb-1.5">
                            Plan Inclusions:
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-forest-950/80">
                            {currentPlan.inclusions.map((inc, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <Check className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="pt-4 border-t border-sand/50 flex flex-wrap items-center justify-between gap-4">
                      
                      {/* Price display */}
                      <div className="flex flex-col">
                        <span className="text-[11px] text-charcoal/60 uppercase tracking-wide">
                          Starting at
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-serif font-bold text-forest-950">
                            ₹{currentPlan?.offerPrice.toLocaleString('en-IN') || room.startingPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-charcoal/70">/ night + taxes</span>
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => handleOpenDetails(room)}
                          className="px-4 py-2.5 rounded-full text-xs font-semibold text-forest-900 bg-sand/50 hover:bg-sand border border-sand transition-all"
                        >
                          View Details
                        </button>

                        <button
                          onClick={() => handleWhatsAppEnquiry(room.name, currentPlan?.name)}
                          className="px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-sm flex items-center gap-1.5"
                          title="Enquire on WhatsApp directly"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </button>

                        <button
                          onClick={() => handleBookNow(room.name, currentPlan?.name)}
                          className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-forest-900 bg-sand hover:bg-gold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
                        >
                          <span>Book Now</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-sand/60 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-forest-950 text-ivory flex items-center justify-between border-b border-forest-800">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory">
                  {selectedRoom.name}
                </h3>
                <span className="text-xs text-sand/80 font-sans">
                  {selectedRoom.tagline}
                </span>
              </div>
              <button
                onClick={handleCloseDetails}
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-forest-800 text-ivory flex items-center justify-center transition-colors"
                aria-label="Close room details modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
              {/* Photo Carousel in Modal */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-900">
                <img
                  src={selectedRoom.photos[modalPhotoIndex]}
                  alt={`${selectedRoom.name} photo ${modalPhotoIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                
                {/* Photo indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {selectedRoom.photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalPhotoIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === modalPhotoIndex ? 'w-6 bg-gold' : 'w-2 bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-ivory border border-sand/50">
                  <span className="text-[10px] text-charcoal/60 uppercase block">Bed Type</span>
                  <span className="text-xs font-bold text-forest-950">{selectedRoom.bedType}</span>
                </div>
                <div className="p-3 rounded-xl bg-ivory border border-sand/50">
                  <span className="text-[10px] text-charcoal/60 uppercase block">Total Area</span>
                  <span className="text-xs font-bold text-forest-950">{selectedRoom.size}</span>
                </div>
                <div className="p-3 rounded-xl bg-ivory border border-sand/50">
                  <span className="text-[10px] text-charcoal/60 uppercase block">Adults</span>
                  <span className="text-xs font-bold text-forest-950">{selectedRoom.maxOccupancy.adults} Included</span>
                </div>
                <div className="p-3 rounded-xl bg-ivory border border-sand/50">
                  <span className="text-[10px] text-charcoal/60 uppercase block">Children</span>
                  <span className="text-xs font-bold text-forest-950">Up to {selectedRoom.maxOccupancy.children}</span>
                </div>
              </div>

              {/* Full Amenities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Room Features & Amenities:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedRoom.amenities.map((am, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-charcoal/80 p-2 rounded-lg bg-stone-50">
                      <Check className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rates Breakdown */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900 mb-3">
                  Available Rate Plans:
                </h4>
                <div className="space-y-3">
                  {selectedRoom.ratePlans.map((rp) => (
                    <div key={rp.id} className="p-4 rounded-xl border border-sand/80 bg-ivory/50 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-forest-950">{rp.name}</span>
                          <span className="text-[10px] bg-gold/30 text-forest-950 font-semibold px-2 py-0.5 rounded-full">
                            {rp.mealPlan}
                          </span>
                        </div>
                        <span className="text-xs text-charcoal/60 mt-0.5 block">
                          Base ₹{rp.offerPrice.toLocaleString('en-IN')} + ₹{rp.tax.toLocaleString('en-IN')} tax
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-lg font-bold text-forest-950">
                          ₹{rp.totalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-charcoal/60 block">per night total</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies info */}
              <div className="p-4 rounded-xl bg-forest-50/70 border border-forest-100 flex items-start gap-3">
                <Clock className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                <div className="text-xs text-forest-950/80 leading-relaxed">
                  <strong>Check-in: {RESORT_POLICIES.checkInTime} · Check-out: {RESORT_POLICIES.checkOutTime}</strong>
                  <br />
                  {RESORT_POLICIES.cancellationPolicy}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleCloseDetails}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-charcoal/80 hover:text-charcoal bg-white border border-stone-300"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    handleCloseDetails();
                    handleWhatsAppEnquiry(selectedRoom.name);
                  }}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    handleCloseDetails();
                    handleBookNow(selectedRoom.name);
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-forest-900 bg-sand hover:bg-gold shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Book This Room Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default AccommodationsSection;
