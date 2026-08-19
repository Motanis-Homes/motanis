import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';
import CounterNumber from './CounterNumber';

const carImages = [
  'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
  'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
  'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
  'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
];

const teamMembers = [
  { id: 1, name: 'Adebayo Okafor', role: 'CEO & Founder', bio: 'Visionary leader with over a decade of experience in luxury automotive and real estate markets across Africa.', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
  { id: 2, name: 'Chidinma Eze', role: 'Head of Operations', bio: 'Driving excellence in every process. Chidinma ensures every client interaction is seamless from start to finish.', avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg' },
  { id: 3, name: 'Emeka Nwosu', role: 'Lead Auto Specialist', bio: 'A passionate car enthusiast with deep expertise in performance vehicles and luxury fleet management.', avatar: 'https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg' },
  { id: 4, name: 'Fatima Aliyu', role: 'Real Estate Director', bio: 'Bridging the gap between premium property listings and discerning clients across Nigeria and beyond.', avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg' },
  { id: 5, name: 'Tunde Adeleke', role: 'Client Relations Manager', bio: 'Building lasting relationships one conversation at a time. Tunde is the heart of the Motanis client experience.', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
  { id: 6, name: 'Ngozi Obi', role: 'Finance & Logistics Lead', bio: 'Ensuring every deal is structured for maximum value. Ngozi manages financing, delivery and post-sale support.', avatar: 'https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg' },
];

const coreValues = [
  { icon: '💎', title: 'Excellence', description: 'We hold ourselves to the highest standard in every vehicle, every property and every interaction.' },
  { icon: '🤝', title: 'Integrity', description: 'Transparency and honesty are the foundation of every deal we make at Motanis.' },
  { icon: '🚀', title: 'Innovation', description: 'We continuously evolve our processes to deliver a smarter, faster and more premium experience.' },
];

const whyFeatures = [
  { icon: '✅', title: 'Motanis Verified Listings', description: 'Every vehicle and property in our inventory is thoroughly inspected and verified before listing — zero compromise on quality.' },
  { icon: '👨‍💼', title: 'Expert Team', description: 'Our specialists bring years of industry knowledge to guide you through every step of your purchase journey.' },
  { icon: '💬', title: 'Instant WhatsApp Support', description: 'We are always one message away. Reach us directly on WhatsApp and get real responses from real people — fast.' },
  { icon: '🚗', title: 'Doorstep Delivery', description: 'We bring your dream car directly to your door, fully inspected and ready to drive — anywhere in Nigeria.' },
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
              transition: 'all 0.5s cubic-bezier(0.77, 0, 0.18, 1)',
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

      {/* Dot Indicators */}
      <div
        className="absolute bottom-0 left-1/2 flex gap-1.5"
        style={{ transform: 'translateX(-50%)' }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: i === activeIndex ? '16px' : '5px',
              height: '5px',
              borderRadius: '99px',
              background: i === activeIndex ? '#2A6FDB' : 'rgba(255,255,255,0.25)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
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
            Redefining the automotive and real estate experience — one client at a time.
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
              { target: 100, suffix: '+', label: 'Happy Clients' },
              { target: 3, suffix: '+', label: 'Years Exp.' },
              { target: 50, suffix: '+', label: 'Cars Delivered' },
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
              <img src={carImages[0]} alt="Our Story" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
            </div>
            <div className="px-4 py-4">
              <h3 className="text-white font-black uppercase leading-tight mb-2" style={{ fontSize: '1.1rem' }}>
                Where It <span className="text-motanis-blue">All Began</span>
              </h3>
              <p className="font-cormorant text-motanis-muted leading-relaxed"
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
              >
                Motanis was born from a simple but powerful belief — that every Nigerian deserves access to premium vehicles and properties without the hassle, uncertainty or compromise that often comes with it.
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
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
              >
                From our first vehicle sale to hundreds of satisfied clients — every milestone has been built on trust, transparency and an unrelenting pursuit of excellence. We don't just sell cars and homes. We build relationships.
              </p>
            </div>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={carImages[1]} alt="Our Journey" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
            </div>
          </div>
        </FadeSection>

        {/* Story Card 3 */}
        <FadeSection delay={200}>
          <div className="flex flex-col rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={carImages[2]} alt="Our Vision" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
            </div>
            <div className="px-4 py-4">
              <h3 className="text-white font-black uppercase leading-tight mb-2" style={{ fontSize: '1.1rem' }}>
                Our <span className="text-motanis-blue">Vision</span>
              </h3>
              <p className="font-cormorant text-motanis-muted leading-relaxed"
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
              >
                To become Africa's most trusted premium automotive and real estate platform — where every client walks away not just satisfied, but genuinely delighted.
              </p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 5. MEET THE TEAM ── */}
      <section className="flex flex-col px-4 py-8"
        style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 50%, #0d1a2e 100%)' }}
      >
        <FadeSection>
          <LabelPill text="[ Our Team_ ]" />
          <h2 className="text-white font-black uppercase leading-none mb-2"
            style={{ fontSize: '1.6rem', letterSpacing: '-0.5px' }}
          >
            Meet The <span className="text-motanis-blue">Motanis</span> People
          </h2>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-6"
            style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
          >
            A team of passionate professionals dedicated to delivering your best experience.
          </p>
        </FadeSection>

        <div className="flex flex-col gap-4">
          {teamMembers.map((member, i) => (
            <FadeSection key={member.id} delay={i * 80}>
              <div className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Avatar */}
                <div className="flex-shrink-0 overflow-hidden rounded-full"
                  style={{ width: '56px', height: '56px', border: '2px solid rgba(42,111,219,0.4)' }}
                >
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1">
                  <p className="text-white font-black leading-tight" style={{ fontSize: '13px' }}>
                    {member.name}
                  </p>
                  <p className="text-motanis-blue font-bold uppercase tracking-widest mb-1" style={{ fontSize: '7px' }}>
                    {member.role}
                  </p>
                  <p className="font-cormorant text-motanis-muted leading-relaxed"
                    style={{ fontSize: '12px', fontStyle: 'italic', fontWeight: '500' }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
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
                <span style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{value.icon}</span>
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
                <div className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ width: '40px', height: '40px', background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.25)', fontSize: '1.2rem' }}
                >
                  {feature.icon}
                </div>
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
              Let's make it happen. Chat with our team today and let us find the perfect vehicle for you.
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