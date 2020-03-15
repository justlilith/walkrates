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
  
  const initMaps = {
    destination: "Las Vegas",
    start: "Austin",
  }

  const initParameters = {
    distanceMeters: 2345234,
    foodName: "avocados",
    foodNumber : 123432,
    calories: 300,
    height: "short",
    units: "metric",
  }
  
  const [appMapState, setMapState] = useState(initMaps);

  const [appParametersState, setParametersState] = useState(initParameters);
  
  const updateMapState = (arg1, arg2) => {
    let newprop = toString(arg1);

    setMapState( 
      {
        ...appMapState, [newprop = arg1] : arg2
      }
    )
  }
  
  const newMapState = (newState) => {
    setMapState(
      newState
      )
      console.log(appMapState);
    }

  const updateParametersState = (arg1, arg2) => {
    let newprop = toString(arg1);

    setParametersState( 
      {
        ...appParametersState, [newprop = arg1] : arg2
      }
    )
  }
  
  const newParametersState = (newState) => {
    setParametersState(
      newState
      )
      console.log(appParametersState);
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
              appMapState={appMapState}
              newMapState={newMapState}
              updateMapState={updateMapState}
              appParametersState={appParametersState}
              newParametersState={newParametersState}
              />
              <Navigation />
            </Route>
            
            <Route path="/results">
              <Results
              appMapState={appMapState}
              newMapState={newMapState}
              appParametersState={appParametersState}
              newParametersState={newParametersState}
              />
              <Navigation />
            </Route>
            
            <Route path="/settings">
              <Settings
              appParametersState={appParametersState}
              newParametersState={newParametersState}
              />
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