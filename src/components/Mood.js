import React from 'react';


export default function Mood({mood, weather, weatherLocation, temperature, windSpeed, windDirection, temperatureUnit}){
    const d = new Date();
    const month = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    const hours = d.getHours();
    const mins = d.getMinutes();
    return (
    <tr><td>{String.prototype.concat(month, '/', day, '/', year, '  -- ', hours, ':', mins)}</td><td>{mood}</td><td>{weatherLocation}</td><td>{weather}</td><td>{temperature} {temperatureUnit}</td><td>{windSpeed} bearing {windDirection}</td></tr>
    )
}