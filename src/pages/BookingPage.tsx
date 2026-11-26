import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { LeafBranch } from '../components/BotanicalDecoration';
import { RESORT_INFO } from '../data/resortData';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Pre-fill from query params if available
  const initialType = searchParams.get('type') || searchParams.get('enquiryType') || searchParams.get('service') || 'Family Stay';
  const initialRoom = searchParams.get('room') || 'Deluxe AC Cottage Room';

  // Today and tomorrow for default dates
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: initialType,
    room: initialRoom,
    checkIn: today,
    checkOut: tomorrow,
    guests: '2 Adults',
    notes: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update enquiryType or room if searchParams change
  useEffect(() => {
    const qType = searchParams.get('type') || searchParams.get('enquiryType') || searchParams.get('service');
    if (qType) {
      setFormData(prev => ({ ...prev, enquiryType: qType }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 1;
    const start = new Date(formData.checkIn).getTime();
    const end = new Date(formData.checkOut).getTime();
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone or WhatsApp number.');
      return;
    }
    if (!formData.checkIn || !formData.checkOut) {
      setErrorMsg('Please select both Check-In and Check-Out dates.');
      return;
    }
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      setErrorMsg('Check-Out date must be after Check-In date.');
      return;
    }

    // Compose formatted WhatsApp enquiry message
    const message = [
      `*🌿 STAY ENQUIRY — NATURE'S HARMONY RESORT 🌿*`,
      `------------------------------------------`,
      `👤 *Guest Name:* ${formData.name.trim()}`,
      `📞 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      formData.email ? `✉️ *Email ID:* ${formData.email.trim()}` : null,
      `🏡 *Enquiry Type:* ${formData.enquiryType}`,
      `🛏️ *Room Preference:* ${formData.room}`,
      `📅 *Check-In Date:* ${formData.checkIn}`,
      `📅 *Check-Out Date:* ${formData.checkOut} (${nights} ${nights === 1 ? 'Night' : 'Nights'})`,
      `👥 *Number of Guests:* ${formData.guests}`,
      formData.notes ? `📝 *Special Notes / Food:* ${formData.notes.trim()}` : null,
      `------------------------------------------`,
      `Hello Nature's Harmony Resort, I would like to check availability and tariff for the above stay. Please share confirmation and details. Thank you!`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${RESORT_INFO.rawPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-forest-950 text-ivory font-sans relative overflow-x-hidden selection:bg-gold selection:text-forest-950">
      
      {/* Background Photograph with Subtle Dark Forest Wash */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/grass-cs/AABkmLfIU7VnAFJqrJU5clh3B1QNCVI80ICYOsSZQPYmSX8q62eSc-LNG4_lE3LYmyu7KMNmFOtPruLM6U9hfOLg64XDTpqcUk4sORaAWhyf6p3WiEUQyCielnM7OVSZQnyGiU3MozL5qMR0lj4=w2560-no"
          alt="Nature's Harmony Resort background"
          className="w-full h-full object-cover object-center scale-105 opacity-25 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/95 via-forest-950/85 to-forest-950" />
      </div>

      {/* Decorative Botanical Watermarks */}
      <div className="fixed top-20 left-4 pointer-events-none opacity-20 text-gold z-0 hidden md:block">
        <LeafBranch className="w-48 h-48" />
      </div>
      <div className="fixed bottom-10 right-4 pointer-events-none opacity-15 text-sand z-0 hidden md:block">
        <LeafBranch className="w-56 h-56" flip={true} />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-20 border-b border-ivory/10 bg-forest-950/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo linking to Home */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-forest-900/80 text-gold group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
                <path d="M12 2L4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-8-7z" />
                <path d="M12 8c-1.5 2-3 3-3 5a3 3 0 0 0 6 0c0-2-1.5-3-3-5z" fill="currentColor" fillOpacity="0.25" />
                <path d="M12 18v-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-ivory">
                Nature's Harmony
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-sand/80 -mt-0.5">
                Resort · Chiplun
              </span>
            </div>
          </Link>

          {/* Back to Home CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESORT_INFO.rawPhone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-medium text-sand hover:text-gold transition-colors py-2 px-3 rounded-full border border-gold/30 bg-forest-900/60"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 7666173397</span>
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-sand/15 hover:bg-sand/30 text-sand hover:text-ivory text-xs sm:text-sm font-medium border border-sand/30 transition-all duration-300 shadow-sm hover:-translate-x-0.5"
            >
              <ArrowLeft className="w-4 h-4 text-gold" />
              <span>Back to Home</span>
            </Link>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-forest-900/80 backdrop-blur-md border border-gold/30 shadow-warm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-script text-lg sm:text-xl text-sand tracking-wide">
              Direct Booking & Stay Enquiry
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory tracking-tight mb-4 drop-shadow-md">
            Plan Your Stay in Serenity
          </h1>

          <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed max-w-xl mx-auto">
            Fill out your details below to check availability and tariff. Your booking enquiry opens directly with our resort hosts via WhatsApp for immediate personal assistance.
          </p>

          {/* Quick Host Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-ivory/15 text-xs text-sand/90">
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <strong>4.7 / 5 Rating</strong> (628+ Reviews)
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-moss" />
              Direct Host Booking (No Booking Fees)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold" />
              24/7 Front Desk Assistance
            </span>
          </div>

        </div>

        {/* Booking Form Card */}
        <div className="bg-ivory text-charcoal rounded-3xl p-6 sm:p-10 lg:p-12 shadow-elevated border-2 border-sand/60 relative overflow-hidden">
          
          {/* Subtle Decorative Botanical Corner */}
          <div className="absolute top-0 right-0 pointer-events-none opacity-10 text-moss">
            <LeafBranch className="w-36 h-36" />
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6 sm:space-y-7 relative z-10">
            
            {/* Error Message Alert */}
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3 animate-shake">
                <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* FIELD 1: Your Name – Full width */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 mb-2 font-serif">
                1. Your Name <span className="text-terracotta">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                required
                className="w-full px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal placeholder:text-charcoal/40 text-sm sm:text-base transition-all shadow-sm outline-none"
              />
            </div>

            {/* FIELD 2: Phone Number / WhatsApp – Full width */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 mb-2 font-serif">
                2. Phone Number / WhatsApp <span className="text-terracotta">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                required
                className="w-full px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal placeholder:text-charcoal/40 text-sm sm:text-base transition-all shadow-sm outline-none"
              />
            </div>

            {/* FIELD 3: Email ID – Full width */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 mb-2 font-serif">
                3. Email ID <span className="text-xs font-normal text-charcoal/50 lowercase">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul.sharma@example.com"
                className="w-full px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal placeholder:text-charcoal/40 text-sm sm:text-base transition-all shadow-sm outline-none"
              />
            </div>

            {/* FIELD 4: Enquiry Type – Full width dropdown */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 mb-2 font-serif">
                4. Enquiry Type <span className="text-terracotta">*</span>
              </label>
              <div className="relative">
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal text-sm sm:text-base transition-all shadow-sm appearance-none outline-none cursor-pointer"
                >
                  <option value="All Inclusive Stay">All Inclusive Stay</option>
                  <option value="Family Stay">Family Stay</option>
                  <option value="Holiday Resort">Holiday Resort</option>
                  <option value="Honeymoon">Honeymoon</option>
                  <option value="Nature Experience">Nature Experience</option>
                  <option value="Swimming Pool Enquiry">Swimming Pool Enquiry</option>
                  <option value="Wedding & Group Venue">Wedding & Group Venue</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-forest-900">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* FIELD 5: Room – Full width dropdown */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 mb-2 font-serif">
                5. Room Preference <span className="text-terracotta">*</span>
              </label>
              <div className="relative">
                <select
                  name="room"
                  value={formData.room}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal text-sm sm:text-base transition-all shadow-sm appearance-none outline-none cursor-pointer"
                >
                  <option value="Deluxe AC Cottage Room">Deluxe AC Cottage Room (Balcony / Garden View)</option>
                  <option value="Two-Story Wooden Balcony Cottage">Two-Story Wooden Balcony Cottage</option>
                  <option value="Family Suite Cottage (4-6 Guests)">Family Suite Cottage (4-6 Guests)</option>
                  <option value="Nature View Verandah Room">Nature View Verandah Room</option>
                  <option value="Entire Resort / Group Booking (Multiple Rooms)">Entire Resort / Group Booking (Multiple Rooms)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-forest-900">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* FIELD 6: Check-In Date, Check-Out Date, and Guests – Horizontal Row on Desktop */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 mb-2 font-serif">
                6. Dates & Guests <span className="text-terracotta">*</span>
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                
                {/* Check-In Date */}
                <div>
                  <span className="block text-xs text-charcoal/70 mb-1 font-medium">Check-In Date</span>
                  <div className="relative">
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-3.5 py-3 sm:py-3.5 rounded-xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal text-sm transition-all shadow-sm outline-none"
                    />
                  </div>
                </div>

                {/* Check-Out Date */}
                <div>
                  <span className="block text-xs text-charcoal/70 mb-1 font-medium">Check-Out Date</span>
                  <div className="relative">
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      min={formData.checkIn || today}
                      required
                      className="w-full px-3.5 py-3 sm:py-3.5 rounded-xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal text-sm transition-all shadow-sm outline-none"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <span className="block text-xs text-charcoal/70 mb-1 font-medium">Guests</span>
                  <div className="relative">
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-3 sm:py-3.5 rounded-xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal text-sm transition-all shadow-sm appearance-none outline-none cursor-pointer"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Adults">2 Adults (1 Room)</option>
                      <option value="3 Adults">3 Adults (1 Room + Extra Bed)</option>
                      <option value="4 Adults (Family)">4 Adults (Family Cottage)</option>
                      <option value="2 Adults + 2 Kids">2 Adults + 2 Kids</option>
                      <option value="5+ Guests / Group">5+ Guests (Multiple Rooms)</option>
                      <option value="Large Group / 10+ Guests">Large Group (10+ Guests)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-forest-900">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

              {/* Nights calculation pill */}
              <div className="mt-2.5 flex items-center gap-2 text-xs text-moss font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-moss" />
                <span>Duration: <strong>{nights} {nights === 1 ? 'Night' : 'Nights'}</strong> Stay</span>
              </div>
            </div>

            {/* FIELD 7: Special Notes / Food Preferences – Full-width textarea */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 mb-2 font-serif">
                7. Special Notes / Food Preferences <span className="text-xs font-normal text-charcoal/50 lowercase">(optional)</span>
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Fresh Konkani veg/fish thali preference, expected arrival time, anniversary/birthday celebration setup, extra mattress needed..."
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white border border-sand focus:border-forest-900 focus:ring-2 focus:ring-moss/20 text-charcoal placeholder:text-charcoal/40 text-sm sm:text-base transition-all shadow-sm outline-none resize-none"
              />
            </div>

            {/* Large WhatsApp Enquiry Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-elevated flex items-center justify-center gap-3 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-emerald-700" />
                <span>ENQUIRE VIA WHATSAPP</span>
              </button>

              <p className="text-center text-xs text-charcoal/60 mt-3 font-sans">
                Clicking opens WhatsApp with your pre-filled enquiry. You can review before sending.
              </p>
            </div>

          </form>

          {/* Direct Phone / Contact Alternative */}
          <div className="mt-10 pt-8 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-charcoal/75">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-terracotta shrink-0" />
              <span>On Chiplun-Guhagar Road, Rampur, Maharashtra 415701</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-moss shrink-0" />
              <span>Or Call Directly: <a href="tel:+917666173397" className="font-bold text-forest-900 hover:text-gold underline">+91 7666173397</a></span>
            </div>
          </div>

        </div>

        {/* Back Link at bottom */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sand/80 hover:text-gold text-xs sm:text-sm uppercase tracking-wider font-semibold transition-colors py-2 px-4 rounded-full border border-sand/20 hover:border-gold/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Nature's Harmony Resort Home</span>
          </Link>
        </div>

      </main>

      {/* Clean Minimal Footer */}
      <footer className="relative z-10 border-t border-ivory/10 py-6 text-center text-xs text-ivory/50">
        <p>© {new Date().getFullYear()} Nature's Harmony Resort, Rampur, Chiplun. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default BookingPage;
