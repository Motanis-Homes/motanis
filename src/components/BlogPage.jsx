import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';

// ── Article Data ──
const articles = [
  {
    id: 1,
    category: 'Cars',
    tag: "Editor's Pick",
    title: 'The BMW M4 Competition — Why It Still Reigns Supreme In 2024',
    excerpt: 'Three years since its debut, the M4 Competition continues to set the benchmark for performance sedans. We drove one for a week to find out why.',
    image: 'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    date: 'Aug 12, 2025',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'Lifestyle',
    tag: null,
    title: 'What Your Choice of Car Says About You',
    excerpt: 'From a classic Porsche to a blacked-out Range Rover — the vehicles we choose reveal far more than we think.',
    image: 'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    date: 'Aug 8, 2025',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 3,
    category: 'Tips & Guides',
    tag: "Editor's Pick",
    title: '10 Things To Check Before Buying A Foreign Used Car In Nigeria',
    excerpt: 'Buying a tokunbo? Here is the definitive checklist every smart buyer needs before signing anything.',
    image: 'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg',
    date: 'Aug 5, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    category: 'Real Estate',
    tag: null,
    title: 'Why Now Is The Best Time To Invest In Lagos Real Estate',
    excerpt: 'Despite economic headwinds, savvy investors are quietly building wealth through strategic property acquisitions in Lagos.',
    image: 'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    date: 'Jul 30, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 5,
    category: 'Cars',
    tag: null,
    title: 'Ferrari vs Lamborghini — The Eternal Debate Settled Once And For All',
    excerpt: 'Two icons. One question. We break down the numbers, the feeling and the lifestyle behind each legendary marque.',
    image: 'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    date: 'Jul 25, 2025',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 6,
    category: 'Lifestyle',
    tag: null,
    title: 'The Art of the Weekend Drive — Nigeria\'s Most Scenic Routes',
    excerpt: 'Pack your bags, fuel up and hit the road. We explore the most breathtaking driving routes across Nigeria.',
    image: 'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg',
    date: 'Jul 20, 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 7,
    category: 'Tips & Guides',
    tag: null,
    title: 'How To Finance Your Dream Car Without Breaking The Bank',
    excerpt: 'Smart financing strategies that make luxury vehicle ownership a reality for more Nigerians every year.',
    image: 'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    date: 'Jul 15, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 8,
    category: 'Real Estate',
    tag: "Editor's Pick",
    title: 'Luxury vs Affordable — Finding The Right Property Balance In 2025',
    excerpt: 'With rising property prices across major Nigerian cities, we examine where the real value lies for first-time and seasoned investors alike.',
    image: 'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    date: 'Jul 10, 2025',
    readTime: '7 min read',
    featured: false,
  },
];

const categories = ['All', 'Cars', 'Lifestyle', 'Real Estate', 'Tips & Guides'];

const categoryColors = {
  'Cars': '#2A6FDB',
  'Lifestyle': '#8B5CF6',
  'Real Estate': '#10B981',
  'Tips & Guides': '#F59E0B',
};

// ── Fade Section ──
const FadeSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(false);
          setTimeout(() => setVisible(true), delay);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

// ── Article Card — Standard ──
const ArticleCard = ({ article, wide = false }) => (
  <div
    className="flex-shrink-0 flex flex-col overflow-hidden"
    style={{
      width: wide ? '85vw' : '72vw',
      maxWidth: wide ? '320px' : '260px',
      borderRadius: '20px',
      background: 'linear-gradient(160deg, #0d1a2e 0%, #111111 100%)',
      border: '1px solid rgba(255,255,255,0.07)',
      scrollSnapAlign: 'start',
    }}
  >
    {/* Image */}
    <div className="relative overflow-hidden" style={{ height: wide ? '160px' : '130px' }}>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover"
        style={{ opacity: 0.85 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,26,46,0.9) 100%)' }}
      />

      {/* Category pill */}
      <div className="absolute top-3 left-3 flex items-center px-2 py-3 rounded-full"
        style={{ background: categoryColors[article.category] || '#2A6FDB', opacity: 0.92 }}
      >
        <span className="text-white font-black uppercase tracking-widest" style={{ fontSize: '6px' }}>
          {article.category}
        </span>
      </div>

      {/* Editor's Pick */}
      {article.tag && (
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full"
          style={{ background: 'rgba(10,10,15,0.85)', border: '1px solid rgba(42,111,219,0.4)', backdropFilter: 'blur(8px)' }}
        >
          <span style={{ fontSize: '8px' }}>⭐</span>
          <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '6px' }}>
            {article.tag}
          </span>
        </div>
      )}

      {/* Read time */}
      <div className="absolute bottom-3 right-3 flex items-center px-2 py-2 rounded-full"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
      >
        <span className="text-white/70 uppercase tracking-widest" style={{ fontSize: '6px' }}>
          {article.readTime}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col px-3 py-3 flex-1">
      <h3 className="text-white font-black leading-tight mb-2"
        style={{ fontSize: wide ? '13px' : '11px', letterSpacing: '-0.2px' }}
      >
        {article.title}
      </h3>
      <p className="font-cormorant text-motanis-muted leading-relaxed mb-3 flex-1"
        style={{ fontSize: '12px', fontStyle: 'italic', fontWeight: '500' }}
      >
        {article.excerpt}
      </p>

      {/* Author row */}
      <div className="flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px' }}
      >
        <div className="flex items-center gap-2">
          <div className="overflow-hidden rounded-full flex-shrink-0"
            style={{ width: '22px', height: '22px', border: '1px solid rgba(42,111,219,0.3)' }}
          >
            <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold" style={{ fontSize: '7px' }}>{article.author}</span>
            <span className="text-motanis-muted" style={{ fontSize: '6px' }}>{article.date}</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{ width: '24px', height: '24px', background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
        >
          <span className="text-motanis-blue font-black" style={{ fontSize: '10px' }}>›</span>
        </div>
      </div>
    </div>
  </div>
);

