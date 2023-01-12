import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navigation/Navbar'
import styles from './NotFound404.module.css'
import Footer from '../footer/footer';

function NotFound404() {
  return (
    <div >
        <Navbar/>
        <div className={styles.container}>
          <div>
          <div className={styles.details_container} > 
             <h2 className={styles.notfound_t} >404</h2>
             <h2 className={styles.notfound_t}>Page not found</h2>
             <p className={styles.notfound_te}>The page you are looking for does not exist</p>
             <p className={styles.image_container}>
            <img src='./img/countries.png' alt="imgn"></img>
          </p>
             <p className={styles.notfound_te}>Go back to</p>
              <Link to={"/home"}>
                <button className={styles.card_d}>Home</button>
            </Link>
        </div> 
          </div>
   
        </div>
        <Footer/>
    </div>
  )
}

export default NotFound404