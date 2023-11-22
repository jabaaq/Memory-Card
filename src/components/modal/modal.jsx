import './modal.css';
import {motion} from 'framer-motion';
import gameWon from '../../assets/img/you-win-pikachu.gif';
import gameOver from '../../assets/img/game-over-pikachu.gif';

function Modal({handleRestartGame, success}) {
  return (
    <div className="modal">
      <div animate={{x: 100}} transition={{delay: 1}} className="modal-box">
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
      </div>
    </div>
  );
}

export {Modal};
