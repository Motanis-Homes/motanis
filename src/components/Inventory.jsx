import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';

const inventoryItems = [
  {
    id: '01',
    name: 'Mazda CX-9 Touring [2016]',
    description: 'Three-row SUV | Premium interior | Strong fuel economy and a high-torque turbocharged engine.',
    image: 'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
  },
  {
    id: '02',
    name: 'Lexus Es300 Hybrid [2013]',
    description: 'Smooth and quiet ride | Outstanding fuel efficiency | Luxurious | Comfortable Interior - all in one',
    image: 'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
  },
  {
    id: '03',
    name: 'Toyota Highlander XSE [2021]',
    description: 'First highlander model designed with a sporty, aggressive look and performance-tuned suspension.',
    image: 'https://lh3.googleusercontent.com/d/1xLMB5A2gUJ9hVwm7u2-1xs3HcOXUsHTq',
  },
  {
    id: '04',
    name: 'Toyota Camry LE [2008]',
    description: 'Excellent fuel economy | Smooth performance and very dependable',
    image: 'https://drive.google.com/thumbnail?id=1kmmPQWPzKu1RAUmsLOhJCZDa5rSw9U-o',
  },
  {
    id: '05',
    name: 'Ford Edge SEL [2007]',
    description: 'Comfortable | Practical | Mid-size crossover Car - Going At A Discount!',
    image: 'https://drive.google.com/thumbnail?id=10_uHxU2-DODQj0B_Z_POuQn8ZcwMYwmV',
  },
  {
    id: '06',
    name: 'Mercedes-Benz GLE 350 4matic [2017]',
    description: 'Luxury | All weather confidence | Spacious comfort - OTF',
    image: 'https://drive.google.com/thumbnail?id=1t2bzt_BTPpv3PS1Go2Oq7iEPRqPORVGU',
  },
  {
    id: '07',
    name: 'Mercedes-Benz GLE 43 AMG [2019]',
    description: '385HP | 384 lb-ft of torque | Rapid Acceleration | Peak performance, high-end lucury SUV',
    image: 'https://drive.google.com/thumbnail?id=1pZHPcjxrtCWPmu3Qjf-HOhfiQm5VzOhV',
  },
];

const Inventory = ({ setActivePage }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 300);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="inventory"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        height: '100svh',
        overflow: 'hidden',
        marginTop: '12px',
        paddingBottom: '16px',
      }}
    >
      {/* Big Card */}
      <div
        className="relative flex flex-col w-full h-[90svh]"
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#111111',
        }}
      >
        {/* ── Motanis Theme Gradient Background ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0A0A0F 0%, #13131A 40%, #0d1a2e 70%, #0A0A0F 100%)',
            zIndex: 1,
          }}
        />

        {/* ── Hex Mesh Texture Overlay ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(42,111,219,0.06) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            zIndex: 1,
          }}
        />

        {/* ── Blue Glow Effects ── */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '200px',
            height: '200px',
            background: 'rgba(42,111,219,0.15)',
            top: '-40px',
            right: '-40px',
            zIndex: 1,
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '150px',
            height: '150px',
            background: 'rgba(42,111,219,0.08)',
            bottom: '20px',
            left: '-20px',
            zIndex: 1,
          }}
        />

        {/* ── Content ── */}
        <div
          className="relative flex flex-col px-5 py-5"
          style={{ zIndex: 2 }}
        >
          {/* Header */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            {/* Inventory Label */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(42,111,219,0.15)',
                  border: '1px solid rgba(42,111,219,0.3)',
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: '5px',
                    height: '5px',
                    background: '#2A6FDB',
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-motanis-blue font-black uppercase tracking-widest"
                  style={{ fontSize: '8px' }}
                >
                  [ Inventory_ ]
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2
              className="text-white font-black uppercase leading-none mb-3"
              style={{
                fontSize: '2rem',
                letterSpacing: '-0.5px',
              }}
            >
              Browse <br />
              What Just <br />
              <span className="text-motanis-blue">Landed</span>
            </h2>

            {/* Body Text */}
            <p
              className="font-cormorant text-motanis-muted leading-relaxed mb-5"
              style={{
                fontSize: '15px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.3px',
              }}
            >
              New Cars Added Every Single Day. Don't Miss Out.
            </p>

                {/* CTA */}
            <div className="mb-6">
              <CTAButton
                label="Browse More"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => setActivePage('inventory-page'), 300);
                }}
              />
            </div>
          </div>

            {/* ── Accordion List ── */}
          <div
            className="flex flex-col accordion-list"
            style={{
              gap: '0px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
              maxHeight: '285px',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingRight: '2px',
            }}
          >
            <style>{`
              .accordion-list::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {inventoryItems.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* ── Collapsed Row ── */}
                <div
                  className="flex items-center gap-3 py-3 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  {/* Thumbnail */}
                  <div
                    className="flex-shrink-0 overflow-hidden"
                    style={{
                      width: '52px',
                      height: '40px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Number + Name */}
                  <div className="flex-1">
                    <p
                      className="text-white font-bold leading-tight"
                      style={{ fontSize: '12px' }}
                    >
                      <span className="text-motanis-muted mr-1"
                        style={{ fontSize: '10px' }}
                      >
                        {item.id} —
                      </span>
                      {item.name}
                    </p>
                  </div>

                  {/* Chevron */}
                  <div
                    className="flex-shrink-0"
                    style={{
                      transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={activeIndex === index ? '#2A6FDB' : '#8A9BB0'}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* ── Expanded Content ── */}
                <div
                  style={{
                    maxHeight: activeIndex === index ? '400px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.77, 0, 0.18, 1)',
                  }}
                >
                  <div className="pb-4">
                    {/* Large Image */}
                    <div
                      className="relative w-full overflow-hidden mb-3"
                      style={{
                        height: '180px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Arrow Button */}
                      <div
                        className="absolute bottom-3 left-3 flex items-center justify-center rounded-full"
                        style={{
                          width: '36px',
                          height: '36px',
                          background: 'rgba(42,111,219,0.85)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(8px)',
                        }}

                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          setTimeout(() => setActivePage('inventory-page'), 300);
                        }}
                      >
                        <ChevronRight size={12} />
                        <ChevronRight size={12} style={{ marginLeft: '-7px' }} />
                        {/* <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg> */}
                      </div>
                    </div>

                    {/* Car Name */}
                    <p
                      className="text-white font-black uppercase leading-none mb-2"
                      style={{ fontSize: '1rem', letterSpacing: '-0.3px' }}
                    >
                      {item.name}
                    </p>

                    {/* Description */}
                    <p
                      className="font-cormorant text-motanis-muted leading-relaxed"
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        fontStyle: 'italic',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom border */}
            <div
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            />
          </div>
          {/* Scroll Fade Indicator */}
          <div
            style={{
              position: 'relative',
              marginTop: '-32px',
              height: '32px',
              background: 'linear-gradient(to bottom, transparent 0%, #111111 100%)',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Inventory;