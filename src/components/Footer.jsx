import React from 'react';

function Footer() {
  return (
    <footer className="bg-pink-200 text-gray-800 p-4 mt-10">
      <div className="text-center text-xl mb-4 font-semibold">
        Made with 💗 by आपका छोटू
      </div>
      <div className="text-[15px] flex justify-between items-start flex-wrap text-sm">
        <div>
          <p className="font-medium mb-1">Wish them here:</p>
          <a href="/wishes" className="text-blue-600 hover:underline">Wishes</a>
        </div>
        <div className="text-right">
          <p className="font-medium mb-1">Quick Links:</p>
          <ul className="space-y-1">
            <li><a href="/home" className="text-blue-600 hover:underline">Home</a></li>
            <li><a href="/games" className="text-blue-600 hover:underline">Games</a></li>
            <li><a href="/contribution" className="text-blue-600 hover:underline">Contribution</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
