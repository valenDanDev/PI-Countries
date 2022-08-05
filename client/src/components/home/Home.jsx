import React from 'react';
//import { Link } from 'react-router-dom';
import styles from "./Home.module.css" ;
import Navbar from '../Navigation/Navbar';

export default function Home() {
    return (
        <div className={styles.home_container}>
           <Navbar/>
            
        </div>
    )}