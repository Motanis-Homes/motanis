import React, { useState, useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

const fullText = "Drive Your Dream Today";

const HeroForeground = () => {
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  // Reset and restart typewriter when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayed('');
          setCharIndex(0);
          setStarted(false);
          setTimeout(() => setStarted(true), 600);
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
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, started]);

  // Split displayed text into lines
  const words = displayed.split(' ');
  const line1 = words.slice(0, 2).join(' ');  // "Drive Your"
  const line2 = words.slice(2, 3).join(' ');  // "Dream"
  const line3 = words.slice(3, 4).join(' ');  // "Today"

  const isDone = displayed.length === fullText.length;

  return (
    <div
      ref={sectionRef}
      className="relative z-10"
      style={{ borderRadius: '20px' }}
    >
      {/* Headline */}
      <h1
        className="text-white font-black uppercase leading-none mb-1"
        style={{ fontSize: '1.5rem', letterSpacing: '-0.5px', minHeight: '5rem' }}
      >
        {/* Line 1 */}
        <span className="block">{line1}</span>

        {/* Line 2 */}
        <span className="block text-motanis-blue">{line2}</span>

        {/* Line 3 */}
        <span className="block">{line3}</span>

        {/* Blinking Cursor */}
        {!isDone && (
          <span
            className="inline-block w-[2px] bg-motanis-blue ml-0.5"
            style={{
              height: '1.4rem',
              verticalAlign: 'middle',
              animation: 'blink 0.8s step-end infinite',
            }}
          />
        )}
      </h1>

      {/* CTA Button — fades in after typing completes */}
      <div
        className="relative flex z-10 items-center mx-1 mt-2"
        style={{
          opacity: isDone ? 1 : 0,
          transform: isDone ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <CTAButton label="Get Started" href="#inventory" />
      </div>

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeroForeground;