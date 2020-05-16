import React from 'react';
import './Weather.css';
import MoodLog from './MoodLog';

export default function Weather({weather, weatherLocation, temperature, weatherIcon, windSpeed, windDirection, temperatureUnit}){
    
    const showWeather = ()=>{
        if(temperature !== null) {
            return (
            <div>
                <section className="weather-wrapper">
                    <h2>{weatherLocation}</h2>
                    <span>{weather}</span><br/>
                    <span className="temperature-display">{temperature}<span className="temperature-unit">{temperatureUnit}</span></span>
                    <p>Icon: {weatherIcon} </p>
                    <span className="wind-speed">Wind {windSpeed} Knots bearing <span className="wind-direction">{windDirection}</span></span>
                </section>
                <MoodLog 
                    weather={weather}
                    weatherLocation={weatherLocation}
                    temperature={temperature}
                    windSpeed={windSpeed}
                    windDirection={windDirection}
                    temperatureUnit={temperatureUnit}
                />
            </div>
            )
        }else {
            return (
                <section className="weather-wrapper">
                    Weather Not found
                </section>
            )
        }
    }

    return showWeather();
}