import React, { useState, useEffect } from 'react';
import './../App.css';

function Plot(props) {

  const init = props.appState

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
      props.setAppState(pageState)
    }
    )

  
  //! Input Handlers
  const inputHandlerStart = (e) => {
    // e.preventDefault();
    updatePageState("start", e.target.value);
    // console.log(pageState)
  }
  const inputHandlerDestination = (e) => {
    e.preventDefault();
    updatePageState("destination", e.target.value);
  }
  const inputHandlerFood = (e) => {
    e.preventDefault();
    updatePageState("food", e.target.value);
  }

  return (
    <div>
      <h1>Plot</h1>
      
      <h2>Start</h2>
      <form>
        <input
        type="text"
        name="title"
        placeholder={pageState.start}
        // onSubmit = {(e) => {e.preventDefault()}}
        onChange={inputHandlerStart}></input>
        <p>From where do you embark?</p>
        
        <h2>Destination</h2>
        <input
        type="text"
        name="title"
        placeholder={pageState.destination}
        onSubmit = {(e) => {e.preventDefault()}}
        onChange={inputHandlerDestination}></input>
        <p>Where will your journey take you?</p>
        
        <h2>Sustenance</h2>
        <input
        type="text"
        name="title"
        placeholder={pageState.food}
        onSubmit = {(e) => {e.preventDefault()}}
        onChange={inputHandlerFood}></input>
        <p>You gotta eat something. What is it?</p>
      </form>
      {/* <button
      onClick={props.setState.bind(this, "start", "Tucson")}>
        Save!
      </button> */}
    </div>
  );
}

export default Plot;