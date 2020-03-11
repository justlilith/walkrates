import React from 'react';
import './../App.css';
import walkrateslogo from "./../assets/walkrates-logo.png"

function Header() {
  return (
    <header
      className="App-header"
    >
      <img src={walkrateslogo} />
    </header>
  );
}

export default Header;
