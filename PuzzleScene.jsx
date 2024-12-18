import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Timer from './Timer';
import TypewriterText from './TypewriterText';
import CreditDisplay from './CreditDisplay';
import HintButton from './HintButton';
import RevealAnswerButton from './RevealAnswerButton';
import { useCreditStore } from '../store/creditStore';

function PuzzleScene({ puzzle, onSolve, onTimeout }) {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const { 
    credits, 
    consecutiveCorrect,
    useHint, 
    revealAnswer,
    handleCorrectAnswer 
  } = useCreditStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === puzzle.answer.toLowerCase()) {
      handleCorrectAnswer();
      onSolve();
    } else {
      setError('That\'s not quite right. Try again!');
    }
  };

  return (
    <motion.div
      key={puzzle.id}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="w-full max-w-4xl mx-auto bg-blue-800/50 rounded-lg p-4 md:p-8 backdrop-blur-sm"
    >
      <CreditDisplay credits={credits} consecutiveCorrect={consecutiveCorrect} />
      
      <div className="mb-4">
        <Timer seconds={puzzle.timeLimit} onTimeUp={onTimeout} />
      </div>

      <div className="aspect-video relative rounded-lg overflow-hidden mb-8 shadow-2xl">
        <img 
          src={puzzle.image} 
          alt={puzzle.scene}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white shadow-lg">
          {puzzle.scene}
        </h2>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-blue-200">
        <TypewriterText text={puzzle.title} />
      </h2>
      
      <div className="mb-6 text-lg">
        <TypewriterText text={puzzle.description} delay={0.03} />
      </div>

      <div className="bg-blue-900/50 p-6 rounded-lg mb-8 shadow-lg">
        <h3 className="font-bold mb-4 text-xl text-blue-200">Puzzle:</h3>
        <div className="text-lg">
          <TypewriterText text={puzzle.puzzle} delay={0.02} />
        </div>
      </div>

      <HintButton 
        onUseHint={useHint}
        hint={puzzle.hint}
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer..."
          className="w-full p-6 h-40 rounded-lg bg-blue-950/50 border-2 border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 text-2xl resize-none"
        />
        
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-lg"
          >
            {error}
          </motion.p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-xl shadow-lg"
        >
          Submit Answer
        </button>
      </form>

      <RevealAnswerButton 
        onReveal={revealAnswer}
        answer={puzzle.answer}
      />
    </motion.div>
  );
}

export default PuzzleScene;