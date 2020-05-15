import React from 'react';
import './CurrentLocation.css';

export default function CurrentLocation({lat, lon, name}) {
    const locationChecker = () => {
        if(lat && lon){
        return (<section className="location-wrapper">
            { name? "<h2>" + name + "</h2>" : ''}
            { (lat && lon)? "Lat: " + lat + "  Lon: " + lon : ""}
        </section> )
        }else {
            return(<section className="location-wrapper">
                <p>Location Not Found</p>
            </section>)
        }
    }
    return locationChecker();
}