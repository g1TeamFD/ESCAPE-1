import React from 'react';
import { motion } from 'framer-motion';
import { sceneImages } from '../assets/images';

function EndScreen({ onRestart }) {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Game link copied to clipboard!'))
      .catch(() => alert('Failed to copy link'));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 md:p-8 relative"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sceneImages.endScene})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10 max-w-2xl mx-auto bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm text-white">
        <div className="space-y-6">
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg mb-4"
          >
            Share Game
          </motion.button>

          <motion.button
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
          >
            Play Again
          </motion.button>

          <p className="text-center text-sm italic mt-4">
            Maybe you don't know! That each time you replay the game, questions will keep changing to make your experience fresh and challenging. So...play more :)
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default EndScreen;