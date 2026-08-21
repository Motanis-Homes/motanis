import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';

const cookieTypes = [
  {
    type: 'Essential Cookies',
    icon: 'https://drive.google.com/thumbnail?id=1F_Xja-gxl2pKRmde2JplvwNEG4ARiKh8=w200',
    title: 'Locked Icon', 
    required: true,
    description: 'These cookies are strictly necessary for the Motanis platform to function. They enable core features such as page navigation and access to secure areas. The platform cannot function properly without these cookies.',
    examples: ['Session management', 'Security tokens', 'Load balancing'],
  },
  {
    type: 'Analytics Cookies',
    icon: '📊',
    title: 'Analytics Icon', 
    required: false,
    description: 'These cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously. This helps us improve the overall user experience.',
    examples: ['Page view tracking', 'User journey analysis', 'Performance monitoring'],
  },
  {
    type: 'Marketing Cookies',
    icon: '📣',
    title: 'Marketing Speaker Icon', 
    required: false,
    description: 'These cookies are used to track visitors across platforms and display relevant content based on your interests. They are set by us and our trusted marketing partners.',
    examples: ['Campaign performance', 'Content personalisation', 'Retargeting'],
  },
  {
    type: 'Third-Party Cookies',
    icon: '🌐',
    title: 'Internet Icon', 
    required: false,
    description: 'Some features on our platform are provided by third-party services including Google Drive for image delivery and WhatsApp for communication. These services may set their own cookies.',
    examples: ['Google Drive image serving', 'WhatsApp redirect tracking', 'External media embedding'],
  },
];

const CookiesPage = ({ activePage, setActivePage }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setTimeout(() => setVisible(true), 200); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleResetConsent = () => {
    localStorage.removeItem('motanis_cookie_consent');
    window.location.reload();
  };

  return (
    <div className="md:hidden flex flex-col min-h-screen" style={{ background: '#0A0A0F' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <div ref={ref} className="flex flex-col px-5 pb-12" style={{ paddingTop: '80px' }}>

        {/* Header */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4"
            style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
          >
            <span style={{ fontSize: '12px' }}>🍪</span>
            <span className="text-motanis-blue font-black uppercase tracking-widest ml-1" style={{ fontSize: '8px' }}>[ Cookie Policy_ ]</span>
          </div>

          <h1 className="text-white font-black uppercase leading-none mb-3" style={{ fontSize: '2rem', letterSpacing: '-0.5px' }}>
            Cookie <span className="text-motanis-blue">Policy</span>
          </h1>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-2" style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}>
            Effective Date: January 1, 2025
          </p>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-8"
            style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500', maxWidth: '300px' }}
          >
            This Cookie Policy explains how Motanis uses cookies and similar technologies when you visit our platform. We are committed to being transparent about how we collect and use your data.
          </p>
        </div>

        {/* What Are Cookies */}
        <div className="p-4 rounded-2xl mb-6"
          style={{
            background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)',
            border: '1px solid rgba(42,111,219,0.2)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.1s',
          }}
        >
          <p className="text-white font-black uppercase tracking-widest mb-2" style={{ fontSize: '10px' }}>What Are Cookies?</p>
          <p className="font-cormorant text-motanis-muted leading-relaxed"
            style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
          >
            Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience on return visits.
          </p>
        </div>

        {/* Cookie Types */}
        <div className="flex flex-col gap-4 mb-6">
          {cookieTypes.map((cookie, i) => (
            <div key={i} className="flex flex-col p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${0.2 + i * 0.08}s, transform 0.6s ease ${0.2 + i * 0.08}s`,
              }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">

                    <div
                        style={{
                            width: '20px',
                            height: '20px',
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
                  {/* <span style={{ fontSize: '1.2rem' }}>{cookie.icon}</span> */}
                  <p className="text-white font-black uppercase tracking-widest" style={{ fontSize: '9px' }}>{cookie.type}</p>
                </div>
                <div className="px-2 py-0.5 rounded-full"
                  style={{
                    background: cookie.required ? 'rgba(42,111,219,0.15)' : 'rgba(255,255,255,0.06)',
                    border: cookie.required ? '1px solid rgba(42,111,219,0.3)' : '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <span className="font-black uppercase tracking-widest"
                    style={{ fontSize: '6px', color: cookie.required ? '#2A6FDB' : '#8A9BB0' }}
                  >
                    {cookie.required ? 'Required' : 'Optional'}
                  </span>
                </div>
              </div>

              <p className="font-cormorant text-motanis-muted leading-relaxed mb-3"
                style={{ fontSize: '13px', fontStyle: 'italic', fontWeight: '500' }}
              >
                {cookie.description}
              </p>

              {/* Examples */}
              <div className="flex flex-col gap-1">
                {cookie.examples.map((ex, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="rounded-full flex-shrink-0" style={{ width: '4px', height: '4px', background: '#2A6FDB' }} />
                    <span className="text-motanis-muted uppercase tracking-widest" style={{ fontSize: '7px' }}>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reset Consent */}
        <div className="flex flex-col p-4 rounded-2xl mb-6"
          style={{
            background: 'rgba(42,111,219,0.08)',
            border: '1px solid rgba(42,111,219,0.2)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.7s',
          }}
        >
          <p className="text-white font-black uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>
            Manage Your Consent
          </p>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-4"
            style={{ fontSize: '13px', fontStyle: 'italic', fontWeight: '500' }}
          >
            You can reset your cookie preferences at any time by clicking the button below. The consent popup will reappear on your next page load.
          </p>
          <button
            onClick={handleResetConsent}
            className="flex items-center justify-center font-black uppercase tracking-widest py-3 rounded-full w-full"
            style={{
              fontSize: '8px',
              color: '#2A6FDB',
              background: 'rgba(42,111,219,0.12)',
              border: '1px solid rgba(42,111,219,0.3)',
            }}
          >
            Reset Cookie Preferences
          </button>
        </div>

        {/* Contact */}
        <div className="p-4 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.8s',
          }}
        >
          <p className="text-white font-black uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>Questions?</p>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-4"
            style={{ fontSize: '13px', fontStyle: 'italic', fontWeight: '500' }}
          >
            If you have any questions about our use of cookies, please contact us directly.
          </p>
          <CTAButton
            label="Chat With Us"
            href="https://wa.link/rqzyad"
            onClick={() => window.open('https://wa.link/rqzyad', '_blank')}
          />
        </div>

      </div>

      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default CookiesPage;