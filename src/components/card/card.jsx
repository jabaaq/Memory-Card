import './card.css';
import Tilt from 'react-parallax-tilt';

function Card() {
  return (
    <Tilt perspective={500} glareEnable={true} scale={1.02} style={{height: 220, width: 170}}>
      <div className="tilt-card">👽JAba</div>
    </Tilt>
  );
}

export {Card};
