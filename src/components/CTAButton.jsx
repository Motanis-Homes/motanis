import React from 'react';
import { ChevronRight } from 'lucide-react';


const CTAButton = ({ label, href, onClick }) => (
  <a
    href={href || '#contact'}
    onClick={onClick}
    className="flex items-center w-fit flex-shrink-0"
    style={{ transform: 'skewX(-12deg)' }}
  >
    {/* Text Side — Transparent with muted border */}
    <div className="flex items-center justify-center"
      style={{
        background: 'transparent',
        border: '1px solid #8A9BB0',
        //   borderRight: 'none',
        padding: '7px 7px',
        borderRadius: '3px 3px',
      }}
    >
      <span
        className="text-white font-black uppercase tracking-widest whitespace-nowrap"
        style={{
          fontSize: '8px',
          display: 'inline-block',
          transform: 'skewX(12deg)',
        }}
      >
        {label || 'Chat With Us'}
      </span>
    </div>

    {/* Chevron Arrow Right — Blue box */}
    <div
      className="flex items-center justify-center mx-1.5"
      style={{
        background: '#2A6FDB',
        padding: '7px 7px',
        borderRadius: ' 3px 3px ',
        border: '1px solid #2A6FDB',
      }}
    >
      <span className=" flex flex-row justify-center"
        style={{
          
          transform: 'skewX(12deg)',
        }}
      >
        <ChevronRight size={12} />
        <ChevronRight size={12} style={{ marginLeft: '-7px' }} />
      </span>
    </div>
  </a>
);

export default CTAButton;