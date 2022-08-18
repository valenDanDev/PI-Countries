import React from 'react';

import { getAllCountries,orderByName,filterCountriesContinent,orderByPopulation,getActivities ,filterActivity} from '../../redux/actions';
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
  );
  const activities = useSelector(
    (state) => state.activities);

  const [currentPage, setCurrentPage] = useState(1);
  let countriesXPage = 10;
  let firstCountry,lastCountry
  const [, setOrden] = useState("");

  if(currentPage>1){
    countriesXPage=9
    lastCountry = (currentPage * countriesXPage)+1; 
    firstCountry = lastCountry - countriesXPage;
  }else{
    lastCountry = (currentPage * countriesXPage);
    firstCountry = lastCountry - countriesXPage;
  }

  const currentCountries = countries.slice(
    firstCountry,
    lastCountry
  );

  const paginated = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, [dispatch]);



  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }

  function handleSortBy(e) {
    let i=e.target.value.toLowerCase();
    dispatch(orderByName(i));
    setCurrentPage(1);
    setOrden(e.target.value);
  }
  function handleSortByP(e) {
    let i=e.target.value.toLowerCase();
    dispatch(orderByPopulation(i));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleFilterContinent(e) {
    let i=e.target.value.toLowerCase();
    dispatch(filterCountriesContinent(i));
    setCurrentPage(1);
  }

  function handleFilterActivity(e) {
    dispatch(filterActivity(e.target.value));
    setCurrentPage(1);

  }

  function handleSearch(e) {
    setCurrentPage(1);
  }

  return (    
    <div className={styles.cards}>
      <div className={styles.filter_container}>
        <div onChange={(e) => handleSearch(e)}  >
        <h2 >Search country:</h2> 
          <SearchBar/>
          <button className={styles.buton_b} onClick={(e) => {handleClick(e); }}   > Back</button>
        </div>
        <div >
        <h2 >Sort by:</h2>
        <select onChange={(e) => handleSortBy(e)} className={styles.select_container}>
          <option  hidden value="All">Sort By name:</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select onChange={(e) => handleFilterContinent(e)} className={styles.select_container}>
          <option  hidden value="none">Filter by continent:</option>
          <option value="All">All continents:</option>
          <option value="South America"> South America </option>
          <option value="North America"> North America </option>
          <option value="Europe"> Europe </option>
          <option value="Africa"> Africa </option>
          <option value="Asia"> Asia </option>
          <option value="Oceania"> Oceania </option>
        </select>
        <select onChange={(e) => handleSortByP(e)} className={styles.select_container}>
          <option  hidden value="All">Sort By population:</option>
          <option value="asc">higher population</option>
          <option value="desc">lower population</option>
        </select>
        <select className={styles.select_container} onChange={(e) => handleFilterActivity(e)}>
        <option  hidden value="none">Sort By activities:</option>
          <option value="All"> All activities </option>
          {Array.from(new Set(activities.map(obj => obj.name))).map(name => {
            return <option key={name} value={name}>{name}</option>
        })}
            
          
          

       
        </select>
      </div>
      </div>
      <div className={styles.loading}>
        <Pagination
          countriesXPage={countriesXPage}
          countries={countries.length}
          paginate={paginated}
        />
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
          : <p className={styles.loading}>Loading ...</p>}
      </div>
    </div>
  );
}