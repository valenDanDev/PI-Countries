import React from 'react';
//import { Link } from 'react-router-dom';
import styles from "./Home.module.css" ;
import Navbar from '../Navigation/Navbar';
import Cards from '../Cards/Cards';

export default function Home() {
    return (
        <div className={styles.home_container}>
           <Navbar/>
        
            <Cards/>
        </div>
    )}