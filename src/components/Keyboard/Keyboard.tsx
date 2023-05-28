import React from 'react'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    clickHandler: (key: string) => void,
    incorrectLetters: string[],
    correctLetters: string[],
    disabled: boolean
}


const Keyboard = ({clickHandler, incorrectLetters, correctLetters, disabled}: KeyboardProps) => {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr)',
        gap: '.5rem',
        alignSelf: 'stretch'
    }}>
      {KEYS.map(key => {
        return (
            <button style={{
                aspectRatio: '1 / 1',
                textTransform: 'uppercase',
                border: incorrectLetters.includes(key) ? '2px solid red' : correctLetters.includes(key) ? '2px solid green' : '2px solid rgba(0,0,0,.2',
                background: 'none',
                cursor: 'pointer',
            }}
            onClick={() => clickHandler(key)}
            key={key}
            disabled={correctLetters.includes(key) || incorrectLetters.includes(key) || disabled}
            >{key}</button>
        )
      })}
    </div>
  )
}

export default Keyboard
