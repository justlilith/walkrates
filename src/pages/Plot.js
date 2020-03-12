import React from 'react';
import './../App.css';

function Plot(props) {
  return (
    <div>
      <h1>Plot</h1>
      
      <h2>Start</h2>
      <input></input>
      <p>From where do you embark?</p>
      
      <h2>Destination</h2>
      <input></input>
      <p>Where will your journey take you?</p>
      
      <h2>Sustenance</h2>
      <input></input>
      <p>You gotta eat something. What is it?</p>
    </div>
  );
}

export default Plot;