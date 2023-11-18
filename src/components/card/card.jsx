import './card.css';
import Tilt from 'react-parallax-tilt';
import pikachu from '../../assets/img/charactersImg/pikachu.png';

function Card() {
  return (
    <Tilt perspective={500} glareEnable={true} scale={1.02} style={{height: 220, width: 170}}>
      <div className="tilt-card">
        <div className="character-img">Pikachu</div>
        <div className="character-name">
          <img src={pikachu} alt="Pikachu" width={150} />
        </div>
      </div>
    </Tilt>
  );
}

export {Card};
