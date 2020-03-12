import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './../App.css';

function Navigation () {
    return (
        <div>
            <Link to="/">
                info
            </Link>

            <Link to="/plot">
                plot
            </Link>

            <Link to="/results">
                results
            </Link>
        </div>
)
}

export default Navigation;