


const initialState = {
    countriesForContinents: [],
    allCountries: [],
    detail: {},
    activities: [],
    /*continentFilter: []*/
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_COUNTRIES':
        return {
          ...state,
          allCountries: action.payload,
          countriesForContinents: action.payload,
          
        };
  
      case 'GET_COUNTRIES_NAME':
        return {
          ...state,
          allCountries: action.payload,
        };
  
      case 'GET_DETAIL':
        console.log(action.payload);
        return {
          ...state,
          detail: action.payload,
        };
  
        case 'POST_ACTIVITY':
          return {
            ...state,
            activities: [...state.activities, action.payload]
          };
  
        case 'CREATE_NEW_ACTIVITY':
          return {
            ...state,
            newActivity: action.payload,
          };
  

  
      case 'FILTER_BY_CONTINENT':
        const allCountries = state.countriesForContinents;
        const continentFilter =
          action.payload === 'All'
            ? allCountries
            : allCountries.filter(
                (country) => country.continent === action.payload
              );
  
        return {
          ...state,
          allCountries: continentFilter,
        };

        
        case 'ORDER_BY_NAME':
          return {
            ...state,
            allCountries: state.allCountries.sort((a, b) => {
              if (action.payload==='asc') {
                return a.name.localeCompare(b.name);
              }
              return b.name.localeCompare(a.name);
            }),
          };



            case 'ORDER_BY_POPULATION':
              return {
                ...state,
                allCountries: state.allCountries.sort((a, b) => {
                  if (action.payload==='asc') {
                    return (b.population)-(a.population);
                  }
                  return (a.population)- (b.population);
                }),
              };
  
      default:
        return state;
    }
  }
  
  export default rootReducer;