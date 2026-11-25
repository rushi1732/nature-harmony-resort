import React, { useState } from 'react';
import { Calendar, Users, Home, ArrowRight } from 'lucide-react';

interface QuickBookingBarProps {
  onCheckAvailability: (bookingData: {
    checkIn: string;
    checkOut: string;
    guests: string;
    stayType: string;
  }) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({ onCheckAvailability }) => {
  // Default to today + tomorrow
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2 Adults');
  const [stayType, setStayType] = useState('All Inclusive Resort Stay');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
      stayType
    });
  };

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-10 sm:-mt-14 mb-12 sm:mb-16">
      <form
        onSubmit={handleSubmit}
        className="bg-ivory/95 backdrop-blur-md rounded-2xl sm:rounded-full p-4 sm:p-3 shadow-elevated border border-sand/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-charcoal"
      >
        {/* Check In */}
        <div className="w-full sm:w-auto flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r border-sand/60">
          <label className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-moss font-mono">
            <Calendar className="w-3.5 h-3.5 text-moss" />
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent font-serif text-base sm:text-lg font-medium text-forest-900 focus:outline-none cursor-pointer"
          />
        </div>

        {/* Check Out */}
        <div className="w-full sm:w-auto flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r border-sand/60">
          <label className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-moss font-mono">
            <Calendar className="w-3.5 h-3.5 text-moss" />
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent font-serif text-base sm:text-lg font-medium text-forest-900 focus:outline-none cursor-pointer"
          />
        </div>

        {/* Guests */}
        <div className="w-full sm:w-auto flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r border-sand/60">
          <label className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-moss font-mono">
            <Users className="w-3.5 h-3.5 text-moss" />
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent font-serif text-base sm:text-lg font-medium text-forest-900 focus:outline-none cursor-pointer"
          >
            <option value="1 Adult">1 Adult</option>
            <option value="2 Adults">2 Adults</option>
            <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
            <option value="3-4 Adults (Family)">3-4 Adults (Family)</option>
            <option value="Group / Reunion (5-15)">Group (5-15 Guests)</option>
            <option value="Full Resort Buyout (20-30)">Group Buyout (20-30 Guests)</option>
          </select>
        </div>

        {/* Stay Type */}
        <div className="w-full sm:w-auto flex-1 px-4 py-2">
          <label className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-moss font-mono">
            <Home className="w-3.5 h-3.5 text-moss" />
            Stay Type
          </label>
          <select
            value={stayType}
            onChange={(e) => setStayType(e.target.value)}
            className="w-full bg-transparent font-serif text-base sm:text-lg font-medium text-forest-900 focus:outline-none cursor-pointer"
          >
            <option value="All Inclusive Resort Stay">All Inclusive Stay</option>
            <option value="Family Vacation">Family Vacation</option>
            <option value="Honeymoon & Romantic Retreat">Honeymoon Retreat</option>
            <option value="Weekend Nature Break">Weekend Nature Break</option>
            <option value="College / Family Reunion">College / Family Reunion</option>
            <option value="Wedding / Celebration Venue">Wedding Venue Enquiry</option>
          </select>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-4 sm:py-3.5 rounded-xl sm:rounded-full bg-forest-900 hover:bg-forest-800 text-sand hover:text-ivory font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 shrink-0"
        >
          <span>Check Availability</span>
          <ArrowRight className="w-4 h-4 text-gold" />
        </button>
      </form>
    </div>
  );
};
