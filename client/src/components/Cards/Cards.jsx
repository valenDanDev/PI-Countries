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
  var [show, setShow] = useState(false);
  var [option1,setOption1]=useState("none");
  var [option2,setOption2]=useState("none");
  var [option3,setOption3]=useState("none");
  var [option4,setOption4]=useState("none");
  var [loading,setLoad]=useState(true);


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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 200);
    return () => clearTimeout(timer);

  }, []);

  function handleClick(e) {
    setShow(show=false);
    setOption1(option1="none")
    setOption2(option2="none")
    setOption3(option3="none")
    setOption4(option3="none")
    e.preventDefault();
    dispatch(getAllCountries());
  }

  function handleSortBy(e) {
    setOption1(e.target.value)
    setShow(show=true);
    let i=e.target.value.toLowerCase();
    dispatch(orderByName(i));
    setCurrentPage(1);
    setOrden(e.target.value);
  }
  function handleSortByP(e) {
    setOption3(e.target.value);
    setShow(show=true);
    let i=e.target.value.toLowerCase();
    dispatch(orderByPopulation(i));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleFilterContinent(e) {
    setOption2(e.target.value);
    setShow(show=true);
    let i=e.target.value.toLowerCase();
    dispatch(filterCountriesContinent(i));
    setCurrentPage(1);
  }

  function handleFilterActivity(e) {
    setOption4(e.target.value);
    setShow(show=true);
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
          <SearchBar />
          <button className={`buton_b ${!show ? "hide-lightbox" : ""}`} onClick={(e) => {handleClick(e); }}   > Clear filters</button>
        </div>
        <div >
        <h2 >Sort by:</h2>
        <select  value={option1} onChange={(e) => handleSortBy(e)} className={styles.select_container}>
          <option   value="none"  >Sort By name:</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select value={option2} onChange={(e) => handleFilterContinent(e)} className={styles.select_container}>
          <option  value="none">Filter by continent:</option>
          <option value="South America"> South America </option>
          <option value="North America"> North America </option>
          <option value="Europe"> Europe </option>
          <option value="Africa"> Africa </option>
          <option value="Asia"> Asia </option>
          <option value="Oceania"> Oceania </option>
        </select>
        <select value={option3} onChange={(e) => handleSortByP(e)} className={styles.select_container}>
          <option value="none">Sort By population:</option>
          <option value="asc">higher population</option>
          <option value="desc">lower population</option>
        </select>
        {activities.length?
        <select value={option4} className={styles.select_container} onChange={(e) => handleFilterActivity(e)}>
        <option  value="none">Sort By activities:</option>
          <option value="All"> All activities </option>
          {Array.from(new Set(activities.map(obj => obj.name))).map(name => {
            return <option key={name} value={name}>{name}</option>
        })}   
        </select>: <p className={styles.loading}> </p>}
      </div>
      </div>

      {loading ?
               <p className={styles.loading}>Loading...</p>
                :
        <div >
                <div className={styles.loading}>
        <Pagination
          currentPage={currentPage}
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
          : <div className={styles.details_container} > 
          <h2 className={styles.notfound_t}> 404 COUNTRIES NOT FOUND  </h2>
          <p className={styles.notfound_te}>We are sorry to tell you that we couldn't find the country you were looking for  </p>
          <p className={styles.image_container}>
            <img src='./img/countries.png' alt="imgn"></img>
          </p>
            
           </div>}
      </div>
        </div>        
   
      }
    </div>
  );
}