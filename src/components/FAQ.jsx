import React, { useState, useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

const faqs = [
  {
    id: 1,
    question: 'Is Motanis A Trusted Dealership?',
    answer: 'Absolutely. Motanis is a fully licensed and verified dealership with hundreds of satisfied customers. Every vehicle goes through rigorous inspection before listing.',
  },
  {
    id: 2,
    question: "What If I Don't Like The Car After Buying?",
    answer: 'We have a transparent return policy. Your satisfaction comes first — no questions asked. Contact our team within 7 days of purchase for a full resolution.',
  },
  {
    id: 3,
    question: 'Can I Negotiate The Price?',
    answer: 'Yes, absolutely. Our team is always open to discussing pricing. We believe in fair deals and will work with you to find a price that suits both parties.',
  },
  {
    id: 4,
    question: 'Can I See The Car Before Buying?',
    answer: 'Of course. We encourage all customers to schedule a physical inspection and test drive before committing to any purchase. Contact us to book an appointment.',
  },
  {
    id: 5,
    question: 'Do You Offer Financing Options?',
    answer: 'Yes. Motanis partners with leading financial institutions to offer flexible financing plans tailored to your budget. Speak to our finance team for details.',
  },
  {
    id: 6,
    question: 'How Do I Schedule A Test Drive?',
    answer: 'Simply tap the "Chat With Us" button or reach out via email and our team will set up a convenient test drive appointment at your preferred time and location.',
  },
  {
    id: 7,
    question: 'Do You Handle Vehicle Delivery?',
    answer: 'Yes. We offer doorstep delivery across select locations. Our logistics team ensures your vehicle arrives safely and on time, fully inspected and ready to drive.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative flex flex-col justify-evenly bg-motanis-muted top-14 px-2 rounded-2xl"
      style={{
        height: '125svh',
        overflow: 'hidden',
        marginTop: '12px',
        paddingBottom: '16px',
      }}
    >
      {/* Big Card */}
      <div
        className="relative flex flex-col w-full h-[115svh]"
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#111111',
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

          {/* ── Header ── */}
          <div
            className="flex flex-col items-start text-left mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            {/* Label */}
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full mb-4"
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
                [ FAQ_ ]
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-white font-black uppercase leading-none mb-3"
              style={{
                fontSize: '1.8rem',
                letterSpacing: '-0.5px',
              }}
            >
              Let Us Clear <br />
              <span className="text-motanis-blue">Things Up</span>
            </h2>

            {/* Body Text */}
            <p
              className="font-cormorant text-motanis-muted leading-relaxed"
              style={{
                fontSize: '14px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.3px',
                maxWidth: '260px',
              }}
            >
              We Are Always Here To Help. No Question Is Too Small.
            </p>
          </div>

          {/* ── FAQ Accordion ── */}

          <div
            className="flex flex-col gap-3 mb-2 faq-scroll"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
              maxHeight: '272px',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingRight: '2px',
            }}
          >
            <style>{`
              .faq-scroll::-webkit-scrollbar { display: none; }
            `}</style>

            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="flex flex-col gap-3"
                style={{
                  borderRadius: '16px',
                  background: activeIndex === index
                    ? 'rgba(42,111,219,0.08)'
                    : 'rgba(255,255,255,0.04)',
                  border: activeIndex === index
                    ? '1px solid rgba(42,111,219,0.25)'
                    : '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  // overflow:'hidden',
                }}
              >
                {/* Question Row */}
                <div
                  className="flex items-center justify-between px-4 py-4 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p
                    className="text-white font-black uppercase leading-tight flex-1 pr-3"
                    style={{ fontSize: '11px', letterSpacing: '0.3px' }}
                  >
                    {faq.question}
                  </p>

                  {/* +/- Toggle Button */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: activeIndex === index
                        ? '#2A6FDB'
                        : 'transparent',
                      border: activeIndex === index
                        ? '1px solid #2A6FDB'
                        : '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <span
                      className="text-white font-black"
                      style={{
                        fontSize: '16px',
                        lineHeight: 1,
                        marginTop: activeIndex === index ? '-1px' : '0px',
                      }}
                    >
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.77, 0, 0.18, 1)',
                  }}
                >
                  <p
                    className="font-cormorant text-motanis-muted leading-relaxed px-4 pb-4"
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      fontStyle: 'italic',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Fade Indicator */}
          <div
            style={{
              position: 'relative',
              marginTop: '-28px',
              marginBottom: '12px',
              height: '28px',
              background: 'linear-gradient(to bottom, transparent 0%, #111111 100%)',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />

          {/* ── Need More Clarity Card ── */}
          <div
            className="flex flex-col"
            style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '16px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
            }}
          >
            {/* Top Row — Avatars + Headline */}
            <div className="flex items-center gap-3 mb-3">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2 flex-shrink-0">
                {[
                  'https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg',
                  'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
                ].map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-full"
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '2px solid #111111',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Avatar ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Headline */}
              <p
                className="text-white font-black leading-tight"
                style={{ fontSize: '14px' }}
              >
                Need More Clarity?
              </p>
            </div>

            {/* Body Text */}
            <p
              className="font-cormorant text-motanis-muted leading-relaxed mb-4"
              style={{
                fontSize: '13px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.3px',
              }}
            >
              Still Not Sure? Our Team Is Just One Message Away — Ready To Help You With Anything You Need.
            </p>

            {/* Email + CTA Row */}
            <div
              className="flex justify-end"
              style={{ margin: '0 -16px -16px -16px', position: 'relative' }}
            >
              {/* Email Link */}
              {/* <a
                href="mailto:hello@motanis.com"
                className="text-motanis-blue font-bold uppercase tracking-widest"
                style={{ fontSize: '8px', paddingLeft: '16px', zIndex: 2 }}
              >
                hello@motanis.com —
              </a> */}

{/* Dark Notch — left slanted, right straight */}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '12px 16px 12px 36px',
                  borderRadius: '0 0 20px 0',
                  marginLeft: '-24px',
                  overflow: 'hidden',
                }}
              >
                {/* Dark background — only left edge skewed */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.40)',
                    borderRadius: '0 0 20px 0',
                    clipPath: 'polygon(18px 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                />
                {/* CTA Button — sits normally, no skew */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <CTAButton label="Contact Us" href="#contact" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;