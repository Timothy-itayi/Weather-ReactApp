import React, { useState, useEffect } from 'react'
import { fetchWeatherData } from '../apiWeather'

function App() {
  const [weatherData, setWeatherData] = useState<any>(null)

  useEffect(() => {
    // Fetch weather data based on latitude and longitude
    const latitude = 37.7749
    const longitude = -122.4194

    fetchWeatherData(latitude, longitude)
      .then((data: any) => {
        // Update weather data state
        setWeatherData(data)
        console.log('Weather Data:', data)
      })
      .catch((error: any) => {
        console.error('Error fetching weather data:', error)
      })
  }, [])

  return (
    <div>
      <div>
        {/* Display Weather Data */}
        {weatherData && (
          <ul>
            <li>Current Weather: {weatherData.current_weather}</li>
            <li>Temperature Unit: {weatherData.temperature_unit}</li>
            <li>Wind Speed Unit: {weatherData.windspeed_unit}</li>
            <li>Precipitation Unit: {weatherData.precipitation_unit}</li>
            <li>Time Format: {weatherData.timeformat}</li>
            <li>Timezone: {weatherData.timezone}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
