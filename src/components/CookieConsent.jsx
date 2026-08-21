import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const CookieConsent = ({ setActivePage }) => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    thirdParty: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('motanis_cookie_consent');
    if (!consent) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const handleDismiss = (consentData) => {
    setSlideOut(true);
    setTimeout(() => {
      setVisible(false);
      localStorage.setItem(
        'motanis_cookie_consent',
        JSON.stringify({ ...consentData, timestamp: new Date().toISOString() })
      );
    }, 500);
  };

  const handleAcceptAll = () => {
    handleDismiss({
      essential: true,
      analytics: true,
      marketing: true,
      thirdParty: true,
      decision: 'accept_all',
    });
  };

  const handleSavePreferences = () => {
    handleDismiss({
      ...preferences,
      decision: 'custom',
    });
  };

  const togglePref = (key) => {
    if (key === 'essential') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998]"
        style={{
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          opacity: slideOut ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}
        onClick={() => !showPreferences && handleDismiss({ decision: 'dismissed' })}
      />

      {/* Sliding Panel */}
      <div
        className="fixed left-0 right-0 z-[9999] flex flex-col"
        style={{
          bottom: 0,
          borderRadius: '24px 24px 0 0',
          background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)',
          border: '1px solid rgba(42,111,219,0.25)',
          borderBottom: 'none',
          padding: '24px 20px',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.6)',
          transform: slideOut ? 'translateY(100%)' : 'translateY(0)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.18, 1)',
          maxHeight: '85svh',
          overflowY: 'auto',
        }}
      >
        {/* Blue Glow */}
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: '200px',
            height: '200px',
            background: 'rgba(42,111,219,0.12)',
            top: '-60px',
            right: '-40px',
          }}
        />

        {/* Handle bar */}
        <div
          className="mx-auto mb-5 rounded-full"
          style={{
            width: '40px',
            height: '4px',
            background: 'rgba(255,255,255,0.15)',
          }}
        />

        {!showPreferences ? (
          <>
            {/* ── Main Consent View ── */}
            {/* Label */}
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4"
              style={{
                background: 'rgba(42,111,219,0.15)',
                border: '1px solid rgba(42,111,219,0.3)',
              }}
            >
              <span style={{ fontSize: '12px' }}>🍪</span>
              <span
                className="text-motanis-blue font-black uppercase tracking-widest"
                style={{ fontSize: '8px' }}
              >
                [ Cookie Notice_ ]
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-white font-black uppercase leading-none mb-3"
              style={{ fontSize: '1.4rem', letterSpacing: '-0.5px' }}
            >
              We Value Your{' '}
              <span className="text-motanis-blue">Privacy</span>
            </h2>

            {/* Body */}
            <p
              className="font-cormorant text-motanis-muted leading-relaxed mb-6"
              style={{
                fontSize: '14px',
                fontStyle: 'italic',
                fontWeight: '500',
              }}
            >
              Motanis uses cookies to enhance your experience, analyse site performance
              and serve relevant content. You can choose to accept all cookies or manage
              your preferences below.
            </p>

            {/* Learn More */}
            <button
              onClick={() => setActivePage('cookies-policy')}
              className="text-motanis-blue font-bold uppercase tracking-widest mb-6"
              style={{
                fontSize: '8px',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Read Our Full Cookie Policy →
            </button>

            {/* CTA Row */}
            <div className="flex flex-col gap-3">
              {/* Accept All */}
              <div onClick={handleAcceptAll}>
                <CTAButton label="Accept All Cookies" href="#" />
              </div>

              {/* Manage Preferences */}
              <button
                onClick={() => setShowPreferences(true)}
                className="flex items-center justify-center font-black uppercase tracking-widest w-full py-3 rounded-full"
                style={{
                  fontSize: '8px',
                  color: '#8A9BB0',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                Manage Preferences
              </button>
            </div>

            {/* Motanis watermark */}
            <p
              className="text-center text-motanis-muted uppercase tracking-widest mt-4"
              style={{ fontSize: '6px', opacity: 0.4 }}
            >
              Motanis — Your data, your choice.
            </p>
          </>
        ) : (
          <>
            {/* ── Preferences View ── */}
            {/* Back button */}
            <button
              onClick={() => setShowPreferences(false)}
              className="flex items-center gap-2 text-motanis-muted font-bold uppercase tracking-widest mb-5"
              style={{ fontSize: '8px', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              ← Back
            </button>

            {/* Label */}
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4"
              style={{
                background: 'rgba(42,111,219,0.15)',
                border: '1px solid rgba(42,111,219,0.3)',
              }}
            >
              <div className="rounded-full" style={{ width: '5px', height: '5px', background: '#2A6FDB', flexShrink: 0 }} />
              <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>
                [ Manage Preferences_ ]
              </span>
            </div>

            <h2
              className="text-white font-black uppercase leading-none mb-2"
              style={{ fontSize: '1.2rem', letterSpacing: '-0.5px' }}
            >
              Cookie <span className="text-motanis-blue">Preferences</span>
            </h2>
            <p
              className="font-cormorant text-motanis-muted leading-relaxed mb-5"
              style={{ fontSize: '13px', fontStyle: 'italic', fontWeight: '500' }}
            >
              Choose which cookies you allow Motanis to use.
            </p>

            {/* Preference Toggles */}
            <div className="flex flex-col gap-3 mb-6">
              {[
                {
                  key: 'essential',
                  label: 'Essential Cookies',
                  description: 'Required for the site to function. Cannot be disabled.',
                  locked: true,
                },
                {
                  key: 'analytics',
                  label: 'Analytics Cookies',
                  description: 'Help us understand how visitors interact with our site.',
                  locked: false,
                },
                {
                  key: 'marketing',
                  label: 'Marketing Cookies',
                  description: 'Used to deliver relevant content and track campaign performance.',
                  locked: false,
                },
                {
                  key: 'thirdParty',
                  label: 'Third-Party Cookies',
                  description: 'Set by services like Google Drive and WhatsApp embedded in our site.',
                  locked: false,
                },
              ].map((pref) => (
                <div
                  key={pref.key}
                  className="flex items-start justify-between gap-3 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: preferences[pref.key]
                      ? '1px solid rgba(42,111,219,0.25)'
                      : '1px solid rgba(255,255,255,0.08)',
                    transition: 'border 0.3s ease',
                  }}
                >
                  <div className="flex flex-col flex-1">
                    <p className="text-white font-black uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>
                      {pref.label}
                    </p>
                    <p
                      className="font-cormorant text-motanis-muted"
                      style={{ fontSize: '12px', fontStyle: 'italic', fontWeight: '500' }}
                    >
                      {pref.description}
                    </p>
                  </div>

                  {/* Toggle */}
                  <div
                    onClick={() => togglePref(pref.key)}
                    style={{
                      width: '40px',
                      height: '22px',
                      borderRadius: '99px',
                      background: preferences[pref.key]
                        ? '#2A6FDB'
                        : 'rgba(255,255,255,0.10)',
                      position: 'relative',
                      flexShrink: 0,
                      cursor: pref.locked ? 'not-allowed' : 'pointer',
                      transition: 'background 0.3s ease',
                      opacity: pref.locked ? 0.6 : 1,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '3px',
                        left: preferences[pref.key] ? '21px' : '3px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: '#fff',
                        transition: 'left 0.3s ease',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Save Button */}
            <div onClick={handleSavePreferences}>
              <CTAButton label="Save My Preferences" href="#" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CookieConsent;