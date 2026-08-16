import React, { useState, useEffect } from 'react';

const ImageCarousel = ({
  images = [],
  height = '50svh',
  borderRadius = '12px',
  interval = 4000,
  showDots = false,
  objectPosition = 'center',
  onIndexChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        if (onIndexChange) onIndexChange(next);
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, onIndexChange]);

  if (!images.length) return null;

  return (
    <div
      className="relative flex flex-col w-full items-center mx-0 my-0"
      style={{ height, borderRadius, background: '#111111' }}
    >
      {/* Sliding Strip */}
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
          transition: 'transform 0.7s cubic-bezier(0.77, 0, 0.18, 1)',
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
              style={{ objectPosition }}
            />
          </div>
        ))}
      </div>

      {/* Optional Dot Indicators */}
      {showDots && images.length > 1 && (
        <div
          className="absolute bottom-2 left-1/2 flex gap-1.5 z-20"
          style={{ transform: 'translateX(-50%)' }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? '16px' : '5px',
                height: '5px',
                borderRadius: '99px',
                background:
                  i === currentIndex
                    ? '#2A6FDB'
                    : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;