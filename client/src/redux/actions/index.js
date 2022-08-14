import axios from 'axios';

export function getAllCountries() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/countries');

    return dispatch({
      type: 'GET_COUNTRIES',
      payload: json.data,
    });
  };
}

export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/countries/country?q=${name}`
      );

      console.log(json.data);

      return dispatch({
        type: 'GET_COUNTRIES_NAME',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  console.log("entra");
  return async (dispatch) => {
    var json = await axios.get(`http://localhost:3001/countries/country/${id}`);

    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data[0],
    });
  };
}


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
    var json = await axios.get('localhost:3001/activities');

    dispatch({
      type: 'GET_ACTIVITIES',
      payload: json.data,
    });
  };
}

export function getCountriesId(id) {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/countries/' + id);

    dispatch({
      type: 'GET_COUNTRIES_DETAIL',
      payload: json.data,
    });
  };
}



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