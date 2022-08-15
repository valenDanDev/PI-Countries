import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesName } from '../../redux/actions';
import styles from './SearchBar.module.css';




export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getCountriesName(name));
        setName('');
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
      </div>
    )

}
