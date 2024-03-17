// App.jsx
import React, { useState, createContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';

// Create a context
export const counterContext = createContext();

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* Provide the counterContext value */}
            <counterContext.Provider value={count}>
                <Navbar />
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </counterContext.Provider>
        </>
    );
}

export default App;
