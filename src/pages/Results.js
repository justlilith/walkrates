import React, { useEffect } from 'react';
import './../App.css';

function Results(props) {
  
  let props2 = props.appState;

  window.initMap = initMap;
  
  function initMap(props2) {
    const google = window.google;

    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
      });
      directionsRenderer.setMap(map);
      
      let onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
      };

      onChangeHandler();
      // document.getElementById('start').addEventListener('change', onChangeHandler);
      // document.getElementById('end').addEventListener('change', onChangeHandler);
    }
    
    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      directionsService.route(
        {
          origin: props.appState.start,
          destination: props.appState.destination,
          travelMode: 'WALKING'
        },
        function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

  useEffect( () => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1LB91ClhUtlb1467yvx-Uf947k6X2bYs&callback=initMap";
    googleMapScript.async = true;
    googleMapScript.id = "hello";
    googleMapScript.defer = true;
    const pageBody = document.getElementsByTagName("body")[0];
    document.getElementById("hello") ? swapScript(googleMapScript) : pageBody.append(googleMapScript);
    console.log("loaded");
    
      function swapScript (newscript) {
        document.getElementById("hello").replaceWith(newscript);
        console.log("okay")
      }
  })
    
        return (
    <div>
      <h1>Results</h1>
      <p>&lt; Map &gt;</p>
      <div id="map"></div>
      <p>
        You need to eat
        <span> <code>{props.appState.foodNumber}</code> </span>
        <span> <code>{props.appState.food}</code> </span>
        to walk from 
        <span> <code>{props.appState.start}</code> </span>
        to
        <span> <code>{props.appState.destination}</code> </span>
        .
      </p>
      <p>That's because you're a 
        <span> <code>{props.appState.height}</code> </span>
        person, and your stride reflects that. Sorry.
      </p>
      <p>Would you like to eat something else? Head back to <code>plot</code>!</p>
    </div>
  );
}

export default Results;