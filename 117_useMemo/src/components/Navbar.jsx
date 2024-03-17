import React, { memo } from 'react';

// Functional component named Navbar
const Navbar = ({ adjective, getAdjective }) => {
    // Console log to show when the component is rendered and the current value of the 'adjective' prop
    console.log("Navbar is rendered");

    return (
        // JSX content of the Navbar component
        <div>
            {/* Display the current value of the 'adjective' prop */}
            I am a {adjective} Navbar
            {/* Button that triggers the 'getAdjective' function when clicked */}
            <button onClick={getAdjective}>{getAdjective()}</button>
        </div>
    );
};

// Memoizing the component to optimize performance (re-renders only if props change)
export default memo(Navbar);
