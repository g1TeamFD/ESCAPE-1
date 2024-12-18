import React from 'react';
import { motion } from 'framer-motion';
import { gameIntro } from './gameContent';
import { sceneImages } from './images';

export default function IntroScreen({ onStart }) {
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
        {/* Title and Subtitle */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-200">
          {gameIntro.title}
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-blue-300">
          {gameIntro.subtitle}
        </h2>

        {/* Urgent Message */}
        <div className="mb-6">
          <div className="text-red-400 font-bold mb-2">
            {gameIntro.urgentMessage.date}
          </div>
          <div className="mb-2">
            {gameIntro.urgentMessage.greeting}
          </div>
          <p className="whitespace-pre-line">
            {gameIntro.urgentMessage.content}
          </p>
        </div>

        {/* Credit System Introduction */}
        <div className="bg-gray-700/70 p-4 rounded-lg mb-6 shadow-lg">
          <h3 className="text-lg font-bold mb-2 text-yellow-300">Credit System Introduction</h3>
          <ul className="list-disc ml-5 text-sm">
            <li><strong>Starting Credit:</strong> 10 credits</li>
            <li><strong>Cost to Reveal an Answer:</strong> 10 credits</li>
            <li><strong>Credits for Correct Answers:</strong>
              <ul className="list-disc ml-5">
                <li>Correct without hints = +5 credits</li>
                <li>2 consecutive correct answers without hints = Double current credits</li>
                <li>3 consecutive correct answers without hints = Triple current credits</li>
              </ul>
            </li>
            <li><strong>Hint Costs:</strong></li>
            <ul className="list-disc ml-5">
              <li>Hint 1: Costs 1 credit - Minor clue</li>
              <li>Hint 2: Costs 2 credits - Moderate clue</li>
              <li>Hint 3: Costs 3 credits - Significant clue</li>
            </ul>
          </ul>
          <p className="mt-2 text-yellow-200">
            Let’s see how much you can earn by the end of the Mission! :)
          </p>
        </div>

        {/* Begin Mission Button */}
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
