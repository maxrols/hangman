import React from 'react'

type HangmanWordProps = {
    guessedWord: string,
    guessedLetters: string[],
    reveal: boolean
}

const HangmanWord = ({guessedWord, guessedLetters, reveal}: HangmanWordProps) => {

  return (
    <div style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace'
    }}>
      {guessedWord.split("").map((letter, i) => (
        <span style={{
            borderBottom: '.1em solid #000'
        }} key={i}>
            <span style={{
                visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
                color: reveal && !guessedLetters.includes(letter) ? 'red' : 'black'
            }}>
                {letter}
            </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
