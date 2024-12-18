import React from 'react';
import { motion } from 'framer-motion';

function TypewriterText({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Adjust duration as needed
    >
      {text}
    </motion.div>
  );
}

export default TypewriterText;
