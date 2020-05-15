import React , { useState } from 'react';
import Poll from './Poll';
import Mood from './Mood';

export default function MoodLog({weather, weatherLocation, temperature, windSpeed, windDirection, temperatureUnit}){
    const [pollVis, setPollVis ] = useState(false);
    const moods = [];

    const pollResults = (results) => {
        setPollVis(false);
        moods.push(<Mood mood={results} weather={weather} weatherLocation={weatherLocation} temperature={temperature} windSpeed={windSpeed} windDirection={windDirection} temperatureUnit={temperatureUnit} />);
        console.log(moods);
    }

    return (
        <section>
            { pollVis? <Poll results={pollResults}/> : "" }
            <i className="fas fa-calendar-plus fa-5x search-icon" onClick={()=>{setPollVis(true)}}></i>
            <table>
                <thead>
                    <tr>
                        <th>Mood</th>
                        <th>Location</th>
                        <th>Weather</th>
                        <th>Temperature</th>
                        <th>Wind Speed</th>
                    </tr>
                </thead>
                <tbody>
                {moods}
                </tbody>
            </table>
        </section>
    );
}