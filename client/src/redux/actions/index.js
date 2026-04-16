import axios from 'axios';
//country

export function getAllCountries() {
  return async function (dispatch) {
    try {
      const res = await axios.get('http://localhost:3001/countries');

      return dispatch({
        type: 'GET_COUNTRIES',
        payload: res.data,
      });

    } catch (error) {
       console.log("Caught error:", error);
      return dispatch({
        type: 'GET_COUNTRIES_ERROR',
        payload: error.response?.data?.msg || 'Error fetching countries',
      });
    }
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
  return async (dispatch) => {
    try {
      const json = await axios.get(
        `http://localhost:3001/countries/country/${id}`
      );

      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data[0],
      });

    } catch (error) {
      dispatch({
        type: 'GET_DETAIL_ERROR',
        payload: error.response?.data?.msg || 'Error fetching detail',
      });
    }
  };
}

export function restartDetail() {
  return (dispatch)=>{
   // console.log("clean")
    return dispatch({type: 'CLEAN', payload: {}})
}
}
//activities

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
      const res = await axios.get('http://localhost:3001/activities');

      dispatch({
        type: 'GET_ACTIVITIES',
        payload: res.data,
      });

    } catch (error) {
      dispatch({
        type: 'GET_ACTIVITIES_ERROR',
        payload: error.response?.data?.msg || 'Error fetching activities',
      });
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