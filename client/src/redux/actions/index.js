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
  return async (dispatch) => {
    var json = await axios.get('http://localhost:3001/countries/' + id);

    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data,
    });
  };
}


export const addActivity = (dataAct) => {
  return function (dispatch) {
    return axios.post(`http://localhost:3001/activity`, dataAct).then((res) => {
      dispatch({ type: 'POST_ACTIVITY', payload: res.data });
    });
  };
};

export function getActivities() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/activity/');

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



export function setCountriesSort(payload) {
  // return async function (dispatch) {
  // var json = await axios.get("http://localhost:3001/countries");

  return {
    type: 'SET_SORT',
    payload: {
      asc: payload,
    },
  };
  // };
}

export function filterCountriesContinent(payload) {
  // return async function (dispatch) {
  // var json = await axios.get("http://localhost:3001/countries");

  return {
    type: 'FILTER_BY_CONTINENT',
    payload,
  };
  // };
}