// ── Featured Article Card ──
const FeaturedCard = ({ article }) => (
  <div className="relative overflow-hidden rounded-2xl"
    style={{ height: '320px', border: '1px solid rgba(255,255,255,0.08)' }}
  >
    <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.7 }} />

    {/* Gradient */}
    <div className="absolute inset-0"
      style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)' }}
    />

    {/* Top badges */}
    <div className="absolute top-4 left-4 flex items-center gap-2">
      <div className=" flex item-center px-2 py-3 rounded-full"
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

    {/* Read time top right */}
    <div className="absolute top-10 right-4 flex items-center px-2 py-2 rounded-full"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
    >
      <span className="text-white/70 uppercase tracking-widest" style={{ fontSize: '6px' }}>{article.readTime}</span>
    </div>

    {/* Bottom content */}
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <h2 className="text-white font-black leading-tight mb-2" style={{ fontSize: '1.2rem', letterSpacing: '-0.3px' }}>
        {article.title}
      </h2>
      <p className="font-cormorant text-white/60 leading-relaxed mb-3"
        style={{ fontSize: '13px', fontStyle: 'italic', fontWeight: '500' }}
      >
        {article.excerpt}
      </p>

      {/* Author + CTA row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="overflow-hidden rounded-full flex-shrink-0"
            style={{ width: '28px', height: '28px', border: '2px solid rgba(42,111,219,0.5)' }}
          >
            <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold" style={{ fontSize: '8px' }}>{article.author}</span>
            <span className="text-white/40" style={{ fontSize: '7px' }}>{article.date}</span>
          </div>
        </div>
        <CTAButton label="Read Article" href="#" />
      </div>
    </div>
  </div>
);

// ── Category Row ──
const CategoryRow = ({ category, articles }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(false);
          setTimeout(() => setVisible(true), 150);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (articles.length === 0) return null;

  return (
    <div ref={ref} className="flex flex-col" style={{ marginBottom: '32px' }}>

      {/* Section Label */}
      <div className="px-5 mb-3"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
          >
            <div className="rounded-full flex-shrink-0"
              style={{ width: '5px', height: '5px', background: categoryColors[category] || '#2A6FDB' }}
            />
            <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>
              [ {category}_ ]
            </span>
          </div>
          <button className="text-motanis-muted font-bold uppercase tracking-widest"
            style={{ fontSize: '7px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            See All →
          </button>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        className="flex gap-3 px-5 pb-2"
        style={{
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
        }}
      >
        <style>{`.blog-row::-webkit-scrollbar { display: none; }`}</style>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
        <div style={{ width: '16px', flexShrink: 0 }} />
      </div>
    </div>
  );
};

