import { useState, useCallback } from 'react';

// Custom hook to demonstrate optimized state management
export function useOptimizedState<T>(initialState: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(initialState);
  
  // Use useCallback to ensure the function reference remains stable
  const optimizedSetState = useCallback((value: T | ((prev: T) => T)) => {
    setState(prev => {
      // Handle both direct values and function updaters
      return typeof value === 'function'
        ? (value as ((prev: T) => T))(prev)
        : value;
    });
  }, []);
  
  return [state, optimizedSetState];
}