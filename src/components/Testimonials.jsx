import React, { useState, useEffect, useRef } from 'react';
import CounterNumber from './CounterNumber';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
// import CTAButton from './CTAButton';

const testimonials = [
  {
    id: 1,
    name: 'Esther Howard',
    profession: 'Businessman',
    review: 'Bought my first luxury car from Motanis and honestly the experience was nothing like I expected. Absolutely world class.',
    rating: 4.9,
    image: 'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
  },
  {
    id: 2,
    name: 'Robert Fox',
    profession: 'Architect',
    review: 'The after-sales support alone is worth it. Three months after buying my car I had a small issue and they sorted it out the same day.',
    rating: 4.9,
    image: 'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
  },
  {
    id: 3,
    name: 'Jacob Jones',
    profession: 'Doctor',
    review: 'Best car buying experience I have ever had. The team was completely professional from start to finish.',
    rating: 5.0,
    image: 'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
  },
  {
    id: 4,
    name: 'Sarah Mitchell',
    profession: 'Entrepreneur',
    review: 'Motanis redefined what luxury car buying means to me. Seamless, elegant and truly personal service.',
    rating: 5.0,
    image: 'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
  },
  {
    id: 5,
    name: 'David Okafor',
    profession: 'Engineer',
    review: 'From the first inquiry to driving off the lot — every single step was handled with precision and care.',
    rating: 4.8,
    image: 'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
  },
  {
    id: 6,
    name: 'Amara Nwosu',
    profession: 'Lawyer',
    review: 'I was skeptical at first but Motanis completely won me over. The attention to detail is unmatched.',
    rating: 4.9,
    image: 'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
  },
  {
    id: 7,
    name: 'James Thornton',
    profession: 'CEO',
    review: 'Premium cars, premium service. Motanis is the only dealership I will ever recommend to my colleagues.',
    rating: 5.0,
    image: 'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
  },
];

const stats = [
  { target: 12000, suffix: '+', label: 'Happy Customers' },
  { target: 600, suffix: '+', label: 'Satisfied Clients' },
  { target: 150, suffix: '', label: 'Cars Delivered' },
  { target: 98, suffix: '%', label: 'Satisfaction Rate' },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.78 + 12;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollTo(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(testimonials.length - 1, activeIndex + 1);
    scrollTo(newIndex);
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: '10px',
              color: i < full ? '#FBBF24' : half && i === full ? '#FBBF24' : '#374151',
            }}
          >
            ★
          </span>
        ))}
        <span
          className="text-motanis-muted ml-1"
          style={{ fontSize: '9px' }}
        >
          {rating}/5
        </span>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        minHeight: '100svh',
        overflow: 'hidden',
        marginTop: '12px',
        paddingBottom: '16px',
      }}
    >
      {/* Big Card */}
      <div
        className="relative flex flex-col w-full h-[90svh]"
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
            bottom: '20px',
            left: '-20px',
            zIndex: 1,
          }}
        />

        {/* ── Content ── */}
        <div
          className="relative flex flex-col px-5 py-5"
          style={{ zIndex: 2 }}
        >
          {/* ── Header Row ── */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            {/* Label */}
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
                  [ Testimonial_ ]
                </span>
              </div>
            </div>

            {/* Headline + Nav Arrows Row */}
            <div className="flex items-start justify-between mb-3">
              <h2
                className="text-white font-black uppercase leading-none"
                style={{
                  fontSize: '1.6rem',
                  letterSpacing: '-0.5px',
                  maxWidth: '200px',
                }}
              >
                Every Review <br />
                Makes Us <br />
                <span className="text-motanis-blue">Proud</span>
              </h2>

              {/* Nav Arrows */}
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    transform: 'skewX(-8deg)',
                  }}
                >
                    <ChevronLeft size={12} />
                    <ChevronLeft size={12} style={{ marginLeft: '-7px' }} />
                  {/* <span
                    className="text-white font-black"
                    style={{ fontSize: '12px', transform: 'skewX(8deg)' }}
                  >
                    «
                  </span> */}
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: '#2A6FDB',
                    border: '1px solid #2A6FDB',
                    transform: 'skewX(-8deg)',
                  }}
                >
                    <ChevronRight size={12} />
                    <ChevronRight size={12} style={{ marginLeft: '-7px' }} />
                  {/* <span
                    className="text-white font-black"
                    style={{ fontSize: '12px', transform: 'skewX(8deg)' }}
                  >
                    »
                  </span> */}
                </button>
              </div>
            </div>

            {/* Body Text */}
            <p
              className="font-cormorant text-motanis-muted leading-relaxed mb-5"
              style={{
                fontSize: '14px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.3px',
              }}
            >
              Live Reviews From Customers Who Chose Motanis.
            </p>
          </div>

          {/* ── Testimonial Cards — Horizontal Scroll ── */}
          <div
            ref={scrollRef}
            className="flex gap-3 pb-3"
            style={{
              overflowX: 'scroll',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          >
            <style>{`
              .testimonial-scroll::-webkit-scrollbar { display: none; }
            `}</style>

            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 flex flex-col"
                style={{
                  width: '78%',
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                  scrollSnapAlign: 'start',
                  padding: '0',
                }}
              >
                {/* Reviewer Info */}
                <div
                  className="flex items-start justify-between px-4 pt-4 pb-2"
                >
                  <div>
                    <p
                      className="text-white font-bold leading-none"
                      style={{ fontSize: '13px' }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-motanis-muted uppercase tracking-widest"
                      style={{ fontSize: '7px', marginTop: '3px' }}
                    >
                      {item.profession}
                    </p>
                  </div>
                </div>

                {/* Car Image */}
                <div
                  style={{
                    borderRadius: '10px',
                    width: '100%',
                    height: '140px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Review Text + Rating */}
                <div className="px-4 py-3 flex flex-col flex-1">
                  <p
                    className="text-white font-black uppercase leading-tight mb-3 flex-1"
                    style={{ fontSize: '10px', letterSpacing: '0.3px' }}
                  >
                    {item.review}
                  </p>

                  {/* Bottom Row — Stars + Quote */}
                  <div className="flex items-center justify-between">
                    {renderStars(item.rating)}
                    <span
                      className="text-motanis-muted font-black"
                      style={{ fontSize: '28px', lineHeight: 1, opacity: 0.4 }}
                    >
                      ❞
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Dot Indicators ── */}
          <div
            className="flex justify-center gap-1.5 mt-2 mb-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s',
            }}
          >
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: i === activeIndex ? '16px' : '5px',
                  height: '5px',
                  borderRadius: '99px',
                  background:
                    i === activeIndex
                      ? '#2A6FDB'
                      : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* ── Stats Row ── */}
          <div
            className="grid grid-cols-4 gap-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  padding: '10px 4px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <CounterNumber
                  target={stat.target}
                  duration={2000}
                  suffix={stat.suffix}
                  fontSize="1.1rem"
                  color="#ffffff"
                />
                <p
                  className="text-motanis-muted uppercase tracking-widest text-center"
                  style={{ fontSize: '6px', marginTop: '4px' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;