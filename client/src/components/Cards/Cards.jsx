import React from 'react';

import { getAllCountries } from '../../redux/actions';
import Card from './Card'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cards.module.css';


export default function Cards() {
  // const {ui} = useContext(GlobalContext);

  const dispatch = useDispatch();
  const countries = useSelector(
    (state) => state.countries,
    () => false
  );





  // const activities = useSelector(state => state.activities);

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
    console.log(getAllCountries);
  }

 

  return (
    <div className="home">
      <div className={styles.cards_container} >
        {countries.length
          ? countries.map((country) => {
              return (
                    <Card
                      key={country.id} 
                      img={country.image}
                      name={country.name}
                      continent={country.continent}
                    />
              );
            })
          : 'Loading...'}
      </div>
    </div>
  );
}