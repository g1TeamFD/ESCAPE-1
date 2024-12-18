import React from 'react';
import { motion } from 'framer-motion';
import { gameIntro } from './gameContent';
import { sceneImages } from './images';
import TypewriterText from './TypewriterText';

function IntroScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-900 to-blue-950 text-white relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url(${sceneImages.introScene})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-200">
          <TypewriterText text={gameIntro.title} />
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-blue-300">
          <TypewriterText text={gameIntro.subtitle} delay={0.05} />
        </h2>
        
        <div className="mb-6">
          <div className="text-red-400 font-bold mb-2">
            <TypewriterText text={gameIntro.urgentMessage.date} delay={0.03} />
          </div>
          <div className="mb-2">
            <TypewriterText text={gameIntro.urgentMessage.greeting} delay={0.03} />
          </div>
          <p className="whitespace-pre-line">
            <TypewriterText text={gameIntro.urgentMessage.content} delay={0.02} />
          </p>
        </div>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
        >
          Begin Mission
        </motion.button>
      </div>
    </motion.div>
  );
}
