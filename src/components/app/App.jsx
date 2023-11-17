import { useState, useEffect } from "react";
import "./App.css";
import { LoadingPage } from "./pages/loadingPage/loadingPage";
import { StartPage } from "./pages/startPage/startPage";

function App() {
  const [isLoading, setLoadingIsOver] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingIsOver(true);
    }, 3000);
  }, []);

  return <>{isLoading ? <StartPage /> : <LoadingPage />}</>;
}

export default App;
