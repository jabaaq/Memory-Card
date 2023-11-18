import {useState, useEffect} from 'react';
import './App.css';
import {LoadingPage} from '../pages/loadingPage/loadingPage';
import {StartPage} from '../pages/startPage/startPage';
import {GamePage} from '../pages/gamePage/gamePage';
import {Service} from '../../services/service';

function App(props) {
  const [isLoading, setLoadingIsOver] = useState(false);
  const [isStartClicked, setGameStart] = useState(false);

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
      console.log('started');
    }
  }, [isStartClicked]);

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
      <Service />
    </>
  );
}

export default App;
