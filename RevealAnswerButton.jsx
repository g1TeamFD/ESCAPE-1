import React, { useState } from 'react';
import { motion } from 'framer-motion';

function RevealAnswerButton({ onReveal, answer }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    if (!showConfirm) {
      setShowConfirm(true);
      return;
    }

    if (onReveal()) {
      setIsRevealed(true);
      setShowConfirm(false);
    }
  };

  return (
    <div className="mt-4">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-red-400 hover:text-red-300 transition-colors"
        disabled={isRevealed}
      >
        {showConfirm ? 'Are you sure? This will cost 10 credits!' : 'Reveal Answer'}
      </motion.button>
      
      {isRevealed && (
        <div className="mt-2 text-red-400">
          Answer: {answer}
        </div>
      )}
    </div>
  );
}

export default RevealAnswerButton;