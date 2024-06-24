import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import {log} from './log.js';
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import {useState} from "react";

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  const handleChosenCount = (newCount) =>{
    setChosenCount(newCount)
  }


  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleChosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
