import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { IntroductionSection } from '../components/IntroductionSection';
import { HighlightsStrip } from '../components/HighlightsStrip';
import { AccommodationsSection } from '../components/AccommodationsSection';
import { ServicesSection } from '../components/ServicesSection';
import { ExperiencesSection } from '../components/ExperiencesSection';
import { GallerySection } from '../components/GallerySection';
import { ReviewsSection } from '../components/ReviewsSection';
import { LocationSection } from '../components/LocationSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleOpenBooking = () => {
    navigate('/booking');
  };

  const handleExplore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireService = (serviceTitle: string) => {
    navigate(`/booking?enquiryType=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans antialiased overflow-x-hidden">
      {/* Sticky Refined Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Website Sections */}
      <main id="main-content">
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExplore={handleExplore}
        />

        {/* Editorial Asymmetric Introduction */}
        <IntroductionSection
          onLearnMore={handleExplore}
        />

        {/* Dark Forest Highlights Strip with Polaroid Scrapbook Feature */}
        <HighlightsStrip />

        {/* Accommodations / Rooms Section - Placed right above Services */}
        <AccommodationsSection />

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
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
};

export default HomePage;
