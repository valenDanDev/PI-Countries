const initialState = {
    allCountries: [],
    countriesBackup: [],
    detail: {},
    activities: [],
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_COUNTRIES':
        return {
          ...state,
          allCountries: action.payload,
          countriesBackup: action.payload,   
        };
      case 'GET_COUNTRIES_NAME':
        return {
          ...state,
          allCountries: action.payload,
        };
      case 'GET_DETAIL':
        //console.log(action.payload);
        return {
          ...state,
          detail: action.payload,
        };
      case 'CREATE_NEW_ACTIVITY':
          return {
            ...state,
            newActivity: action.payload,
          };
      case 'GET_ACTIVITIES':
            //console.log(action.payload)
            return {
                ...state,
                activities: action.payload,
            }
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
      case 'FILTER_BY_CONTINENT':
            const allCountries = state.countriesBackup;
            const continentFilter =
              action.payload === 'all'
                ? allCountries
                : allCountries.filter(
                    (country) => country.continent === action.payload
                  );
      
            return {
              ...state,
              allCountries: continentFilter,
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
        case 'FILTER_ACTIVITY':
            const filtredCountriesByActivities = state.countriesBackup
            const continentFilteredBA = filtredCountriesByActivities.filter((c) => { return c.activities.find((c) => { return c.name === action.payload; }); });
            const filterAll=filtredCountriesByActivities.filter((c) => { return c.activities.length>0; });
            if (action.payload === 'All') {
                return { ...state, allCountries: filterAll }
            } else {
                return {
                    ...state,
                    allCountries: continentFilteredBA
                }
            }
      default:
        return state;
    }
  }
  export default rootReducer;