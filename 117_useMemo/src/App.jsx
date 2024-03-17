import { useCallback, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  const getAdjective = useCallback(() => {
    return "another" + count;
  }, [count] )

  return (
    <>
     <Navbar adjective={adjective}  getAdjective={getAdjective} />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
