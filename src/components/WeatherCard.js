import React from "react";
import "./Weather.css";
import background from "./background.jpg";

function WeatherCard({ data }) {
  return (
    <div className="cards">
      <div className="middle">
        <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
            {/* <h2>{data.weather[0].main}</h2> */}
        </div>

        <div className="middle_text">
          <h1>{data.main.temp} °C</h1>
          <h3>
            {data.name},{data.sys.country}
          </h3>
        </div>
      </div>
      <h1 className="hi">{data.weather[0].main}</h1>

      <div className="last">
        <div>
          <h4 className="red">Humidity:</h4>
          <h4>{data.main.humidity} °C</h4>
        </div>

        <div>
          <h4 className="red">Pressure:</h4>
          <h4>{data.main.humidity} Pa</h4>
        </div>

        <div>
          <h4 className="red">Wind:</h4>
          <h4>{data.wind.speed} km/h</h4>
        </div>

        <div>
          <h4  className="red">Description:</h4>
          <h4>{data.weather[0].main}</h4>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
