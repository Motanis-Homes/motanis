import React, { useState, useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

const footerLinks = [
  {
    heading: 'Explore',
    links: ['Inventory', 'New Arrivals', 'Brands', 'Test Drive'],
  },
  {
    heading: 'About Us',
    links: ['Our Story', 'Our Team', 'Careers', 'Contact'],
  },
  {
    heading: 'Services',
    links: ['Delivery', 'Car Financing', 'EMI Calculator', 'FAQ'],
  },
];

const socialIcons = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        marginTop: '12px',
        height: '110svh',
        paddingBottom: '0px',
        overflow: 'hidden',
      }}
    >
      {/* Big Card */}
      <div
        className="relative flex flex-col w-full h-[100svh]"
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#0A0A0F',
        }}
      >
        {/* ── Motanis Theme Gradient ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0A0A0F 0%, #13131A 50%, #0d1a2e 80%, #0A0A0F 100%)',
            zIndex: 1,
          }}
        />

        {/* ── Dot Texture ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(42,111,219,0.04) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            zIndex: 1,
          }}
        />

        {/* ── Blue Glow ── */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '250px',
            height: '250px',
            background: 'rgba(42,111,219,0.10)',
            top: '-60px',
            right: '-60px',
            zIndex: 1,
          }}
        />

        {/* ── Content ── */}
        <div
          className="relative flex flex-col px-5 pt-8 pb-0"
          style={{ zIndex: 2 }}
        >

          {/* ── Top Row — Logo + Social ── */}
          <div
            className="flex items-start justify-between mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            {/* Logo + Tagline */}
            <div className="flex flex-col items-start gap-2">

              <img
                src="https://drive.google.com/thumbnail?id=1q-u02VX-IqEORCYzgjJWPzGNhLzsqMkm&sz=w400"
                alt="Motanis Logo"
                style={{
                  height: '60px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />

              {/* Previous Footer Text Logo Below: */}

              {/* <span className="font-black tracking-tight" style={{ fontSize: '18px' }}>
                <span className="text-white">MOT</span>
                <span className="text-motanis-blue">ANIS.</span>
              </span> */}
              {/* <span
                className="text-motanis-muted font-medium uppercase"
                style={{ fontSize: '6px', letterSpacing: '2px' }}
              >
                Homes & Autos
              </span> */}
              {/* <p
                className="font-cormorant text-motanis-muted leading-relaxed"
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  fontStyle: 'italic',
                  maxWidth: '160px',
                  marginTop: '4px',
                }}
              >
                Every Week We Share The Latest Arrivals, Best Deals And Exclusive Offers.
              </p> */}
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-2 items-end">
              <p
                className="text-motanis-muted uppercase tracking-widest"
                style={{ fontSize: '7px' }}
              >
                Follow Us On
              </p>
              <div className="flex items-center gap-2">
                {socialIcons.map((social) => (
                    <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center text-motanis-muted hover:text-motanis-blue transition-colors duration-200"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}
          />

          {/* ── Link Grid — 3 columns ── */}
          <div
            className="grid grid-cols-3 gap-4 mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          >
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-2">
                <p
                  className="text-white font-black uppercase tracking-widest"
                  style={{ fontSize: '8px', marginBottom: '4px' }}
                >
                  {col.heading}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="www.google.com"
                    className="text-motanis-muted uppercase tracking-widest transition-colors duration-200"
                    style={{ fontSize: '7px' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* ── Divider ── */}
          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.3s',
            }}
          />

          {/* ── Newsletter ── */}
          <div
            className="flex flex-col mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
            }}
          >
            <p
              className="text-white font-black leading-tight mb-2"
              style={{ fontSize: '16px' }}
            >
              Subscribe on Newsletter
            </p>
            <p
              className="font-cormorant text-motanis-muted leading-relaxed mb-4"
              style={{
                fontSize: '13px',
                fontStyle: 'italic',
                fontWeight: '700',
                maxWidth: '280px',
              }}
            >
              Get The Latest Arrivals, Updates And Exclusive Offers Delivered Straight To Your Inbox.
            </p>

            {/* Email Input Row */}
            {subscribed ? (
              <div
                className="flex items-center justify-center py-3 rounded-2xl"
                style={{
                  background: 'rgba(42,111,219,0.15)',
                  border: '1px solid rgba(42,111,219,0.3)',
                }}
              >
                <p
                  className="text-motanis-blue font-black uppercase tracking-widest"
                  style={{ fontSize: '9px' }}
                >
                  ✓ Subscribed Successfully!
                </p>
              </div>
            ) : (
              <div
                className="flex items-center"
                style={{
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRight: 'none',
                  borderRadius: '10px 0 0 10px',
                  overflow: 'hidden',
                  transform: 'skewX(-12deg)',

                }}
              >
                {/* Email Input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type e-mail here"
                  className="flex-1 bg-transparent text-white outline-none"
                  style={{
                    fontSize: '10px',
                    padding: '11px 14px',
                    color: '#fff',
                    minWidth: 0,
                  }}
                />

                {/* CTAButton — Subscribe */}
                <div
                  className="flex-shrink-0"
                  onClick={handleSubscribe}
                  style={{ cursor: 'pointer' }}
                >
                  <CTAButton label="Subscribe" href="#" />
                </div>
              </div>
            )}
          </div>

          {/* ── Divider ── */}
          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              marginBottom: '16px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s',
            }}
          />

          {/* ── Legal Links + Copyright ── */}
          <div
            className="flex flex-col gap-3 mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
            }}
          >
            {/* Legal Links */}
            <div className="flex items-center gap-4 flex-wrap">
              {['Privacy Policy', 'Terms & Conditions', 'Cookies', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href="www.google.com"
                  className="text-motanis-muted uppercase tracking-widest"
                  style={{ fontSize: '7px' }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p
              className="text-motanis-muted uppercase tracking-widest"
              style={{ fontSize: '7px' }}
            >
              2025 © Motanis. All Rights Reserved | OMMICANG.
            </p>
          </div>

        </div>

        {/* ── MOTANIS Watermark ── */}
        <div
          className="relative flex items-end justify-center overflow-hidden"
          style={{
            height: '80px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}
        >
          <p
            className="text-white font-black uppercase leading-none select-none"
            style={{
              fontSize: 'clamp(3rem, 22vw, 7rem)',
              letterSpacing: '-2px',
              opacity: 0.04,
              whiteSpace: 'nowrap',
              lineHeight: 0.85,
            }}
          >
            MOTANIS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;