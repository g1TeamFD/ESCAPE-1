import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

function VictoryMessage({ message, uniqueCode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="prose prose-invert max-w-none"
    >
      <TypewriterText text={message} delay={0.03} />
      <div className="mt-6 p-4 bg-blue-900/50 rounded-lg">
        <h3 className="text-xl font-bold text-blue-200">How to Claim Your Gift</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Fill up the form below with your email address to receive the gift, along with instructions on how to best use it. The gift will be delivered to your email on Christmas Night: 
            <a 
              href="https://forms.gle/tcN6naG8qnDfNg9y5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline ml-1"
            >
              Claim Form
            </a>
          </li>
          <li>Use this unique code to validate your claim: 
            <span className="font-mono bg-blue-950 px-2 py-1 rounded ml-2">
              {uniqueCode}
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-6 p-4 bg-green-900/50 rounded-lg">
        <h3 className="text-xl font-bold text-green-200">Optional: Share Your Feedback</h3>
        <p>We'd love to hear your thoughts in Questions 3-4</p>
        <p>As a thank-you for your feedback, you will be added to the waiting list for the next chapter:</p>
        <div className="text-center mt-4">
          <h4 className="text-xl font-bold text-green-200">🎄 Santa's Workshop Mystery 🎄</h4>
          <p>Release Date: December 25th</p>
          <p>Mission: Help Santa find the missing presents</p>
        </div>
      </div>
    </motion.div>
  );
}

export default VictoryMessage;