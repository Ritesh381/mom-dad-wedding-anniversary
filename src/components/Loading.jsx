import React from 'react';
import { Heart } from 'lucide-react';

const heartColors = [
  'text-pink-200',
  'text-pink-300',
  'text-pink-400',
  'text-pink-500',
  'text-pink-600',
];

function Loading() {
  return (
    <div className="h-screen w-screen bg-pink-100 flex flex-col items-center justify-center">
      <div className="flex space-x-4">
        {heartColors.map((color, index) => (
          <Heart
            key={index}
            className={`w-10 h-10 ${color} heart-bounce`}
            style={{ animationDelay: `${index * 0.2}s` }}
            fill="currentColor"
          />
        ))}
      </div>
    <h1 className="text-pink-800 mt-5">Loading ....</h1>

      <style>{`
        @layer utilities {
          .heart-bounce {
            animation: heartBounce 1s ease-in-out infinite;
          }

          @keyframes heartBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;
