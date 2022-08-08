import React from 'react';

import { getAllCountries,setCountriesSort,filterCountriesContinent } from '../../redux/actions';
import Card from './Card'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cards.module.css';
import Pagination from './Pagination';
import SearchBar from './SearchBar';


export default function Cards() {

  const dispatch = useDispatch();
  const countries = useSelector(
    (state) => state.allCountries,
    () => false
  );


  const [currentPage, setCurrentPage] = useState(1);
  const countriesXPage = 9;


  const lastCountry = currentPage * countriesXPage;
 
  const firstCountry = lastCountry - countriesXPage;

  const currentCountries = countries.slice(
    firstCountry,
    lastCountry
  );

 // console.log(currentCountries);


  const paginated = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // ui.setLoading(true);
    dispatch(getAllCountries());
    // ui.setLoading(false);
  }, []);

  function handleClick(e) {
    // ui.setLoading(true);
    e.preventDefault();
    dispatch(getAllCountries());
    // ui.setLoading(false);
   // console.log(getAllCountries);
  }

  function handleSortBy(e) {
    dispatch(setCountriesSort(e.target.value === 'asc'));
    setCurrentPage(1);
  }

  
  function handleFilterContinent(e) {
    dispatch(filterCountriesContinent(e.target.value));
    setCurrentPage(1);
  }



  



  
 

  return (

    
    <div className={styles.cards}>

<div className="filter_container">
        el search
          <SearchBar/>
          <button
          className="btn"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Back
        </button>
        
        <div className="select_container">
        <h2 className="sort-by">Sort by:</h2>
        <select onChange={(e) => handleSortBy(e)}>
          <option value="asc">Sort By:</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All">Filter by continent:</option>
          <option value="South America"> South America </option>
          <option value="North America"> North America </option>
          <option value="Europe"> Europe </option>
          <option value="Africa"> Africa </option>
          <option value="Asia"> Asia </option>
          <option value="Oceania"> Oceania </option>
        </select>
        <option value="activity">Activity</option>
      </div>

      <div className="paginate">
        <Pagination
          countriesXPage={countriesXPage}
          countries={countries.length}
          paginate={paginated}
        />
      </div>

      
        
      </div>


      <div className={styles.cards_container} >
   
        {currentCountries.length
          ? currentCountries.map((country) => {
              return (
                    <Card
                      key={country.id} 
                      { ...country }
                    />
              );
            })
          : 'Loading...'}
      </div>
    </div>
  );
}