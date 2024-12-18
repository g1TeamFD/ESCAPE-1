import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import VictoryMessage from './VictoryMessage';
import { generateUniqueCode } from '../utils/codeGenerator';

function VictoryScreen({ timeElapsed, onRestart }) {
  const [uniqueCode] = useState(generateUniqueCode());
  
  const victoryMessage = `Congratulations, Agent! You've successfully reactivated the Christmas Magic Synthesis!
The laboratory hums with magical energy as sparkling lights fill the air.

You got a personal message from Dr. Frost:
"Thank you, Agent, for finding me and reminding me of the true spirit of Christmas. As a small token of appreciation, I can hack into Santa's bag and send you an extra gift. The choice is limited this time, but think carefully about what you want for next year."`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-green-900 to-blue-950 text-white"
    >
      <div className="max-w-2xl mx-auto bg-green-800/50 p-6 rounded-lg backdrop-blur-sm">
        <div className="text-xl mb-6">
          Time Completed: {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}
        </div>

        <VictoryMessage 
          message={victoryMessage}
          uniqueCode={uniqueCode}
        />

        <button
          onClick={onRestart}
          className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
        >
          Play Again
        </button>
      </div>
    </motion.div>
  );
}

export default VictoryScreen;