import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Info from './pages/Info.js'
import Results from './pages/Results.js'
import Settings from './pages/Settings.js'

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
          <Link>
            <button
            type="submit"
            className="button-settings"
            onClick={buttonSettingsHandler}>
              [Settings]
            </button>
          </Link>
        </header>
        <nav>
          <li>
            <ul>Info</ul>
            <ul>Plot</ul>
            <ul>Settings</ul>
          </li>
        </nav>



      </Router>
    </div>
  );
}

export default App;

// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(App), domContainer);