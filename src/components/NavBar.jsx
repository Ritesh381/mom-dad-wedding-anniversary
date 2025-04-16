import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="relative overflow-hidden bg-pink-100 shadow-md w-full py-4 px-6">
      {/* Blurred background text */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-30">
        <span className="text-pink-700 font-serif text-4xl font-bold whitespace-nowrap animate-pulse">
          30 Years Together
        </span>
      </div>

      {/* Simple centered navigation */}
      <div className="relative z-10">
        <ul className="flex justify-center space-x-6 md:space-x-16">
          <li>
            <Link
              to="/"
              className="text-pink-700 hover:text-pink-900 text-lg font-medium py-2 px-4 hover:bg-pink-200 rounded-lg transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/games"
              className="text-pink-700 hover:text-pink-900 text-lg font-medium py-2 px-4 hover:bg-pink-200 rounded-lg transition-colors duration-300"
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              to="/wishes"
              className="text-pink-700 hover:text-pink-900 text-lg font-medium py-2 px-4 hover:bg-pink-200 rounded-lg transition-colors duration-300"
            >
              Wishes
            </Link>
          </li>
        </ul>
      </div>

      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-500 to-pink-200"></div>
    </nav>
  );
}

export default NavBar;
