import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, including your name, contact details and communication preferences when you reach out via our platform or WhatsApp. We also automatically collect certain technical data such as your device type, browser, IP address and usage patterns when you interact with our site.`,
  },
  {
    title: 'How We Use Your Information',
    content: `Your information is used to respond to your enquiries, process transactions, improve our services, send relevant updates and comply with legal obligations. We do not sell your personal data to any third parties under any circumstances.`,
  },
  {
    title: 'Data Sharing',
    content: `We may share your information with trusted service providers who assist in operating our platform — including hosting providers, analytics tools and communication services. All third parties are contractually obligated to protect your data in accordance with applicable law.`,
  },
  {
    title: 'Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy or as required by applicable Nigerian and international data protection law.`,
  },
  {
    title: 'Your Rights',
    content: `Under the Nigeria Data Protection Regulation (NDPR) and applicable law, you have the right to access, correct, delete or restrict the processing of your personal data. To exercise any of these rights, please contact us directly via WhatsApp or email.`,
  },
  {
    title: 'Security',
    content: `We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, loss or disclosure. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: 'Third-Party Links',
    content: `Our platform may contain links to third-party websites including WhatsApp and Google services. We are not responsible for the privacy practices of these external sites and encourage you to review their respective privacy policies.`,
  },
  {
    title: 'Changes To This Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please reach out to us directly via WhatsApp at +234 708 435 5630 or email us at hello@motanis.com.`,
  },
];

const PrivacyPolicyPage = ({ activePage, setActivePage }) => {
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

  return (
    <div className="md:hidden flex flex-col min-h-screen" style={{ background: '#0A0A0F' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <div ref={ref} className="flex flex-col px-5 pb-12" style={{ paddingTop: '80px' }}>

        {/* Header */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4"
            style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
          >
            <div className="rounded-full" style={{ width: '5px', height: '5px', background: '#2A6FDB', flexShrink: 0 }} />
            <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>[ Privacy Policy_ ]</span>
          </div>

          <h1 className="text-white font-black uppercase leading-none mb-3" style={{ fontSize: '2rem', letterSpacing: '-0.5px' }}>
            Your Privacy <span className="text-motanis-blue">Matters</span>
          </h1>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-2"
            style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
          >
            Effective Date: January 1, 2025
          </p>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-8"
            style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500', maxWidth: '300px' }}
          >
            At Motanis, we are committed to protecting your personal data and respecting your privacy in accordance with the Nigeria Data Protection Regulation (NDPR) and applicable law.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          {sections.map((section, i) => (
            <div
              key={i}
              className="flex flex-col p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${0.1 + i * 0.05}s, transform 0.6s ease ${0.1 + i * 0.05}s`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full flex-shrink-0" style={{ width: '6px', height: '6px', background: '#2A6FDB' }} />
                <p className="text-white font-black uppercase tracking-widest" style={{ fontSize: '10px' }}>
                  {section.title}
                </p>
              </div>
              <p className="font-cormorant text-motanis-muted leading-relaxed"
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 p-4 rounded-2xl text-center"
          style={{
            background: 'rgba(42,111,219,0.08)',
            border: '1px solid rgba(42,111,219,0.2)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.8s',
          }}
        >
          <p className="font-cormorant text-motanis-muted" style={{ fontSize: '12px', fontStyle: 'italic', fontWeight: '500' }}>
            © 2025 Motanis — OMMICANG. All rights reserved.
          </p>
        </div>
      </div>

      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default PrivacyPolicyPage;