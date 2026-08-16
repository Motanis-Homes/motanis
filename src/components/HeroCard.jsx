import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import CTAButton from './CTAButton';
import HeroForeground from './HeroForeground';
import { ChevronDown } from 'lucide-react';

const carData = [
  {
    image: 'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
    hp: '640 HP',
    range: '300 mi',
  },
  {
    image: 'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
    hp: '523 HP',
    range: '280 mi',
  },
  {
    image: 'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
    hp: '710 HP',
    range: '320 mi',
  },
  {
    image: 'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
    hp: '620 HP',
    range: '310 mi',
  },
];

const carImages = carData.map((car) => car.image);

const HeroCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(true);

  // Listen to carousel changes and fade stats accordingly
  useEffect(() => {
    setStatsVisible(false);
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div
      className="relative flex flex-col w-full items-center h-[50svh] mx-0 my-0"
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        background: '#111111',
      }}
    >
      {/* ── Background Slide Carousel ── */}
      <div className="absolute inset-0" style={{ opacity: 0.75 }}>
        <ImageCarousel
          images={carImages}
          height="100%"
          borderRadius="0"
          interval={4000}
          showDots={false}
          onIndexChange={setCurrentIndex}
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.75) 100%)',
          boxShadow: '2px 2px 2px 2px black',
        }}
      />

      {/* Right — CTA Button */}
      <div className="relative my-4 pr-1 w-full justify-end flex z-10 items-center rounded-2xl">
        <CTAButton
          label="Chat With Us"
          href="https://wa.link/rqzyad"
          onClick={() => window.open('https://wa.link/rqzyad', '_blank')}
        />
      </div>

      {/* Stats — Mid Right + HeroForeground Parent */}
      <div className="relative flex flex-row w-full justify-between px-1 py-1 my-9">

        {/* Hero Foreground */}
        <div className="relative z-10">
          <HeroForeground />
        </div>

        {/* Stats - Mid Right — fade on slide change */}
        <div
          className="relative text-right z-10"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '2px',
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <p
            className="text-white font-black leading-none"
            style={{ fontSize: '1.2rem' }}
          >
            {carData[currentIndex].hp}
          </p>
          <p
            className="text-white/40 uppercase tracking-widest"
            style={{ fontSize: '7px', marginBottom: '10px' }}
          >
            Horsepower
          </p>
          <p
            className="text-white font-black leading-none"
            style={{ fontSize: '1.2rem' }}
          >
            {carData[currentIndex].range}
          </p>
          <p
            className="text-white/40 uppercase tracking-widest"
            style={{ fontSize: '7px' }}
          >
            Range
          </p>
        </div>
      </div>

      {/* Scroll Down — right edge */}
      <div
        className="relative flex justify-center z-10 w-5/12 gap-2"
        style={{
          left: '45%',
          transform: 'translateY(-50%) rotate(90deg)',
        }}
      >
        <span
          className="text-white/30 uppercase tracking-widest whitespace-nowrap"
          style={{ fontSize: '7px' }}
        >
          Scroll Down
        </span>
        <ChevronDown
          size={10}
          className="text-motanis-blue"
          style={{ transform: 'rotate(-90deg)' }}
        />
      </div>
    </div>
  );
};

export default HeroCard;