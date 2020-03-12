import React from 'react';
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

  return (
    <div className="App">
      <Router>
        <header
        className="App-header"
        >
          <SettingsButton></SettingsButton>
        </header>
          <div
          className="content">

          <Switch>
            <Route exact path="/">
              <Info />
              <Navigation />
            </Route>

            <Route path="/plot">
              <Plot />
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