import React from 'react';
import './../App.css';
import { useHistory, useLocation } from 'react-router-dom'; 

function SettingsButton(props) {
    // e.preventDefault();
    let history = useHistory();
    let location = useLocation();
  
  function goToPrevious() {
    history.goBack();
  }

  function goToSettings (){
    history.push("/settings");
  }

    if (location.pathname.endsWith("settings")) {
        return (
            <button
            type="submit"
            className="button-settings"
            onClick={goToPrevious}>
            [Back]
            </button>
        )
    }
    
    else {
        return (
            <button
            type="submit"
            className="button-settings"
            onClick={goToSettings}>
            [Settings]
            </button>
        )

    }
  }

  export default SettingsButton