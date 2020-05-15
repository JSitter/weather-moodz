import React, { useEffect, useState } from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import Weather from './components/Weather';
import Poll from './components/Poll';
import CurrentLocation from './components/CurrentLocation';

function App() {
  const moods = [];
  const [ geoAvail, setGeoAvail ] = useState(false);
  const [ latitude, setLatitude ] = useState(null);
  const [ longitude, setLongitude ] = useState(null);
  const [ weather, setWeather ] = useState(null);

  const [weatherLocation, setWeatherLocation] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [windDirection, setWindDirection] = useState(null);

  useEffect(()=>{
    
    if( !geoAvail && "geolocation" in navigator) {
      setGeoAvail(true);
      if( (longitude === null) || (latitude === null)) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          getWeatherByLatLon(position.coords.latitude, position.coords.longitude);
        });
      }
    }
  }, [geoAvail, latitude, longitude, weather]);

  const setEmotion = (event) => {
    console.log(event);
  }

  const owAPIScraper = (json)=>{
    if( "weather" in json){
      setWeatherLocation(json.name);
      setWeather(json.weather[0].description);
      setWeatherIcon(json.weather[0].icon);
      setTemperature(json.main.temp);
      setWindSpeed(json.wind.speed);
      setWindDirection(json.wind.deg);
    }else {
      setWeather("Location Not Found")
    }


  }

  const getWeatherByLatLon = (lat, lon) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+process.env.REACT_APP_API_KEY).then(response => {
      response.json().then(owAPIScraper);
    });
  }

  const owAPIText = (text) => {
    console.log(text)
  }

  const getWeatherByCityState = (city, state) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+state+'&appid='+process.env.REACT_APP_API_KEY).then(response => {
      console.log("City state resonse", response.status)
      response.json().then(owAPIScraper).catch(err=>console.log("err", err));
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
          <h1>Weather Moodz</h1>
          <CurrentLocation lat={latitude} lon={longitude}  />
          <CitySearch result={getWeatherByCityState} />
          <Weather 
            weather={weather}
            weatherLocation={weatherLocation}
            temperature={temperature? parseFloat((temperature - 273.15)*9/5 + 32).toFixed(1): null}
            weatherIcon={weatherIcon}
            windSpeed={windSpeed}
            windDirection={windDirection}
            temperatureUnit=" F"
          />
          <section className="logo-footer" >
          <p>Built by:</p>
          <a href="https://blog.jaytria.com" className="App-link">
          Justin
          <i className="fas fa-camera"></i> 
          Sitter
          </a>
          </section>
          
      </header>
    </div>
  );
}

export default App;
