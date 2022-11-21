
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useHistory } from 'react-router-dom';
import { getDetail,restartDetail } from '../../redux/actions';
import {  useEffect } from 'react';

import ActXcountries from './ActXCountry';
import styles from './Cardetail.module.css';
import Navbar from '../Navigation/Navbar';

//restartDetail
export default function CardDetail (){
  const dispatch = useDispatch()
  const details = useSelector((state) => state.detail);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getDetail(id)); 
    }, 600);
    return () => clearTimeout(timer);
  }, [dispatch,id]);

  // useEffect(() => {
      
  // },);  
 

  /*useEffect(()=>{
    console.log(details)
},[details])*/

  function handleClick(e) {
    dispatch(restartDetail());
    history.push('/home');
  }
  var size = Object.keys(details).length;
  //console.log(details);

  return (
    <div>
        <Navbar/>
        <div className={styles.bg}>
        <h2>detail of the country</h2>
        <div className={styles.CardDetail_container}>
            
    {size?
         <div className={styles.details_container}>
             <img src={details.image} alt="flag_image" className={styles.image} />
             <div className={styles.infoDetail}>
          
                  <h3>{details.name}</h3>
                  <p>Code: {details.id}</p>
                  <p>Capital: {details.capital}</p>
                  <p>Subregion: {details.subregion}</p>
                  <p>Area: {details.area } km<sup>2</sup></p>
                  <p>Population: {details.population}</p> 
                  <div >
                     {details.activities?.length > 0 ? details.activities?.map(r => {
                         return (
                             <ActXcountries
                                 country={details.name}
                                 id={r.id}
                                 name={r.name}
                                 difficulty={r.dificulty}
                                 duration={r.duration}
                                 season={r.season}
                                 key={r.id}
                             />
                         )
                     })
                     : <p className={styles.error}>There are no activities !!</p>}
                     
                     </div>
                     <button className={styles.card_d} onClick={(e) => {handleClick(e); }}   > Back</button>
                 
             </div>
              
         </div> :<p className={styles.loading}>Loading...</p> }
       
       
 </div>
 </div>

    </div>

  )
}