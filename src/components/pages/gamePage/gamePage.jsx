import gameLogo from '../../../assets/img/pokemon-logo.png';
import trophy from '../../../assets/img/trophy-logo.png';
import {motion} from 'framer-motion';
import {Card} from '../../card/card';
import {characters} from '../../../services/characters';
import {Modal} from '../../modal/modal';
import './gamePage.css';
import {useEffect, useState} from 'react';

function GamePage() {
  const [cards, setCards] = useState(characters);
  const [clickedCharacter, setClickedCharacter] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [addedChars, setAddedChars] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(parseInt(localStorage.getItem('bestScore')));

  useEffect(() => {
    if (score > bestScore || bestScore === 0) {
      setBestScore(score);
    }

    localStorage.setItem('bestScore', bestScore);
  }, [score]);

  function shuffleCards(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  let shuffledCards = shuffleCards(cards);

  const shuffleTheCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setScore(score + 1);
    setCards(shuffledCards);
  };

  const selectedChars = (id) => {
    setAddedChars((prevAddedChars) => {
      if (prevAddedChars.includes(id)) {
        setGameEnded(true);
        setGameWon(false);
        setScore(score);
      } else if (prevAddedChars.length + 1 === Object.entries(characters).length) {
        setGameWon(true);
        setGameEnded(true);
      }
      return [...prevAddedChars, id];
    });
  };

  const handleCLick = (id) => {
    if (!clickedCharacter) {
      cards.map((item) => {
        if (item.id === id) {
          item.clicked = true;
          setTimeout(() => {
            selectedChars(item.id);
            shuffleTheCards();
          }, 800);
        }
      });
    }
  };

  const eachCard = shuffledCards.map((item) => {
    return (
      <Card
        clickedChar={handleCLick}
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.src}
        clicked={item.clicked}
        isFlipped={isFlipped}
      />
    );
  });

  const handleRestartGame = () => {
    setRestartGame(true);
    setGameEnded(false);
    setGameWon(false);
    setAddedChars([]);
    setScore(0);
  };

  const gameOver = gameEnded ? <Modal success={false} handleRestartGame={handleRestartGame} /> : null;
  const succeedGame = gameWon ? <Modal success={true} handleRestartGame={handleRestartGame} /> : null;

  return (
    <>
      <div className="game-header">
        <div className="game-logo-left">
          <motion.img
            className="game-logo-left"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            src={gameLogo}
            style={{width: 250}}
            alt="Game logo"
          />
        </div>
        <div className="scores-container">
          <h4 className="just-score">Score: {score}</h4>
          <h4 className="best-score">
            Best Score: {bestScore}
            <img src={trophy} className="trophy-logo" width={'20px'} alt="Trophy" />
          </h4>
        </div>
      </div>
      <ul className="cards-grid">
        {eachCard}
        {gameOver}
        {succeedGame}
      </ul>
    </>
  );
}

export {GamePage};
