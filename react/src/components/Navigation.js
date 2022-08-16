import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/add-exercise">Add Exercise</Link>
        </nav>
    );
}

export default Navigation;