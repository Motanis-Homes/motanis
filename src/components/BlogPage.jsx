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
    title: 'The BMW M4 Competition — Why It Still Reigns Supreme',
    excerpt: 'Three years since its debut, the M4 Competition continues to set the benchmark for performance sedans. We drove one for a week to find out why.',
    image: 'https://lh3.googleusercontent.com/d/1tINtM7V-dfT9Ok1L1jrfr8BFyghCqRdF=s800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    date: 'Aug 31, 2026',
    readTime: '5 min read',
    featured: false,
    content: {
      intro: 'When BMW unveiled the M4 Competition in 2021, the automotive world held its breath. The controversial kidney grille aside, what emerged was arguably the most complete performance sedan BMW had ever produced. Three years on, with newer rivals entering the arena, we spent a week with one to answer the question everyone is still asking — does it still reign supreme?',
      sections: [
        {
          heading: 'Performance That Defies Logic',
          body: 'The S58 straight-six engine produces 503 horsepower and 479 lb-ft of torque in Competition trim. But raw numbers only tell half the story. The way this engine delivers its power — with a linear surge that builds relentlessly to the redline — is something that has to be experienced to be believed. Zero to 100 km/h in 3.9 seconds feels almost conservative. It feels faster.',
        },
        {
          heading: 'The Chassis — A Masterclass In Balance',
          body: 'BMW\'s M Division has always excelled at building cars that feel alive beneath you, and the M4 Competition is the finest expression of that philosophy yet. The adaptive M suspension reads the road with almost supernatural awareness, smoothing out imperfections on the daily commute while tightening up with surgical precision when you push it through a corner.',
        },
        {
          heading: 'Inside — Where Sport Meets Sanctuary',
          body: 'Climb inside and the M4 wraps you in a cockpit that manages to feel both purposeful and luxurious simultaneously. The M Sport seats grip you firmly without ever becoming uncomfortable on longer journeys. The iDrive 8 infotainment system is the best in the business — intuitive, fast and beautifully integrated.',
        },
      ],
      pullQuote: 'Three years on and no rival has quite managed to replicate what the M4 Competition does — that rare ability to be genuinely exciting every single time you drive it.',
      conclusion: 'The BMW M4 Competition remains the definitive performance sedan of its generation. Yes, newer rivals have arrived. Yes, the grille is still divisive. But nothing else on sale today delivers this combination of everyday usability, mechanical theatre and outright performance at this price point. It still reigns. Emphatically.',
      tags: ['BMW', 'Performance Sedans', 'Cars', 'Review'],
    },
  },
  {
    id: 2,
    category: 'Lifestyle',
    tag: null,
    title: 'What Your Choice of Car Says About You',
    excerpt: 'From a classic Porsche to a blacked-out Range Rover — the vehicles we choose reveal far more than we think.',
    image: 'https://lh3.googleusercontent.com/d/1ivC9qph1BhTde3_v1PPYCE6vUkwEu5lM=s800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    date: 'Aug 31, 2026',
    readTime: '4 min read',
    featured: false,
    content: {
      intro: 'Psychologists have long argued that our possessions are extensions of our identity. Nowhere is this more true than with the cars we drive. Whether you have consciously chosen your vehicle for its performance figures, its prestige or simply because it fits your lifestyle — your car is saying something about you to the world. The question is: what exactly is it saying?',
      sections: [
        {
          heading: 'The Porsche Driver — Precision Over Everything',
          body: 'Porsche owners tend to be detail-oriented, quietly ambitious individuals who appreciate engineering for its own sake. They are not trying to impress anyone — the car impresses on its own terms. Studies consistently show Porsche owners rank among the most satisfied car owners globally, suggesting a personality type that does thorough research before committing to any major decision.',
        },
        {
          heading: 'The Range Rover Owner — Command And Comfort',
          body: 'Range Rover drivers value status, but more importantly, they value capability. The choice of a luxury SUV communicates a desire for versatility — the ability to attend a boardroom meeting and then drive off-road without changing vehicles. In Nigeria particularly, the Range Rover has become the definitive symbol of professional success.',
        },
        {
          heading: 'The Ferrari Owner — Life Is Too Short For Slow Cars',
          body: 'Ferrari ownership is a statement that defies subtlety. These are individuals who have decided that life is for living at maximum intensity. Interestingly, research shows Ferrari owners are often serial entrepreneurs — people with high risk tolerance and an appetite for reward that extends far beyond their choice of automobile.',
        },
      ],
      pullQuote: 'Your car is not just transportation. It is a declaration — of your values, your aspirations and the version of yourself you choose to present to the world.',
      conclusion: 'None of this is absolute, of course. People buy cars for a thousand different reasons. But the next time you are sitting in traffic, take a moment to observe the vehicles around you. You might find that you can read the story of each driver before they have said a single word.',
      tags: ['Lifestyle', 'Psychology', 'Cars', 'Culture'],
    },
  },
  {
    id: 3,
    category: 'Tips & Guides',
    tag: "Editor's Pick",
    title: '10 Things To Check Before Buying A Foreign Used Car In Nigeria',
    excerpt: 'Buying a tokunbo? Here is the definitive checklist every smart buyer needs before signing anything.',
    image: 'https://lh3.googleusercontent.com/d/1qm9f2qa3UiIgeJDFH3O7dKUKS0FxQk8b=s800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg',
    date: 'Aug 30, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    category: 'Real Estate',
    tag: null,
    title: 'Why Now Is The Best Time To Invest In Lagos Real Estate',
    excerpt: 'Despite economic headwinds, savvy investors are quietly building wealth through strategic property acquisitions in Lagos.',
    image: 'https://lh3.googleusercontent.com/d/13TSDREWaEre8CQq0XRw7f0Lb4f_1GNmb=s800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    date: 'Aug 31, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 5,
    category: 'Cars',
    tag: null,
    title: 'Ferrari vs Lamborghini — The Eternal Debate Settled Once And For All',
    excerpt: 'Two icons. One question. We break down the numbers, the feeling and the lifestyle behind each legendary marque.',
    image: 'https://lh3.googleusercontent.com/d/1kTSogu1Ygnzf7dIEZ_qaXqTPFDeVU9Or=s800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    date: 'Aug 31, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 6,
    category: 'Lifestyle',
    tag: null,
    title: 'The Art of the Weekend Drive — Nigeria\'s Most Scenic Routes',
    excerpt: 'Pack your bags, fuel up and hit the road. We explore the most breathtaking driving routes across Nigeria.',
    image: 'https://lh3.googleusercontent.com/d/1gwrQUAnwRRG0oZ9vZl2u3Hadu7Umo89g=s800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/6817003/pexels-photo-6817003.jpeg',
    date: 'Aug 31, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 7,
    category: 'Tips & Guides',
    tag: "Editor's Pick",
    title: 'How To Finance Your Dream Car Without Breaking The Bank',
    excerpt: 'Smart financing strategies that can make your next car feel a lot more achievable.',
    image: 'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    date: 'Aug 31, 2026',
    readTime: '6 min read',
    featured: true,
    content: {
      intro: 'Owning your dream car in Nigeria can sometimes feel like one of those things you admire from a distance. You see the Mercedes, Lexus, Toyota, BMW or Range Rover you actually want, check the price, quietly close the listing and tell yourself, “Maybe next year.” What if the problem isn\'t necessarily that the car is out of reach? What if you simply haven\'t explored the right way to pay for it? Car ownership has changed considerably. Today, buyers have more options than simply saving for years, paying cash and watching their bank account become suspiciously quiet afterwards. With the right vehicle, a sensible financing arrangement, a realistic budget and the right dealership partner, getting behind the wheel of your dream car can be far more achievable than you think. At Motanis Autos, we believe buying a car should be an exciting experience—not a financial ambush. Here are some smart ways to approach your next vehicle purchase without putting unnecessary pressure on your finances.',
      sections: [
        {
          heading: 'Understand The Total Cost of Ownership First',
          body: 'Before you fall in love with the car, fall in love with the numbers. The price displayed is only part of the story. Once you become the owner, there is insurance, fuel, servicing, tyres, registration, repairs and the occasional unexpected “Omo, this one was not in the plan. That\'s why your first question shouldn\'t simply be, “How much is the car?” It should be, “How much will this car realistically cost me to own and maintain?” For example, two cars may have similar purchase prices but completely different running costs. One may be easier to maintain, consume less fuel and have readily available parts, while another could demand considerably more from your pocket over time. This is particularly important when you\'re financing. Your monthly repayment shouldn\'t leave you struggling to pay for the actual ownership of the vehicle. At Motanis Autos, we encourage buyers to look beyond the sticker price and consider the bigger ownership picture. The objective isn\'t merely to help you get a car. It\'s to help you get the right car for your financial reality. Because there\'s nothing luxurious about driving your dream car while your bank account is having a nervous breakdown. ',
        },
        {
          heading: 'Explore Vehicle Financing Options',
          body: 'Here\'s where things get interesting. You don\'t necessarily need to have the entire purchase price sitting in your account before you can own the car you want. Depending on your circumstances and the vehicle you\'re considering, financing can allow you to spread the cost of your purchase into manageable payments rather than parting with the entire amount at once. The key, however, is to finance intelligently. Before committing, understand the required initial payment, the repayment structure, applicable costs and the overall amount you will eventually pay. Don\'t be distracted by a monthly figure that looks attractive until you discover what it adds up to over the full financing period. This is also where having the right dealership matters. At Motanis Autos, our financing offer is designed to make vehicle acquisition more accessible by giving qualified customers an alternative to paying the entire cost of their vehicle upfront. Instead of simply asking, “Can you afford this car today?”, the conversation becomes, “What is the smartest way for you to acquire this car?” That difference matters. A good financing arrangement should fit comfortably within your broader financial plan. You should still be able to handle your everyday responsibilities, maintain the vehicle properly and enjoy the car without constantly calculating your next repayment. Remember: financing isn\'t an excuse to buy a car you cannot afford. It\'s a tool for making a well-planned purchase more manageable.',
        },
        {
          heading: 'Leverage Trade-In Value',
          body: 'Now, here\'s a strategy many car owners overlook. That car currently sitting in your compound could actually be part of the solution to getting your next one. If you\'re planning to upgrade, you don\'t necessarily have to sell your existing vehicle separately and start the entire process from scratch. A trade-in can potentially turn the value tied up in your current car into part of the funds for your next acquisition. Let\'s say you\'ve been driving a vehicle for several years and you\'re ready for an upgrade. Instead of viewing your current car as something you need to dispose of before shopping for another, think of it as an asset that can contribute toward your next purchase. At Motanis Autos, we assess trade-in vehicles with the aim of providing a fair and transparent valuation. The value agreed upon can then help reduce the amount you need to provide toward your next vehicle. That can make a meaningful difference—especially when combined with financing. There\'s another advantage: Convenience. One conversation can potentially cover your current vehicle, its valuation, your preferred replacement and the financing options available to you. Less running around. Less uncertainty. More time thinking about the important question: “Which colour are we taking?” The Smartest Buyers Don\'t Just Shop For Cars. They shop for value. Your dream car should make you happy every time you see it parked outside—not make you panic every time you open your banking app. That\'s why the smartest approach is to consider the entire picture: The vehicle\'s purchase price, ownership costs, condition, financing structure, trade-in opportunities and your own financial position. Don\'t be afraid to ask questions.What exactly am I paying for? What does the financing arrangement look like? What happens if I want to upgrade later? What is the condition and history of the vehicle? What will this car realistically cost me to maintain? A reputable dealership should be comfortable having those conversations with you. At Motanis Autos, our role goes beyond handing you keys. We want our customers to understand what they\'re buying, why they\'re buying it and how they\'re paying for it. Getting you into a car is one thing. Helping you make a decision you\'ll still be happy with months and years later? That\'s the real win.',
        },
      ],
      pullQuote: 'Financial intelligence is not about buying the cheapest car. It\'s about finding the smartest way to own the car that\'s right for you. Your Dream Car May Be Closer Than You Think',
      conclusion: 'The path to your dream car is rarely a single straight line. But with the right financial strategy, a clear understanding of the market and the right dealership partnership, it is a journey that is entirely achievable. At Motanis, we are not just here to sell you a car — we are here to help you acquire it wisely, on terms that work for YOU. Think smart. Buy wisely. Drive happy - Think MOTANIS!',
      tags: ['Finance', 'Tips & Guides', 'Car Buying', 'Trade-In', 'Nigeria'],
    },
  },
  {
    id: 8,
    category: 'Real Estate',
    tag: "Editor's Pick",
    title: 'Luxury vs Affordable — Finding The Right Property Balance In 2026',
    excerpt: 'With rising property prices across major Nigerian cities, we examine where the real value lies for first-time and seasoned investors alike.',
    image: 'https://lh3.googleusercontent.com/d/1NqDPufLBZg5HM2IXKGFYCgiCK2KjqWHS=s800',
    author: 'OMMICANG',
    authorAvatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    date: 'Aug 31, 2026',
    readTime: '7 min read',
    featured: false,
  },
];

