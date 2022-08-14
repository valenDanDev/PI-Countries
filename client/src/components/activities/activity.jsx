import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCountries, addActivity } from '../../redux/actions';
import { Link } from "react-router-dom"
import Navbar from '../Navigation/Navbar';
import styles from "./activities.module.css"


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

    
    
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(state);
        dispatch(addActivity(state))
        // resetForm()
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value

    })}



    const handleSelect = e => { 
        setState({
            ...state, 
            country: (state.country.concat(e.target.value)).toString() } ) } 



    useEffect(() => {
        // console.log(countries)
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
                </div>
                <div className={styles.container}>
                    <label className={styles.label}>Duration (minutes): </label>
                    <input type="text" className={styles.input} name="duration" value={state.duration} placeholder="Duration here..."onChange={handleChange} />
                </div>
                <div className={styles.container}>
                    <label className={styles.label}>Difficulty: </label>
                    <select className={styles.select_container} name="dificulty" onChange={handleChange}>
                    <option value="---">Select difficulty</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div className={styles.container}>
                <label className={styles.label}>Season: </label>
                <select className={styles.select_container} name="season" onChange={handleChange}>
                    <option value="---">Select season</option>
                    <option value={state.Summer}>Summer</option>
                    <option value={state.Autumn}>Autumn</option>
                    <option value={state.Winter}>Winter</option>
                    <option value={state.Spring}>primavera</option>
                </select>
                </div>
                <div className={styles.container}>
                    <label className={styles.label}>Countries: </label>
                    <select className={styles.select_container} name="season" onChange={handleSelect} value={state.id}>
                        <option>Select the countries of the activity...</option>
                        {countries?.map(mp => (
                            <option key={mp.id} value={mp.name}>{mp.name}</option>
                    ))}
                  
                   
                    </ select>
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