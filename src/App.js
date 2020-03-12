import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Info from './pages/Info.js'
import Results from './pages/Results.js'
import Settings from './pages/Settings.js'
import Plot from './pages/Plot.js'

const buttonSettingsHandler = (e) => {
  e.preventDefault();
}


function App() {
  return (
    <div className="App">
      <Router>
        <header
        className="App-header"
        >
          <Link to="/settings">
            <button
            type="submit"
            className="button-settings"
            onClick={buttonSettingsHandler}>
              [Settings]
            </button>
          </Link>
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
          </Route>
          <Route path="/plot">
            <Plot></Plot>
          </Route>
          <Route path="/results">
            <Results></Results>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(App), domContainer);