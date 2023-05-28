import React from 'react';

const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid #000',
        position: 'absolute',
        top: '50px',
        right: '-30px'
    }}></div>
)

const BODY = (
    <div style={{
        width: '10px',
        height: '100px',
        background: '#000',
        position: 'absolute',
        top: '119px',
        right: '0px'
    }}></div>
)

const RIGHT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: '#000',
        position: 'absolute',
        top: '150px',
        right: '-100px',
        transform: 'rotate(-30deg)',
        transformOrigin: 'left bottom'
    }}></div>
)

const LEFT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: '#000',
        position: 'absolute',
        top: '150px',
        right: '10px',
        transform: 'rotate(30deg)',
        transformOrigin: 'right bottom'
    }}></div>
)

const RIGHT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: '#000',
        position: 'absolute',
        top: '208px',
        right: '-90px',
        transform: 'rotate(60deg)',
        transformOrigin: 'left bottom'
    }}></div>
)

const LEFT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: '#000',
        position: 'absolute',
        top: '208px',
        right: '0px',
        transform: 'rotate(-60deg)',
        transformOrigin: 'right bottom'
    }}></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    incorrectLetters: string[]
}

function HangmanDrawing({incorrectLetters}: HangmanDrawingProps) {
  return (
    <div style={{
        position: 'relative'
    }}>
        {BODY_PARTS.slice(0, incorrectLetters.length)}
        <div style={{
            height: '50px',
            width: '10px',
            position: 'absolute',
            top: '0',
            right: '0',
            background: '#000'
        }}></div>
        <div style={{
            height: '10px',
            width: '200px',
            background: 'black',
            marginLeft: '120px'
        }}></div>
        <div style={{
            height: '400px',
            width: '10px',
            background: '#000',
            marginLeft: '120px'
        }}></div>
        <div style={{
            height: '10px',
            width: '250px',
            background: '#000',
        }}></div>
    </div>
  );
}

export default HangmanDrawing;
