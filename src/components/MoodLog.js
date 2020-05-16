import React , { useState } from 'react';
import Poll from './Poll';
import Mood from './Mood';
import './MoodLog.css';

export default function MoodLog({weather, weatherLocation, temperature, windSpeed, windDirection, temperatureUnit}){
    const [pollVis, setPollVis ] = useState(false);
    let [userLog, setUserLog ] = useState([])

    const pollResults = (userResults) => {
        setPollVis(false);
        let newLog = userLog.map(row => {return row});
        
        newLog.push(<Mood mood={userResults} weather={weather} weatherLocation={weatherLocation} temperature={temperature} windSpeed={windSpeed} windDirection={windDirection} temperatureUnit={temperatureUnit} />);
        setUserLog(newLog);
    }

    return (
        <section>
            { pollVis? <Poll results={pollResults}/> : "" }
            <span className="search-icon" onClick={()=>{setPollVis(true)}}><i className="fas fa-plus-circle" ></i>Track My Mood</span>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Mood</th>
                        <th>Location</th>
                        <th>Weather</th>
                        <th>Temperature</th>
                        <th>Wind Speed</th>
                    </tr>
                </thead>
                <tbody>
                {userLog}
                </tbody>
            </table>
        </section>
    );
}