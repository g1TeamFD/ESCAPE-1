import create from 'zustand';
import { scenes } from '../data/scenes';

export const useGameStore = create((set, get) => ({
  currentScene: 0,
  completed: false,

  checkAnswer: (answer) => {
    const { currentScene } = get();
    const scene = scenes[currentScene];
    
    if (answer.toLowerCase() === scene.answer.toLowerCase()) {
      if (currentScene === scenes.length - 1) {
        set({ completed: true });
      } else {
        set({ currentScene: currentScene + 1 });
      }
      return true;
    }
    return false;
  }
}));