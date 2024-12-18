import create from 'zustand';

export const useCreditStore = create((set, get) => ({
  credits: 10,
  consecutiveCorrect: 0,
  hasUsedHint: false,

  addCredits: (amount) => {
    set((state) => ({ credits: state.credits + amount }));
  },

  deductCredits: (amount) => {
    set((state) => ({ credits: Math.max(0, state.credits - amount) }));
  },

  handleCorrectAnswer: () => {
    const state = get();
    let creditsToAdd = 5;
    
    if (!state.hasUsedHint) {
      set((state) => {
        const newConsecutive = state.consecutiveCorrect + 1;
        
        // Apply multipliers for consecutive correct answers
        if (newConsecutive === 2) {
          creditsToAdd = state.credits; // Double credits
        } else if (newConsecutive === 3) {
          creditsToAdd = state.credits * 2; // Triple credits
        }
        
        return {
          consecutiveCorrect: newConsecutive,
          credits: state.credits + creditsToAdd
        };
      });
    } else {
      // Reset consecutive counter if hint was used
      set({ consecutiveCorrect: 0, hasUsedHint: false });
    }
  },

  useHint: () => {
    const state = get();
    if (state.credits >= 2) {
      set((state) => ({
        credits: state.credits - 2,
        hasUsedHint: true,
        consecutiveCorrect: 0
      }));
      return true;
    }
    return false;
  },

  revealAnswer: () => {
    const state = get();
    if (state.credits >= 10) {
      set((state) => ({
        credits: state.credits - 10,
        hasUsedHint: true,
        consecutiveCorrect: 0
      }));
      return true;
    }
    return false;
  },

  reset: () => {
    set({
      credits: 10,
      consecutiveCorrect: 0,
      hasUsedHint: false
    });
  }
}));
