import React, { useState, useEffect } from 'react'
import WeatherCard from './weatherCard';
import "./style.css";

const Temp = () => {
    const [searchValue, setSearchValue] = useState("dehradun");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=080d766e17b4fc2426a5cbae4776ad42`;
            let res = await fetch(url);
            let data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myWeatherInfo);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            getWeatherInfo();
        }, 1000);
        return () => clearInterval(interval);
    }, [searchValue])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='Enter City Name' autoFocus id='search' className="searchTerm" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <WeatherCard tempInfo={tempInfo} />
        </>
    )
}

export default Temp