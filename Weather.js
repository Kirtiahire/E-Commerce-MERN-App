import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherData(latitude, longitude);
    });
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${lat},${lon}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    weatherData && (
      <div>
        <h1>Current Weather</h1>
        <p>{weatherData.location.name}</p>
        <p>{unit === 'C' ? weatherData.current.temp_c : weatherData.current.temp_f}°{unit}</p>
        <p>{weatherData.current.condition.text}</p>
        <img src={weatherData.current.condition.icon} alt="weather icon" />
        <button onClick={toggleUnit}>
          {unit === 'C' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </button>
      </div>
    )
  );
};

export default Weather;
