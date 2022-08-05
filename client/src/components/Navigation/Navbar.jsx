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
               Ver lista de activiadades
              </NavLink>
              <NavLink 
                  className={ ({isActive}) => `link  ${ isActive ? 'active':'' }` }
                  to="/search"
              >
                  Search
              </NavLink>
          </div>
     
                
        </nav>
    );
}