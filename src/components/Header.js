import axios from "axios";
import { useEffect } from "react";
import apiKey from "../api/apikey";
import React from "react";
// import "babel-polyfill";
import logo from '../assets/images/logo.png'
import styles from './Header.module.css'
import { useSelector } from "react-redux";


const Header  = ()=>{

  const data = useSelector((state)=>{console.log(state)
  return state})
  // console.log(data)
  // const date = new Date()
  // console.log(date);
  const d = new Date();
// let month = d.getUTCMonth()
let year = d.getFullYear()
let day = d.getDay()
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
let MonthName = month[d.getMonth()];


  return(
    <>
    <div  className={styles.main_container}>
      <div className={styles.title}>
        <img src={logo}>
        </img>
        <span className="title-text">FORECASTER</span>

      </div>

      <div className={styles.city}>
        <h2>{data.name}, {data.sys.country}</h2>
        <p>{MonthName}, {day, year}</p>
      </div>

      <div className={styles.temp}>
        <div>
          <h4>{data.main.temp}°C</h4>
          <p>feels like {data.main.feels_like}°C</p>
        </div>

        <div>
          <h3>

          {data.weather[0].main}
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
          </h3>
        </div>        

      </div>
      <div className={styles.details}>
          <div>
              <p>
                Humidity
              </p>
              <h3>{data.main.humidity}</h3>
          </div>

          <div>
              <p>
                Pressure
              </p>
              <h3>{data.main.pressure} Pha</h3>
          </div>
          <div>
              <p>
                Visibility
              </p>
              <h3>{data.visibility} Pha</h3>
          </div>
          <div>
              <p>
                Wind Speed
              </p>
              <h3>{data.wind.speed} m/s</h3>
          </div>
         

          <div>
              <p>
                Min Temp
              </p>
              <h3>{data.main.temp_min}°C</h3>
          </div>
          <div>
              <p>
                Max Temp
              </p>
              <h3>{data.main.temp_max}°C</h3>
          </div>


        </div>

    </div>
    </>
  )
}

export default Header