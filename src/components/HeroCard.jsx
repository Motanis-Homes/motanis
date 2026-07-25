import React from 'react';
import CTAButton from './CTAButton';
import HeroForeground from './HeroForeground';
import { ChevronDown } from 'lucide-react';

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
            {/* Car Image */}
              {/* <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
                alt="Hero Car"
                className="relative inset-0 w-full h-full object-cover object-center"
                style={{ opacity: 0.75 }}
              /> */}

        {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.75) 100%)', 
              boxShadow: '2px 2px 2px 2px black', }}
          />

        {/* Right — CTA Button */}

          <div className="relative my-4 pr-1 w-full justify-end flex  z-10 items-center rounded-2xl"
            // style={{ border: '1px solid #2A6FDB' }}
          >
            <CTAButton label="Chat With Us" href="#contact" />
          </div>



        {/* Stats — Mid Right + HeroForeground Parent */}

      <div  className="relative flex flex-row w-full justify-between px-1 py-1 my-9"
        // style={{
        //   border:' 1px solid #2A6FDB',
        // }}
      >
                  {/* Hero Foreground Center */}

            <div className="relative z-10 "
              // style={{ top:'22rem', }}
            >
              <HeroForeground />
            </div>

        {/* Stats - Mid Right */}
          <div className="relative text-right z-10"
            style={{
              // top: '6.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-end', 
              gap: '2px' }}
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
              // border: '1px solid #2A6FDB',
              transform: 'translateY(-50%) rotate(90deg)' 
            }}
          >
            <span className="text-white/30 uppercase tracking-widest whitespace-nowrap" style={{ fontSize: '7px' }}>
              Scroll Down
            </span>
            <ChevronDown size={10} className="text-motanis-blue" style={{ transform: 'rotate(-90deg)' }} />
          </div>
    </div>
  );
};

export default HeroCard;