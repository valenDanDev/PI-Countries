import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesName,getAllCountries } from '../../redux/actions';
import styles from './SearchBar.module.css';





export default function SearchBar() {
    var [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [name, setName] = useState('');



    function handleInputChange(e){
        setName(e.target.value);
        //console.log(name);
    }
//   console.log(countryN)
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getCountriesName(name));
        setName('');
        setShow(show=true);
    }

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllCountries());
        setShow(show=false);
    }

    return (
      <div className={styles.SearchBar}>
           <input className={styles.input}
           value={name} type="text"
           name='name'
           placeholder="Search here..."
              onChange={handleInputChange}
           />
           <button  type="submit" onClick={handleSubmit}>Search</button>
           <button className={`buton_bs ${!show ? "hide-lightboxs" : ""}`} onClick={(e) => {handleClick(e); }}   > Back</button>
      </div>
    )

}
