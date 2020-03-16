import { REACT_APP_NID_KEY , REACT_APP_NAPI_KEY } from './../components/nutritionixAPIKeys.js';

async function fetchFoodData (props) {
  let response = await fetch('https://api.nutritionix.com/v1_1/search/' + 
    props.appParametersState.foodName + 
    '?results=0%3A1&cal_min=0&cal_max=5000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories&appId=' + 
    REACT_APP_NID_KEY + 
    '&appKey=' + 
    REACT_APP_NAPI_KEY)
  let data = await response.json();
  let calories = 1
  try {
    calories = data.hits[0].fields.nf_calories
    return calories
  } catch (error) {
    console.log("API is down! :\\ " + error)
    return "X"
  }
  // console.log(calories)
    };

export default fetchFoodData;

// [[PromiseValue]]: Object
// hits: Array(1)
// 0:
// fields:
// brand_id: "513fcc648110a4cafb90ca5e"
// brand_name: "USDA"
// item_id: "513fceb475b8dbbc21000fc8"
// item_name: "Avocado - 1 cup, sliced"
// nf_calories: 233.6
// nf_serving_size_qty: 1
// nf_serving_size_unit: "serving"
// __proto__: Object
// _id: "513fceb475b8dbbc21000fc8"
// _index: "f762ef22-e660-434f-9071-a10ea6691c27"
// _score: 11.934404
// _type: "item"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// max_score: 11.934404
// total_hits: 67