import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';
import CounterNumber from './CounterNumber';

const carImages = [
  'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
  'https://lh3.googleusercontent.com/d/1vl6Fcsq0dKGIF5INIGg0yRxkkwSD1CV8=s800',
  'https://lh3.googleusercontent.com/d/1bA03zSA8U1sjhdo1HIe4wp4d6WyfBRFC=s800',
  'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
  'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
  'https://lh3.googleusercontent.com/d/1ih6OCFCJ1A1CSAFBSWz9d3w2wb8pR_me=s800',

];

const teamMembers = [
  { id: 1, name: 'TOBI SAMUEL', role: 'CEO & Founder', bio: 'Visionary leader with over two decades of experience in luxury automotive and real estate markets across Africa.', avatar: 'https://lh3.googleusercontent.com/d/1V2Zvq98d0JXGdAKJ-KJwtgkvKYiyAtuv=s800' },
  { id: 2, name: 'Segun Adekanye', role: 'Human Resources', bio: 'HR professional with years of experience improving team culture, driving recruitment, and supporting staff growth.', avatar: 'https://lh3.googleusercontent.com/d/1HNyF1zJq0qQ4jJ7p-J5E1SBoQKZ5JuAF=s800' },
  { id: 3, name: 'Munachi Anuakpado', role: 'Receptionist', bio: 'Organized and detail-oriented - with strong communication skills. Manages tasks and schedules efficiently.', avatar: 'https://lh3.googleusercontent.com/d/1YTKShbl8gyXov3RXzrjpXYY-DLe4FirC=s800' },
  { id: 4, name: 'OMMICANG', role: 'Wildcard', bio: '...', avatar: 'https://lh3.googleusercontent.com/d/1WdNsWPLqwu20MsSi9zPdMu2htpLZ4qtU=s800' },
];

const coreValues = [
  {
    icon: 'https://drive.google.com/thumbnail?id=1R3wYKJ-sqQY8IaDszIliTGMzw_aGaVrO&sz=w200',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standard in every vehicle, every property and every interaction.',
  },
  {
    icon: 'https://drive.google.com/thumbnail?id=1dq2FCUnNSwODYcy_fKx16GhX8H580Oou&sz=w200',
    title: 'Integrity',
    description: 'Transparency and honesty are the foundation of every deal we make at Motanis.',
  },
  {
    icon: 'https://drive.google.com/thumbnail?id=11DaiqTnj9A5sHc9iambEn4F063jkLmq8&sz=w200',
    title: 'Innovation',
    description: 'We continuously evolve our processes to deliver a smarter, faster and more premium experience.',
  },
];

const whyFeatures = [
  { 
    icon: 'https://drive.google.com/thumbnail?id=1JY07XYl9lTPw53hs7gueJ8ABqrK-363-', 
    title: 'Motanis Verified Listings', 
    description: 'Every vehicle and property in our inventory is thoroughly inspected and verified before listing — zero compromise on quality.' 
},
  { 
    icon: 'https://drive.google.com/thumbnail?id=1CyRB8TiBd-xRtABP8gRTWq-KKc1Zjq-g',
    title: 'Expert Team',
    description: 'Our specialists bring years of industry knowledge to guide you through every step of your purchase journey.'
},
  {
    icon: 'https://drive.google.com/thumbnail?id=1IcJxP6N2Y8MeGKcAoQEWrIhSHf9OTqgi',
    title: 'Instant WhatsApp Support',
    description: 'We are always one message away. Reach us directly on WhatsApp and get fast responses from real people.'
},
  {
    icon: 'https://drive.google.com/thumbnail?id=1Pfj-ZgEL4q26Sve642-QLuWvc7gNwWOF',
    title: 'Doorstep Delivery',
    description: 'We bring your dream car directly to your door, fully inspected and ready to drive — anywhere in Nigeria.'
},
];

// ── Reusable Section Wrapper with fade-in ──
const FadeSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(false);
          setTimeout(() => setVisible(true), delay);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ── Label Pill ──
const LabelPill = ({ text }) => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4"
    style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
  >
    <div className="rounded-full" style={{ width: '5px', height: '5px', background: '#2A6FDB', flexShrink: 0 }} />
    <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>{text}</span>
  </div>
);

