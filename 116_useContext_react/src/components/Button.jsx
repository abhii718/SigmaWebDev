// Button.jsx
import React, { useContext } from 'react';
import Components1 from './components1';
import { counterContext } from '../context/context';

const Button = () => {
    const value = useContext(counterContext);
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)}> <span><Components1 /></span>
                button</button>
        </div>
    );
}

export default Button;
