import React, { useState, useEffect } from 'react';
import { puzzles } from './puzzles.js';
import IntroScreen from './IntroScreen.jsx';
import PuzzleScene from './PuzzleScene.jsx';
import VictoryScreen from './VictoryScreen.jsx';
import { useCreditStore } from './creditStore.js';

function App() {
  const [gameState, setGameState] = useState('intro'); // intro, playing, victory
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const resetCredits = useCreditStore(state => state.reset);

  const handleStart = () => {
    setGameState('playing');
    setStartTime(Date.now());
    resetCredits();
  };

  const handlePuzzleSolved = () => {
    if (currentPuzzle === puzzles.length - 1) {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      setGameState('victory');
    } else {
      setCurrentPuzzle(currentPuzzle + 1);
    }
  };

  const handleTimeout = () => {
    setCurrentPuzzle(0);
    setStartTime(Date.now());
    resetCredits();
  };

  const handleRestart = () => {
    setGameState('intro');
    setCurrentPuzzle(0);
    setStartTime(null);
    setTimeElapsed(0);
    resetCredits();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {gameState === 'intro' && (
        <IntroScreen onStart={handleStart} />
      )}
      
      {gameState === 'playing' && (
        <div className="p-4">
          <PuzzleScene
            puzzle={puzzles[currentPuzzle]}
            onSolve={handlePuzzleSolved}
            onTimeout={handleTimeout}
          />
        </div>
      )}
      
      {gameState === 'victory' && (
        <VictoryScreen
          timeElapsed={timeElapsed}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;