import React from 'react';

function Footer() {
  return (
    <footer className="bg-pink-200 text-gray-800 px-6 py-6 mt-10 rounded-t-2xl shadow-inner">
      <div className="text-center text-2xl font-bold text-pink-800 mb-4">
        Made with 💗 by आपका छोटू
      </div>
  
      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:items-start text-sm sm:text-base">
        {/* Left Column */}
        <div>
          <p className="font-semibold mb-2 text-pink-700">Wish them here:</p>
          <a href="/wishes" className="text-black hover:underline transition-all duration-200">
            Wishes
          </a>
        </div>
  
        {/* Right Column */}
        <div className="text-left sm:text-right">
          <p className="font-semibold mb-2 text-pink-700">Quick Links:</p>
          <ul className="space-y-1">
            <li>
              <a href="/home" className="text-black hover:underline transition-all duration-200">Home</a>
            </li>
            <li>
              <a href="/games" className="text-black hover:underline transition-all duration-200">Games</a>
            </li>
            <li>
              <a href="/contribution" className="text-black hover:underline transition-all duration-200">Contribution</a>
            </li>
          </ul>
        </div>
      </div>
  
      {/* Date */}
      <p className="text-center mt-6 text-xs text-gray-600 italic"> 30 Years, One Journey, Infinite Memories – 26 April 2025</p>
    </footer>
  );
  
}

export default Footer;