// ── 3D Card Carousel ──
const ThreeDCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const getPosition = (index) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === total - 3) return 'right';
    if (diff === total - 1 || diff === total - 2) return 'left';
    return 'hidden';
  };

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Auto advance — no dependency on handleNext function reference
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: '200px', overflow: 'hidden' }}
    >
      {images.map((src, index) => {
        const position = getPosition(index);

        if (position === 'hidden') return null;

        const styles = {
          center: {
            transform: 'translateX(-50%) scale(1)',
            left: '50%',
            zIndex: 10,
            opacity: 1,
            width: '58%',
            filter: 'none',
          },
          left: {
            transform: 'translateX(-85%) scale(0.82)',
            left: '50%',
            zIndex: 5,
            opacity: 0.6,
            width: '58%',
            filter: 'brightness(0.6)',
          },
          right: {
            transform: 'translateX(-15%) scale(0.82)',
            left: '50%',
            zIndex: 5,
            opacity: 0.6,
            width: '58%',
            filter: 'brightness(0.6)',
          },
        };

        return (
          <div
            key={index}
            className="absolute"
            style={{
              ...styles[position],
              height: position === 'center' ? '180px' : '160px',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'all 1.5s cubic-bezier(0.77, 0, 0.18, 1)',
              cursor: position !== 'center' ? 'pointer' : 'default',
            }}
            onClick={() => {
              if (position === 'right') handleNext();
              if (position === 'left') handlePrev();
            }}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />

            {/* Right fade overlay — hints scrollability */}
            {position === 'right' && (
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, transparent 40%, rgba(10,10,15,0.85) 100%)',
                }}
              />
            )}

            {/* Left fade overlay */}
            {position === 'left' && (
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to left, transparent 40%, rgba(10,10,15,0.85) 100%)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

// ── Team Scroll Dots ──
const TeamDots = ({ total }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const row = document.querySelector('.team-dot-track');
    if (!row) return;
    const handleScroll = () => {
      const cardWidth = row.offsetWidth * 0.72 + 16;
      const index = Math.round(row.scrollLeft / cardWidth);
      setActive(Math.min(index, total - 1));
    };
    row.addEventListener('scroll', handleScroll);
    return () => row.removeEventListener('scroll', handleScroll);
  }, [total]);

  return (
    <div className="flex justify-center gap-1.5 mt-2 px-5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === active ? '16px' : '5px',
            height: '5px',
            borderRadius: '99px',
            background: i === active
              ? '#2A6FDB'
              : 'rgba(255,255,255,0.20)',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  );
};

