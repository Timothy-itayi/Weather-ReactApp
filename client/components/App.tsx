import React, { useState, useEffect } from 'react'
import { fetchWeatherData } from '../apiWeather'
import { WeatherData } from './types'

import { setWeather } from '../slices/weatherSlice'
import { useAppDispatch } from '../hooks/hooks'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Fetch weather data based on latitude and longitude
    const latitude = 52.52
    const longitude = 13.419998

    fetchWeatherData(latitude, longitude)
      .then((data) => {
        // Update local weather data state
        setWeatherData(data)
        // Dispatch action to update the weather data in the Redux store
        dispatch(setWeather(data))
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error)
      })
  }, [dispatch])

  return (
    <div>
      <div>
        {/* Display header */}
        <h1>Weather App</h1>

        {/* Display Weather Data */}
        {weatherData ? ( // Check if weatherData exists before accessing its properties
          <div>
            <h2>Weather Forecast</h2>
            <p>Latitude: {weatherData.latitude}</p>
            <p>Longitude: {weatherData.longitude}</p>
            <p>Generation Time: {weatherData.generationtime_ms} ms</p>
            <p>UTC Offset: {weatherData.utc_offset_seconds} seconds</p>
            <p>Timezone: {weatherData.timezone}</p>
            <p>Timezone Abbreviation: {weatherData.timezone_abbreviation}</p>
            <p>Elevation: {weatherData.elevation}</p>
            {/* Add other properties you need from the response */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default App
