import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FiveDayForecast = ({ location }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    fetchFiveDayForecast(location);
  }, [location]);

  const fetchFiveDayForecast = async (location) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=5`);
      setForecastData(response.data.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching 5-day forecast", error);
    }
  };

  return (
    <div>
      <h1>5-Day Forecast</h1>
      {forecastData.map((day, index) => (
        <div key={index}>
          <p>{day.date}</p>
          <p>High: {day.day.maxtemp_c}°C / {day.day.maxtemp_f}°F</p>
          <p>Low: {day.day.mintemp_c}°C / {day.day.mintemp_f}°F</p>
          <p>{day.day.condition.text}</p>
          <img src={day.day.condition.icon} alt="weather icon" />
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
