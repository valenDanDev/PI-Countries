import styles from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({ image, name, continent,id }) {
   // console.log(id);
    return (
        <div className={styles.card_container}>
            <img src={image} alt="Img not found" />   
            <div className={styles.card_info}>
                 <h3>{name}</h3>
                 <p>{continent}</p>
                 < Link to={`/countries/country/${ id }`} className={styles.button_info}>
                     more..
                 </Link> 
            </div>             
        </div>
    );
    }
