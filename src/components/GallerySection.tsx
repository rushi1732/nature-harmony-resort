import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { RESORT_PHOTOS, ResortPhoto, getOptimizedPhotoUrl } from '../data/resortData';
import { LeafBranch } from './BotanicalDecoration';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<ResortPhoto | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = [
    { key: 'all', label: 'All Photos (72)' },
    { key: 'exterior', label: 'Resort & Grounds' },
    { key: 'rooms', label: 'AC Rooms' },
    { key: 'pool', label: 'Swimming Pool' },
    { key: 'dining', label: 'Konkani Dining' },
    { key: 'nature', label: 'Nature & Flora' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? RESORT_PHOTOS
    : RESORT_PHOTOS.filter((p) => p.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
    setZoomLevel(1);
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-ivory text-charcoal overflow-hidden">
      
      {/* Decorative leaf watermarks */}
      <div className="absolute top-6 right-6 pointer-events-none opacity-20 text-moss">
        <LeafBranch className="w-36 h-36" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="font-script text-2xl text-terracotta block mb-1">
            Visual Story of Our Property
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-forest-900 leading-tight mb-4">
            Resort Photo Gallery
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 font-sans leading-relaxed">
            Take a genuine photographic tour of Nature’s Harmony Resort. Browse our spacious rooms, covered pool, lush orchards, dining spaces, and evening ambience.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 font-sans ${
                  activeCategory === cat.key
                    ? 'bg-forest-900 text-sand shadow-md'
                    : 'bg-sand/40 hover:bg-sand text-charcoal/80 border border-sand/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Reel / Strip Highlight (matching user reference image!) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-xl sm:text-2xl text-forest-900 font-semibold">
              Explore Our Resort Spaces
            </h4>
            <span className="text-xs font-mono uppercase tracking-wider text-moss">
              Click photo to view full size
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar">
            {RESORT_PHOTOS.slice(0, 8).map((photo) => (
              <div
                key={`strip-${photo.id}`}
                onClick={() => setSelectedPhoto(photo)}
                className="shrink-0 w-64 sm:w-80 snap-start group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-forest-950 aspect-[16/10] shadow-warm border-2 border-ivory group-hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-1">
                  <img
                    src={getOptimizedPhotoUrl(photo.url, 450)}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-ivory">
                    <p className="font-serif text-sm font-semibold truncate text-sand">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masonry / Scrapbook Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            // Apply scrapbook slight organic rotation to occasional photos
            const rotationClass = index % 5 === 1 ? 'rotate-1 hover:rotate-0' : index % 5 === 3 ? '-rotate-1 hover:rotate-0' : '';
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group cursor-pointer bg-white p-2.5 sm:p-3 rounded-2xl shadow-warm border border-sand/60 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 ${rotationClass}`}
              >
                <div className="relative overflow-hidden rounded-xl bg-sand/30 aspect-[4/3]">
                  <img
                    src={getOptimizedPhotoUrl(photo.url, 450)}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors" />
                  
                  {/* Subtle hover icon */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-forest-900/80 text-sand flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Scrapbook Caption */}
                <div className="pt-3 px-1 flex flex-col">
                  <span className="font-serif text-base font-semibold text-forest-900 group-hover:text-terracotta transition-colors line-clamp-1">
                    {photo.title}
                  </span>
                  {photo.caption && (
                    <span className="text-xs text-charcoal/70 line-clamp-2 mt-0.5 font-sans">
                      {photo.caption}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn">
          
          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-ivory z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-sand">
                {selectedPhoto.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => (z === 1 ? 1.5 : 1))}
                className="p-2 rounded-full bg-forest-900/80 hover:bg-forest-800 text-ivory transition-colors"
                title="Toggle Zoom"
              >
                {zoomLevel === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
              </button>
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  setZoomLevel(1);
                }}
                className="p-2 rounded-full bg-forest-900/80 hover:bg-terracotta text-ivory transition-colors"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Photo Container */}
          <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center overflow-hidden">
            <img
              src={getOptimizedPhotoUrl(selectedPhoto.url, 1400)}
              alt={selectedPhoto.title}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300"
            />
          </div>

          {/* Bottom Caption */}
          {selectedPhoto.caption && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-forest-900/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-forest-800 text-xs sm:text-sm text-sand text-center max-w-xl">
              {selectedPhoto.caption}
            </div>
          )}

          {/* Prev / Next Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-900/80 hover:bg-forest-800 text-ivory hover:text-gold transition-colors z-20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-900/80 hover:bg-forest-800 text-ivory hover:text-gold transition-colors z-20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

    </section>
  );
};
