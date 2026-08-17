import React, { useState } from 'react';
import CTAButton from './CTAButton';

const InventoryCard = ({ car, flatMode = false }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped(true);
    setTimeout(() => setTapped(false), 600);
  };

  const handleImageScroll = (e) => {
    const index = Math.round(e.target.scrollLeft / e.target.offsetWidth);
    setCurrentImage(index);
  };

  return (
    <div
      onClick={handleTap}
      className="flex flex-col"
      style={{
        width: flatMode ? '100%' : '72vw',
        maxWidth: flatMode ? '420px' : '280px',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #0d1a2e 0%, #111111 100%)',
        border: tapped
          ? '1px solid rgba(42,111,219,0.6)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: tapped
          ? '0 0 24px rgba(42,111,219,0.25)'
          : '0 4px 20px rgba(0,0,0,0.4)',
        transition: 'border 0.3s ease, box-shadow 0.3s ease',
        flexShrink: 0,
      }}
    >
      {/* ── Image Strip ── */}
      <div className="relative" style={{ height: '160px' }}>
        <div
          className="flex h-full"
          style={{
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
          }}
          onScroll={handleImageScroll}
        >
          <style>{`.img-strip::-webkit-scrollbar { display: none; }`}</style>
          {car.images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-full img-strip"
              style={{ width: '100%', scrollSnapAlign: 'start' }}
            >
              <img
                src={src}
                alt={`${car.name} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Deal Tag — top left */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full"
          style={{
            background: 'rgba(42,111,219,0.85)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            className="text-white font-black uppercase tracking-widest"
            style={{ fontSize: '7px' }}
          >
            {car.dealTag}
          </span>
        </div>

        {/* Image Pagination Dots — bottom center */}
        {car.images.length > 1 && (
          <div
            className="absolute bottom-2 left-1/2 flex gap-1"
            style={{ transform: 'translateX(-50%)' }}
          >
            {car.images.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === currentImage ? '12px' : '4px',
                  height: '4px',
                  borderRadius: '99px',
                  background:
                    i === currentImage
                      ? '#2A6FDB'
                      : 'rgba(255,255,255,0.4)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col px-3 py-3 gap-2">

        {/* Verified + Registration Row */}
        <div className="flex items-center justify-between flex-wrap">
          {/* Motanis Verified */}
          <div
            className="flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(42,111,219,0.15)',
              border: '1px solid rgba(42,111,219,0.3)',
            }}
          >
            <div
              className="rounded-full"
              style={{ width: '4px', height: '4px', background: '#2A6FDB', flexShrink: 0 }}
            />
            <span
              className="text-motanis-blue font-black uppercase tracking-widest"
              style={{ fontSize: '6px' }}
            >
              Motanis Verified ✓
            </span>
          </div>

          {/* Registration Status */}
          <div
            className="flex items-center px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            <span
              className="text-motanis-muted font-bold uppercase tracking-widest"
              style={{ fontSize: '6px' }}
            >
              {car.registration}
            </span>
          </div>

          </div>

          {/* Condition */}

          <div className="flex items-center justify-start mb-2">

          <div
            className="flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{
              background: car.condition === 'Fixes'
                ? 'rgba(251,191,36,0.12)'
                : 'rgba(34,197,94,0.12)',
              border: car.condition === 'Fixes'
                ? '1px solid rgba(251,191,36,0.3)'
                : '1px solid rgba(34,197,94,0.3)',
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: '4px',
                height: '4px',
                background: car.condition === 'Fixes' ? '#FBBF24' : '#22C55E',
                flexShrink: 0,
              }}
            />
            <span
              className="font-black uppercase tracking-widest"
              style={{
                fontSize: '6px',
                color: car.condition === 'Fixes' ? '#FBBF24' : '#22C55E',
              }}
            >
              {car.condition}
            </span>
          </div>
        </div>

        {/* Car Name + Year */}
        <h3
          className="text-white font-black leading-tight"
          style={{ fontSize: '14px', letterSpacing: '-0.3px' }}
        >
          {car.name}{' '}
          <span className="text-motanis-muted" style={{ fontWeight: '900' }}>
            [{car.year}]
          </span>
        </h3>

        {/* Fields Grid */}
        <div
          className="grid grid-cols-2 gap-x-28 gap-y-1.5"
          style={{ marginTop: '2px' }}
        >
          {[
            { label: 'Color', value: car.color },
            { label: 'Type', value: car.type },
            { label: 'Transmission', value: car.transmission },
            { label: 'Y.O.E', value: car.yoe },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-0.5">
              <span
                className="text-motanis-muted uppercase tracking-widest"
                style={{ fontSize: '6px' }}
              >
                {field.label}
              </span>
              <span
                className="text-white font-bold"
                style={{ fontSize: '9px' }}
              >
                {field.value}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span
            className="font-cormorant text-white font-black leading-none"
            style={{ fontSize: '1.4rem', fontStyle: 'italic' }}
          >
            {car.price}
          </span>
        </div>

          {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        {/* CTA Row */}
        <div className="flex items-center gap-2 mt-2">
          {/* View Details
          <button
            className="flex-1 flex items-center justify-center font-black uppercase tracking-widest"
            style={{
              fontSize: '8px',
              padding: '9px 8px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
            }}
          >
            View Details
          </button> */}

          {/* Chat To Buy */}
          <div className="flex-shrink-0">
            <CTAButton
              label="Chat To Buy"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const message = 
`Hello Motanis👋! I'm interested in purchasing the following vehicle:

- Id: ${car.id}

- Name: ${car.name}

- Year: ${car.year}

- Color: ${car.color}

- Type: ${car.type}

- Transmission: ${car.transmission}

- Y.O.E: ${car.yoe}

- Registration: ${car.registration}

- Condition: ${car.condition}

- Price: ${car.price}

Kindly assist me with the next steps. Thank you!`;

                const encoded = encodeURIComponent(message);
                window.open(
                  `https://wa.me/2347084355630?text=${encoded}`,
                  '_blank'
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;