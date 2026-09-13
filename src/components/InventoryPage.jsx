import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import InventoryFilter from './InventoryFilter';
import InventoryCard from './InventoryCard';

const img1 = 'https://lh3.googleusercontent.com/d/1rvSNL2xbpwR7Vx3X-hCmlByNnzHxVZ-4=s800';
const img2 = 'https://lh3.googleusercontent.com/d/1l-cWif3KereO6xFwNisrw1dPptgaX4Qh=s800';
const img3 = 'https://lh3.googleusercontent.com/d/1M1LyKv4JKPO4vlOf7d2CGNKw_0wYA_nJ=s800';
const img4 = 'https://lh3.googleusercontent.com/d/1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3=s800';
const img5 = 'https://lh3.googleusercontent.com/d/1Mp5SEpDRcjeN9tLrNHZj782Rt3ybKHyu=s800';
const img6 = 'https://lh3.googleusercontent.com/d/1kxxTtWMR1mVmiQCYrmbKgKGlTgDzScTW=s800';
const img7 = 'https://lh3.googleusercontent.com/d/12FPIDxrXXPt_A5lhSGrpNOBwLC4rhQIp=s800';
const img8 = 'https://lh3.googleusercontent.com/d/11oHKvL7_oZVqK01LL3ZLaG3WZEl8-doe=s800';
const img9 = 'https://lh3.googleusercontent.com/d/122ZU2WszVs923QNdkLy0OdxHnnCtEKWY=s800';
const img10 = 'https://lh3.googleusercontent.com/d/138jtx2DikX5LcrSd5crHe5G-b2tPpCGv=s800';
const img11 = 'https://lh3.googleusercontent.com/d/1ZTBfcCjXgtGhNX1EFkpqzunYKnjs_6hf=s800';
const img12 = 'https://lh3.googleusercontent.com/d/11cOOm9UCmRkzmXlsey-Sw8W7AvgTtZ4b=s800';
const img13 = 'https://lh3.googleusercontent.com/d/1ZqNEniTb4nTxUyFH1o579uVlomz0VaR5=s800';
const img14 = 'https://lh3.googleusercontent.com/d/1Ht6ygg9pnroJnDBvlefBnWEDk0B7P-NP=s800';
const img19 = 'https://lh3.googleusercontent.com/d/1lXs6GCTHYR6Io5YFR_2H70EDL_oBhw6v=s800';
const img20 = 'https://lh3.googleusercontent.com/d/1b5Gk3d4PM4wOxhxbQ8k_r9i-MOA9mhE1=s800';
const img21 = 'https://lh3.googleusercontent.com/d/1N2AbvIA_8lQmfaXfCZtXEwdG8NLIBbiO=s800';
const img22 = 'https://lh3.googleusercontent.com/d/1RmVGf5FkQDfa6ivec3aJkGO2fETaS51a=s800';
const img23 = 'https://lh3.googleusercontent.com/d/1XncjyYXCprmBPC7K2Me0FEd-X7fAcza3=s800';
const img24 = 'https://lh3.googleusercontent.com/d/1DgjmtT369nG-tt_fRjdjhjuyzvQoAFSF=s800';
const img25 = 'https://lh3.googleusercontent.com/d/18o6QcJDj2268hQDdZw6inguQ5u2kkg4h=s800';
const img26 = 'https://lh3.googleusercontent.com/d/1B3mRt15NKMLi-PlXb-uR5ESpgXaKtXN6=s800';
const img27 = 'https://lh3.googleusercontent.com/d/1UExtJ3Qhc0TUpk462LuABzcEzx3o2ivM=s800';
const img28 = 'https://lh3.googleusercontent.com/d/14CKVawfa_A0TZPeJiwcPvn8DTv1ElHYy=s800';
const img29 = 'https://lh3.googleusercontent.com/d/1QmygZZ5Gj09p1TSBn7Bebsj6QmWG0Ybo=s800';
const img30 = 'https://lh3.googleusercontent.com/d/1q-zlz1I8XSJkL4ONH28EWW2Nitv8Ejfp=s800';
const img31 = 'https://lh3.googleusercontent.com/d/1egfBcyrdji7azvbKQ_NKG9kMs1sXNUtL=s800';
const img32 = 'https://lh3.googleusercontent.com/d/1b0DGtN36UEfE2xmzqD_ZZj-LdphULzl3=s800';
const img33 = 'https://lh3.googleusercontent.com/d/1AxDg6b6vdx1nmysLrVIc9BuwNBPnoYi6=s800';
const img34 = 'https://lh3.googleusercontent.com/d/1yTgGssr1mGttY3tZECdcx7Bb9u6WCbOI=s800';
const img35 = 'https://lh3.googleusercontent.com/d/1Nk7wDLEqkU7xa54f43PKaLtL9-D97sHP=s800';
const img36 = 'https://lh3.googleusercontent.com/d/1PufUbRj9rth5g5-JGdkMLVGcwJXhuTm3=s800';
const img37 = 'https://lh3.googleusercontent.com/d/1k3_RvKpAd6iW2v4CnVjof_FS_VpWTnYH=s800';
const img38 = 'https://lh3.googleusercontent.com/d/1Muybt5VEIX61NCzTY2KBsBo9b6FVej0F=s800';
const img39 = 'https://lh3.googleusercontent.com/d/1EZxcbjtJe8aPhECV8OWBDTilcX1kwMzU=s800';
const img40 = 'https://lh3.googleusercontent.com/d/18VEJ-zxQl9fNAQXUd_pD5krgCsmgVFeV=s800';
const img41 = 'https://lh3.googleusercontent.com/d/1gOa2foFhIKFJpNrL8GIZXDYqZLWQCfJ2=s800';
const img42 = 'https://lh3.googleusercontent.com/d/1VSmdIgtJUANLEtsAOGFOCdnJC3F1AuA-=s800';
const img43 = 'https://lh3.googleusercontent.com/d/10G4eLyE9Ie9nXjliUYV5NxBqMABohqlE=s800';
const img44 = 'https://lh3.googleusercontent.com/d/120QKGNMqg-YPY2LX15DjNug-b81Kx8Tc=s800';
const img45 = 'https://lh3.googleusercontent.com/d/1kJPnm16ljcNGNTR5ghUqFKBPnA0-9rR0=s800';
const img46 = 'https://lh3.googleusercontent.com/d/104EfH8jJsLtNvRtid3HJ8BWGDJWOtF1X=s800';
const img47 = 'https://lh3.googleusercontent.com/d/14PnddSaF0jtW556sXK_tHnMtLTNiJLm5=s800';
const img48 = 'https://lh3.googleusercontent.com/d/1y_MwBfzobqNNASv55FtBXlGmCMB-reX8=s800';
const img49 = 'https://lh3.googleusercontent.com/d/1FbKOJFVfU0nyWfjtiKZXXvS7L9tVSDh1=s800';
const img50 = 'https://lh3.googleusercontent.com/d/1sK2I6mGl4pzprDoYUWs12G0TXFH1G0fE=s800';

