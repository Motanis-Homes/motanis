import React from 'react';
import HeroCard from './HeroCard';
// import HeroForeground from './HeroForeground';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{ 
        height: '70svh', 
        overflow: 'hidden' 
      }}
    >
      {/* Big Background Card */}

      <div className=" relative flex h-full] "
        style={{
        // border: '1px solid #2A6FDB',
        }}
      >
        <HeroCard />
      </div>


      {/* Floating White Card — 95K+ + Thumbnail Strip Parent Div*/}
      <div className="relative flex flex-row justify-between"
        style={{
          // border: '1px solid #2A6FDB',
        }}
      >

            {/* Thumbnail Strip */}
            <div
              className="relative z-10 flex"
              style={{

              }}
            >
              {[
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&q=80',
              ].map((src, i) => (
                <div
                  key={i}
                    className="flex-1 overflow-hidden"
                style={{ height: '60px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <img
                    src={src}
                    alt={`Car ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Floating White Card + Happy Customers */}

            <div
              className="relative z-10 bg-white flex justify-between  gap-2"
              style={{
                borderRadius: '14px',
                padding: '7px',
                // minWidth: '35px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&q=80"
                alt="Featured Car"
                className="object-cover flex-shrink-0"
                style={{ width: '52px', height: '40px', borderRadius: '8px' }}
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
                <p
                  className="font-black leading-none"
                  style={{ fontSize: '18px', color: '#000', margin: 0 }}
                >
                  95K+
                </p>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;