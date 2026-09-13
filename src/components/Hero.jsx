import React from 'react';
import HeroCard from './HeroCard';
import ImageCarousel from './ImageCarousel';
import CounterNumber from './CounterNumber';

const thumbnailImages = [
  'https://lh3.googleusercontent.com/d/1UanrJY1LXt__b1ttS_-uHq_fqbu2NvH_=s800',
  'https://lh3.googleusercontent.com/d/1Uu1QQOqCokoEAssUu4_BSKCB_25vv15e=s800',
  'https://lh3.googleusercontent.com/d/1qkqd8eupgtXidT2W1uSm6VjoFNSnw7-c=s800',
  'https://lh3.googleusercontent.com/d/1bXsjYfu6ABTPGjYUI2yI88bEvKQsTs4m=s800',
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        height: '70svh',
        overflow: 'hidden',
      }}
    >
      {/* Big Background Card */}
      <div className="relative flex" 
      
      >
        <HeroCard />
      </div>

      {/* Thumbnail Strip + Floating White Card */}
      <div
        className="relative flex flex-row justify-between"
        style={{ alignItems: 'center' }}
      >
        {/* Thumbnail Carousel Strip */}
        <div
        className="relative z-10 flex"
          style={{
            width: '120px',
            height: '60px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            flexShrink: 0,
          }}
        >
          <ImageCarousel
            images={thumbnailImages}
            height="60px"
            borderRadius="8px"
            interval={3000}
            showDots={false}
          />
        </div>

        {/* Floating White Card + Happy Customers */}
        <div
          className="relative right-0 z-10 bg-white flex justify-between gap-2"
          style={{
            borderRadius: '14px',
            padding: '7px',
          }}
        >
          <img
            src="https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg"
            alt="Happy Customer"
            className="object-cover flex-shrink-0"
            style={{ width: '72px', height: '50px', borderRadius: '8px' }}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-0.5">
              <div
                className="rounded-full border flex items-center justify-center"
                style={{ width: '10px', height: '10px', borderColor: '#2A6FDB' }}
              >
                <div
                  className="rounded-full"
                  style={{ width: '5px', height: '5px', background: '#2A6FDB' }}
                />
              </div>
              <span
                className="font-bold uppercase tracking-wider"
                style={{ fontSize: '7px', color: '#2A6FDB' }}
              >
                Global
              </span>
            </div>
            <p
              className="uppercase tracking-widest"
              style={{ fontSize: '7px', color: '#999', margin: 0 }}
            >
              Happy Customer
            </p>

            <CounterNumber
              target={500}
              duration={2000}
              suffix="+"
              fontSize="18px"
              color="#000"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;