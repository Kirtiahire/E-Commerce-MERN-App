import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
      <button onClick={handleSearch}>Search</button>
      {weatherData && (
        <div>
          <h1>Current Weather</h1>
          <p>{weatherData.location.name}</p>
          <p>{weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
          <p>{weatherData.current.condition.text}</p>
          <img src={weatherData.current.condition.icon} alt="weather icon" />
        </div>
      )}
    </div>
  );
};

export default Search;
