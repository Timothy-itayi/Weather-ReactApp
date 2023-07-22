import React, { useState, useEffect } from 'react'
import { fetchWeatherData } from '../apiWeather'
import { WeatherData } from './types'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  useEffect(() => {
    // Fetch weather data based on latitude and longitude
    const latitude = 37.7749
    const longitude = -122.4194

    fetchWeatherData(latitude, longitude)
      .then((data) => {
        // Update weather data state
        setWeatherData(data)
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error)
      })
  }, [])

  return (
    <div>
      <div>
        {/* Display Weather Data */}
        {weatherData && (
          <div>
            <h1>Current Weather</h1>
            <p>Time: {weatherData.current_weather.time}</p>
            <p>Temperature: {weatherData.current_weather.temperature} °C</p>
            <p>Weather Code: {weatherData.current_weather.weathercode}</p>
            <p>Wind Speed: {weatherData.current_weather.windspeed} km/h</p>
            <p>Wind Direction: {weatherData.current_weather.winddirection}°</p>

            <h1>Hourly Forecast</h1>
            {weatherData.hourly.time.map((time, index) => (
              <div key={index}>
                <p>Time: {time}</p>
                <p>
                  Temperature: {weatherData.hourly.temperature_2m[index]} °C
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
