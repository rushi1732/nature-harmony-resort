import React, { useEffect, useRef } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const savedScrollRef = useRef<number>(0);

  const isBookingRoute = location.pathname === '/booking' || location.pathname === '/enquiry';

  // Continuously record scroll position on the Home page
  useEffect(() => {
    if (!isBookingRoute) {
      const handleScroll = () => {
        savedScrollRef.current = window.scrollY;
        sessionStorage.setItem('home_scroll_position', window.scrollY.toString());
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isBookingRoute]);

  const handleCloseBooking = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      {/* Home page is kept mounted beneath when booking is open, preserving DOM and scroll state */}
      <HomePage />

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
