import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import dadImage from "../Images/dada.jpg"
import momImage from "../Images/mama.jpg"
import togetherImage from "../Images/maze-game-images/mom-dad-together.png" 

const MazeGame = () => {
  const mazeLayout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [momPosition] = useState({ x: 10, y: 10 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameWon, setGameWon] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [isDadClicked, setIsDadClicked] = useState(false);
  const [isMomClicked, setIsMomClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (position.x === momPosition.x && position.y === momPosition.y) {
      setGameWon(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [position, momPosition]);

  const moveDad = (direction) => {
    setIsDadClicked(false);
    if (gameWon) return;

    let newX = position.x;
    let newY = position.y;

    switch (direction) {
      case "up":
        newY -= 1;
        break;
      case "down":
        newY += 1;
        break;
      case "left":
        newX -= 1;
        break;
      case "right":
        newX += 1;
        break;
      default:
        break;
    }

    if (
      newX >= 0 &&
      newX < mazeLayout[0].length &&
      newY >= 0 &&
      newY < mazeLayout.length &&
      mazeLayout[newY][newX] === 0
    ) {
      setPosition({ x: newX, y: newY });
    }
  };

  const resetGame = () => {
    setPosition({ x: 1, y: 1 });
    setGameWon(false);
  };

  const renderMaze = () => {
    const cells = [];
    for (let y = 0; y < mazeLayout.length; y++) {
      for (let x = 0; x < mazeLayout[y].length; x++) {
        const isWall = mazeLayout[y][x] === 1;
        const isDad = position.x === x && position.y === y;
        const isMom = momPosition.x === x && momPosition.y === y && !isDad;

        cells.push(
          <div
            key={`${x}-${y}`}
            className={`
              aspect-square flex items-center justify-center
              ${isWall ? "bg-rose-200" : "bg-rose-50"}
              ${isDad ? "!bg-blue-100" : ""}
              ${isMom ? "!bg-pink-100" : ""}
              border border-rose-200
            `}
          >
            {isDad && (
              <img
                src={dadImage}
                alt="Dad"
                className={`object-cover transition-transform duration-300 ${
                  isDadClicked ? "scale-150" : ""
                }`}
                onClick={() => setIsDadClicked((prev) => !prev)}
              />
            )}

            {isMom && (
              <img
                src={momImage}
                alt="Mom"
                className={`object-cover transition-transform duration-300 ${
                  isMomClicked ? "scale-150" : ""
                }`}
                onClick={() => setIsMomClicked((prev) => !prev)}
              />
            )}
          </div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-rose-50 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-rose-800 mb-2">Help them meet!</h2>
      <p className="text-rose-600 mb-4">
        Navigate through the maze to reunite them
      </p>

      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      {gameWon ? (
        <>
          <div className="flex justify-center my-6">
            <div className="w-64 h-64 bg-pink-100 rounded-full flex items-center justify-center relative">
              <img
                src={togetherImage}
                alt="Mom and Dad Together"
                className="w-56 h-56 object-cover rounded-full border-4 border-rose-300 shadow-lg"
              />
            </div>
          </div>
          <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4">
            <h3 className="font-bold text-lg">Congratulations!</h3>
            <p>
              They found each other! Just like in real life, they always find
              their way to each other ❤️
            </p>
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-2 rounded-full bg-green-200 text-green-800 font-bold shadow-md hover:bg-green-300"
          >
            Play Again
          </button>
        </>
      ) : (
        <>
          <div
            className={`grid gap-0.5 bg-rose-200 p-0.5 rounded w-full max-w-xs mx-auto`}
            style={{
              gridTemplateColumns: `repeat(${mazeLayout[0].length}, minmax(0, 1fr))`,
            }}
          >
            {renderMaze()}
          </div>

          <div className="mt-6 flex flex-col items-center">
            <button
              onClick={() => moveDad("up")}
              className="w-16 h-16 rounded-full bg-rose-200 text-2xl font-bold shadow-md mb-2"
            >
              ↑
            </button>
            <div className="flex items-center">
              <button
                onClick={() => moveDad("left")}
                className="w-16 h-16 rounded-full bg-rose-200 text-2xl font-bold shadow-md mr-4"
              >
                ←
              </button>
              <button
                onClick={resetGame}
                className="w-20 h-12 rounded-full bg-green-200 text-sm font-bold shadow-md"
              >
                Reset
              </button>
              <button
                onClick={() => moveDad("right")}
                className="w-16 h-16 rounded-full bg-rose-200 text-2xl font-bold shadow-md ml-4"
              >
                →
              </button>
            </div>
            <button
              onClick={() => moveDad("down")}
              className="w-16 h-16 rounded-full bg-rose-200 text-2xl font-bold shadow-md mt-2"
            >
              ↓
            </button>
          </div>
          <p className="text-sm text-rose-500 mt-4">
            Tap the arrows to move Dad through the maze
          </p>
        </>
      )}
    </div>
  );
};

export default MazeGame;
