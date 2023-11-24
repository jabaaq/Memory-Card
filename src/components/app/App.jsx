import {useState, useEffect} from 'react';
import './App.css';
import {LoadingPage} from '../pages/loadingPage/loadingPage';
import {StartPage} from '../pages/startPage/startPage';
import {GamePage} from '../pages/gamePage/gamePage';
import music from '../../assets/sounds/background-music.mp3';

function App() {
  const [isLoading, setLoadingIsOver] = useState(false);
  const [isStartClicked, setGameStart] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingIsOver(true);
    }, 3000);
  }, []);

  const handleStart = () => {
    setGameStart(true);
  };

  useEffect(() => {
    if (isLoading) {
      setGameStart(true);
    }
  }, [isStartClicked]);

  let audio = new Audio(music);

  useEffect(() => {
    playMusic ? audio.play() : audio.pause();
  }, [playMusic]);

  return (
    <>
      {isLoading && !isStartClicked ? (
        <StartPage
          clickToStart={() => {
            handleStart();
            setGameStart(true);
          }}
        />
      ) : isStartClicked ? (
        <GamePage />
      ) : (
        <LoadingPage />
      )}
      {/* <button
        onClick={() => {
          setPlayMusic(!playMusic);
        }}>
        Sound
      </button> */}
    </>
  );
}

export default App;
