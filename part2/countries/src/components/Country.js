import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`;

  useEffect(() => {
    axios.get(weatherUrl).then((resp) => {
      setCurrentWeather(resp.data.current);
    });
  }, [weatherUrl, country.capital]);

  return (
    <>
      <div>
        <h1>
          {country.name.common} {country.flag}
        </h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
      </div>
      <div>
        <h4>languages</h4>
        <ul>
          {Object.entries(country.languages).map((item) => {
            const [code, language] = item;
            return <li key={code}>{language}</li>;
          })}
        </ul>
      </div>
      <div>
        <h4>Weather in {country.capital}</h4>
        <div>
          <strong>temperature:</strong> {currentWeather.temperature}
        </div>
        <div>
          <img src={currentWeather.weather_icons} alt="weather logo" />
        </div>
        <div>
          <strong>wind:</strong> {currentWeather.wind_speed} mph direction{" "}
          {currentWeather.wind_dir}
        </div>
      </div>
    </>
  );
};

export default Country;
