import React, { useState } from 'react'
import Board from './Board';
import { calculateWinner } from './helpers';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const styles = {
        width: '200px',
        margin: '20px auto'
    }

    const handleClick = (i) => {
        const boardCopy = [...board];

        //if user click on occupied or game is won
        if(winner || boardCopy[i]) return;

        //put an x or o in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button className='btn btn-dark' onClick={() => setBoard(Array(9).fill(null))}>
        Start Game
        </button>
    )

  return (
    <div>
        <h1 className='text-center mb-4'>Tic Tac Toe Game</h1>
        <div>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </div>
    </div>
  )
}

export default Game;