const AboutUsPage = ({ activePage, setActivePage }) => {
  return (
    <div className="md:hidden flex flex-col min-h-screen" style={{ background: '#0A0A0F' }}>

      {/* Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* ── 1. HERO ── */}
      <section
        className="relative flex flex-col px-5 pt-6 pb-8 overflow-hidden"
        style={{
          marginTop: '52px',
          background: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 50%, #0d1a2e 100%)',
        }}
      >
        {/* Blue Glow */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '250px',
            height: '250px',
            background: 'rgba(42,111,219,0.10)',
            top: '-80px',
            right: '-60px',
          }}
        />

        {/* ── Segment 1: Label + Headline + Tagline ── */}
        <FadeSection delay={100}>
          <LabelPill text="[ About Us_ ]" />
          <h1
            className="text-white font-black uppercase leading-none mb-3"
            style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}
          >
            Built For Those <br />
            Who Want <br />
            <span className="text-motanis-blue">The Best</span>
          </h1>
          <p
            className="font-cormorant text-motanis-muted leading-relaxed mb-8"
            style={{
              fontSize: '15px',
              fontStyle: 'italic',
              fontWeight: '500',
              maxWidth: '280px',
            }}
          >
            Making Every Sale, Buy And Swap An Experience — One Client At A Time.
          </p>
        </FadeSection>

        {/* ── Segment 2: 3D Card Carousel ── */}
        <FadeSection delay={250}>
          <ThreeDCarousel images={carImages} />
        </FadeSection>

        {/* ── Segment 3: Mission Statement ── */}

        <section className=" relative flex mt-8 mb-0 rounded-xl items-center text-center px-2 w-full"
            style={{
                width:'100%',
                height: '200px',
                background: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 50%, #0d1a2e 100%)',
            }}
        >

        <div className="absolute rounded-full blur-3xl"
          style={{ width: '200px', height: '200px', background: 'rgba(42,111,219,0.10)', top: '-40px', left: '50%', transform: 'translateX(-50%)' }}
        />
        <FadeSection delay={350}>

            <p
              className="text-white font-black uppercase leading-tight"
              style={{
                fontSize: '1rem',
                letterSpacing: '-0.3px',
              }}
            >
              We are on a mission to{' '}
              <span className="text-motanis-blue">redefine</span>{' '}
              the automotive and real estate experience across{' '}
              <span className="text-motanis-blue">Africa</span>{' '}
              — delivering{' '}
              <span className="text-motanis-blue">excellence</span>{' '}
              without compromise.
            </p>
        </FadeSection>
        </section>

        {/* ── Segment 4: Stats Row ── */}

        <section className=" flex items-center justify-center px-2  w-full"
            style={{ background: '#13131A', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
        <FadeSection delay={450}>
          <div
            className="grid grid-cols-4 gap-2"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '20px',
            }}
          >
            {[
              { target: 500, suffix: '+', label: 'Happy Clients' },
              { target: 20, suffix: '+', label: 'Years Exp.' },
              { target: 500, suffix: '+', label: 'Cars Delivered' },
              { target: 5, suffix: '.0★', label: 'Rating' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
                style={{
                  padding: '8px 4px',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
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
                  className="text-motanis-muted uppercase tracking-widest text-center mt-1"
                  style={{ fontSize: '6px' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeSection>
        </section>
      </section>

      {/* ── 4. OUR STORY ── */}
      <section className="flex flex-col gap-4 px-4 py-8">
        <FadeSection>
          <LabelPill text="[ Our Story_ ]" />
        </FadeSection>

        {/* Story Card 1 */}
        <FadeSection delay={100}>
          <div className="flex flex-col rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={carImages[1]} alt="Our Story" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
            </div>
            <div className="px-4 py-4">
              <h3 className="text-white font-black uppercase leading-tight mb-2" style={{ fontSize: '1.1rem' }}>
                Where It <span className="text-motanis-blue">All Began</span>
              </h3>
              <p className="font-cormorant text-motanis-muted leading-relaxed"
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '700' }}
              >
                Motanis Was Birth From A Simple Yet Powerful Belief — That Every Nigerian Deserves Access To Premium Vehicles And Properties Without The Hassle, Uncertainty Or Compromise That Often Comes With It.
              </p>
            </div>
          </div>
        </FadeSection>

        {/* Story Card 2 */}
        <FadeSection delay={150}>
          <div className="flex flex-col rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #111111 0%, #0d1a2e 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="px-4 py-4">
              <h3 className="text-white font-black uppercase leading-tight mb-2" style={{ fontSize: '1.1rem' }}>
                Our <span className="text-motanis-blue">Journey</span>
              </h3>
              <p className="font-cormorant text-motanis-muted leading-relaxed"
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '700' }}
              >
                From Our First Vehicle Sale To Hundreds Of Satisfied Clients — Every Milestone Has Been Built On Trust, Transparency And An Unrelenting Pursuit Of Excellence. We Don't Just Sell Cars And Homes. We Build Relationships.
              </p>
            </div>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={carImages[2]} alt="Our Journey" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
            </div>
          </div>
        </FadeSection>

        {/* Story Card 3 */}
        <FadeSection delay={200}>
          <div className="flex flex-col rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={carImages[5]} alt="Our Vision" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
            </div>
            <div className="px-4 py-4">
              <h3 className="text-white font-black uppercase leading-tight mb-2" style={{ fontSize: '1.1rem' }}>
                Our <span className="text-motanis-blue">Vision</span>
              </h3>
              <p className="font-cormorant text-motanis-muted leading-relaxed"
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '700' }}
              >
                To Become Africa's Most Trusted Premium Automotive And Real Estate Platform — Where Every Client Walks Away Not Just Satisfied, But Genuinely Delighted.
              </p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 5. MEET THE TEAM ── */}
      <section
        className="flex flex-col py-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 50%, #0d1a2e 100%)',
        }}
      >
        {/* Header */}
        <FadeSection>
          <div className="px-5 mb-6">
            <LabelPill text="[ Our Team_ ]" />
            <h2
              className="text-white font-black uppercase leading-none mb-2"
              style={{ fontSize: '1.6rem', letterSpacing: '-0.5px' }}
            >
              Meet The{' '}
              <span className="text-motanis-blue">Motanis</span>{' '}
              People
            </h2>
            <p
              className="font-cormorant text-motanis-muted leading-relaxed"
              style={{
                fontSize: '14px',
                fontStyle: 'italic',
                fontWeight: '500',
                maxWidth: '280px',
              }}
            >
              A Team Of Passionate Professionals Dedicated To Delivering Your Best Experience.
            </p>
          </div>
        </FadeSection>

        {/* ── Horizontal Team Card Scroll ── */}
        <FadeSection delay={150}>
          <div className="relative">

            {/* Left fade edge */}
            <div
              className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: '32px',
                background: 'linear-gradient(to right, #0d1219, transparent)',
              }}
            />

            {/* Right fade edge */}
            <div
              className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: '80px',
                background: 'linear-gradient(to left, #0d1219, transparent)',
              }}
            />

            {/* Scrollable Row */}
            <div
              className="flex gap-4 px-5 pb-4 team-dot-track"
              style={{
                overflowX: 'scroll',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style>{`.team-scroll::-webkit-scrollbar { display: none; }`}</style>

              {teamMembers.map((member, i) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 flex flex-col overflow-hidden"
                  style={{
                    width: '72vw',
                    maxWidth: '260px',
                    borderRadius: '24px',
                    scrollSnapAlign: 'start',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    position: 'relative',
                  }}
                >
                  {/* Card Top — Avatar + Gradient */}
                  <div
                    className="relative flex items-end justify-start"
                    style={{ height: '200px', overflow: 'hidden' }}
                  >
                    {/* Background gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(160deg, #0d1a2e ${i % 2 === 0 ? '0%' : '30%'}, #111111 100%)`,
                      }}
                    />

                    {/* Blue glow blob */}
                    <div
                      className="absolute rounded-full blur-2xl"
                      style={{
                        width: '120px',
                        height: '120px',
                        background: 'rgba(42,111,219,0.20)',
                        top: '-20px',
                        right: '-20px',
                      }}
                    />

                    {/* Avatar — large, bottom aligned */}
                    <div
                      className="absolute bottom-0 right-4 overflow-hidden"
                      style={{
                        width: '110px',
                        height: '140px',
                        borderRadius: '16px 16px 0 0',
                        border: '1px solid rgba(42,111,219,0.3)',
                        borderBottom: 'none',
                      }}
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Bottom gradient on avatar */}
                      <div
                        className="absolute bottom-0 left-0 right-0"
                        style={{
                          height: '40px',
                          background: 'linear-gradient(to top, #111111, transparent)',
                        }}
                      />
                    </div>

                    {/* Name + Role — bottom left of image area */}
                    <div
                      className="relative z-10 px-4 pb-3 flex flex-col"
                      style={{ maxWidth: '55%' }}
                    >
                      <p
                        className="text-white font-black leading-tight"
                        style={{ fontSize: '14px', letterSpacing: '-0.3px' }}
                      >
                        {member.name}
                      </p>
                      <div
                        className="flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full w-fit"
                        style={{
                          background: 'rgba(42,111,219,0.20)',
                          border: '1px solid rgba(42,111,219,0.35)',
                        }}
                      >
                        <div
                          className="rounded-full flex-shrink-0"
                          style={{
                            width: '4px',
                            height: '4px',
                            background: '#2A6FDB',
                          }}
                        />
                        <span
                          className="text-motanis-blue font-black uppercase tracking-widest"
                          style={{ fontSize: '6px' }}
                        >
                          {member.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom — Bio + Divider */}
                  <div
                    className="flex flex-col px-4 py-4"
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Quote mark */}
                    <span
                      className="text-motanis-blue font-black leading-none mb-1"
                      style={{ fontSize: '2rem', opacity: 0.3, lineHeight: 1 }}
                    >
                      "
                    </span>
                    <p
                      className="font-cormorant text-motanis-muted leading-relaxed"
                      style={{
                        fontSize: '13px',
                        fontStyle: 'italic',
                        fontWeight: '700',
                      }}
                    >
                      {member.bio}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className="mt-4 rounded-full"
                      style={{
                        height: '2px',
                        width: '32px',
                        background: 'linear-gradient(to right, #2A6FDB, transparent)',
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* End spacer */}
              <div style={{ width: '16px', flexShrink: 0 }} />
            </div>
          </div>
        </FadeSection>

        {/* Dot Indicators */}
        <FadeSection delay={200}>
          <TeamDots total={teamMembers.length} />
        </FadeSection>
      </section>

      {/* ── 6. CORE VALUES ── */}
      <section className="flex flex-col px-4 py-8">
        <FadeSection>
          <LabelPill text="[ Our Values_ ]" />
          <h2 className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: '1.6rem', letterSpacing: '-0.5px' }}
          >
            What We <span className="text-motanis-blue">Stand For</span>
          </h2>
        </FadeSection>

        <div className="flex flex-col gap-4">
          {coreValues.map((value, i) => (
            <FadeSection key={value.title} delay={i * 100}>
              <div className="flex flex-col p-5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)',
                  border: '1px solid rgba(42,111,219,0.15)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    marginBottom: '10px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    mixBlendMode: 'screen',
                  }}
                >
                  <img
                    src={value.icon}
                    alt={value.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                <p className="text-white font-black uppercase leading-none mb-2" style={{ fontSize: '1rem' }}>
                  {value.title}
                </p>
                <p className="font-cormorant text-motanis-muted leading-relaxed"
                  style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
                >
                  {value.description}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── 7. WHY CHOOSE MOTANIS ── */}
      <section className="flex flex-col px-4 py-8"
        style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 50%, #0d1a2e 100%)' }}
      >
        <FadeSection>
          <LabelPill text="[ Why Motanis_ ]" />
          <h2 className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: '1.6rem', letterSpacing: '-0.5px' }}
          >
            Why Clients <span className="text-motanis-blue">Choose Us</span>
          </h2>
        </FadeSection>

        <div className="flex flex-col gap-3">
          {whyFeatures.map((feature, i) => (
            <FadeSection key={feature.title} delay={i * 80}>
              <div className="flex items-start gap-4 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >

                                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    marginBottom: '10px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    mixBlendMode: 'screen',
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                {/* <div className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ width: '40px', height: '40px', background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.25)', fontSize: '1.2rem' }}
                >
                  {feature.icon}
                </div> */}
                <div className="flex flex-col flex-1">
                  <p className="text-white font-black uppercase leading-tight mb-1" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
                    {feature.title}
                  </p>
                  <p className="font-cormorant text-motanis-muted leading-relaxed"
                    style={{ fontSize: '13px', fontStyle: 'italic', fontWeight: '500' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── 8. CTA BANNER ── */}
      <section className="px-4 py-8">
        <FadeSection>
          <div className="relative flex flex-col rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)', border: '1px solid rgba(42,111,219,0.2)', padding: '28px 20px' }}
          >
            {/* Glow */}
            <div className="absolute rounded-full blur-3xl"
              style={{ width: '200px', height: '200px', background: 'rgba(42,111,219,0.15)', top: '-60px', right: '-60px' }}
            />

            <LabelPill text="[ Get Started_ ]" />
            <h2 className="text-white font-black uppercase leading-none mb-3"
              style={{ fontSize: '1.7rem', letterSpacing: '-0.5px' }}
            >
              Ready To Find <br />
              Your <span className="text-motanis-blue">Dream Car?</span>
            </h2>
            <p className="font-cormorant text-motanis-muted leading-relaxed mb-6"
              style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500', maxWidth: '260px' }}
            >
              Let's Make It Happen. Chat With Our Team Today And Let Us Find The Perfect Listing For You.
            </p>
            <div className="flex items-center">
              <CTAButton
                label="Chat With Us"
                href="https://wa.link/rqzyad"
                onClick={() => window.open('https://wa.link/rqzyad', '_blank')}
              />
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 9. FOOTER ── */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
};

export default AboutUsPage;