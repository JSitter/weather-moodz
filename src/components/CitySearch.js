import React, { useState } from 'react';
import './CitySearch.css';

export default function CitySearch({result}) {
    const [ cityName, setCityName ] = useState(null);
    const [ stateName, setStateName ] = useState(null);
    const [ viewToggle, setViewToggle ] = useState(false);

    const cityUpdate = (event) => {
       setCityName(event.target.value);
    }

    const stateUpdate = (event) => {
        setStateName(event.target.value);
    }

    const formAction = (event) => {
        event.preventDefault();
        viewToggler();
        result(cityName, stateName);
    }

    const viewToggler = () => {
        setViewToggle(!viewToggle)
    }

    const viewChooser = () => {
        if(viewToggle) {
            return (
            <form className="city-chooser-form" onSubmit={formAction}>
                <div className="close-button" onClick={viewToggler}>x</div>
                <div className="form-fields">
                <h3>Find the weather using City and State.</h3>
                    <label for="cityname">City
                    <input type="text" name="cityname" onChange={cityUpdate} onBlur={cityUpdate} />
                    </label>
                    <label for="statename">State
                    <input type="text" name="statename"  onChange={stateUpdate} onBlur={stateUpdate} />
                    </label>
                    <button type="submit" className="submit-button" value="What's the Weather?">Find the Weather</button>
                </div>
            </form>)
        }else {
            return (
                <i className="fas fa-5x fa-search-location search-icon" onClick={viewToggler}></i>
            )
        }
    }

    return viewChooser();
}