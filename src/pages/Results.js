import React from 'react';
import './../App.css';

function Results(props) {
  return (
    <div>
      <h1>Results</h1>
      <p>&lt; Map &gt;</p>
      <p>
        You need to eat
        <span> <code>{props.appState.foodNumber}</code> </span>
        <span> <code>{props.appState.food}</code> </span>
        to walk from 
        <span> <code>{props.appState.start}</code> </span>
        to
        <span> <code>{props.appState.destination}</code> </span>
        .
      </p>
      <p>That's because you're a 
        <span> <code>{props.appState.height}</code> </span>
        person, and your stride reflects that. Sorry.
      </p>
      <p>Would you like to eat something else? Head back to <code>plot</code>!</p>
    </div>
  );
}

export default Results;