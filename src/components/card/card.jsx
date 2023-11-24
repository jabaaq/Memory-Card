import './card.css';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import backgroundImg from '../../assets/img/pokemon-card-background.png';
import cardSound from '../../assets/sounds/cards-sound.mp3';

function Card({id, name, img, clicked, clickedChar, isFlipped}) {
  const audio = new Audio();
  audio.src = cardSound;
  return (
    <motion.li
      whileHover={{scale: 1}}
      whileTap={{scale: 3.9}}
      onClick={() => {
        clickedChar(id);
        audio.play();
      }}
      key={id}
      className="card">
      <Tilt
        perspective={500}
        glareEnable={true}
        flipHorizontally={isFlipped}
        transitionSpeed={700}
        scale={1.02}
        style={{height: 210, width: 150}}
        glareBorderRadius={'10px'}>
        <div className="card-content">
          <div className="tilt-card">
            <div className="character-name">{isFlipped ? '' : name}</div>
            <div className="character-img">
              {isFlipped ? (
                <img
                  src={backgroundImg}
                  loading="lazy"
                  className="background-image"
                  alt="card background"
                  width={151}
                  height={210}
                />
              ) : (
                <img src={img} alt="character" width={150} loading="lazy" />
              )}
            </div>
          </div>
        </div>
        <div className="cardBack"></div>
      </Tilt>
    </motion.li>
  );
}

export {Card};
