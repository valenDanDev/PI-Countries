import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({ image, name, continent,id }) {
    return (
        <div className={styles.card_container}>
            <img className="img" src={image} alt="Img not found" />   
            <div className={styles.card_info}>
                 <h3>{name}</h3>
                 <p>{continent}</p>
            </div>       
            < Link to={`/countries/country/${ id }`} className={styles.button_info}>
                                More..
            </Link> 
        </div>
    );
    }
