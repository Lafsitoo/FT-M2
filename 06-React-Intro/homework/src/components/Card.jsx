import React from 'react';
import styles from "./Card.modules.css"

export default function Card(props) {
  // acá va tu código
  // Props = {min, max, name, img, onClose}
  return <div className={styles.container}>
  <button onClick={props.onClose}>X</button>
    <h2>{props.name}</h2>
    <h3 className={styles.infoCont}>Min: {props.min} - Max: {props.max}</h3>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
    alt="weather-icon"
    srcset=""/>
  </div>
};