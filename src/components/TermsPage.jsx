import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using the Motanis platform, you confirm that you are at least 18 years of age and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our platform immediately.`,
  },
  {
    title: 'Use of Platform',
    content: `Motanis grants you a limited, non-exclusive, non-transferable licence to access and use our platform for personal, non-commercial purposes. You may not reproduce, distribute or exploit any content from this platform without prior written consent from Motanis.`,
  },
  {
    title: 'Vehicle Listings',
    content: `All vehicle listings on Motanis are subject to availability. Prices displayed are indicative asking prices and may be subject to change. Motanis reserves the right to remove or modify any listing at any time without prior notice.`,
  },
  {
    title: 'Transactions',
    content: `Motanis serves as a platform connecting buyers and sellers. While we facilitate communication and verify listings, all final transactions are conducted between the buyer and seller. Motanis is not liable for any disputes arising from completed transactions.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on the Motanis platform — including the logo, design, text, images and code — is the intellectual property of Motanis and its licensors. Unauthorised use of any content is strictly prohibited.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by law, Motanis shall not be liable for any indirect, incidental, special or consequential damages arising from your use of or inability to use our platform or services.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of Nigerian courts.`,
  },
  {
    title: 'Modifications',
    content: `Motanis reserves the right to update these Terms and Conditions at any time. Continued use of our platform following any changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: 'Contact',
    content: `For any questions regarding these Terms and Conditions, please contact us via WhatsApp at +234 708 435 5630 or email us at hello@motanis.com.`,
  },
];

const TermsPage = ({ activePage, setActivePage }) => {
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
            <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>[ Terms & Conditions_ ]</span>
          </div>

          <h1 className="text-white font-black uppercase leading-none mb-3" style={{ fontSize: '2rem', letterSpacing: '-0.5px' }}>
            Terms Of <span className="text-motanis-blue">Service</span>
          </h1>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-2" style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}>
            Effective Date: January 1, 2025
          </p>
          <p className="font-cormorant text-motanis-muted leading-relaxed mb-8"
            style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500', maxWidth: '300px' }}
          >
            Please read these Terms and Conditions carefully before using the Motanis platform. By accessing our services, you agree to these terms in full.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          {sections.map((section, i) => (
            <div key={i} className="flex flex-col p-4 rounded-2xl"
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
                <p className="text-white font-black uppercase tracking-widest" style={{ fontSize: '10px' }}>{section.title}</p>
              </div>
              <p className="font-cormorant text-motanis-muted leading-relaxed"
                style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>

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

export default TermsPage;