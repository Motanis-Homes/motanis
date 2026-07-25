import React from 'react';
import CTAButton from './CTAButton';

const HeroForeground = () => {
  return (
    <div
      className="relative z-10"
      style={{
        // bottom: '90px',
        // right: '40px',
        // background: 'rgba(13,13,13,0.92)',
        // backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        // padding: '20px 18px 20px',
        // border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Headline */}
      <h1
        className="text-white font-black uppercase leading-none mb-1"
        style={{ fontSize: '1.5rem', letterSpacing: '-0.5px' }}
      >
        Drive Your<br />
        Dream<br />
        Today
      </h1>

      {/* CTA Button */}

          <div className="relative flex  z-10 items-center mx-1"
            // style={{ border: '1px solid #2A6FDB' }}
          >
            <CTAButton label=" Get Started " href="#inventory" />
          </div>
    </div>
  );
};

export default HeroForeground;