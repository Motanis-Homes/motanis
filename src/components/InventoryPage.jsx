import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import InventoryFilter from './InventoryFilter';
import InventoryCard from './InventoryCard';

const img1 = 'https://drive.google.com/thumbnail?id=1Gl-mN7cbf2WYbZrN7SnJRWguo7LG59iQ&sz=w800';
const img2 = 'https://drive.google.com/thumbnail?id=1qSnctzX97NxHA9SNriiethf--D7sawgQ&sz=w800';
const img3 = 'https://drive.google.com/thumbnail?id=1Pfbf7hAumH_w_Jf0slsI0AZk0qomisK3&sz=w800';
const img4 = 'https://drive.google.com/thumbnail?id=11Qd3FcPK-FCGBjZbbXzDsblVa88UOK0r&sz=w800';

const inventorySections = [
  {
    label: '[ New Arrivals_ ]',
    dealTag: 'New Arrival',
    cars: [
      { id: 1, name: 'BMW M4 Competition', year: 2023, color: 'Black Sapphire', mileage: '12,400 KM', transmission: 'Automatic', yoe: '2023', registration: 'Reg.', condition: 'Excellent Condition', price: '₦185,000,000', images: [img1, img2] },
      { id: 2, name: 'Porsche 911 Turbo S', year: 2022, color: 'Arctic Silver', mileage: '8,200 KM', transmission: 'Automatic', yoe: '2022', registration: 'Reg.', condition: 'Excellent Condition', price: '₦320,000,000', images: [img2, img3] },
      { id: 3, name: 'Mercedes-Benz AMG GT', year: 2023, color: 'Obsidian Black', mileage: '5,100 KM', transmission: 'Automatic', yoe: '2023', registration: 'Unreg.', condition: 'Excellent Condition', price: '₦275,000,000', images: [img3, img4] },
      { id: 4, name: 'Ferrari Roma Spider', year: 2023, color: 'Rosso Corsa', mileage: '3,800 KM', transmission: 'Automatic', yoe: '2023', registration: 'Unreg.', condition: 'Excellent Condition', price: '₦480,000,000', images: [img4, img1] },
      { id: 5, name: 'Aston Martin DB12', year: 2024, color: 'Iridescent Jade', mileage: '1,200 KM', transmission: 'Automatic', yoe: '2024', registration: 'Unreg.', condition: 'Excellent Condition', price: '₦390,000,000', images: [img1, img3] },
    ],
  },
  {
    label: '[ Hot Deals_ ]',
    dealTag: 'Hot Deal',
    cars: [
      { id: 6, name: 'Lamborghini Huracán', year: 2021, color: 'Giallo Orion', mileage: '24,600 KM', transmission: 'Automatic', yoe: '2021', registration: 'Reg.', condition: 'Excellent Condition', price: '₦410,000,000', images: [img2, img4] },
      { id: 7, name: 'McLaren 720S', year: 2020, color: 'Papaya Spark', mileage: '31,000 KM', transmission: 'Automatic', yoe: '2020', registration: 'Reg.', condition: 'Excellent Condition', price: '₦295,000,000', images: [img3, img1] },
      { id: 8, name: 'Bentley Continental GT', year: 2021, color: 'Beluga', mileage: '18,400 KM', transmission: 'Automatic', yoe: '2021', registration: 'Reg.', condition: 'Excellent Condition', price: '₦350,000,000', images: [img4, img2] },
      { id: 9, name: 'Range Rover Autobiography', year: 2022, color: 'Santorini Black', mileage: '22,100 KM', transmission: 'Automatic', yoe: '2022', registration: 'Reg.', condition: 'Fixes', price: '₦145,000,000', images: [img1, img4] },
      { id: 10, name: 'Rolls-Royce Ghost', year: 2020, color: 'Arctic White', mileage: '28,300 KM', transmission: 'Automatic', yoe: '2020', registration: 'Reg.', condition: 'Excellent Condition', price: '₦680,000,000', images: [img2, img3] },
    ],
  },
  {
    label: '[ Discount Sales_ ]',
    dealTag: 'Premium Pick',
    cars: [
      { id: 11, name: 'Toyota Land Cruiser', year: 2019, color: 'Pearl White', mileage: '48,200 KM', transmission: 'Automatic', yoe: '2019', registration: 'Reg.', condition: 'Excellent Condition', price: '₦85,000,000', images: [img3, img2] },
      { id: 12, name: 'Ford Mustang GT500', year: 2020, color: 'Iconic Red', mileage: '35,600 KM', transmission: 'Manual', yoe: '2020', registration: 'Reg.', condition: 'Excellent Condition', price: '₦78,000,000', images: [img4, img3] },
      { id: 13, name: 'Audi RS7 Sportback', year: 2021, color: 'Daytona Grey', mileage: '29,100 KM', transmission: 'Automatic', yoe: '2021', registration: 'Reg.', condition: 'Fixes', price: '₦92,000,000', images: [img1, img2] },
      { id: 14, name: 'BMW X7 M Competition', year: 2020, color: 'Mineral White', mileage: '41,800 KM', transmission: 'Automatic', yoe: '2020', registration: 'Reg.', condition: 'Excellent Condition', price: '₦110,000,000', images: [img2, img1] },
      { id: 15, name: 'Chevrolet Corvette C8', year: 2021, color: 'Torch Red', mileage: '19,400 KM', transmission: 'Automatic', yoe: '2021', registration: 'Unreg.', condition: 'Excellent Condition', price: '₦125,000,000', images: [img3, img4] },
    ],
  },
];

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
        className="flex items-center gap-2 px-4 mb-4"
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
        {/* End spacer */}
        <div style={{ width: '16px', flexShrink: 0 }} />
      </div>
    </div>
  );
};

const InventoryPage = ({ activePage, setActivePage }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const [viewMode, setViewMode] = useState('grid');

  const totalCount = inventorySections.reduce((acc, s) => acc + s.cars.length, 0);

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
        style={{ paddingTop: '16px', paddingBottom: '40px' }}
      >
        {/* Page Heading */}
        <div className="px-4 mb-6">
          <h1
            className="text-white font-black uppercase leading-none"
            style={{ fontSize: '1.8rem', letterSpacing: '-0.5px' }}
          >
            Full <span className="text-motanis-blue">Inventory</span>
          </h1>
          <p
            className="font-cormorant text-motanis-muted leading-relaxed mt-1"
            style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: '500' }}
          >
            Browse our complete collection — updated daily.
          </p>
        </div>

        {/* Sections */}
        {inventorySections.map((section) => (
          <SectionRow key={section.label} section={section} />
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;