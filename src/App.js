import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FindCar from './components/FindCar';
import Inventory from './components/Inventory';
import InventoryPage from './components/InventoryPage';
import Testimonials from './components/Testimonials';
import Brands from './components/Brands';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  const [activePage, setActivePage] = useState('autos');

  return (
    <>
      {/* Desktop Block Screen */}
      <div className="hidden md:flex fixed inset-0 z-[9999] bg-motanis-black flex-col items-center justify-center text-center px-8">

        <img
          src="https://lh3.googleusercontent.com/d/1HG9YMpVUX9zGiUoFeR5fdEfHn4FtclAH"
          alt="Motanis Logo"
          style={{
            height: '80px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />

        {/* Previous Block Screen Text Logo: */}
        {/* <span className="text-5xl mb-6">📱</span>
        <h1 className="text-2xl font-black mb-3">
          <span className="text-white">MOT</span>
          <span className="text-motanis-blue">ANIS</span>
        </h1> */}
        <p className="text-motanis-muted text-sm leading-relaxed max-w-sm">
          This experience is designed exclusively for mobile phones and tablets.
          Please open this on your mobile device.
        </p>
        <div className="mt-8 w-16 h-1 bg-motanis-blue rounded-full"></div>
      </div>

      {/* Mobile App */}
      <div className="md:hidden bg-motanis-black min-h-screen text-white">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {activePage === 'autos' && (
          <>
          <Hero/>
          <About/>
          <FindCar/>
          <Inventory setActivePage={setActivePage} />
          <Testimonials/>
          <Brands/>
          <FAQ/>
          <Footer/>
          </>
        )}

        {activePage === 'inventory-page' && (
          <InventoryPage
            activePage={activePage}
            setActivePage={setActivePage}
          />
        )}

        {(activePage === 'homes' || activePage === 'blog') && (
          <ComingSoon
            page={activePage}
            onBack={() => setActivePage('autos')}
          />
        )}
      </div>
    </>
  );
}

export default App;