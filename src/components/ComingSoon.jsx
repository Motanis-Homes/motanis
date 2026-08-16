import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ComingSoon = ({ page, onBack }) => {
  const pageConfig = {
    homes: {
      emoji: '🏠',
      label: 'Homes',
      message: 'We\'re building something beautiful for your next home.',
      color: '#2A6FDB',
    },
    blog: {
      emoji: '📝',
      label: 'Blog',
      message: 'Stories, insights and updates from the Motanis team — coming soon.',
      color: '#2A6FDB',
    },
  };

  const config = pageConfig[page] || pageConfig.homes;

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-motanis-black px-8 text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 left-1/2 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{
          background: '#2A6FDB',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-2xl opacity-5"
        style={{ background: '#5BA4F5' }}
      />

      {/* Logo */}
      <div className="relative z-10 mb-10">

        <img
          alt="Motanis Logo"
          style={{
            height: '70px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />

        {/* Previous Coming Soon Text Logo: */}
        {/* <span className="text-2xl font-black tracking-tight">
          <span className="text-white">MOT</span>
          <span className="text-motanis-blue">ANIS.</span>
        </span> */}
        <p
          className="text-motanis-muted font-medium uppercase tracking-widest"
          style={{ fontSize: '7px', marginTop: '2px' }}
        >
          Homes & Autos
        </p>
      </div>

      {/* Emoji Icon */}
      <div
        className="relative z-10 flex items-center justify-center mb-6 rounded-2xl"
        style={{
          width: '72px',
          height: '72px',
          background: 'rgba(42,111,219,0.12)',
          border: '1px solid rgba(42,111,219,0.25)',
          fontSize: '2rem',
        }}
      >
        {config.emoji}
      </div>

      {/* Coming Soon Label */}
      <div
        className="relative z-10 flex items-center gap-2 mb-4"
      >
        <div className="w-8 h-[1px] bg-motanis-blue" />
        <span
          className="text-motanis-blue font-black uppercase tracking-widest"
          style={{ fontSize: '9px' }}
        >
          Coming Soon
        </span>
        <div className="w-8 h-[1px] bg-motanis-blue" />
      </div>

      {/* Page Title */}
      <h1
        className="relative z-10 text-white font-black uppercase leading-none mb-4"
        style={{ fontSize: '2.5rem', letterSpacing: '-1px' }}
      >
        Motanis <br />
        <span className="text-motanis-blue">{config.label}</span>
      </h1>

      {/* Message */}
      <p
        className="relative z-10 text-motanis-muted leading-relaxed mb-10"
        style={{ fontSize: '13px', maxWidth: '280px' }}
      >
        {config.message}
      </p>

      {/* Divider */}
      <div
        className="relative z-10 w-12 h-1 rounded-full mb-10"
        style={{ background: '#2A6FDB' }}
      />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="relative z-10 flex items-center gap-2 text-white font-black uppercase tracking-widest transition-all duration-200"
        style={{
          fontSize: '9px',
          background: 'rgba(42,111,219,0.15)',
          border: '1px solid rgba(42,111,219,0.3)',
          padding: '12px 20px',
          borderRadius: '99px',
        }}
      >
        <ArrowLeft size={12} className="text-motanis-blue" />
        Back to Autos
      </button>

      {/* Watermark */}
      <div
        className="absolute bottom-6 left-0 right-0 flex justify-center z-10"
      >
        <span
          className="font-black uppercase tracking-widest text-white/5"
          style={{ fontSize: '3.5rem' }}
        >
          MOTANIS
        </span>
      </div>
    </div>
  );
};

export default ComingSoon;