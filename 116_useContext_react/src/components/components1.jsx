// Components1.jsx
import React, { useContext } from 'react';
import { counterContext } from '../context/context';

const Components1 = () => {
    const counter = useContext(counterContext);
    return (
        <div>
          <p>hii</p>
            {counter}
        </div>
    );
}

export default Components1;
