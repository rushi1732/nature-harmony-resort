import React, { useEffect, useRef } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { AccommodationsPage } from './pages/AccommodationsPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const savedScrollRef = useRef<number>(0);
  const previousRouteRef = useRef<string>('/');

  const isBookingRoute = location.pathname === '/booking' || location.pathname === '/enquiry';
  const isAccommodationsRoute = location.pathname === '/accommodations';

  // Keep track of the last non-booking route to maintain underlying page
  useEffect(() => {
    if (!isBookingRoute) {
      previousRouteRef.current = location.pathname;
    }
  }, [location.pathname, isBookingRoute]);

  // Continuously record scroll position on the Home page
  useEffect(() => {
    if (!isBookingRoute && !isAccommodationsRoute) {
      const handleScroll = () => {
        savedScrollRef.current = window.scrollY;
        sessionStorage.setItem('home_scroll_position', window.scrollY.toString());
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isBookingRoute, isAccommodationsRoute]);

  const handleCloseBooking = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(previousRouteRef.current || '/');
    }
  };

  const currentBackground = isBookingRoute ? previousRouteRef.current : location.pathname;

  return (
    <>
      {/* Underlying Page Render */}
      {currentBackground === '/accommodations' ? (
        <AccommodationsPage />
      ) : (
        <HomePage />
      )}

      {/* Booking Form rendered as Full-Page Routed Overlay with Background Scroll Lock */}
      {isBookingRoute && (
        <BookingPage
          onClose={handleCloseBooking}
          savedScrollY={savedScrollRef.current}
        />
      )}
    </>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
