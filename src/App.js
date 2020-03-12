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

function App() {



  return (
    <div className="App">
      <Router>
        <header
        className="App-header"
        >
          {/* <Link to="/settings">
            <button
            type="submit"
            className="button-settings"
            onClick="/">
              [Settings]
            </button>
          </Link> */}
          <SettingsButton></SettingsButton>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Info
              </Link>
            </li>
            <li>
            <Link to="/plot">
              Plot
            </Link>
            </li>
            <li>
              <Link to="/results">
                Results
              </Link>
            </li>
            <li>
              <Link to="/settings">
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Info></Info>
            <Link to="/plot">
              Plot
            </Link>
          </Route>
          <Route path="/plot">
            <Plot></Plot>
            <Link to="/results">
              Results
            </Link>
          </Route>
          <Route path="/results">
            <Results></Results>
            <Link to="/plot">
              Plot
            </Link>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
            <Link to="/settings">
              Settings
            </Link>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(App), domContainer);