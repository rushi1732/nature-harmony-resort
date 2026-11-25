import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, User, MessageSquare, Check, Sparkles, Send } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    stayType?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2 Adults');
  const [stayType, setStayType] = useState('All Inclusive Resort Stay');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (initialData.checkIn) setCheckIn(initialData.checkIn);
      if (initialData.checkOut) setCheckOut(initialData.checkOut);
      if (initialData.guests) setGuests(initialData.guests);
      if (initialData.stayType) setStayType(initialData.stayType);
    }
  }, [initialData]);

  if (!isOpen) return null;

  // Calculate stay duration
  const dateIn = new Date(checkIn);
  const dateOut = new Date(checkOut);
  const diffTime = Math.max(0, dateOut.getTime() - dateIn.getTime());
  const nightsCount = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct genuine, beautifully formatted WhatsApp Enquiry message
    const message = `*Nature's Harmony Resort — Stay Enquiry* 🌿
    
*Guest Name:* ${fullName.trim()}
*Phone:* ${phoneNumber.trim()}
${emailAddress ? `*Email:* ${emailAddress.trim()}\n` : ''}
*Dates:* ${checkIn} to ${checkOut} (${nightsCount} Night${nightsCount > 1 ? 's' : ''})
*Guests:* ${guests}
*Stay Type:* ${stayType}
${notes.trim() ? `*Special Request:* ${notes.trim()}\n` : ''}
Hello Nature's Harmony Resort, I would like to enquire about availability and pricing for my stay. Please assist!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESORT_INFO.rawPhone}?text=${encodedMessage}`;

    // Mark submitted and open WhatsApp
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative bg-ivory rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-sand my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sand/60 hover:bg-sand text-forest-900 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-forest-900 text-gold flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest-900 mb-2">
              Enquiry Sent via WhatsApp!
            </h3>
            <p className="text-sm text-charcoal/80 max-w-md mx-auto mb-6">
              Thank you, {fullName || 'Guest'}! Your enquiry has been transferred to Dr. Ravrane & the Nature's Harmony team on WhatsApp (+91 7666173397). We look forward to welcoming you!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-forest-900 text-sand text-xs font-semibold uppercase tracking-wider"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/60 text-forest-900 text-[11px] font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-terracotta" />
                <span>Direct WhatsApp Enquiry</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest-900">
                Plan Your Stay with Us
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 font-sans mt-1">
                Share your dates and preferences. No immediate payment required — we personally verify availability and share custom packages.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-moss absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none focus:ring-1 focus:ring-forest-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-moss absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none focus:ring-1 focus:ring-forest-900"
                    />
                  </div>
                </div>
              </div>

              {/* Email (Optional) & Stay Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-moss absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none focus:ring-1 focus:ring-forest-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Enquiry Type
                  </label>
                  <select
                    value={stayType}
                    onChange={(e) => setStayType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none focus:ring-1 focus:ring-forest-900"
                  >
                    <option value="All Inclusive Resort Stay">All Inclusive Stay</option>
                    <option value="Family Stay">Family Stay</option>
                    <option value="Holiday Resort Break">Holiday Resort</option>
                    <option value="Honeymoon & Couple">Honeymoon</option>
                    <option value="Nature Experience">Nature Experience</option>
                    <option value="Swimming Pool Day Pass">Swimming Pool Enquiry</option>
                    <option value="Wedding / Reunion Celebration">Wedding & Group Venue</option>
                  </select>
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Check In *
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Check Out *
                  </label>
                  <input
                    type="date"
                    required
                    min={checkIn || today}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Guests *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults + 1 Kid">2 Adults + 1 Kid</option>
                    <option value="Family (3-4 Guests)">Family (3-4)</option>
                    <option value="Group (5-10 Guests)">Group (5-10)</option>
                    <option value="Group (10-25 Guests)">Group (10-25)</option>
                  </select>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                  Special Notes / Food Preferences
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-moss absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="e.g. vegetarian meals, arrival timing, college reunion setup..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-sand bg-white text-sm text-forest-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-forest-900 hover:bg-forest-800 text-sand hover:text-ivory font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-elevated transition-all duration-300 mt-2"
              >
                <Send className="w-4 h-4 text-gold" />
                <span>Enquire via WhatsApp (+91 7666173397)</span>
              </button>

              <p className="text-[11px] text-charcoal/60 text-center font-sans">
                Bookings are confirmed directly by the resort hosts. No hidden fees or automated cancellations.
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
