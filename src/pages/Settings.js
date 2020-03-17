import React, { useState, useEffect } from 'react';
import './../App.css';

function Settings(props) {

  const init = props.appParametersState

  const [pageState, setState] = useState(init)

  const updatePageState = (arg1, arg2,) => {
    setState( 
      {
        ...pageState, [arg1] : arg2
      },
      )
      // console.log(pageState);
    }

    useEffect( ()=> {
      props.newParametersState(pageState)
    }
    )

  
  //! Input Handlers
  const inputHandlerUnits = (e) => {
    if (e.target.value === "metric") {
        updatePageState("units", "metric");
    } else {
        updatePageState("units", "imperial");
    }
  }

  const inputHandlerHeight = (e) => {
    if (e.target.value === "short") {
        updatePageState("height", "short");
    } else if (e.target.value === "average") {
        updatePageState("height", "kinda average");
    } else {
      updatePageState("height", "mega tall");
    }
  }

  return (
    <div>
      <h1>Settings</h1>
      <h2 className="align-left">Units</h2>
      
      <div className="settings-buttons-radio">
        <input
          type="radio"
          id="metric"
          value="metric"
          name="units"
          onChange={inputHandlerUnits}></input>
        <label for="metric">Metric</label>
      </div>
      
      <div className="settings-buttons-radio">
        <input
          type="radio"
          id="imperial"
          value="imperial"
          name="units"
          onSubmit = {(e) => {e.preventDefault()}}
          onChange={inputHandlerUnits}></input>
        <label for="imperial">Imperial</label>
      </div>
      
      <p className="subtle"><code>Metric</code> or <code>imperial</code>? You decide!</p>
      
      <h2 className="align-left">Height</h2>
      
      <div className="settings-buttons-radio">
        <input
          type="radio"
          id="short"
          value="short"
          name="height"
          onSubmit = {(e) => {e.preventDefault()}}
          onChange={inputHandlerHeight}></input>
        <label for="short">Short</label>
      </div>

      <div className="settings-buttons-radio">
        <input
          type="radio"
          id="average"
          value="average"
          name="height"
          onSubmit = {(e) => {e.preventDefault()}}
          onChange={inputHandlerHeight}></input>
        <label for="average">Average</label>
      </div>
      
      <div className="settings-buttons-radio">
        <input
          type="radio"
          id="tall"
          value="tall"
          name="height"
          onSubmit = {(e) => {e.preventDefault()}}
          onChange={inputHandlerHeight}></input>
        <label for="tall">Tall</label>
      </div>

      <p className="subtle">You might consider yourself <code>short</code>, <code>average</code>, or <code>tall</code>. I won't judge.</p>
    </div>
  );
}

export default Settings;