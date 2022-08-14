
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail} from '../../redux/actions';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ActXcountries from './ActXCountry';
import styles from './Cardetail.module.css';
import Navbar from '../Navigation/Navbar';


export default function CardDetail (){
  const dispatch = useDispatch()
  const details = useSelector((state) => state.detail);
  const { id } = useParams();
  useEffect(() => {
      dispatch(getDetail(id)); 
  },[]);
 
  return (
    <div>
        <Navbar/>
        <div className={styles.bg}>
        <h2>detail of the country</h2>
        <div className={styles.CardDetail_container}>
            
    {details?
         <div className={styles.details_container}>
             <img src={details.image} alt="image" className={styles.image} />
             <div className={styles.infoDetail}>
                  <h3>{details.name}</h3>
                  <p>Código: {details.id}</p>
                  <p>Capital: {details.capital}</p>
                  <p>Superficie: {details.area / 1000} km2</p>
                  <p>Población: {details.population}</p> 
                  <Link to='/home'><button className={styles.card_d} >Back Home</button></Link>  
             </div>
              
         </div> : null}
         <div >
                     {details.activities?.map(r => {
                         return (
                             <ActXcountries
                                 id={r.id}
                                 name={r.name}
                                 difficulty={r.dificulty}
                                 duration={r.duration}
                                 season={r.season}
                                 key={r.id}
                             />
                         )
                     })
                     }
                 </div>
       
 </div>
 </div>

    </div>

  )
}