import React, { useEffect, useState } from 'react';
import './App.css';

import Poll from './components/Poll';

function App() {
  const [ geoAvail, setGeoAvail ] = useState(false);
  const [ latitude, setLatitude ] = useState(null);
  const [ longitude, setLongitude ] = useState(null);
  const [ city, setCity ] = useState(null);
  const [ state, setState ] = useState(null);

  useEffect(()=>{
    if( !geoAvail && "geolocation" in navigator) {
      setGeoAvail(true);
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [geoAvail]);

  let setEmotion = (event) => {
    console.log(event);
  }
  return (
    <div className="App">
      <header className="App-header">
          <h1>Weather Moodz</h1>
          {}
          <Poll setUserEmotion={setEmotion} />
      </header>
    </div>
  );
}

export default App;
