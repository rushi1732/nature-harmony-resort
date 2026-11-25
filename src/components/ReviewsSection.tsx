import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS, RESORT_INFO } from '../data/resortData';
import { LeafBranch } from './BotanicalDecoration';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-forest-900 text-ivory overflow-hidden">
      
      {/* Botanical Accents */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-10 text-sand">
        <LeafBranch className="w-48 h-48" />
      </div>
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-10 text-gold">
        <LeafBranch className="w-56 h-56" flip={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-forest-800">
          <div>
            <span className="font-script text-2xl text-sand block mb-1">
              Guest Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ivory leading-tight">
              Stories From Our Guests
            </h2>
          </div>

          {/* Google 4.7 Rating Summary Card */}
          <div className="flex items-center gap-4 bg-forest-950/80 p-4 rounded-2xl border border-gold/30 shadow-elevated">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2.5 shadow-sm">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <path fill="#FFC107" d="M43.6 20H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.4-4z" />
                <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.7-.4-4z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-ivory">4.7 / 5</span>
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-sand/80 font-sans">
                Based on <strong>628+ verified reviews</strong> on Google
              </p>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Spotlight Slider */}
        <div className="relative max-w-4xl mx-auto bg-forest-950/90 rounded-3xl p-6 sm:p-12 border border-forest-800 shadow-elevated">
          <Quote className="w-12 h-12 text-gold/30 absolute top-6 right-8 pointer-events-none" />

          {/* Highlight Hook */}
          {currentReview.highlight && (
            <div className="mb-6">
              <span className="font-script text-2xl sm:text-3xl text-sand block leading-snug">
                "{currentReview.highlight}"
              </span>
            </div>
          )}

          {/* Review Full Text */}
          <blockquote className="text-base sm:text-lg text-ivory/90 font-serif leading-relaxed italic mb-8">
            "{currentReview.content}"
          </blockquote>

          {/* Reviewer Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-forest-800">
            <div className="flex items-center gap-3.5">
              <img
                src={currentReview.avatar}
                alt={currentReview.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/50"
                loading="lazy"
              />
              <div>
                <h4 className="font-serif text-lg font-semibold text-ivory">
                  {currentReview.author}
                </h4>
                <div className="flex items-center gap-2 text-xs text-sand/70 font-sans">
                  <span>Google Review</span>
                  <span>·</span>
                  <span>{currentReview.date}</span>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-sand/70 mr-2">
                {currentIndex + 1} / {REVIEWS.length}
              </span>
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-ivory hover:text-gold border border-forest-700 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-ivory hover:text-gold border border-forest-700 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Read All Reviews External Link */}
        <div className="mt-12 text-center">
          <a
            href={RESORT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand hover:text-gold underline underline-offset-8 decoration-gold/50 transition-colors"
          >
            <span>Read all 628+ Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
