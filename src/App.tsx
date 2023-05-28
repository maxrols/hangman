import React, {useState, useEffect} from 'react';
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing';
import HangmanWord from './components/HangmanWord/HangmanWord';
import Keyboard from './components/Keyboard/Keyboard';
import { getWord } from './utils/getWord';

const App = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  const correctLetters = guessedLetters.filter(letter => wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length > 5;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = (key: string) => {
    if (guessedLetters.includes(key) || isLoser || isWinner) return;
    setGuessedLetters(prev => [...prev, key]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/[a-z]/i)) return;

      e.preventDefault();
      addGuessedLetter(key);

    }
    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [])

  return (
    <div style={{
      maxWidth: "800px",
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      <p style={{
        fontSize: '2rem',
        textAlign: 'center',
      }}>
        {isLoser && 'Nice Try. Refresh the page to play again!'}
        {isWinner && 'You Won. Refresh the page to play again!'}
      </p>
      <HangmanDrawing
        incorrectLetters={incorrectLetters}
      />
      <HangmanWord 
        guessedWord={wordToGuess} 
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <Keyboard 
        clickHandler={addGuessedLetter} 
        incorrectLetters={incorrectLetters}
        correctLetters={correctLetters}
        disabled={isLoser || isWinner}
      />
    </div>
  );
}

export default App;
