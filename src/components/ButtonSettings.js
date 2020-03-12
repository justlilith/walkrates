import React from 'react';
import './../App.css';

function SettingsButton(props) {
    // e.preventDefault();
  
    return (
        <button
        type="submit"
        className="button-settings"
        onClick={props.settingsHandler}>
        [Settings]
        </button>
    )
  }

  export default SettingsButton