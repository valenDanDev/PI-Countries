import axios from 'axios';
//country

export function getAllCountries() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/countries');
    // console.log(json.data)
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: json.data,
    });
  };
}

/*export const getAllCountries = () => dispatch => {
  return fetch(
   'http://localhost:3001/countries'
  ).then(result=>result.json())
  .then(json=>{
    dispatch({type:'GET_COUNTRIES',payload:json})
  })

};*/
export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/countries/country?q=${name}`
      );
      //console.log(json.data);
      return dispatch({
        type: 'GET_COUNTRIES_NAME',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'GET_COUNTRIES_NAME', payload: [] })
    }
  };
}
export function getDetail(id) {
//  console.log("entra");
  return async (dispatch) => {
    var json = await axios.get(`http://localhost:3001/countries/country/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data[0],
    });
  };
}

export function restartDetail() {
  return (dispatch)=>{
   // console.log("clean")
    return dispatch({type: 'CLEAN', payload: {}})
}
}
//activities
export function addActivity(body) {
  return async function(dispatch) {
      try {  
        console.log(body)  
          var activity = await axios.post(`http://localhost:3001/activities/create`, body);
          return dispatch({
              type: 'POST_ACTIVITY',
              payload: activity.data
              
          })
      } catch (error) {
          console.log(error)
      }
  }
}

export function getActivities() {
  return async function (dispatch) {
    try {
      let json = await axios.get('http://localhost:3001/activities');
      return dispatch({
          type: 'GET_ACTIVITIES',
          payload: json.data
      })
  } catch (error) {
      // console.log(error)
  }
  };
}
//filters
export function orderByName(payload) {
  return {
      type: 'ORDER_BY_NAME',
      payload,
  };
}
export function filterCountriesContinent(payload) {
  return {
    type: 'FILTER_BY_CONTINENT',
    payload,
  };
}
export function orderByPopulation(payload) {
  return {
      type: 'ORDER_BY_POPULATION',
      payload
  }
}
export function filterActivity(payload) {
  //console.log('the activity is',payload);
  return{
      type: 'FILTER_ACTIVITY',
      payload
  }
}