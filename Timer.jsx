import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Timer({ seconds, onTimeUp }) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timer);
        onTimeUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onTimeUp]);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: seconds <= 10 ? [1, 1.1, 1] : 1 }}
      className="text-xl font-bold text-red-400"
    >
      Time Remaining: {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
    </motion.div>
  );
}

export default Timer;