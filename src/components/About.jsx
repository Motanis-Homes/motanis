import React, { useState, useEffect, useRef } from 'react';
import CTAButton from './CTAButton';
import ImageCarousel from './ImageCarousel';

const aboutImages = [
  'https://lh3.googleusercontent.com/d/1f8MACpiqsavlGS0MEJ0EyWTZtACfcB_0=w800',
  'https://lh3.googleusercontent.com/d/1kviNUYWqzjZZ4pUlqBKzeA5QOTtZINTE=w800',
  'https://lh3.googleusercontent.com/d/1WblP55yEuODkdP6jG7SranfepQKi-oMs=w800',
  'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
];

const fullText = "Built For Those Who Want The Best";

const About = () => {

  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  // Reset and restart typewriter when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reset everything and restart
          setDisplayed('');
          setCharIndex(0);
          setStarted(false);
          setTimeout(() => setStarted(true), 400);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!started) return;
    if (charIndex >= fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + fullText[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 75);

    return () => clearTimeout(timeout);
  }, [charIndex, started]);

  // Split into lines
  const words = displayed.split(' ');
  const line1 = words.slice(0, 3).join(' ');  // "Built For Those"
  const line2 = words.slice(3, 5).join(' ');  // "Who Want"
  const line3 = words.slice(5, 7).join(' ');  // "The Best"

  const isDone = displayed.length === fullText.length;

  return (
    <section
      ref={sectionRef}
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
            className="relative flex flex-col px-5 py-0"
            style={{ zIndex: 4, marginTop: '-0.5rem' }}
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

{/* Headline — Typewriter */}
            <h2
              className="text-white font-black uppercase leading-none mb-2"
              style={{
                fontSize: '1.8rem',
                letterSpacing: '-0.5px',
                maxWidth: '280px',
                minHeight: '6rem',
              }}
            >
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
              <span
                className="block"
                style={{ color: line3.length > 0 ? '#2A6FDB' : 'transparent' }}
              >
                {line3}
              </span>

              {/* Blinking Cursor */}
              {!isDone && (
                <span
                  className="inline-block w-[2px] bg-motanis-blue ml-0.5"
                  style={{
                    height: '1.6rem',
                    verticalAlign: 'middle',
                    animation: 'blink 0.8s step-end infinite',
                  }}
                />
              )}
            </h2>

            {/* Blink keyframe */}
            <style>{`
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>

        {/* Body Text — fades in after typing completes */}
            <p
              className="font-cormorant leading-relaxed mb-6"
              style={{
                fontSize: '14px',
                fontWeight:'700',
                fontStyle: 'italic',
                maxWidth: '280px',
                opacity: isDone ? 1 : 0,
                transform: isDone ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
              }}
            >
              At Motanis Autos, We Don't Just Sell cars — We Deliver Excellence.
              Every listing, Every vehicle, Every Interaction Is Built Around
              One Promise: Excellence Without Compromise.
            </p>

            {/* CTA Button — fades in after body text */}
            <div
              className="flex items-center -mt-3"
              style={{
                opacity: isDone ? 1 : 0,
                transform: isDone ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
              }}
            >
              <CTAButton label="Learn More" href="#inventory" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;