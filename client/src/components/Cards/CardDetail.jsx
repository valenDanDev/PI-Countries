
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail} from '../../redux/actions';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";




export default function CardDetail (){
  const dispatch = useDispatch()
  const details = useSelector((state) => state.detail);
  const { id } = useParams();
  console.log(details)
  

  useEffect(() => {
      dispatch(getDetail(id)); 
  },[]);


  console.log(details.name)

 
  return (
<div>


        <Link to='/home'><button >Back Home</button></Link>
 
        <div >
            <img src={details.image} alt="image" />
            <h1>{details.name}</h1>
            <p>Código: {details.id}</p>
            <p>Capital: {details.capital}</p>
            <p>Superficie: {details.area / 1000} km2</p>
            <p>Población: {details.population}</p>
          
        </div>
</div>
  )
}