export { articles };

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
const ArticleCard = ({ article, wide = false, onRead }) => (
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
        onClick={onRead}
          style={{ 
            width: '24px', 
            height: '24px', 
            background: 'rgba(42,111,219,0.15)', 
            border: '1px solid rgba(42,111,219,0.3)' 
          }}
        >
          <span className="text-motanis-blue font-black" style={{ fontSize: '10px' }}>›</span>
        </div>
      </div>
    </div>
  </div>
);

// ── Featured Article Card ──
const FeaturedCard = ({ article, onRead }) => (
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
      <h2 className="text-white font-black leading-tight mb-2" style={{ fontSize: '1.2rem', letterSpacing: '-0.3px', fontWeight: '700' }}>
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
        <div onClick={onRead} style={{ cursor: 'pointer' }}>
        <CTAButton label="Read Article" href="#" />
        </div>
      </div>
    </div>
  </div>
);

// ── Category Row ──
const CategoryRow = ({ category, articles, onRead }) => {
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
          <ArticleCard
            key={article.id}
            article={article}
            onRead={() => onRead(article.id)}
          />
        ))}
        <div style={{ width: '16px', flexShrink: 0 }} />
      </div>
    </div>
  );
};

// ── Main Blog Page ──
const BlogPage = ({ activePage, setActivePage, setActiveArticle }) => {
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
              <FeaturedCard
                article={featuredArticle}
                onRead={() => {
                  setActiveArticle(featuredArticle.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => setActivePage('article'), 300);
                }}
               />
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
            onRead={(id) => {
              setActiveArticle(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => setActivePage('article'), 300);
            }}
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