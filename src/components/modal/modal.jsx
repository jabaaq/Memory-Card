import './modal.css';
import {motion} from 'framer-motion';
import {GamePage} from '../pages/gamePage/gamePage';
import {useState} from 'react';

function Modal({handleRestartGame}) {
  const restartGame = () => {
    // Additional logic for modal cleanup if needed
    handleRestartGame();
  };

  return (
    <div className="modal">
      <div animate={{x: 100}} transition={{delay: 1}} className="modal-box">
        <h2>Modal Title</h2>
        <p>modal content</p>
        <button onClick={restartGame}>restart</button>
      </div>
    </div>
  );
}

export {Modal};
