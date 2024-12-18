import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from './Input';

function Scene({ scene, onSubmit }) {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit(answer)) {
      setAnswer('');
      setError('');
    } else {
      setError('That\'s not quite right. Try again!');
    }
  };

  return (
    <motion.div
      key={scene.id}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="bg-blue-800/50 rounded-lg p-6 backdrop-blur-sm"
    >
      <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
        <img 
          src={scene.image} 
          alt={scene.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">{scene.title}</h2>
      <p className="mb-6">{scene.description}</p>

      <div className="bg-blue-900/50 p-4 rounded-lg mb-6">
        <h3 className="font-bold mb-2">Puzzle:</h3>
        <p>{scene.puzzle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer..."
        />
        
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Submit Answer
        </button>
      </form>
    </motion.div>
  );
}

export default Scene;