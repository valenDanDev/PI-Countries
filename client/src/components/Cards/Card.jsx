import React from 'react';
import styles from './Card.module.css';


export default function Card({ img, name, continent }) {
    return (
        <div className={styles.card_container}>
            <img className="img" src={img} alt="Img not found" />   
            <div className={styles.card_info}>
                 <h3>{name}</h3>
                 <p>{continent}</p>
            </div>       
            
        </div>
    );
    }
