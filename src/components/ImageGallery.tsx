import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    url: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  className?: string;
  imageClassName?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className = '', imageClassName = '' }) => {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
    document.body.style.overflow = 'auto';
  };

  const navigateFullscreen = (direction: 'prev' | 'next') => {
    if (fullscreenIndex === null) return;
    
    const newIndex = direction === 'next' 
      ? (fullscreenIndex + 1) % images.length
      : (fullscreenIndex - 1 + images.length) % images.length;
    
    setFullscreenIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (fullscreenIndex === null) return;

    switch (e.key) {
      case 'ArrowLeft':
        navigateFullscreen('prev');
        break;
      case 'ArrowRight':
        navigateFullscreen('next');
        break;
      case 'Escape':
        closeFullscreen();
        break;
    }
  };

  return (
    <>
      <div className={className}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openFullscreen(index)}
            className={`cursor-pointer relative group ${imageClassName}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeFullscreen}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateFullscreen('prev');
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateFullscreen('next');
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[fullscreenIndex].url}
              alt={images[fullscreenIndex].alt}
              className="max-h-[90vh] max-w-full object-contain mx-auto"
            />
            {(images[fullscreenIndex].title || images[fullscreenIndex].description) && (
              <div className="text-white text-center mt-4">
                {images[fullscreenIndex].title && (
                  <h3 className="text-xl font-semibold mb-2">{images[fullscreenIndex].title}</h3>
                )}
                {images[fullscreenIndex].description && (
                  <p className="text-gray-300">{images[fullscreenIndex].description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;