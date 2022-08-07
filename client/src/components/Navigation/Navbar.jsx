import { Link, NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css"


export default function Navbar (){

    return (
        <nav className={styles.navigation}>
            
            <Link className={styles.logo} to="/home">
                Countries
            </Link>
        
              <div className={styles.navbar}>
              <NavLink 
                  className={ ({isActive}) => `link  ${ isActive ? 'active':'' }` }
                  to="/activitiesCreate"
              >  Crear Actividades   </NavLink>  
              <NavLink 
                  className={ ({isActive}) => `link  ${ isActive ? 'active':'' }` }
                  to="/activities"
              >
               lista de actividades
              </NavLink>
               Search
          </div>
     
                
        </nav>
    );
}