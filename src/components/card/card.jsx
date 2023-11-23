import './card.css';
import Tilt from 'react-parallax-tilt';
// import {cardBackground} from '../../assets/img/pokemon-card-background.png';
import backgroundImg from '../../assets/img/pokemon-card-background.png';

function Card({id, name, img, clicked, clickedChar, isFlipped}) {
  return (
    <li
      onClick={() => {
        clickedChar(id);
      }}
      key={id}
      className="card">
      <Tilt
        perspective={500}
        glareEnable={true}
        flipHorizontally={isFlipped}
        scale={1.02}
        style={{height: 210, width: 150}}
        glareBorderRadius={'10px'}>
        <div className="card-content">
          <div className="tilt-card">
            <div className="character-name">{isFlipped ? '' : name}</div>
            <div className="character-img">
              {isFlipped ? (
                <img src={backgroundImg} className="background-image" alt="card background" width={151} height={210} />
              ) : (
                <img src={img} alt="character" width={150} />
              )}
            </div>
          </div>
        </div>
        <div className="cardBack"></div>
      </Tilt>
    </li>
  );
}

export {Card};
