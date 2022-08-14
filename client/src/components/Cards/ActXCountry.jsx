export default function ActXcountries({id, name , difficulty, duration, season}) {
    return (
          <div  key={id}>
              <span>Activity: {name}</span><br/>
              <span>Difficulty: {difficulty}</span><br/>
              <span>Duration: {duration}</span><br/>
              <span>Season: {season}</span>
          </div>
    )
  }