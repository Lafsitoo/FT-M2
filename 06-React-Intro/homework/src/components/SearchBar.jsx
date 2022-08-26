import React from 'react';
import Styles from './SearchBar.modules.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div className='styles.container'>
    <input type="text" className={Styles.input}/>
    <button className={Styles.btn} onClick={() => props.onSearch("Hola")}>Agregar</button>
  </div>
};