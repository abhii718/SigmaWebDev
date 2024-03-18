import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount , multiply} from './redux/counter/counterSlice';


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        Currently count is {count}
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(6))}>amount+6</button>
        <button onClick={() => dispatch(multiply())}>multiply</button>
      </div>
    </>
  );
}

export default App;
