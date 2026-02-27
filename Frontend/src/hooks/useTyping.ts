import { useState, useEffect, useCallback } from 'react';

export const useTyping = () => {
  const [userInput, setUserInput] = useState<string>('');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
    }

    if (e.key === 'Backspace') {
      setUserInput((prev) => prev.slice(0, -1));
      return;
    }

    if (e.key.length === 1) {
      setUserInput((prev) => prev + e.key);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return { userInput };
};