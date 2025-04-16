import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

// Placeholder images - replace with your actual images
const dadImage = 'src/Images/dada.jpg';
const momImage = 'src/Images/mama.jpg';

const MazeGame = () => {
  // Maze layout (1 = wall, 0 = path)
  const mazeLayout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1 ,0 ,1],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0 ,0 ,1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ,0 ,1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1 ,0 ,1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1 ,0 ,1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1 ,1 ,1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1 ,0 ,1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0 ,0 ,1],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 1 ,0 ,1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ,0 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1]
  ];

  const [position, setPosition] = useState({ x: 1, y: 1 }); // Dad's starting position
  const [momPosition] = useState({ x: 10, y: 10 }); // Mom's position
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check if dad reached mom
  useEffect(() => {
    if (position.x === momPosition.x && position.y === momPosition.y) {
      setGameWon(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Confetti lasts 5 seconds
    }
  }, [position, momPosition]);

  const moveDad = (direction) => {
    if (gameWon) return;

    let newPosition = { ...position };
    let newX = position.x;
    let newY = position.y;

    switch (direction) {
      case 'up':
        newY = position.y - 1;
        break;
      case 'down':
        newY = position.y + 1;
        break;
      case 'left':
        newX = position.x - 1;
        break;
      case 'right':
        newX = position.x + 1;
        break;
      default:
        break;
    }

    // Check if new position is valid (not a wall)
    if (newX >= 0 && newX < mazeLayout[0].length && 
        newY >= 0 && newY < mazeLayout.length && 
        mazeLayout[newY][newX] === 0) {
      newPosition.x = newX;
      newPosition.y = newY;
      setPosition(newPosition);
    }
  };

  const resetGame = () => {
    setPosition({ x: 1, y: 1 });
    setGameWon(false);
  };

  // Render maze grid
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
              ${isWall ? 'bg-rose-200' : 'bg-rose-50'}
              ${isDad ? '!bg-blue-100' : ''}
              ${isMom ? '!bg-pink-100' : ''}
              border border-rose-200
            `}
          >
            {isDad && <img src={dadImage} alt="Dad" className="w-3/4 h-3/4 object-cover" />}
            {isMom && <img src={momImage} alt="Mom" className="w-3/4 h-3/4 object-cover" />}
          </div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-rose-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-rose-800 mb-2">Help Dad Find Mom!</h2>
      <p className="text-center text-rose-600 mb-4">Navigate through the maze to reunite them</p>
      
      {showConfetti && (
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      {gameWon && (
        <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4">
          <h3 className="font-bold text-lg">Congratulations!</h3>
          <p>Dad found Mom! Just like in real life, they always find their way to each other ❤️</p>
        </div>
      )}
      
      <div 
        className={`
          grid gap-0.5 bg-rose-200 p-0.5 rounded
          w-full max-w-xs mx-auto
        `}
        style={{
          gridTemplateColumns: `repeat(${mazeLayout[0].length}, minmax(0, 1fr))`
        }}
      >
        {renderMaze()}
      </div>
      
      <div className="mt-6 flex flex-col items-center">
        {/* Up button */}
        <button 
          onClick={() => moveDad('up')} 
          className="
            w-16 h-16 rounded-full bg-rose-200 text-rose-800
            flex items-center justify-center text-2xl font-bold
            active:bg-rose-300 active:scale-95 transition-all
            shadow-md mb-2
          "
        >
          ↑
        </button>
        
        {/* Middle row */}
        <div className="flex items-center my-1">
          <button 
            onClick={() => moveDad('left')} 
            className="
              w-16 h-16 rounded-full bg-rose-200 text-rose-800
              flex items-center justify-center text-2xl font-bold
              active:bg-rose-300 active:scale-95 transition-all
              shadow-md mr-4
            "
          >
            ←
          </button>
          
          <button 
            onClick={resetGame} 
            className="
              w-20 h-12 rounded-full bg-green-200 text-green-800
              flex items-center justify-center text-sm font-bold
              active:bg-green-300 active:scale-95 transition-all
              shadow-md mx-2
            "
          >
            Reset
          </button>
          
          <button 
            onClick={() => moveDad('right')} 
            className="
              w-16 h-16 rounded-full bg-rose-200 text-rose-800
              flex items-center justify-center text-2xl font-bold
              active:bg-rose-300 active:scale-95 transition-all
              shadow-md ml-4
            "
          >
            →
          </button>
        </div>
        
        {/* Down button */}
        <button 
          onClick={() => moveDad('down')} 
          className="
            w-16 h-16 rounded-full bg-rose-200 text-rose-800
            flex items-center justify-center text-2xl font-bold
            active:bg-rose-300 active:scale-95 transition-all
            shadow-md mt-2
          "
        >
          ↓
        </button>
      </div>
      
      {/* Mobile touch controls hint */}
      <p className="text-center text-rose-500 text-sm mt-4">
        Tap the arrows to move Dad through the maze
      </p>
    </div>
  );
};

export default MazeGame;