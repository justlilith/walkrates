import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
  } from 'react-router-dom';
import './App.css';
import Info from './pages/Info.js'
import Results from './pages/Results.js'
import Settings from './pages/Settings.js'
import Plot from './pages/Plot.js'
import SettingsButton from './components/SettingsButton.js'
import Navigation from './components/Navigation.js'


function App() {
  
  const init = {
    start: "Austin",
    destination: "Las Vegas",
    food: "avocado",
    foodNumber: 111
  }
  
  const [appState, setState] = useState(init);
  
  const updateState = (arg1, arg2) => {
    let newprop = toString(arg1);

    setState( 
      {
        ...appState, [newprop = arg1] : arg2
      }
    )
  }
  
  const setAppState = (newState) => {
    setState(
      newState
      )
      console.log(appState);
    }

  return (
    <div className="App">
      <Router>
        <header
        className="App-header"
        >
          <SettingsButton />
        </header>
          <div
          className="content">

          <Switch>
            <Route exact path="/">
              <Info />
              <Navigation />
            </Route>

            <Route path="/plot">
              <Plot
              appState={appState} 
              setAppState={setAppState}
              setState={updateState}/>
              <Navigation />
            </Route>
            
            <Route path="/results">
              <Results />
              <Navigation />
            </Route>
            
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;

// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(App), domContainer);