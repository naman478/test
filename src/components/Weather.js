import React from "react";
import { useState, useEffect, useRef } from "react";
import WeatherCard from "./WeatherCard";
import background from "./background.jpg";
import "./Weather.css";

function Weather() {

  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState({
    main: {
      temp: 25.05,
      pressure: 1004,
      humidity: 94,
    },
    sys: {
      country: "IN"
    },
    wind: {
      speed: 2.57
    },
    "weather": [
        {
          "main": "Rain"
        }]
  });

  function handleSubmit(e) {
    e.preventDefault();
    setCity(queryInputRef.current.value);
  }
  const queryInputRef = useRef(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`;

  useEffect(() => {
    getData();
  }, [city]);

  async function getData() {
    const response = await fetch(url);
    const res = await response.json();
    
    if(res.cod === `404`){
        <div className="parent">
            <p>"city not found"</p>
        </div>
        alert("city not found");
        return;
    }
    setData(res);
  }

  return (
    <div className="parent">
      <div className="first">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={queryInputRef}
            placeholder="Search city here"
          />
        </form>
      </div>

      {
        !data?(<p>No data found</p>):(<WeatherCard data={data} />)
      }
      
    </div>
  );
}

export default Weather;
