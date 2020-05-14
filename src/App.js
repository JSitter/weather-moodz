import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ geoAvail, setGeoAvail ] = useState(false);
  const [ latitude, setLatitude ] = useState(null);
  const [ longitude, setLongitude ] = useState(null);

  useEffect(()=>{
    if( !geoAvail && "geolocation" in navigator) {
      setGeoAvail(true);
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [geoAvail]);

  return (
    <div className="App">
      <header className="App-header">
          <h2>Latitude: </h2> <p>{latitude}</p>
          <h2>Longitude: </h2> <p>{longitude}</p>
      </header>
    </div>
  );
}

export default App;
