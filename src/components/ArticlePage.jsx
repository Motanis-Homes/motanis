import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { articles } from './BlogPage';
import Footer from './Footer';
import CTAButton from './CTAButton';

// Import articles — we export them from BlogPage
// For now, pass as prop from App.js via BlogPage data
// Or duplicate the array here for self-containment

const ArticlePage = ({ articleId, setActivePage, setActiveArticle }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const article = articles?.find((a) => a.id === articleId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setTimeout(() => setVisible(true), 200);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categoryColors = {
    'Cars': '#2A6FDB',
    'Lifestyle': '#8B5CF6',
    'Real Estate': '#10B981',
    'Tips & Guides': '#F59E0B',
  };

  // Related articles — same category, not this article
  const related = articles
    ?.filter((a) => a.category === article?.category && a.id !== article?.id)
    .slice(0, 3) || [];

  if (!article) return (
    <div className="md:hidden flex flex-col min-h-screen items-center justify-center"
      style={{ background: '#0A0A0F' }}
    >
      <p className="text-motanis-muted font-cormorant" style={{ fontSize: '16px', fontStyle: 'italic' }}>
        Article not found.
      </p>
    </div>
  );

  // Coming soon — for articles without content yet
  if (!article.content) return (
    <div className="md:hidden flex flex-col min-h-screen" style={{ background: '#0A0A0F' }}>
      <Navbar activePage="blog" setActivePage={setActivePage} />
      <div className="flex flex-col items-center justify-center flex-1 px-8 text-center" style={{ paddingTop: '120px' }}>
        <div className="flex items-center justify-center rounded-2xl mb-5"
          style={{ width: '72px', height: '72px', background: 'rgba(42,111,219,0.10)', border: '1px solid rgba(42,111,219,0.2)', fontSize: '2rem' }}
        >
          📝
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4 mx-auto"
          style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
        >
          <div className="rounded-full" style={{ width: '5px', height: '5px', background: '#2A6FDB', flexShrink: 0 }} />
          <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>
            [ Coming Soon_ ]
          </span>
        </div>
        <h2 className="text-white font-black uppercase leading-tight mb-3"
          style={{ fontSize: '1.4rem', letterSpacing: '-0.3px' }}
        >
          Full Article <span className="text-motanis-blue">Coming Soon</span>
        </h2>
        <p className="font-cormorant text-motanis-muted leading-relaxed mb-8"
          style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500', maxWidth: '260px' }}
        >
          We are putting the finishing touches on this piece. Check back soon — it will be worth the wait.
        </p>
        <button
          onClick={() => setActivePage('blog')}
          className="flex items-center gap-2 font-black uppercase tracking-widest px-6 py-3 rounded-full"
          style={{ fontSize: '8px', color: '#8A9BB0', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          ← Back To Blog
        </button>
      </div>
      <Footer setActivePage={setActivePage} />
    </div>
  );

  return (
    <div className="md:hidden flex flex-col min-h-screen" style={{ background: '#0A0A0F' }}>
      <Navbar activePage="blog" setActivePage={setActivePage} />

      <div ref={ref} className="flex flex-col pb-12" style={{ paddingTop: '52px' }}>

        {/* ── Hero Image ── */}
        <div className="relative" style={{ height: '280px', overflow: 'hidden' }}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            style={{ opacity: 0.8 }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(10,10,15,0.95) 100%)' }}
          />

          {/* Back button */}
          <button
            onClick={() => setActivePage('blog')}
            className="absolute top-4 left-4 flex items-center gap-2 font-black uppercase tracking-widest px-3 py-2 rounded-full"
            style={{
              fontSize: '7px',
              color: '#fff',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              zIndex: 10,
            }}
          >
            ← Blog
          </button>

          {/* Category + tag badges */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
            <div className="px-2 py-1 rounded-full"
              style={{ background: categoryColors[article.category] || '#2A6FDB' }}
            >
              <span className="text-white font-black uppercase tracking-widest" style={{ fontSize: '6px' }}>
                {article.category}
              </span>
            </div>
            {article.tag && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full"
                style={{ background: 'rgba(10,10,15,0.85)', border: '1px solid rgba(42,111,219,0.4)', backdropFilter: 'blur(8px)' }}
              >
                <span style={{ fontSize: '8px' }}>⭐</span>
                <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '6px' }}>
                  {article.tag}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Article Header ── */}
        <div
          className="px-5 py-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          {/* Read time */}
          <p className="text-motanis-muted uppercase tracking-widest mb-3" style={{ fontSize: '7px' }}>
            {article.readTime} · {article.date}
          </p>

          {/* Headline */}
          <h1 className="text-white font-black uppercase leading-tight mb-5"
            style={{ fontSize: '1.6rem', letterSpacing: '-0.5px' }}
          >
            {article.title}
          </h1>

          {/* Author card */}
          <div className="flex items-center gap-3 p-3 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="overflow-hidden rounded-full flex-shrink-0"
              style={{ width: '44px', height: '44px', border: '2px solid rgba(42,111,219,0.4)' }}
            >
              <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="text-white font-black" style={{ fontSize: '12px' }}>{article.author}</p>
              <p className="text-motanis-blue font-bold uppercase tracking-widest" style={{ fontSize: '7px' }}>
                Motanis Writer
              </p>
            </div>
            <div className="ml-auto flex-shrink-0">
              <div className="px-2 py-1 rounded-full"
                style={{ background: 'rgba(42,111,219,0.12)', border: '1px solid rgba(42,111,219,0.25)' }}
              >
                <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '6px' }}>
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Article Body ── */}
        <div
          className="px-5 flex flex-col gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          {/* Intro */}
          <p className="font-cormorant text-white/80 leading-relaxed"
            style={{ fontSize: '17px', fontStyle: 'italic', fontWeight: '500', lineHeight: 1.7 }}
          >
            {article.content.intro}
          </p>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(42,111,219,0.2)' }} />

          {/* Sections */}
          {article.content.sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h2 className="text-white font-black uppercase leading-tight"
                style={{ fontSize: '1rem', letterSpacing: '-0.2px' }}
              >
                <span className="text-motanis-blue" style={{ marginRight: '6px' }}>0{i + 1}.</span>
                {section.heading}
              </h2>
              <p className="font-cormorant text-white/70 leading-relaxed"
                style={{ fontSize: '15px', fontWeight: '500', lineHeight: 1.75 }}
              >
                {section.body}
              </p>
            </div>
          ))}

          {/* Pull Quote */}
          <div className="relative p-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)',
              border: '1px solid rgba(42,111,219,0.25)',
            }}
          >
            <div className="absolute rounded-full blur-2xl"
              style={{ width: '100px', height: '100px', background: 'rgba(42,111,219,0.15)', top: '-20px', right: '-20px' }}
            />
            <span className="text-motanis-blue font-black leading-none"
              style={{ fontSize: '3rem', opacity: 0.3, lineHeight: 0.8, display: 'block', marginBottom: '8px' }}
            >
              "
            </span>
            <p className="font-cormorant text-white leading-relaxed relative z-10"
              style={{ fontSize: '16px', fontStyle: 'italic', fontWeight: '600', lineHeight: 1.6 }}
            >
              {article.content.pullQuote}
            </p>
            <div className="mt-4 rounded-full"
              style={{ height: '2px', width: '40px', background: 'linear-gradient(to right, #2A6FDB, transparent)' }}
            />
          </div>

          {/* Conclusion */}
          <p className="font-cormorant text-white/70 leading-relaxed"
            style={{ fontSize: '15px', fontWeight: '500', lineHeight: 1.75 }}
          >
            {article.content.conclusion}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.content.tags.map((tag) => (
              <div key={tag} className="px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <span className="text-motanis-muted font-bold uppercase tracking-widest" style={{ fontSize: '7px' }}>
                  #{tag}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          {/* Share via WhatsApp */}
          <div className="flex flex-col items-center gap-3 py-4">
            <p className="text-motanis-muted font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>
              Enjoyed this article? Share it
            </p>
            <CTAButton
              label="Share on WhatsApp"
              href="#"
              onClick={() => {
                const text = encodeURIComponent(
                  `Check out this article from Motanis:\n\n"${article.title}"\n\n${article.excerpt}\n\nRead more at motanis.com`
                );
                window.open(`https://wa.me/?text=${text}`, '_blank');
              }}
            />
          </div>
        </div>

        {/* ── Related Articles ── */}
        {related.length > 0 && (
          <div className="flex flex-col mt-6"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s',
            }}
          >
            <div className="px-5 mb-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit"
                style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
              >
                <div className="rounded-full" style={{ width: '5px', height: '5px', background: '#2A6FDB', flexShrink: 0 }} />
                <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>
                  [ Related Articles_ ]
                </span>
              </div>
            </div>

            <div className="flex gap-3 px-5 pb-2"
              style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
            >
              <style>{`.related-row::-webkit-scrollbar { display: none; }`}</style>
              {related.map((rel) => (
                <div
                  key={rel.id}
                  className="flex-shrink-0 flex flex-col overflow-hidden"
                  style={{
                    width: '72vw',
                    maxWidth: '260px',
                    borderRadius: '20px',
                    background: 'linear-gradient(160deg, #0d1a2e 0%, #111111 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    scrollSnapAlign: 'start',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setActiveArticle(rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div style={{ height: '130px', overflow: 'hidden' }}>
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-motanis-muted uppercase tracking-widest mb-1" style={{ fontSize: '6px' }}>
                      {rel.readTime} · {rel.date}
                    </p>
                    <p className="text-white font-black leading-tight" style={{ fontSize: '11px', letterSpacing: '-0.2px' }}>
                      {rel.title}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ width: '16px', flexShrink: 0 }} />
            </div>
          </div>
        )}
      </div>

      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default ArticlePage;