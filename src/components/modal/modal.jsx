import './modal.css';
import {motion} from 'framer-motion';
import {GamePage} from '../pages/gamePage/gamePage';
import {useState} from 'react';

function Modal({handleRestartGame, success}) {
  return (
    <div className="modal">
      <div animate={{x: 100}} transition={{delay: 1}} className="modal-box">
        <h2>{success ? 'You Won!' : 'Game Over!'}</h2>
        <p>modal content</p>
        <button onClick={handleRestartGame}>restart</button>
      </div>
    </div>
  );
}

export {Modal};
