 import styles from './ActXcountries.module.css'
export default function ActXcountries({id, name , difficulty, duration, season,country}) {
    return (
          <div  className={styles.actXc} key={id}>
              <p>Activity: {name}</p><br/>
              <p>Difficulty: {difficulty}</p><br/>
              <p>Duration: {duration}</p><br/>
              <p>Season: {season}</p>
          </div>
    )
  }