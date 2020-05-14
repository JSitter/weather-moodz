import React, { useState } from 'react';

export default function Poll({setUserEmotion}) {
    const [userEmotion, changeUserEmotion ] = useState(null);

    let emotionChange = (event) => {
        changeUserEmotion(event.target.value);
    }

    let emotionSubmit = (event) => {
        event.preventDefault();
        setUserEmotion(userEmotion);
    }
    return (
        <form onSubmit={emotionSubmit} onChange={emotionChange}>
            <h2>{userEmotion? userEmotion : "How are you feeling?"}</h2>
            <input type="radio" id="Elated" name="moodSelect" value="elated" />
            <label>Elated</label>
            <input type="radio" id="happy" name="moodSelect" value="happy" />
            <label>Happy</label>
            <input type="radio" id="meh" name="moodSelect" value="meh" />
            <label>Meh</label>
            <input type="radio" id="down" name="moodSelect" value="down" />
            <label>Down</label>
            <input type="radio" id="Terrible" name="moodSelect" value="terrible" />
            <label>Terrible</label>
            <button type="submit" value="Submit" />
        </form>
    )
}
