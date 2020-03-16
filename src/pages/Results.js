import React, { useEffect , useState} from 'react';
import mapStyle from './../components/mapStyle'
import './../App.css';
// import REACT_APP_GOOGLE_API_KEY from './../components/googleMapsAPIKeys.js';
import fetchFoodData from './../components/fetchFoodData.js';

function Results(props) {

  const initDistance = 2;

  const [distance , setDistance] = useState(initDistance);

  const newDistance = (distance) => {
    setDistance(distance);
  }
  
  window.initMap = initMap;
  
  let walkdistance = 1;
  let calories = 1;
  let amountNeeded = 1;

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
    googleMapScript.src = "https://maps.googleapis.com/maps/api/js?key=" + REACT_APP_GOOGLE_API_KEY + "&callback=initMap";
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

      fetchFoodData(props)
    .then((e) => {
      if (e === 'X') {
        let newAmount = document.createElement('code')
        newAmount.innerText = '"a large amount you can\'t see because the API hit its quota" amount of'
        newAmount.id = "amountNeeded";
    
        document.getElementById('amountNeeded').replaceWith(newAmount)
      } else {
      calories = e;
      const km = props.appParametersState.distanceMeters / 1000
      const caloriesPerKilometer = 50
    
      let strideMultiplier = 1;
    
      if (props.appParametersState === 'short') {
          strideMultiplier = .9}
      else if (props.appParametersState === 'average') {
        strideMultiplier = 1}
      else {
        strideMultiplier = 1.1
      }
    
      let totalAmountNeeded = km * calories / caloriesPerKilometer * strideMultiplier
      console.log('5 ' + totalAmountNeeded)


      let newAmount = document.createElement('code')
      newAmount.innerText = Math.trunc(totalAmountNeeded)
      newAmount.id = "amountNeeded";
  
      document.getElementById('amountNeeded').replaceWith(newAmount)

    }
  })


      
  })



    
  return (
    <div>
      <h1>Results</h1>
      <div id="map"></div>
      <p>
        You need to eat
        <span> <code id='amountNeeded'>...loading</code> </span>
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
      <p className="subtle">Food data provided by <a className="nutritionix" href="http://www.nutritionix.com/api">Nutritionix API</a></p>
    </div>
  );
}

export default Results;