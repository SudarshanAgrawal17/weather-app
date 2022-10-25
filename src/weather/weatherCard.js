import React, { useEffect } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [ weatherState, setWeatherState] = React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setWeatherState("wi wi-day-cloudy");
                    break;
                case "Rain":
                    setWeatherState("wi wi-rain");
                    break;
                case "Haze":
                    setWeatherState("wi wi-fog");
                    break;
                case "Light rain":
                    setWeatherState("wi wi-day-rain");
                    break;
                case "Mist":
                    setWeatherState("wi wi-dust");
                    break;
                default:
                    setWeatherState("wi wi-day-sunny");
                    break;
            }
        }
    }, [weatherMood]);

    let date = new Date(sunset * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                <i className={weatherState}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherConditions">{weatherMood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">
                                {timeStr} <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-barometer"}></i></p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard