import React from 'react';

export default function Mood({mood, weather, weatherLocation, temperature, windSpeed, windDirection, temperatureUnit}){
    return (
        <tr><td>{mood}</td><td>{weatherLocation}</td><td>{weather}</td><td>{temperature} {temperatureUnit}</td><td>{windSpeed} bearing {windDirection}</td></tr>
    )
}