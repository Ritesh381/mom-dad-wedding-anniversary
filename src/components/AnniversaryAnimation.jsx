import React, { useEffect, useState } from "react";

function AnniversaryAnimation() {
  const [visible, setVisible] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    // Sequence the animations
    setTimeout(() => setVisible(true), 500);
    setTimeout(() => setShowWish(true), 1500);
    setTimeout(() => setShowHearts(true), 2500);
  }, []);

  // Generate random hearts
  const renderHearts = () => {
    if (!showHearts) return null;

    const hearts = [];
    const symbols = ["❤️", "💖", "💕", "💗"];

    for (let i = 0; i < 20; i++) {
      const size = Math.floor(Math.random() * 16) + 8;
      const duration = Math.floor(Math.random() * 8) + 5;
      const delay = Math.random() * 5;
      const leftPos = Math.random() * 100;
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];

      hearts.push(
        <div
          key={i}
          className="absolute text-pink-500 animate-float"
          style={{
            left: `${leftPos}%`,
            bottom: "-20px",
            fontSize: `${size}px`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            zIndex: 5,
          }}
        >
          {symbol}
        </div>
      );
    }
    return hearts;
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-pink-50 to-pink-100 py-6 px-2 overflow-hidden rounded-lg shadow-md">
      {/* Stacked layout for mobile */}
      <div className="flex flex-col items-center max-w-xs mx-auto">
        {/* Photos side by side in a smaller format */}
        <div className="flex justify-center w-full mb-4">
          {/* Mom's Photo */}
          <div
            className={`transition-all duration-1000 transform mr-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-pink-300 rounded-full blur-sm opacity-70"></div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white relative z-10">
                <img
                  src="src/Images/mama.jpg"
                  alt="Mom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Dad's Photo */}
          <div
            className={`transition-all duration-1000 transform ml-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-pink-300 rounded-full blur-sm opacity-70"></div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white relative z-10">
                <img
                  src="src/Images/dada.jpg"
                  alt="Dad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Anniversary Wish */}
        <div
          className={`text-center z-10 transition-all duration-1000 transform ${
            showWish ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-pink-700 mb-1 font-serif hindi-text">
            शादी की 30वीं सालगिरह मुबारक हो!
          </h2>
          <p className="text-base text-pink-600 italic hindi-text">
            प्यार और खुशियों के तीन दशक
          </p>
          <div className="mt-2 text-3xl animate-pulse">💖</div>
        </div>

        {/* Small decoration below */}
        <div className="mt-4 flex justify-center space-x-4">
          <span
            className={`text-2xl transition-opacity duration-700 ${
              showHearts ? "opacity-100" : "opacity-0"
            }`}
          >
            ✨
          </span>
          <span
            className={`text-2xl transition-opacity duration-700 ${
              showHearts ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            🎉
          </span>
          <span
            className={`text-2xl transition-opacity duration-700 ${
              showHearts ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            💐
          </span>
        </div>
      </div>

      {/* Floating Hearts */}
      {renderHearts()}

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-80px) rotate(20deg);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-150px) rotate(0deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-duration: 8s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

export default AnniversaryAnimation;
