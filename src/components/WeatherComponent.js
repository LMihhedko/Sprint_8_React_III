import React from 'react';
import {useState, useEffect} from 'react';
import {Weather} from '../styled';



function WeatherComponent() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const api_key = 'd1cfddacc887d8e7ac4980c1dbd0371f';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
    
    const fetchData = async () => {

      if (!lat && !long) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }

    if (long && lat){
      await fetch(url)
      .then(res => res.json())
      .then(result => {
        setData(result?.weather[0] && result?.weather[0]?.main)
      });
    }
 
    }
    fetchData();
  }, [lat,long])
 

  return (
    <Weather>
      {`Today: ${data}`}
    </Weather>
  );
}

export default WeatherComponent;
