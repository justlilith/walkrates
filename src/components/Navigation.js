import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

function Navigation () {
  return (
    <nav>
      <Link
      className="navLink"
      to="/">
        info
      </Link>

      <Link
      className="navLink"
      to="/plot">
        plot
      </Link>

      <Link
      className="navLink"
      to="/results">
        results
      </Link>
    </nav>
  )
}

export default Navigation;