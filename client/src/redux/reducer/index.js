


const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    activities: [],
    /*continentFilter: []*/
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_COUNTRIES':
        return {
          ...state,
          allCountries: action.payload,
          
        };
  
      case 'GET_COUNTRIES_NAME':
        return {
          ...state,
          allCountries: action.payload,
        };
  
      case 'GET_DETAIL':
        return {
          ...state,
          countries: action.payload,
        };
  
      case 'POST_ACTIVITY':
        return {
          ...state,
          activities: action.payload,
        };
  
      case 'GET_ACTIVITIES':
        return {
          ...state,
          activities: action.payload,
        };
  
      case 'SET_SORT':
        const asc = action.payload.asc;
        return {
          ...state,
          countries: state.countries.sort((a, b) => {
            if (asc) {
              return a.name.localeCompare(b.name);
            }
            return b.name.localeCompare(a.name);
          }),
        };
  
      case 'FILTER_BY_CONTINENT':
        const allCountries = state.allCountries;
        const continentFilter =
          action.payload === 'All'
            ? allCountries
            : allCountries.filter(
                (country) => country.continent === action.payload
              );
  
        return {
          ...state,
          countries: continentFilter,
        };
  
      default:
        return state;
    }
  }
  
  export default rootReducer;