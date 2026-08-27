import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const credits = [
  {
    category: 'Animated Icons',
    items: [
      {
        title: 'Excellence Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/summer',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Integrity Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/partnership-handshake',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Innovation Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/innovation',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Verified Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/verified',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Team Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/coordination',
        license: 'Flaticon License — Free for use with attribution',
      },
        {
        title: 'Support Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/customer-service',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Delivery Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/route',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Lock Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/padlock',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Analytics Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/graph',
        license: 'Flaticon License — Free for use with attribution',
      },
            {
        title: 'Marketing Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/target',
        license: 'Flaticon License — Free for use with attribution',
      },
      {
        title: 'Network Icon',
        author: 'Magnific',
        platform: 'Flaticon',
        url: 'https://www.flaticon.com/free-animated-icons/connectivity',
        license: 'Flaticon License — Free for use with attribution',
      },
    ],
  },
  {
    category: 'Photography',
    items: [
      {
        title: 'Car Photography',
        author: 'Various Photographers',
        platform: 'Unsplash & Pexels',
        url: 'https://unsplash.com',
        license: 'Unsplash & Pexels License — Free for commercial use',
      },

            {
        title: 'Review Image 1',
        author: 'Prince Arkman',
        platform: 'Unsplash',
        url: 'https://unsplash.com/@princearkman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        license: 'Unsplash & Pexels License — Free for commercial use',
      },
    ],
  },
  {
    category: 'Fonts',
    items: [
      {
        title: 'Cormorant Garamond',
        author: 'Christian Thalmann',
        platform: 'Google Fonts',
        url: 'https://fonts.google.com/specimen/Cormorant+Garamond',
        license: 'SIL Open Font License 1.1',
      },
      {
        title: 'Inter',
        author: 'Rasmus Andersson',
        platform: 'Google Fonts',
        url: 'https://fonts.google.com/specimen/Inter',
        license: 'SIL Open Font License 1.1',
      },
    ],
  },
];

const CreditsPage = ({ activePage, setActivePage }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 200);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="md:hidden flex flex-col min-h-screen"
      style={{ background: '#0A0A0F' }}
    >
      {/* Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Content */}
      <div
        ref={sectionRef}
        className="flex flex-col px-5 pb-12"
        style={{ paddingTop: '80px' }}
      >
        {/* Header */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          {/* Label */}
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4"
            style={{
              background: 'rgba(42,111,219,0.15)',
              border: '1px solid rgba(42,111,219,0.3)',
            }}
          >
            <div
              className="rounded-full"
              style={{ width: '5px', height: '5px', background: '#2A6FDB', flexShrink: 0 }}
            />
            <span
              className="text-motanis-blue font-black uppercase tracking-widest"
              style={{ fontSize: '8px' }}
            >
              [ Credits_ ]
            </span>
          </div>

          <h1
            className="text-white font-black uppercase leading-none mb-3"
            style={{ fontSize: '2rem', letterSpacing: '-0.5px' }}
          >
            Attributions &{' '}
            <span className="text-motanis-blue">Credits</span>
          </h1>
          <p
            className="font-cormorant text-motanis-muted leading-relaxed mb-8"
            style={{
              fontSize: '14px',
              fontStyle: 'italic',
              fontWeight: '500',
              maxWidth: '280px',
            }}
          >
            We gratefully acknowledge the creators and platforms whose work contributes to the Motanis experience.
          </p>
        </div>

        {/* Credits List */}
        <div className="flex flex-col gap-6">
          {credits.map((section, si) => (
            <div
              key={section.category}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${0.2 + si * 0.1}s, transform 0.6s ease ${0.2 + si * 0.1}s`,
              }}
            >
              {/* Category Label */}
              <p
                className="text-white font-black uppercase tracking-widest mb-3"
                style={{ fontSize: '9px' }}
              >
                {section.category}
              </p>

              {/* Items */}
              <div className="flex flex-col gap-3">
                {section.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex flex-col p-4 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* Title */}
                    <p
                      className="text-white font-black leading-tight mb-1"
                      style={{ fontSize: '12px' }}
                    >
                      {item.title}
                    </p>

                    {/* Author + Platform */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-motanis-muted uppercase tracking-widest"
                        style={{ fontSize: '7px' }}
                      >
                        By {item.author}
                      </span>
                      <div
                        className="rounded-full"
                        style={{ width: '3px', height: '3px', background: '#8A9BB0', flexShrink: 0 }}
                      />
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-motanis-blue font-bold uppercase tracking-widest"
                        style={{ fontSize: '7px' }}
                      >
                        {item.platform}
                      </a>
                    </div>

                    {/* License */}
                    <p
                      className="font-cormorant text-motanis-muted"
                      style={{
                        fontSize: '11px',
                        fontStyle: 'italic',
                        fontWeight: '500',
                      }}
                    >
                      {item.license}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className="mt-8 p-4 rounded-2xl text-center"
          style={{
            background: 'rgba(42,111,219,0.08)',
            border: '1px solid rgba(42,111,219,0.2)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.6s',
          }}
        >
          <p
            className="font-cormorant text-motanis-muted leading-relaxed"
            style={{
              fontSize: '12px',
              fontStyle: 'italic',
              fontWeight: '500',
            }}
          >
            All third-party assets are used in accordance with their respective licenses.
            Motanis acknowledges and respects all intellectual property rights.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default CreditsPage;