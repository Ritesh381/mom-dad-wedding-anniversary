import React, { useState, useRef } from "react";

// TimelineYear component to display a specific year with its images
const TimelineYear = ({ year, images = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const scrollRef = useRef(null);

  // Handle scroll for image navigation
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8 relative">
      {/* Year marker */}
      <div 
        className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 cursor-pointer shadow-md hover:bg-pink-700 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-bold">{year}</span>
      </div>
      
      {/* Connecting line */}
      <div className="w-1 h-8 bg-pink-300 mx-auto"></div>
      
      {/* Images container - only shown when expanded */}
      {expanded && images.length > 0 && (
        <div className="mt-4 bg-white rounded-lg shadow-md p-4 max-w-4xl mx-auto">
          <h3 className="text-center text-pink-700 font-medium mb-3">Memories from {year}</h3>
          
          {/* Image scrollable container */}
          <div className="relative">
            {/* Left scroll button */}
            {images.length > 3 && (
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-100 hover:bg-pink-200 rounded-full p-2 z-10"
              >
                <svg className="w-5 h-5 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            )}
            
            {/* Images */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto pb-2 scrollbar-hide snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-none w-48 mx-2 snap-center">
                  <div className="rounded-lg overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-colors">
                    <img 
                      src={`src/Images/${image}`} 
                      alt={`Memory from ${year}`}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right scroll button */}
            {images.length > 3 && (
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-100 hover:bg-pink-200 rounded-full p-2 z-10"
              >
                <svg className="w-5 h-5 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            )}
          </div>
          
          {/* Image counter */}
          <div className="text-center mt-2 text-sm text-gray-500">
            {images.length} {images.length === 1 ? 'photo' : 'photos'}
          </div>
        </div>
      )}
      
      {/* Show empty state message if expanded but no images */}
      {expanded && images.length === 0 && (
        <div className="mt-4 bg-white rounded-lg shadow-md p-4 max-w-4xl mx-auto text-center text-gray-500">
          No memories found for {year}
        </div>
      )}
    </div>
  );
};

// Main Timeline component
function AnniversaryTimeline({ imagesData }) {
  // Generate years from 1995 to 2025
  const years = Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 1995 + i);
  
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-pink-700 mb-8">
        30 Years of Beautiful Memories
      </h2>
      
      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line connecting all years */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200"></div>
        
        {/* Years */}
        <div className="relative z-10">
          {years.map(year => (
            <TimelineYear 
              key={year} 
              year={year} 
              images={imagesData[year] || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnniversaryTimeline;