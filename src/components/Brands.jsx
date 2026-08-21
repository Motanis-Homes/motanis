import React, { useEffect, useRef, useState } from 'react';

const brands = [
  {
    name: 'Ferrari',
    logo: 'https://drive.google.com/thumbnail?id=1sQfgcSOcN4_OocU-CpCPcrNjrqHmPMqD',
  },
  {
    name: 'BMW',
    logo: 'https://drive.google.com/thumbnail?id=1JBY3EH6Zy8OOpeTiLGIEHpbsrZRHCEsB',
  },
  {
    name: 'Lamborghini',
    logo: 'https://w7.pngwing.com/pngs/259/599/png-transparent-lamborghini-logo-lamborghini-sports-car-audi-logo-lamborghini-emblem-car-gold-thumbnail.png',
  },
  {
    name: 'Audi',
    logo: 'https://w7.pngwing.com/pngs/665/220/png-transparent-audi-logo-audi-a3-car-emblem-logo-audi-car-logo-brand-text-candle-automobile-repair-shop-thumbnail.png',
  },
  {
    name: 'Ford',
    logo: 'https://w7.pngwing.com/pngs/592/644/png-transparent-ford-logo-ford-motor-company-car-ford-mustang-chrysler-ford-logo-icon-miscellaneous-emblem-trademark-thumbnail.png',
  },
  {
    name: 'Mercedes',
    logo: 'https://w7.pngwing.com/pngs/409/855/png-transparent-mercedes-benz-logo-mercedes-benz-sprinter-car-mercedes-benz-s-class-mercedes-benz-a-class-mercedes-logo-angle-free-logo-design-template-png-graphics-thumbnail.png',
  },
  {
    name: 'Porsche',
    logo: 'https://w7.pngwing.com/pngs/650/400/png-transparent-porsche-911-car-porsche-944-porsche-car-logo-brand-emblem-label-candle-thumbnail.png',
  },
  {
    name: 'McLaren',
    logo: 'https://w7.pngwing.com/pngs/676/841/png-transparent-2016-mclaren-570s-mclaren-automotive-car-mclaren-12c-mclaren-logo-class-text-mercedes-benz-thumbnail.png',
  },

    {
    name: 'Toyota',
    logo: 'https://w7.pngwing.com/pngs/186/0/png-transparent-toyota-logo-2017-toyota-camry-car-logo-toyota-car-logo-brand-emblem-company-text-thumbnail.png',
  },
      {
    name: 'Volkswagen',
    logo: 'https://w7.pngwing.com/pngs/509/532/png-transparent-volkswagen-group-car-logo-volkswagen-car-logo-brand-emblem-trademark-volkswagen-thumbnail.png',
  },
        {
    name: 'Fiat',
    logo: 'https://w7.pngwing.com/pngs/7/356/png-transparent-fiat-logo-fiat-car-logo-brand-emblem-trademark-candle-thumbnail.png',
  },
          {
    name: 'Nissan',
    logo: 'https://w7.pngwing.com/pngs/567/493/png-transparent-nissan-logo-nissan-altima-car-nissan-titan-nissan-quest-nissan-nissan-car-standard-logo-emblem-flag-free-logo-design-template-thumbnail.png',
  },
            {
    name: 'Suzuki',
    logo: 'https://w7.pngwing.com/pngs/188/538/png-transparent-red-suzuki-logo-suzuki-swift-car-maruti-suzuki-logo-suzuki-angle-emblem-text-thumbnail.png',
  },
              {
    name: 'Honda',
    logo: 'https://w7.pngwing.com/pngs/673/472/png-transparent-honda-logo-car-honda-s2000-honda-car-logo-brand-compact-car-angle-emblem-thumbnail.png',
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
        height: '85svh',
        overflow: 'hidden',
        marginTop: '12px',
        paddingBottom: '16px',
      }}
    >
      {/* Big Card */}
      <div
        className="relative flex flex-col w-full h-[75svh]"
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#111111',
        //   marginTop: '8px',
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
            className="text-white font-black uppercase leading-tight mb-3"
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
            Every Brand. Every Legend. Every Dream Machine — Right Here at Motanis Autos.
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
                    // background: 'rgba(255,255,255,0.05)',
                    // border: '1px solid rgba(255,255,255,0.10)',
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
                  className="text-motanis-muted uppercase tracking-widest text-center mb-4"
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