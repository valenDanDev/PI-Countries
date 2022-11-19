import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCountries, addActivity } from '../../redux/actions';
import { Link } from "react-router-dom"
import Navbar from '../Navigation/Navbar';
import styles from "./activities.module.css"

export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'name is required';
    } 
    if(!input.duration){
      errors.duration="duration is required";
    }  
    if (!input.dificulty) {
        errors.dificulty = 'you must select dificulty';
      } 
      if(!input.season){
        errors.season="you must select a season";
      }    
    return errors;
  };


export default function Activity(){
    const dispatch = useDispatch()
    const countries = useSelector(state => state.allCountries)
    
    const [state, setState] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        country: []
    })

    const [errors, setErrors] = React.useState({});    
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (state.name === "" ||
        state.duration === "" ||
        state.dificulty === "" ||
        state.season === "" ||
        state.country.length === 0){
            return alert('you must fill all data');
        } 
        dispatch(addActivity(state))
        alert("Activity created succesfully");
        setState({
            name: "",
            dificulty: "",
            duration: "",
            season: "",
            country: []
        })
    }
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value.toLowerCase()
    });

    setErrors(validate({
        ...state,
        [e.target.name]: e.target.value
      }));
    }

    const handleSelect = e => { 
        /*setState({
            ...state, 
            country: (state.country.concat(e.target.value)).toString() } ) */
            setState({ ...state, country: [...state.country, e.target.value] });
        
        } 

            
  function handleDelete(i) {
    setState({
      ...state,
      country: state.country.filter((el) => el !== i),
    });
  }


    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    return (
         <div>
            <Navbar/>
            <div className={styles.activities}>
                <h2>create activity</h2>
            <form className={styles.form} onSubmit={handleOnSubmit}>
                <div className={styles.textContainer}>
                <div className={styles.container}>
                    <label className={styles.label}>Name: </label>
                    <input type="text" className={styles.input} name="name" value={state.name} placeholder="Name here..." onChange={handleChange} />
                    <p className={styles.danger}>{errors.name}</p>
                </div>
                <div className={styles.container}>
                    <label className={styles.label}>Duration (minutes): </label>
                    <input type="text" className={styles.input} name="duration" value={state.duration} placeholder="Duration here..."onChange={handleChange} />
                    <p className={styles.danger}>{errors.duration}</p>
                </div>
                <div className={styles.container}>
                    <label className={styles.label}>Difficulty: </label>
                    <select className={styles.select_container} name="dificulty" onChange={handleChange} >
                    <option value="---">Select difficulty</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <p className={styles.danger}>{errors.dificulty}</p>
                </div>
                <div className={styles.container}>
                <label className={styles.label}>Season: </label>
                <select className={styles.select_container} name="season" onChange={handleChange}>
                    <option value="---">Select season</option>
                    <option value={state.Spring}>Spring</option>
                    <option value={state.Summer}>Summer</option>
                    <option value={state.Autumn}>Autumn</option>
                    <option value={state.Winter}>winter</option>     
                </select>
                <p className={styles.danger}>{errors.season}</p>
                </div>

                <div className={styles.container}>
                    <label className={styles.label}>Countries: </label>
                    <select className={styles.select_container} name="season" onChange={handleSelect} value={state.id}>
                        <option disabled="disabled">Select the countries of the activity...</option>
                        {countries?.map(mp => (
                            <option key={mp.id} value={mp.id}>{mp.name}</option>
                    ))}       
                    </ select>
                </div>

                <div className={styles.textArea} >
                {state.country.map((country) => (
                <div className={styles.countryButton} key={country}>
                  <input className={styles.btnDelete} type='button' value='X' onClick={() => handleDelete(country)}/>
                  <p className='pOfCountry'  key={country}>{country}</p>
                </div>
              ))}
            </div>
                </div>
                <div className={styles.buttons}>
                     <button className={styles.buton_b} >Add activity</button>
                     <Link to="/home"><button className={styles.buton_b}>Back</button></Link>
                </div>               
            </form>
        </div>
        </div>
    )
}