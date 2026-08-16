import React from 'react';
import ImageCarousel from './ImageCarousel';
import CTAButton from './CTAButton';
import HeroForeground from './HeroForeground';
import { ChevronDown } from 'lucide-react';

const carImages = [
  'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
  'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
  'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
  'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
  // https://lh3.googleusercontent.com/d/FILE_ID=w800 alt Google's Official Image Serve CDN

];

const HeroCard = () => {

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
      <div className="absolute inset-0" flex 
      style={{ opacity: 0.75 }}>
        <ImageCarousel
          images={carImages}
          height="100%"
          borderRadius="0"
          interval={4000}
          showDots={false}
        />
      </div>

      {/* Carousel Dot Indicators */}
      {/* <div
        className="absolute bottom-3 left-1/2 flex gap-1.5 z-20"
        style={{ transform: 'translateX(-50%)' }}
      >
        {carImages.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: i === currentIndex ? '16px' : '5px',
              height: '5px',
              borderRadius: '99px',
              background: i === currentIndex ? '#2A6FDB' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div> */}

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
          href="https://wa.me/2347084355630?text=Hello%20Motanis%20Autos🚘!%20I%20am%20interested%20in%20one%20of%20your%20vehicles.%20Kindly%20assist%20me%3F"
          onClick={() => window.open(
            'https://wa.me/2347084355630?text=Hello%20Motanis%20Autos🚘!%20I%20am%20interested%20in%20one%20of%20your%20vehicles.%20Kindly%20assist%20me%3F',
            '_blank'
          )}
        />
      </div>

      {/* Stats — Mid Right + HeroForeground Parent */}
      <div className="relative flex flex-row w-full justify-between px-1 py-1 my-9">

        {/* Hero Foreground */}
        <div className="relative z-10">
          <HeroForeground />
        </div>

        {/* Stats - Mid Right */}
        <div
          className="relative text-right z-10"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '2px',
          }}
        >
          <p className="text-white font-black leading-none" style={{ fontSize: '1.2rem' }}>640 HP</p>
          <p className="text-white/40 uppercase tracking-widest" style={{ fontSize: '7px', marginBottom: '10px' }}>Horsepower</p>
          <p className="text-white font-black leading-none" style={{ fontSize: '1.2rem' }}>300 mi</p>
          <p className="text-white/40 uppercase tracking-widest" style={{ fontSize: '7px' }}>Range</p>
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