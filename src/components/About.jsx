import React from 'react';
import CTAButton from './CTAButton';
import ImageCarousel from './ImageCarousel';

const aboutImages = [
  'https://drive.google.com/thumbnail?id=1f8MACpiqsavlGS0MEJ0EyWTZtACfcB_0',
  'https://drive.google.com/thumbnail?id=1kviNUYWqzjZZ4pUlqBKzeA5QOTtZINTE',
  'https://drive.google.com/thumbnail?id=1WblP55yEuODkdP6jG7SranfepQKi-oMs',
  'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
];

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        height: '90svh',
        overflow: 'hidden',
        marginTop: '12px',
      }}
    >
      {/* Big About Card */}
      <div className="relative flex">
        <div
          className="relative flex flex-col w-full h-[80svh]"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#111111',
          }}
        >
          {/* ── Background Image Carousel — bottom half ── */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '44%', zIndex: 2 }}
          >
            <ImageCarousel
              images={aboutImages}
              height="100%"
              borderRadius="0"
              interval={4000}
              showDots={false}
            />
          </div>

          {/* ── Dark Wave Overlay ── */}
          <div
            className="absolute left-0 right-0"
            style={{
              bottom: '0',
              height: '62%',
              zIndex: 3,
              opacity: "0.65"
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

          ── Gradient blend between text and carousel ──
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

          {/* Motanis Theme Gradient Background — top half */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #0A0A0F 0%, #13131A 40%, #0d1a2e 70%, #0A0A0F 100%)',
              zIndex: 1,
              height: '55%',
            }}
          />

          {/* Blue Glow Effects */}
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

          {/* ── Card Content ── */}
          <div
            className="relative flex flex-col px-5 py-5"
            style={{ zIndex: 4 }}
          >
            {/* About Us Label */}
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
                  [ About Us_ ]
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2
              className="text-white font-black uppercase leading-none mb-4"
              style={{
                fontSize: '1.8rem',
                letterSpacing: '-0.5px',
                maxWidth: '280px',
              }}
            >
              Built For Those <br />
              Who Want <br />
              <span className="text-motanis-blue">The Best</span>
            </h2>

            {/* Body Text */}
            <p
              className="text-motanis-muted leading-relaxed mb-6"
              style={{
                fontSize: '11px',
                maxWidth: '280px',
              }}
            >
              At Motanis Autos, We Don't Just Sell cars — We Deliver Excellence.
              Every listing, Every vehicle, Every Interaction Is Built Around
              One Promise: Excellence Without Compromise.
            </p>

            {/* CTA Button */}
            <div className="flex items-center -mt-3">
              <CTAButton label="Learn More" href="#inventory" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;