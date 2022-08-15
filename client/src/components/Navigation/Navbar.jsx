import { Link, NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css"

export default function Navbar (){
    return (
        <nav className={styles.nav_container}>
        <div className={styles.navigation}>          
            <Link className={styles.logo} to="/home">
                Countries
            </Link>
              <div className={styles.navbar}>
              <NavLink 
                  className={ ({isActive}) => `link  ${ isActive ? 'active':'' }` }
                  to="/activitiesCreate"
              >  Create activities   </NavLink>  
          </div>
        </div>
        </nav>
    );
}