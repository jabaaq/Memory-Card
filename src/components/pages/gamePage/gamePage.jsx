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

  function shuffleCards(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  let shuffledCards = shuffleCards(cards);

  const shuffleTheCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const selectedChars = (id) => {
    setAddedChars((prevAddedChars) => {
      if (prevAddedChars.includes(id)) {
        setGameEnded(true);
        console.log('Game over!');
      } else {
        return [...prevAddedChars, id];
      }
    });
  };

  useEffect(() => {
    console.log(addedChars);
  }, [addedChars]);

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

  console.log('shuffled characters -', cards);

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
    setAddedChars([]);
  };

  const gameOver = gameEnded ? <Modal handleRestartGame={handleRestartGame} /> : null;

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
          <h4 className="just-score">Score: 4</h4>
          <h4 className="best-score">
            Best Score: 9 <img src={trophy} className="trophy-logo" width={'20px'} alt="Trophy" />
          </h4>
        </div>
      </div>
      <ul className="cards-grid">
        {eachCard}
        {gameOver}
      </ul>
      <button onClick={shuffleTheCards}>Shuffle</button>
    </>
  );
}

export {GamePage};
