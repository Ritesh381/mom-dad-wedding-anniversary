import React, { useEffect, useState } from "react";
import image1 from "../Images/flipgame/image1.jpg";
import image2 from "../Images/flipgame/image2.jpg";
import image3 from "../Images/flipgame/image3.jpg";
import image4 from "../Images/flipgame/image4.jpg";
import image5 from "../Images/flipgame/image5.jpg";

const CardFlipGame = () => {
  const cardImages = [image1, image2, image3, image4, image5];
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [won, setWon] = useState(false);

  useEffect(() => {
    // Duplicate and shuffle cards
    const duplicated = [...cardImages, ...cardImages];
    const shuffled = duplicated
      .map((img) => ({ img, id: Math.random() }))
      .sort(() => 0.5 - Math.random());

    setCards(shuffled);
  }, []);

  useEffect(() => {
    if (matchedIndices.length >= 9) {
      setWon(true);
    }
  }, [matchedIndices]);

  const handleFlip = (index) => {
    if (flippedIndices.includes(index) || matchedIndices.includes(index))
      return;

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].img === cards[second].img) {
        setMatchedIndices((prev) => [...prev, first, second]);
      }

      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4 text-purple-700">
        Card Flip Game
      </h2>
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {cards.map((card, index) => {
          const isFlipped =
            flippedIndices.includes(index) || matchedIndices.includes(index);

          return (
            <div
              key={index}
              className="aspect-square rounded-lg border border-purple-300 overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleFlip(index)}
            >
              <div
                className={`w-full h-full transition-transform duration-300 ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {isFlipped ? (
                  <img
                    src={card.img}
                    alt="card"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-purple-200 flex items-center justify-center text-white text-xl font-bold">
                    ?
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {won && <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4 text-center"><p>Yayy!!! You Won</p></div>}
    </div>
  );
};

export default CardFlipGame;
