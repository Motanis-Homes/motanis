import React, { useState, useEffect, useRef } from 'react';
import CTAButton from './CTAButton';
import ImageCarousel from './ImageCarousel';

const findCarImages = [
  'https://lh3.googleusercontent.com/d/1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ=s800',
  'https://lh3.googleusercontent.com/d/1qSnctzX97NxHA9SNriiethf--D7sawgQ=s800',
  'https://lh3.googleusercontent.com/d/1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3=s800',
  'https://lh3.googleusercontent.com/d/11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r=s800',
];

const circleText = "• Let's Find Your Car • Motanis Autos ";

const FindCar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(false);
          const timer = setTimeout(() => setIsVisible(true), 400);
          return () => clearTimeout(timer);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="find-car"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        height: '90svh',
        overflow: 'hidden',
        marginTop: '12px',
      }}
    >
      {/* ── Circular Badge — sits in section background, top right ── */}
      <div
        className="absolute"
        style={{
          top: '20px',
          right: '3px',
          width: '88px',
          height: '88px',
          zIndex: 10,
        }}
      >
        {/* Badge Background — matches section muted color */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: '#8A9BB0',
            // border: '2px solid rgba(42,111,219,0.25)',
          }}
        />

        {/* Rotating Text Ring */}
        <svg
          viewBox="0 0 88 88"
          width="88"
          height="88"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            animation: 'spinRing 10s linear infinite',
          }}
        >
          <defs>
            <path
              id="findCarCirclePath"
              d="M 44,44 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
            />
          </defs>
          <text
            style={{
              fontSize: '7px',
              fontWeight: '800',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            <textPath href="#findCarCirclePath" fill="#0A0A0F">
              {circleText}
            </textPath>
          </text>
        </svg>

        {/* Center Arrow Circle — dark Motanis inner background */}
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '42px',
            height: '42px',
            background: '#0A0A0F',
            border: '1px solid rgba(42,111,219,0.40)',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2A6FDB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>

      {/* Big Card */}
      <div className="relative flex">
        <div
          className="relative flex flex-col w-full h-[80svh]"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#111111',
            // Semi-circular notch top-right using clip-path
            clipPath: `path('
              M 24 0
              L calc(100% - 52px) 0
              Q calc(100% - 52px) 0 calc(100% - 52px) 0
              A 44 44 0 0 0 100% 0
              Q 100% 0 100% 0
              L 100% 0
              Q 100% 24 100% 24
              L 100% calc(100% - 24px)
              Q 100% 100% calc(100% - 24px) 100%
              L 24px 100%
              Q 0 100% 0 calc(100% - 24px)
              L 0 24px
              Q 0 0 24px 0
              Z
            ')`,
          }}
        >

          {/* ── Layer 1: Background Image Carousel — bottom half ── */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '44%', zIndex: 2 }}
          >
            <ImageCarousel
              images={findCarImages}
              height="100%"
              borderRadius="0"
              interval={4000}
              showDots={false}
            />
          </div>

          {/* ── Layer 2: Dark Wave Overlay ── */}
          <div
            className="absolute left-0 right-0"
            style={{
              bottom: '0',
              height: '62%',
              zIndex: 3,
              opacity: '0.65',
            }}
          >
            <svg
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%' }}
            >
              <path
                d="M0 80 Q100 20 200 60 Q300 100 400 40 L400 300 L0 300 Z"
                fill="#111111"
              />
            </svg>
          </div>

          {/* ── Layer 3: Gradient Blend ── */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: '56%',
              height: '25%',
              background:
                'linear-gradient(to bottom, #111111 0%, transparent 100%)',
              zIndex: 2,
            }}
          />

          {/* ── Layer 4: Motanis Theme Gradient — top half ── */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #0A0A0F 0%, #13131A 40%, #0d1a2e 70%, #0A0A0F 100%)',
              zIndex: 1,
              height: '55%',
            }}
          />

          {/* ── Layer 5: Blue Glow Effects ── */}
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
              bottom: '-20px',
              left: '-20px',
              zIndex: 1,
            }}
          />

          {/* ── Layer 6: Content ── */}
          <div
            className="relative flex flex-col px-5 py-0"
            style={{ zIndex: 4, marginTop: '-0.5rem' }}
          >
            {/* Headline */}
            <h2
              className="text-white font-black uppercase leading-none mt-10 mb-4"
              style={{
                fontSize: '1.9rem',
                letterSpacing: '-0.5px',
                maxWidth: '240px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              }}
            >
              Let's Find <br />
              Your Next <br />
              Car <span className="text-motanis-blue">Together</span>
            </h2>

            {/* Body Text */}
            <p
              className="font-cormorant text-motanis-muted leading-relaxed mb-6"
              style={{
                fontSize: '14px',
                fontWeight: '700',
                fontStyle: 'italic',
                maxWidth: '260px',
                letterSpacing: '0.3px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
              }}
            >
              Browse Our Full Collection, Book A Test Drive, Or Simply
              Reach Out. We Are Here And Ready To Help.
            </p>

            {/* CTA Button */}
            <div
              className="flex items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s',
              }}
            >
              <CTAButton label="Get Started" href="#inventory" />
            </div>
          </div>
        </div>
      </div>

      {/* Spin keyframe */}
      <style>{`
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default FindCar;