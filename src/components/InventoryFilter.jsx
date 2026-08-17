import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const filterOptions = ['All', 'Sedan', 'SUV', 'Coupe'];
const sortOptions = ['Latest', 'Price: Low to High', 'Price: High to Low'];

const InventoryFilter = ({ activeFilter, setActiveFilter, sortBy, setSortBy, viewMode, setViewMode, totalCount }) => {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div
      className="sticky z-40 flex flex-col gap-4 px-3 py-3"
      style={{
        top: '52px',
        background: 'rgba(13,13,26,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Top Row — Count + Sort*/}
      <div className="flex items-center justify-between">

        {/* Vehicle Count */}
        <p
          className="text-white font-black"
          style={{ fontSize: '13px' }}
        >
          <span className="text-motanis-muted font-medium uppercase" style={{ fontSize: '8px', fontWeight: '900', }}>
            [ Total Inventory Count_ ] =
          </span>

          {' '}{totalCount}

        </p>
      </div>

      {/* Filter Pills Row */}
      <div
        className="flex gap-2 pb-0.5"
        style={{ scrollbarWidth: 'none' }}
      >
        <style>{`.filter-row::-webkit-scrollbar { display: none; }`}</style>
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200"
            style={{
              background: activeFilter === option
                ? 'rgba(42,111,219,0.20)'
                : 'rgba(255,255,255,0.05)',
              border: activeFilter === option
                ? '1px solid rgba(42,111,219,0.4)'
                : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {activeFilter === option && (
              <div
                className="rounded-full"
                style={{ width: '4px', height: '4px', background: '#2A6FDB', flexShrink: 0 }}
              />
            )}
            <span
              className="uppercase tracking-widest font-black"
              style={{
                fontSize: '7px',
                color: activeFilter === option ? '#2A6FDB' : '#8A9BB0',
              }}
            >
              {option}
            </span>
          </button>
        ))}

                {/* Right — Sort + View Toggle */}

        <div className="flex items-center gap-2">

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(42,111,219,0.12)',
                border: '1px solid rgba(42,111,219,0.25)',
              }}
            >
              <span
                className="text-white font-bold uppercase tracking-widest"
                style={{ fontSize: '7px' }}
              >
                {sortBy}
              </span>
              <ChevronDown
                size={10}
                className="text-motanis-blue"
                style={{
                  transform: sortOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {sortOpen && (
              <div
                className="absolute right-0 top-8 flex flex-col rounded-xl overflow-hidden z-50"
                style={{
                  background: '#13131A',
                  border: '1px solid rgba(42,111,219,0.2)',
                  minWidth: '160px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                }}
              >
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => { setSortBy(option); setSortOpen(false); }}
                    className="text-left px-4 py-3"
                    style={{
                      fontSize: '9px',
                      color: sortBy === option ? '#2A6FDB' : '#8A9BB0',
                      fontWeight: sortBy === option ? '900' : '500',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryFilter;