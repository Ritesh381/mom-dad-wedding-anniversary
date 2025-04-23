import React, { useState, useEffect } from "react";
import { Gift, Heart, Stars, PartyPopper, Sparkles } from "lucide-react";

function GiftBox() {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpened) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        window.location.href = "/home";
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  const handleClick = () => {
    setIsOpened(true);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="relative flex flex-col items-center w-full px-6">
        {/* Gift Box */}
        <div
          className={`relative cursor-pointer transition-all duration-700 ${
            isOpened ? "scale-75 opacity-80" : "scale-100 hover:scale-110"
          }`}
          onClick={handleClick}
        >
          <div className="relative">
            <Gift
              size={150}
              className={`text-purple-600 filter drop-shadow-lg transition-all duration-700 ${
                isOpened ? "transform -translate-y-24 rotate-12" : ""
              }`}
            />

            {/* Decorative elements */}
            <div
              className={`absolute -top-4 -right-4 transition-all duration-700 ${
                isOpened ? "animate-spin" : ""
              }`}
            >
              <Stars size={40} className="text-yellow-500" />
            </div>
            <div
              className={`absolute -bottom-4 -left-4 transition-all duration-700 ${
                isOpened ? "animate-bounce" : ""
              }`}
            >
              <Heart size={40} className="text-red-500" />
            </div>
          </div>
        </div>

        {/* Message Popup */}
        {isOpened && (
          <div className="absolute transform -translate-y-40 mx-auto p-8 bg-white rounded-2xl shadow-2xl text-center z-50 animate-message-popup w-full max-w-lg">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-yellow-500 animate-pulse mr-2" />
              <PartyPopper className="text-pink-500 animate-pulse" />
            </div>
            <p className="text-lg font-bold text-purple-800 mb-2">
              शादी की <span className="text-pink-600">30वीं सालगिरह</span> की
              हार्दिक शुभकामनाएं
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              श्री ईश्वर चंद्र प्रजापति
            </p>
            <p className="text-xl font-bold text-purple-600 mb-1">और</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              श्रीमती उषा देवी जी
            </p>
          </div>
        )}

        {/* Confetti Effect */}
        {showConfetti && (
          <>
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${Math.random() * 15 + 5}px`,
                  height: `${Math.random() * 15 + 5}px`,
                  backgroundColor: [
                    "#FF595E",
                    "#FFCA3A",
                    "#8AC926",
                    "#1982C4",
                    "#6A4C93",
                    "#FF85EA",
                    "#FFC75F",
                  ][i % 7],
                  borderRadius: Math.random() > 0.5 ? "50%" : "3px",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `confetti-${i % 7} ${
                    Math.random() * 3 + 2
                  }s ease-in-out forwards`,
                  animationDelay: `${Math.random() * 2}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  zIndex: 40,
                }}
              />
            ))}
          </>
        )}

        {/* Hearts flying out when opened */}
        {isOpened && (
          <>
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`heart-${i}`}
                className="absolute z-30"
                style={{
                  animation: `fly-heart-${
                    i % 6
                  } 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) forwards`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  left: "50%",
                  top: "50%",
                }}
              >
                <Heart
                  size={24 + Math.random() * 20}
                  fill="#FF85EA"
                  stroke="#FF85EA"
                />
              </div>
            ))}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes confetti-0 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translate3d(-100px, 100vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes confetti-1 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translate3d(100px, 100vh, 0) rotate(-360deg);
            opacity: 0;
          }
        }
        @keyframes confetti-2 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translate3d(-150px, 100vh, 0) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes confetti-3 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translate3d(150px, 100vh, 0) rotate(-720deg);
            opacity: 0;
          }
        }
        @keyframes confetti-4 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translate3d(-50px, 100vh, 0) rotate(1080deg);
            opacity: 0;
          }
        }
        @keyframes confetti-5 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translate3d(50px, 100vh, 0) rotate(-1080deg);
            opacity: 0;
          }
        }
        @keyframes confetti-6 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translate3d(0, 100vh, 0) rotate(1440deg);
            opacity: 0;
          }
        }
        @keyframes message-popup {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-50px) scale(1.05);
          }
          70% {
            transform: translateY(-40px) scale(1);
          }
          100% {
            transform: translateY(-40px) scale(1);
          }
        }
        @keyframes fly-heart-0 {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-120px, -100px) scale(1);
            opacity: 0;
          }
        }
        @keyframes fly-heart-1 {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(120px, -100px) scale(1);
            opacity: 0;
          }
        }
        @keyframes fly-heart-2 {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-150px, -30px) scale(1);
            opacity: 0;
          }
        }
        @keyframes fly-heart-3 {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(150px, -30px) scale(1);
            opacity: 0;
          }
        }
        @keyframes fly-heart-4 {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-100px, -150px) scale(1);
            opacity: 0;
          }
        }
        @keyframes fly-heart-5 {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(100px, -150px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default GiftBox;
