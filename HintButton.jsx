import React, { useState } from 'react';
import { motion } from 'framer-motion';

function HintButton({ onUseHint, hint }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    if (!showConfirm) {
      setShowConfirm(true);
      return;
    }

    if (onUseHint()) {
      setShowConfirm(false);
    }
  };

  return (
    <div className="mb-4">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-blue-300 hover:text-blue-200 transition-colors"
      >
        {showConfirm ? 'Are you sure? This will cost 2 credits' : 'Show Hint'}
      </motion.button>
      
      {hint && !showConfirm && (
        <div className="mt-2 text-blue-300 italic">
          Hint: {hint}
        </div>
      )}
    </div>
  );
}

export default HintButton;