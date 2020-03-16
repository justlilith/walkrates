import React, { useState, useEffect } from 'react';
import './../App.css';
import fetchFoodData from './../components/fetchFoodData.js';

function Plot(props) {

  fetchFoodData(props).then( (e) => {
    let hello = e
    console.log("Hello " + hello)
  });

  const initMapState = props.appMapState
  const initParametersState = props.appParametersState

  const [pageMapState, setMapState] = useState(initMapState)
  const [pageParametersState, setParametersState] = useState(initParametersState)

  const updatePageMapState = (arg1, arg2,) => {
    setMapState( 
      {
        ...pageMapState, [arg1] : arg2
      },
      )
      // console.log(pageState);
    }

  const updatePageParametersState = (arg1, arg2,) => {
    setParametersState( 
      {
        ...pageParametersState, [arg1] : arg2
      },
      )
      // console.log(pageState);
    }

    useEffect( ()=> {
      props.newMapState(pageMapState)
      props.newParametersState(pageParametersState)
    }
    )

  
  //! Input Handlers
  const inputHandlerStart = (e) => {
    // e.preventDefault();
    updatePageMapState("start", e.target.value);
    // console.log(pageState)
  }
  const inputHandlerDestination = (e) => {
    e.preventDefault();
    updatePageMapState("destination", e.target.value);
  }
  const inputHandlerFood = (e) => {
    e.preventDefault();
    updatePageParametersState("food", e.target.value);
  }

  return (
    <div>
      <h1>Plot</h1>
      
      <h2>Start</h2>
      <form>
        <input
        type="text"
        name="title"
        placeholder={pageMapState.start}
        // onSubmit = {(e) => {e.preventDefault()}}
        onChange={inputHandlerStart}></input>
        <p className="subtle">From where do you embark?</p>
        
        <h2>Destination</h2>
        <input
        type="text"
        name="title"
        placeholder={pageMapState.destination}
        onSubmit = {(e) => {e.preventDefault()}}
        onChange={inputHandlerDestination}></input>
        <p className="subtle">Where will your journey take you?</p>
        
        <h2>Sustenance</h2>
        <input
        type="text"
        name="title"
        placeholder={pageParametersState.foodName}
        onSubmit = {(e) => {e.preventDefault()}}
        onChange={inputHandlerFood}></input>
        <p className="subtle">You gotta eat something. What is it?</p>
      </form>
      {/* <button
      onClick={props.setState.bind(this, "start", "Tucson")}>
        Save!
      </button> */}
    </div>
  );
}

export default Plot;