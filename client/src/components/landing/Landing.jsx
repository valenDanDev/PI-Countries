import { Link } from 'react-router-dom';
import styles from "./Landing.module.css" ;

export default function LandingPage() {
    return (
        <div className={styles.landing_container}>
            <img src='./img/countries.png' alt='paises'/>
            <div className={styles.landing_info}>
                 <h2>Welcome to countries project</h2>
                 <Link to="/home">
                     <p>ENTER  </p>
                  </Link>
            </div> 
        </div>
    )}