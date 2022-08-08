import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesName } from '../../redux/actions';
// import { useHistory } from 'react-router-dom';



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
      <div className="search-bar">
           <input className="input"
           value={name} type="text"
           name='name'
           placeholder="Search here..."
              onChange={handleInputChange}
           />
           <button className="btn" type="submit" onClick={handleSubmit}>Search</button>
      </div>
    )

}
