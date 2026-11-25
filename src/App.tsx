import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBookingBar } from './components/QuickBookingBar';
import { IntroductionSection } from './components/IntroductionSection';
import { HighlightsStrip } from './components/HighlightsStrip';
import { ServicesSection } from './components/ServicesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    stayType?: string;
  }>({});

  const handleOpenBooking = (data?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    stayType?: string;
  }) => {
    if (data) {
      setBookingInitialData(data);
    }
    setIsBookingOpen(true);
  };

  const handleExplore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireService = (serviceTitle: string) => {
    setBookingInitialData({
      stayType: serviceTitle,
    });
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans antialiased overflow-x-hidden">
      {/* Sticky Refined Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Website Sections */}
      <main id="main-content">
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplore={handleExplore}
        />

        {/* Quick Booking Floating Bar (Overlapping Hero & Intro) */}
        <QuickBookingBar
          onCheckAvailability={(data) => handleOpenBooking(data)}
        />

        {/* Editorial Asymmetric Introduction */}
        <IntroductionSection
          onLearnMore={handleExplore}
        />

        {/* Dark Forest Highlights Strip with Polaroid Scrapbook Feature */}
        <HighlightsStrip />

        {/* Services & Amenities Section */}
        <ServicesSection
          onEnquireService={handleEnquireService}
        />

        {/* Experience Section */}
        <ExperiencesSection />

        {/* Premium Scrapbook & Masonry Gallery */}
        <GallerySection />

        {/* Real Reviews & Social Proof */}
        <ReviewsSection />

        {/* Location & Interactive Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Direct WhatsApp Booking & Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingInitialData}
      />
    </div>
  );
};

export default App;
