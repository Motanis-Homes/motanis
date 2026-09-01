import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
      return;
    }

    // Check if already dismissed
    const dismissed = localStorage.getItem('motanis_install_dismissed');
    if (dismissed) return;

    // Capture the install prompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setShowBanner(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Listen for successful install
    window.addEventListener('appinstalled', () => {
      setInstalled(true);
      setShowBanner(false);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstalled(true);
    }
    setDeferredPrompt(null);
    handleDismiss();
  };

  const handleDismiss = () => {
    setSlideOut(true);
    setTimeout(() => {
      setShowBanner(false);
      localStorage.setItem('motanis_install_dismissed', 'true');
    }, 500);
  };

  if (!showBanner || installed) return null;

  return (
    <div
      className="fixed left-0 right-0 z-[9997] px-3"
      style={{
        top: '60px',
        transform: slideOut ? 'translateY(-120%)' : 'translateY(0)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.18, 1)',
      }}
    >
      <div
        className="flex items-center gap-3 p-3 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #0d1a2e 0%, #13131A 100%)',
          border: '1px solid rgba(42,111,219,0.35)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* App Icon */}
        <div
          className="flex-shrink-0 overflow-hidden rounded-xl"
          style={{
            width: '44px',
            height: '44px',
            background: '#0A0A0F',
            border: '1px solid rgba(42,111,219,0.3)',
            padding: '6px',
          }}
        >
          <img
            src="favicon/icon-512.png"
            alt="Motanis"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-white font-black leading-tight" style={{ fontSize: '12px' }}>
            Install <span className="text-motanis-blue">Motanis</span>
          </p>
          <p className="font-cormorant text-motanis-muted"
            style={{ fontSize: '11px', fontStyle: 'italic', fontWeight: '500' }}
          >
            Add to home screen for the best experience
          </p>
        </div>

        {/* Install Button */}
        <button
          onClick={handleInstall}
          className="flex-shrink-0 font-black uppercase tracking-widest px-3 py-2 rounded-full"
          style={{
            fontSize: '7px',
            color: '#fff',
            background: '#2A6FDB',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Install
        </button>

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-motanis-muted font-black"
          style={{
            fontSize: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 2px',
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;