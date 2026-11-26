import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Resort', targetId: 'about' },
    { name: 'Accommodations', targetId: 'accommodations' },
    { name: 'Services', targetId: 'services' },
    { name: 'Gallery', targetId: 'gallery' },
    { name: 'Contact', targetId: 'contact' },
  ];

  const handleNavClick = (targetId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest-900/95 backdrop-blur-md shadow-elevated py-3 border-b border-forest-800'
          : 'bg-gradient-to-b from-forest-950/80 via-forest-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-forest-900/60 text-gold group-hover:scale-105 transition-transform duration-300">
              {/* Custom botanical tree / hut symbol */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
                <path d="M12 2L4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-8-7z" />
                <path d="M12 8c-1.5 2-3 3-3 5a3 3 0 0 0 6 0c0-2-1.5-3-3-5z" fill="currentColor" fillOpacity="0.25" />
                <path d="M12 18v-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-ivory">
                Nature's Harmony
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-sand/80 -mt-0.5">
                Resort · Chiplun
              </span>
            </div>
          </a>

          {/* Right-Aligned Navigation & Action CTAs */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleNavClick(link.targetId, e)}
                  className="text-sm tracking-wide text-ivory/90 hover:text-gold transition-colors duration-200 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Subtle Divider */}
            <span className="w-px h-5 bg-ivory/20" />

            {/* Action CTAs */}
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-forest-900 bg-sand hover:bg-gold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Your Stay</span>
              <span className="ml-1.5 text-forest-900 font-bold">→</span>
            </button>
          </div>

          {/* Medium Screen CTA (when menu is collapsed) */}
          <div className="hidden sm:flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-forest-900 bg-sand hover:bg-gold rounded-full shadow-md transition-all"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ivory hover:text-gold hover:bg-forest-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="text-xs px-3 py-1.5 font-semibold text-forest-900 bg-sand rounded-full"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ivory hover:text-gold hover:bg-forest-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950/98 border-b border-forest-800 px-6 py-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.targetId}`}
                onClick={(e) => handleNavClick(link.targetId, e)}
                className="text-base font-serif text-ivory/90 hover:text-gold transition-colors py-1 border-b border-forest-900/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-bold text-forest-900 bg-gold rounded-full"
              >
                Enquire / Book Your Stay →
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
