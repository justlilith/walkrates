import React, { useEffect , useState} from 'react';
import mapStyle from './../components/mapStyle'
import './../App.css';

function Results(props) {

  const initDistance = 2;

  const [distance , setDistance] = useState(initDistance);

  const newDistance = (distance) => {
    setDistance(distance);
  }
  
  window.initMap = initMap;
  
  let walkdistance = 1;

  function initMap() {
    const google = window.google;

    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65},
      styles: mapStyle,
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

    const google = window.google;
    
    // let mapUnits;
    
    // (props.appParametersState.units == "imperial") ? mapUnits = google.maps.UnitSystem.IMPERIAL : mapUnits = google.maps.UnitSystem.METRIC;

    directionsService.route(
      {
        origin: props.appMapState.start,
        destination: props.appMapState.destination,
        // unitSystem : mapUnits,
        travelMode: 'WALKING'
      },
      function(response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
          console.log(props.appMapState);
          console.log(props.appParametersState);
          // walkdistance = response.routes[0].legs[0].distance.value;
          newDistance(response.routes[0].legs[0].distance.value);
          // console.log(distance)
          // props.newParametersState({...props.appParametersState, distanceMeters : response.routes[0].legs[0].distance.value})
          // console.log(response)
          // console.log(response.routes.legs)
          console.log(response.routes[0].legs[0].distance.value)
        } else {
          window.alert('Whoops! Whoopsie! The directions request failed due to ' + status);
        }
      }
    );
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
    };

    // function fetchFoodData (props.appParametersState) {
    //   fetch('')
    //     .then( (response) => {

    //     })
    //     .then( (data) => {

    //     });
    //   };

  })
    
  return (
    <div>
      <h1>Results</h1>
      <div id="map"></div>
      <p>
        You need to eat
        <span> <code>{props.appParametersState.foodNumber}</code> </span>
        <span> <code>{props.appParametersState.foodName}</code> </span>
        to walk from 
        <span> <code>{props.appMapState.start}</code> </span>
        to
        <span> <code>{props.appMapState.destination}</code></span>
        , which is a distance of<span> <code>{distance}</code> </span>meters.
      </p>
      <p>That's because you're a 
        <span> <code>{props.appParametersState.height}</code> </span>
        person, and your stride reflects that. Sorry.
      </p>
      <p>Would you like to eat something else? Head back to <code>plot</code>!</p>
    </div>
  );
}

export default Results;