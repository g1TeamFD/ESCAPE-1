import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function TypewriterText({ text, delay = 0.05 }) {
  const letters = Array.from(text);
  
  return (
    <div className="inline">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay * index,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default TypewriterText;