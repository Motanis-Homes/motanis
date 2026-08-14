import React, { useEffect, useRef, useState } from 'react';

const brands = [
  {
    name: 'Ferrari',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg',
  },
  {
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
  },
  {
    name: 'Lamborghini',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/thirty/Lamborghini_Logo.svg',
  },
  {
    name: 'Audi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
  },
  {
    name: 'Ford',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
  },
  {
    name: 'Mercedes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
  },
  {
    name: 'Porsche',
    logo: 'https://upload.wikimedia.org/wikipedia/de/9/9e/Porsche_logo.svg',
  },
  {
    name: 'McLaren',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/McLaren_logo.svg/1200px-McLaren_logo.svg.png',
  },
];

// Duplicate for seamless infinite loop
const infiniteBrands = [...brands, ...brands, ...brands];

const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 300);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Seamless auto-scroll
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const speed = 0.6; // px per frame — lower = slower

    const animate = () => {
      positionRef.current += speed;

      // Reset to start when halfway through — creates seamless loop
      const halfWidth = scroll.scrollWidth / 3;
      if (positionRef.current >= halfWidth) {
        positionRef.current = 0;
      }

      scroll.scrollLeft = positionRef.current;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Pause on touch
    const handleTouchStart = () => cancelAnimationFrame(animationRef.current);
    const handleTouchEnd = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    scroll.addEventListener('touchstart', handleTouchStart);
    scroll.addEventListener('touchend', handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationRef.current);
      scroll.removeEventListener('touchstart', handleTouchStart);
      scroll.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="brands"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        height: '50svh',
        overflow: 'hidden',
        marginTop: '12px',
        paddingBottom: '16px',
      }}
    >
      {/* Big Card */}
      <div
        className="relative flex flex-col w-full h-[40svh]"
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#111111',
          marginTop: '8px',
        }}
      >
        {/* ── Motanis Theme Gradient Background ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0A0A0F 0%, #13131A 40%, #0d1a2e 70%, #0A0A0F 100%)',
            zIndex: 1,
          }}
        />

        {/* ── Dot Texture ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(42,111,219,0.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            zIndex: 1,
          }}
        />

        {/* ── Blue Glow Effects ── */}
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

        {/* ── Content ── */}
        <div
          className="relative flex flex-col px-5 py-5"
          style={{ zIndex: 2 }}
        >
          {/* Label */}
          <div
            className="flex items-center gap-2 mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
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
                [ Brands_ ]
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2
            className="text-white font-black uppercase leading-none mb-3"
            style={{
              fontSize: '1.6rem',
              letterSpacing: '-0.5px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
            }}
          >
            The Brands<br />
            <span className="text-motanis-blue">You Want -</span> <br />
            In One Place
          </h2>

          {/* Body Text */}
          <p
            className="font-cormorant text-motanis-muted leading-relaxed mb-6"
            style={{
              fontSize: '15px',
              fontWeight: '700',
              fontStyle: 'italic',
              letterSpacing: '0.3px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          >
            Every Marquee. Every Legend. Every Dream Machine — Right Here at Motanis.
          </p>
        </div>

        {/* ── Auto Scrolling Brand Strip ── */}
        <div
          className="relative"
          style={{ zIndex: 2, marginBottom: '20px' }}
        >
          {/* Left fade edge */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10"
            style={{
              width: '40px',
              background: 'linear-gradient(to right, #13131A, transparent)',
            }}
          />

          {/* Right fade edge */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10"
            style={{
              width: '40px',
              background: 'linear-gradient(to left, #13131A, transparent)',
            }}
          />

          {/* Scrolling Strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 px-4"
            style={{
              overflowX: 'hidden',
              scrollbarWidth: 'none',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s',
            }}
          >
            {infiniteBrands.map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-2"
                style={{
                  width: '80px',
                }}
              >
                {/* Logo Circle */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(8px)',
                    padding: '14px',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.85,
                    }}
                  />
                </div>

                {/* Brand Name */}
                <span
                  className="text-motanis-muted uppercase tracking-widest text-center"
                  style={{ fontSize: '7px', fontWeight: '700' }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── More Brands Pill ── */}
        <div
          className="flex justify-center pb-5"
          style={{
            zIndex: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
          }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full"
            style={{
              background: 'rgba(42,111,219,0.12)',
              border: '1px solid rgba(42,111,219,0.25)',
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
              12+ More Brands Available
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;