// ── Main Blog Page ──
const BlogPage = ({ activePage, setActivePage }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredArticle = articles.find((a) => a.featured);

  const filteredByCategory = (category) =>
    articles.filter((a) => !a.featured && (category === 'All' || a.category === category));

  const sectionCategories = activeCategory === 'All'
    ? ['Cars', 'Lifestyle', 'Real Estate', 'Tips & Guides']
    : [activeCategory];

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="md:hidden flex flex-col min-h-screen" style={{ background: '#0A0A0F' }}>

      {/* Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex flex-col" style={{ paddingTop: '64px', paddingBottom: '40px' }}>

        {/* ── Header ── */}
        <div className="px-5 pt-6 pb-4">
          <FadeSection delay={100}>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-4"
              style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
            >
              <div className="rounded-full" style={{ width: '5px', height: '5px', background: '#2A6FDB', flexShrink: 0 }} />
              <span className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '8px' }}>[ Blog_ ]</span>
            </div>

            <h1 className="text-white font-black uppercase leading-none mb-2"
              style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}
            >
              Stories &{' '}
              <span className="text-motanis-blue">Insights</span>
            </h1>
            <p className="font-cormorant text-motanis-muted leading-relaxed"
              style={{ fontSize: '15px', fontStyle: 'italic', fontWeight: '500', maxWidth: '280px' }}
            >
              The latest in luxury automotive, real estate and the Motanis lifestyle — curated for the discerning few.
            </p>
          </FadeSection>
        </div>

        {/* ── Featured Article ── */}
        {featuredArticle && (
          <div className="px-5 mb-6">
            <FadeSection delay={200}>
              <FeaturedCard article={featuredArticle} />
            </FadeSection>
          </div>
        )}

        {/* ── Category Filter Pills ── */}
        <div className="mb-6">
          <FadeSection delay={250}>
            <div className="flex gap-2 px-5 pb-1"
              style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}
            >
              <style>{`.cat-filter::-webkit-scrollbar { display: none; }`}</style>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    background: activeCategory === cat ? 'rgba(42,111,219,0.20)' : 'rgba(255,255,255,0.05)',
                    border: activeCategory === cat ? '1px solid rgba(42,111,219,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {activeCategory === cat && (
                    <div className="rounded-full flex-shrink-0"
                      style={{ width: '4px', height: '4px', background: '#2A6FDB' }}
                    />
                  )}
                  <span className="font-black uppercase tracking-widest"
                    style={{ fontSize: '7px', color: activeCategory === cat ? '#2A6FDB' : '#8A9BB0' }}
                  >
                    {cat}
                  </span>
                </button>
              ))}
            </div>
          </FadeSection>
        </div>

        {/* ── Article Sections By Category ── */}
        {sectionCategories.map((category) => (
          <CategoryRow
            key={category}
            category={category}
            articles={filteredByCategory(category)}
          />
        ))}

        {/* ── Newsletter CTA ── */}
        <div className="px-5 mb-4">
          <FadeSection delay={200}>
            <div className="relative flex flex-col p-5 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0d1a2e 0%, #111111 100%)',
                border: '1px solid rgba(42,111,219,0.2)',
              }}
            >
              {/* Glow */}
              <div className="absolute rounded-full blur-3xl pointer-events-none"
                style={{ width: '150px', height: '150px', background: 'rgba(42,111,219,0.12)', top: '-40px', right: '-40px' }}
              />

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit mb-3"
                style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
              >
                <span style={{ fontSize: '10px' }}>✉️</span>
                <span className="text-motanis-blue font-black uppercase tracking-widest ml-1" style={{ fontSize: '7px' }}>
                  [ Newsletter_ ]
                </span>
              </div>

              <h3 className="text-white font-black uppercase leading-tight mb-2"
                style={{ fontSize: '1.2rem', letterSpacing: '-0.3px' }}
              >
                Never Miss A <span className="text-motanis-blue">Story</span>
              </h3>
              <p className="font-cormorant text-motanis-muted leading-relaxed mb-4"
                style={{ fontSize: '13px', fontStyle: 'italic', fontWeight: '500' }}
              >
                Get the freshest automotive insights, real estate tips and Motanis exclusives delivered straight to your inbox.
              </p>

              {/* Input */}
              {subscribed ? (
                <div className="flex items-center justify-center py-3 rounded-full"
                  style={{ background: 'rgba(42,111,219,0.15)', border: '1px solid rgba(42,111,219,0.3)' }}
                >
                  <p className="text-motanis-blue font-black uppercase tracking-widest" style={{ fontSize: '9px' }}>
                    ✓ You're subscribed!
                  </p>
                </div>
              ) : (
                <div className="flex items-center"
                  style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden' }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-transparent text-white outline-none"
                    style={{ fontSize: '10px', padding: '11px 14px', color: '#fff', minWidth: 0 }}
                  />
                  <div className="flex-shrink-0" onClick={handleSubscribe} style={{ cursor: 'pointer' }}>
                    <CTAButton label="Subscribe" href="#" />
                  </div>
                </div>
              )}

              {/* Post count */}
              <p className="text-motanis-muted uppercase tracking-widest mt-3 text-center"
                style={{ fontSize: '6px', opacity: 0.5 }}
              >
                Join 2,400+ readers — new articles every week
              </p>
            </div>
          </FadeSection>
        </div>

      </div>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default BlogPage;