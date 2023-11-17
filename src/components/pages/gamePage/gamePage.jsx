import gameLogo from '../../../assets/img/pokemon-logo.png';
import trophy from '../../../assets/img/trophy-logo.png';
import {motion} from 'framer-motion';
import './gamePage.css';

function GamePage() {
  return (
    <>
      <motion.img
        className="game-logo-left"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        src={gameLogo}
        style={{width: 250}}
        alt="Game logo"
      />
      <div className="scores-container">
        <h4 className="just-score">Score: 4</h4>
        <h4 className="best-score">
          Score: 9 <img src={trophy} className="trophy-logo" width={'20px'} alt="Trophy" />
        </h4>
      </div>
    </>
  );
}

export {GamePage};
