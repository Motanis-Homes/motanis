import React, { useState, useEffect } from 'react';
// import CTAButton from './CTAButton';

const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Homes', page: 'homes' },
    { label: 'Autos', page: 'autos' },
    { label: 'Blog', page: 'blog' },
  ];

const handleNavClick = (page) => {
    setActivePage(page);
};

  return (
    <nav

      className={`fixed items-center top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-motanis-surface/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* <div className="px-2 py-2 flex items-center"> */}

        {/* Left — Logo + Nav Links */}
        <div className="flex items-center justify-between w-full px-2 py-2">

          {/* Logo */}
          <div 
          className="flex flex-col leading-[0.5px] flex-shrink-0"
          
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => setActivePage('autos'), 300);
            }}
          >

            <img
              src="https://drive.google.com/thumbnail?id=1eZA9bhkmUgRf6mJwXPtQ3mOn_kyuJzcZ&sz=w200"
              alt="Motanis Logo"
              style={{
                height: '36px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />

            {/*Previous Navbar Text Logo Format:*/}

            {/* <span className="text-sm font-black tracking-tight">
               <span className="text-white">MOT</span>
               <span className="text-motanis-blue">ANIS.</span>
               </span>
               <span className="text-[6px] mx-[0.5px] text-motanis-muted font-medium tracking-widest uppercase">
                 Homes & Autos
               </span> */}
            
          </div>

          {/* Nav Links */}
          <ul className="flex justify-start leading-tight gap-10 mx-10 ">
            {navLinks.map((link) => (
              <li key={link.label} className="relative"
              style={{
                marginTop:'-0.4rem',
              }}
              >
                <button
                  onClick={() => handleNavClick(link.page)}
                  className={`text-[10px] uppercase font-black tracking-wide transition-colors duration-200 pb-1 ${
                    activePage === link.page
                      ? 'text-white'
                      : 'text-motanis-muted'
                  }`}
                >
                  {link.label}
                  {activePage === link.page && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-motanis-blue rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>


      {/* </div> */}

      {/* Bottom separator */}
      <div className="h-[1px] bg-white/5 w-full"></div>
    </nav>
  );
};

export default Navbar;