import './card.css';
import Tilt from 'react-parallax-tilt';

function Card({id, name, img, clicked, clickedChar}) {
  // console.log(id);
  return (
    <li onClick={() => clickedChar(id)} key={id}>
      <Tilt perspective={500} glareEnable={true} scale={1.02} style={{height: 220, width: 150}}>
        <div className="tilt-card">
          <div className="character-name">{name}</div>
          <div className="character-img">
            <img src={img} alt={img} width={150} />
          </div>
        </div>
      </Tilt>
    </li>
  );
}

export {Card};
