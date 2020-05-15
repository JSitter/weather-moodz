import React, { useState } from 'react';
import './Poll.css';

export default function Poll({results}) {
    const [userEmotion, changeUserEmotion ] = useState(null);

    let emotionChange = (event) => {
        changeUserEmotion(event.target.value);
    }

    let emotionSubmit = (event) => {
        event.preventDefault();
        results(userEmotion);
    }
    return (
        <form onSubmit={emotionSubmit} onChange={emotionChange} className="emotion-form">
            <h2>{userEmotion? userEmotion : "How are you feeling?"}</h2>
            <label>Elated
            <input type="radio" id="elated" name="moodSelect" value="elated" />
            </label>
            <label>Happy
            <input type="radio" id="happy" name="moodSelect" value="happy" />
            </label>
            <label>Meh
            <input type="radio" id="meh" name="moodSelect" value="meh" />
            </label>
            <label>Down
            <input type="radio" id="down" name="moodSelect" value="down" />
            </label>
            <label>Terrible
            <input type="radio" id="terrible" name="moodSelect" value="terrible" />
            </label>
            <button type="submit" value="Submit" className="submit-button" >Log My Mood</button>
        </form>
    )
}
