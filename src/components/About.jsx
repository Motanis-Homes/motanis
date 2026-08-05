import React from 'react';
import CounterNumber from './CounterNumber';

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        height: '60svh',
        overflow: 'hidden',
        marginTop: '12px',
      }}
    >
      {/* Big About Card */}
      <div className="relative flex">
        <div
          className="relative flex flex-col w-full h-[50svh]"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#111111',
          }}
        >
          {/* Motanis Theme Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #0A0A0F 0%, #13131A 40%, #0d1a2e 70%, #0A0A0F 100%)',
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
            }}
          />

          {/* Card Content */}
          <div
            className="relative z-10 flex flex-col h-full px-5 py-5"
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
                fontSize: '1.5rem',
                letterSpacing: '-0.5px',
                maxWidth: '260px',
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

            {/* Stats Row */}
            <div className="flex items-center gap-3 mt-auto">

              {/* Stat 1 — Happy Clients */}
              <div
                className="flex flex-col flex-1 items-start px-4 py-3"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                }}
              >
                <div className="flex items-end gap-0.5">
                  <CounterNumber
                    target={500}
                    duration={2500}
                    suffix="+"
                    fontSize="1.4rem"
                    color="#ffffff"
                  />
                </div>
                <p
                  className="text-motanis-muted uppercase tracking-widest"
                  style={{ fontSize: '7px', marginTop: '2px' }}
                >
                  Happy Clients
                </p>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.08)',
                  flexShrink: 0,
                }}
              />

              {/* Stat 2 — Service Rating */}
              <div
                className="flex flex-col flex-1 items-start px-4 py-3"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                }}
              >
                <div className="flex items-end gap-0.5">
                  <p
                    className="font-black leading-none"
                    style={{
                      fontSize: '1.4rem',
                      color: '#ffffff',
                      margin: 0,
                    }}
                  >
                    5.0
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[1,2,3,4,5].map((i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '8px',
                        color: '#2A6FDB',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="text-motanis-muted uppercase tracking-widest"
                  style={{ fontSize: '7px', marginTop: '2px' }}
                >
                  Service Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;