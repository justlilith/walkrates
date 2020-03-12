import React from 'react';
import './../App.css';

function Results(props) {
  return (
    <div>
      <h1>Results</h1>
      <p>&lt; Map &gt;</p>
      <p>
        You need to eat
        <span> <code>11111</code> </span>
        avocados to walk from 
        <span> <code>Austin, TX</code> </span>
        to
        <span> <code>Las Vegas, NV</code> </span>
        .
      </p>
      <p>Would you like to eat something else? Head back to <code>plot</code>!</p>
    </div>
  );
}

export default Results;