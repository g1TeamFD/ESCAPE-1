import create from 'zustand';

export const useCreditStore = create((set, get) => ({
  credits: 10,
  consecutiveCorrect: 0,
  hasUsedHint: false,
  hintCost: 0, // Tracks the total cost of hints used before answering

  // Add credits (including after a correct answer)
  addCredits: (amount) => {
    set((state) => ({ credits: state.credits + amount }));
  },

  // Deduct credits (for hints or revealing answers)
  deductCredits: (amount) => {
    set((state) => ({ credits: Math.max(0, state.credits - amount) }));
  },

  // Handle Correct Answer
  handleCorrectAnswer: () => {
    const state = get();
    let creditsToAdd = 5; // Default credits for correct answer

    // Deduct hint cost from creditsToAdd
    creditsToAdd -= state.hintCost;

    set((state) => {
      const newConsecutive = state.hasUsedHint ? 0 : state.consecutiveCorrect + 1;

      // Apply multipliers for consecutive correct answers (only without hints)
      if (!state.hasUsedHint) {
        if (newConsecutive === 2) {
          creditsToAdd = state.credits; // Double current credits
        } else if (newConsecutive === 3) {
          creditsToAdd = state.credits * 2; // Triple current credits
        }
      }

      return {
        credits: state.credits + Math.max(0, creditsToAdd), // Ensure no negative credit gain
        consecutiveCorrect: newConsecutive,
        hasUsedHint: false,
        hintCost: 0 // Reset hint cost after correct answer
      };
    });
  },

  // Use Hint
  useHint: (cost) => {
    const state = get();
    if (state.credits >= cost) {
      set((state) => ({
        credits: state.credits - cost,
        hintCost: state.hintCost + cost, // Track cumulative hint cost
        hasUsedHint: true,
        consecutiveCorrect: 0
      }));
      return true;
    }
    return false;
  },

  // Reveal Answer
  revealAnswer: () => {
    const state = get();
    if (state.credits >= 10) {
      set((state) => ({
        credits: state.credits - 10,
        hasUsedHint: true,
        hintCost: state.hintCost + 10, // Add cost for reveal
        consecutiveCorrect: 0
      }));
      return true;
    }
    return false;
  },

  // Reset Game
  reset: () => {
    set({
      credits: 10,
      consecutiveCorrect: 0,
      hasUsedHint: false,
      hintCost: 0
    });
  }
}));
