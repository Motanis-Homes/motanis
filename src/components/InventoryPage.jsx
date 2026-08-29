import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import InventoryFilter from './InventoryFilter';
import InventoryCard from './InventoryCard';

const img1 = 'https://lh3.googleusercontent.com/d/1jbQORSTXbjqcbcktyucvNVtZr3wRKVlw=s800';
const img2 = 'https://lh3.googleusercontent.com/d/1qSnctzX97NxHA9SNriiethf--D7sawgQ=s800';
const img3 = 'https://lh3.googleusercontent.com/d/1vXcDBLHqN3jatGUcWUoZv8cZ1nZfOMy0=s800';
const img4 = 'https://lh3.googleusercontent.com/d/1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3=s800';
const img5 = 'https://lh3.googleusercontent.com/d/1p6Kf14eEdj1GI2eHkTFbMXNbrV0nMlC-=s800';
const img6 = 'https://lh3.googleusercontent.com/d/15QFPLiRtdOeDXFp_475QaxQdhCNS-2Vw=s800';
const img7 = 'https://lh3.googleusercontent.com/d/1t2bzt_BTPpv3PS1Go2Oq7iEPRqPORVGU=s800';
const img8 = 'https://lh3.googleusercontent.com/d/1HddtCHgg8oArM1tTAH2F_Iv5u_hHwMjA=s800';
const img9 = 'https://lh3.googleusercontent.com/d/1PyQJ2_a3I2ichq5o2Vjcqt8pxtWoMWME=s800';
const img10 = 'https://lh3.googleusercontent.com/d/1xLMB5A2gUJ9hVwm7u2-1xs3HcOXUsHTq=s800';
const img11 = 'https://lh3.googleusercontent.com/d/10_uHxU2-DODQj0B_Z_POuQn8ZcwMYwmV=s800';
const img12 = 'https://lh3.googleusercontent.com/d/1nzrHCI-QEZZnkftleU7QIdJTlabb9F2N=s800';
const img13 = 'https://lh3.googleusercontent.com/d/1tXARHeeAhJDzywkiqliItJfoYNZ3wMFj=s800';
const img14 = 'https://lh3.googleusercontent.com/d/1MxmayEy9DRcFbawVSUSjdnBbJfgD8lDS=s800';
const img19 = 'https://lh3.googleusercontent.com/d/1D5Ig40vCh_CLjJjaYCxNn8WlR_g_qpSl=s800';
const img20 = 'https://lh3.googleusercontent.com/d/1wb7pFPKygjvaGjoNakWQY4CFO8Vz4o9j=s800';
const img21 = 'https://lh3.googleusercontent.com/d/1dt3HMYqqQkuKHpS2v1XlpKfTcI0frRfH=s800';
const img22 = 'https://lh3.googleusercontent.com/d/1it3L0OjCRnTvK6mECBHqmsubGQJ6PUmW=s800';
const img23 = 'https://lh3.googleusercontent.com/d/1ZR_b1mwL2oYB6_Af2z4kX9N0G1j3OdS4=s800';
const img24 = 'https://lh3.googleusercontent.com/d/1h6lUcUeStBPVUth2U5Epo3DkHPDU_X0k=s800';
const img25 = 'https://lh3.googleusercontent.com/d/1semEpnNYJLjxh46x1pXyWE5d-iEQkoXk=s800';
const img26 = 'https://lh3.googleusercontent.com/d/1aoj47QYJmLfn6bNae2s52Jg4Y0NiBDAt=s800';
const img27 = 'https://lh3.googleusercontent.com/d/12Ta3_LzcYQ4VY7lmK9stMQXzYvhrtK1f=s800';
const img28 = 'https://lh3.googleusercontent.com/d/1MdRKeii48fVIWPcPv3J1WlP0uApVYuyp=s800';
const img29 = 'https://lh3.googleusercontent.com/d/18QjWgSHKcegIl4a86wsCht2B41dTffiF=s800';
const img30 = 'https://lh3.googleusercontent.com/d/1dLsPZGXmdVY4GELy59l_QPxAP0QDDiwx=s800';
const img31 = 'https://lh3.googleusercontent.com/d/1TCyAGP3wdMpXvDOcXuxKjNgkoktZ8fud=s800';
const img32 = 'https://lh3.googleusercontent.com/d/1UI_fbWxylhRc6IMvXSlF57UZJp7FvR-T=s800';
const img33 = 'https://lh3.googleusercontent.com/d/19wwk2eYgasIUlnMUHAB4q6iWZILwNu1V=s800';
const img34 = 'https://lh3.googleusercontent.com/d/1_4FfYodm3GilJhlEOaOZLKTvdWmiIcAL=s800';
const img35 = 'https://lh3.googleusercontent.com/d/1VSTSzvS8XXfDsmf5IWM-B-2JpO5skfYx=s800';
const img36 = 'https://lh3.googleusercontent.com/d/15SeWkQZeoIv-NzS142AWdqYsrlbaL7Z2=s800';
const img37 = 'https://lh3.googleusercontent.com/d/10Yp3_OVqQlXD4eGGuzU4SvHfcjXADGMA=s800';
const img38 = 'https://lh3.googleusercontent.com/d/1cpBeznZzOwQx_-Vx3Ki0uGTIhtilvYW1=s800';
const img39 = 'https://lh3.googleusercontent.com/d/1hEEzLN4mClZ-r_sGoTMl5szjxfztWAb5=s800';
const img40 = 'https://lh3.googleusercontent.com/d/1rvBmKa7a3ESDbPXg748MPw7p0qLZaMao=s800';
const img41 = 'https://lh3.googleusercontent.com/d/1BBMUv_L3YTw1RHFjlbuX4GRpSh0dnk9i=s800';
const img42 = 'https://lh3.googleusercontent.com/d/1FmqxiT3imYtOEYCnLjjenGLSoq190YRY=s800';
const img43 = 'https://lh3.googleusercontent.com/d/1lYdLfj96b-1QFp-5308jEy-UQI40csgl=s800';
const img44 = 'https://lh3.googleusercontent.com/d/1so-Tcvqlb_1Lw6y2VBJpULG3G8w3QgSI=s800';
const img45 = 'https://lh3.googleusercontent.com/d/1Lh3dpazK7-aySfCmrb9fECJTC7DIj1I8=s800';
const img46 = 'https://lh3.googleusercontent.com/d/1pAqlTh307NkS9oMqibyzn9UbZzv_ENfE=s800';
const img47 = 'https://lh3.googleusercontent.com/d/1mFbOV3qKYEOv9NHdHpWv-uIIkZpBZJLi=s800';
const img48 = 'https://lh3.googleusercontent.com/d/1a6WAB1JMdO7tjzouSQsSoIu_XRb7n2zG=s800';
const img49 = 'https://lh3.googleusercontent.com/d/1WaL9Wycmldm3IhsXwQ-iyh0uH2NcTp41=s800';
const img50 = 'https://lh3.googleusercontent.com/d/19V5tIAM3rb-v2dLZFQOJ5pNYtvyUBHbI=s800';

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