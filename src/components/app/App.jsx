import { useState } from "react";
import "./App.css";
import { LoadingPage } from "./pages/loadingPage/loadingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoadingPage />
    </>
  );
}

export default App;
