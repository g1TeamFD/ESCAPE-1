import React from 'react';
import { motion } from 'framer-motion';

function CreditDisplay({ credits, consecutiveCorrect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-900/50 p-4 rounded-lg mb-4"
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-blue-200">
          Credits: {credits}
        </div>
        {consecutiveCorrect > 0 && (
          <div className="text-green-400">
            {consecutiveCorrect} correct in a row!
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CreditDisplay;