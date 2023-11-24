import './modal.css';
import {motion} from 'framer-motion';
import gameWon from '../../assets/img/you-win-pikachu.gif';
import gameOver from '../../assets/img/game-over-pikachu.gif';
import menuSound from '../../assets/sounds/Game-Menu Select-Sound-Effect.mp3';
import {useEffect} from 'react';

function Modal({handleRestartGame, success}) {
  let audio = new Audio();
  audio.src = menuSound;
  useEffect(() => {
    audio.play();
  }, [success, handleRestartGame]);
  return (
    <div className="modal">
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="modal-box">
        <h2 className="modal-text">{success ? 'You Won!' : 'Game Over!'}</h2>
        {success ? (
          <img className="result-image" src={gameWon} width={150} height={200} alt="You won" />
        ) : (
          <img className="result-image" src={gameOver} width={150} height={200} alt="Game Over" />
        )}
        <div className="buttons">
          <button className="button" onClick={handleRestartGame}>
            Restart
          </button>

          <a href="https://github.com/jabaaq/Memory-Card" target="_blank">
            <button className="button">Github Repo</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export {Modal};