const inventorySections = [
  {
    label: '[ New Arrivals_ ]',
    dealTag: 'New Arrival',
    cars: [
      { id: 34, name: 'Mazda CX-9 Touring', year: 2016, color: 'White', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦25,500,000', priceValue: 25500000, bodyType: 'SUV', images: [img1, img2] },
      { id: 32, name: 'Lexus Es 300 Hybrid', year: 2013, color: 'Black', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦17,500,000', priceValue: 17500000, bodyType: 'Sedan', images: [img3, img4] },
      { id: 36, name: 'Lexus Rx 350', year: 2011, color: 'White', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦18,500,000', priceValue: 18500000, bodyType: 'SUV', images: [img5, img6] },
      { id: 30, name: 'Mercedes-Benz GLE 350 4matic', year: 2017, color: 'Black', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦37,000,000', priceValue: 37000000, bodyType: 'SUV', images: [img7, img8] },
      { id: 101, name: 'Toyota Highlander XSE', year: 2021, color: 'Blue', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦70,500,000', priceValue: 70500000, bodyType: 'SUV', images: [img9, img10] },
      { id: 108, name: 'Mercedes-Benz GLC 300 4Matic', year: 2018, color: 'Blue', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦29,500,000', priceValue: 29500000, bodyType: 'SUV', images: [img41, img42] },
      { id: 109, name: 'Toyota Camry SE', year: 2012, color: 'Gray', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦14,500,000', priceValue: 14500000, bodyType: 'Sedan', images: [img43, img44] },
      { id: 110, name: 'Hyundai Sonata Sport', year: 2016, color: 'Gray', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦14,200,000', priceValue: 14200000, bodyType: 'Sedan', images: [img45, img46] },
      { id: 111, name: 'Toyota Tundra Crewmax', year: 2014, color: 'Black', type: 'Local', transmission: 'Automatic', yoe: 'NIL', registration: 'Registered', condition: 'Excellent Condition', price: '₦16,500,000', priceValue: 16500000, bodyType: 'SUV', images: [img47, img48] },
      { id: 112, name: 'Hyundai Sonata', year: 2015, color: 'Blue', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦10,500,000', priceValue: 10500000, bodyType: 'Sedan', images: [img49, img50] },
    ],
  },
  {
    label: '[ Hot Deals_ ]',
    dealTag: 'Hot Deal',
    cars: [
      { id: 22, name: 'Hyundai Santafe Sport 2.0T', year: 2013, color: 'Gray', type: 'Local', transmission: 'Automatic', yoe: 'NIL', registration: 'Registered', condition: 'Fixes', price: '₦10,500,000', priceValue: 10500000, bodyType: 'SUV', images: [img19, img20] },
      { id: 2, name: 'Hyundai Santafe Sport AWD', year: 2015, color: 'Gray', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦13,750,000', priceValue: 13750000, bodyType: 'SUV', images: [img21, img22] },
      { id: 9, name: 'Toyota Venza AWD', year: 2011, color: 'Black', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦12,750,000', priceValue: 12750000, bodyType: 'SUV', images: [img23, img24] },
      { id: 11, name: 'Toyota Highlander 4WD', year: 2011, color: 'White', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦15,850,000', priceValue: 15850000, bodyType: 'SUV', images: [img25, img26] },
      { id: 104, name: 'Mercedes-Benz GLE 350 4Matic', year: 2016, color: 'Gray', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦35,000,000', priceValue: 35000000, bodyType: 'SUV', images: [img27, img28] },
      { id: 105, name: 'Lexus NX 200T AWD', year: 2016, color: 'Silver', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦29,000,000', priceValue: 29000000, bodyType: 'SUV', images: [img29, img30] },
      { id: 12, name: 'Toyota Corolla', year: 2014, color: 'Red', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Fixes', price: '₦13,850,000', priceValue: 13850000, bodyType: 'Sedan', images: [img31, img32] },
      { id: 16, name: 'Toyota RAV4 4WD', year: 2009, color: 'Red', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦12,000,000', priceValue: 12000000, bodyType: 'SUV', images: [img33, img34] },
      { id: 106, name: 'Toyota Corolla LE', year: 2020, color: 'Gray', type: 'Foreign', transmission: 'Automatic', yoe: 'NIL', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦22,950,000', priceValue: 22950000, bodyType: 'Sedan', images: [img35, img36] },
      { id: 107, name: 'Honda CR-V Sport AWD', year: 2021, color: 'Gray', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦36,000,000', priceValue: 36000000, bodyType: 'SUV', images: [img37, img38] },
    ],
  },
  {
    label: '[ Discount Sales_ ]',
    dealTag: 'Premium Pick',
    cars: [
      { id: 28, name: 'Ford Edge SEL', year: 2007, color: 'Black', type: 'Local', transmission: 'Automatic', yoe: 'NIL', registration: 'Registered', condition: 'Fixes', price: '₦3,500,000', priceValue: 3500000, bodyType: 'SUV', images: [img11, img12] },
      { id: 27, name: 'Toyota RAV4 AWD', year: 2008, color: 'Light-Blue', type: 'Local', transmission: 'Automatic', yoe: 'NIL', registration: 'Registered', condition: 'Excellent Condition', price: '₦6,500,000', priceValue: 6500000, bodyType: 'SUV', images: [img13, img14] },
      { id: 37, name: 'Lexus RX 350', year: 2010, color: 'Burgundy', type: 'Foreign', transmission: 'Automatic', yoe: '2026', registration: 'Unregistered', condition: 'Excellent Condition', price: '₦18,200,000', priceValue: 18200000, bodyType: 'SUV', images: [img39, img40] },
    ],
  },
];

// ── All cars flattened ──
const allCars = inventorySections.flatMap((s) =>
  s.cars.map((car) => ({ ...car, dealTag: s.dealTag }))
);

// ── Sort helper ──
const sortCars = (cars, sortBy) => {
  const sorted = [...cars];
  if (sortBy === 'Price: Low to High') return sorted.sort((a, b) => a.priceValue - b.priceValue);
  if (sortBy === 'Price: High to Low') return sorted.sort((a, b) => b.priceValue - a.priceValue);
  return sorted.sort((a, b) => parseInt(b.yoe) - parseInt(a.yoe));
};

// ── Section Row — horizontal scroll ──
const SectionRow = ({ section }) => {
  const rowRef = useRef(null);
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
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} className="flex flex-col" style={{ marginBottom: '28px' }}>
      {/* Section Label */}
      <div
        className="flex items-center gap-2 px-4 mb-1"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full"
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
            {section.label}
          </span>
        </div>
      </div>

      {/* Horizontal Card Scroll */}
      <div
        className="flex gap-3 px-4 pb-2"
        style={{
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
        }}
      >
        <style>{`.card-row::-webkit-scrollbar { display: none; }`}</style>
        {section.cars.map((car) => (
          <InventoryCard
            key={car.id}
            car={{ ...car, dealTag: section.dealTag }}
          />
        ))}
        <div style={{ width: '16px', flexShrink: 0 }} />
      </div>
    </div>
  );
};

// ── Flat Grid — vertical 1-column ──
const FlatGrid = ({ cars }) => {
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 200);
        }
      },
      { threshold: 0.05 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  if (cars.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center px-8 text-center"
        style={{ paddingTop: '80px' }}
      >
        <div
          className="flex items-center justify-center rounded-2xl mb-4"
          style={{
            width: '64px',
            height: '64px',
            background: 'rgba(42,111,219,0.10)',
            border: '1px solid rgba(42,111,219,0.2)',
            fontSize: '1.8rem',
          }}
        >
          🚗
        </div>
        <h3
          className="text-white font-black uppercase leading-none mb-2"
          style={{ fontSize: '1.2rem' }}
        >
          No Vehicles Found
        </h3>
        <p
          className="font-cormorant text-motanis-muted"
          style={{ fontSize: '14px', fontStyle: 'italic' }}
        >
          Try a different filter or check back soon.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={gridRef}
      className="flex flex-col items-center gap-4 px-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
      }}
    >
      {cars.map((car) => (
        <div key={car.id} style={{ width: '100%' }}>
          <InventoryCard car={car} flatMode />
        </div>
      ))}
    </div>
  );
};

const InventoryPage = ({ activePage, setActivePage }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const [viewMode, setViewMode] = useState('grid');

  // ── Determine view mode ──
  const isFlat = activeFilter !== 'All' || sortBy !== 'Latest';

  // ── Compute flat list ──
  const flatCars = (() => {
    let cars = [...allCars];
    // Apply bodyType filter
    if (activeFilter !== 'All') {
      cars = cars.filter((car) => car.bodyType === activeFilter);
    }
    // Apply sort
    return sortCars(cars, sortBy);
  })();

  // ── Total count ──
  const totalCount = isFlat
    ? flatCars.length
    : inventorySections.reduce((acc, s) => acc + s.cars.length, 0);

  return (
    <div
      className="md:hidden flex flex-col min-h-screen"
      style={{ background: '#0A0A0F' }}
    >
      {/* Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Sticky Filter Bar */}
      <InventoryFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalCount={totalCount}
      />

      {/* ── Page Content ── */}
      <div
        className="flex flex-col"
        style={{ paddingTop: '5rem', paddingBottom: '40px' }}
      >
        {isFlat ? (
          /* ── Flat Vertical Grid ── */
          <FlatGrid cars={flatCars} />
        ) : (
          /* ── Sectioned Horizontal View ── */
          inventorySections.map((section) => (
            <SectionRow key={section.label} section={section} />
          ))
        )}
      </div>
    </div>
  );
};

export default InventoryPage;