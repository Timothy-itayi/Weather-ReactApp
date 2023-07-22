const apiUrl = 'https://api.open-meteo.com/v1/gem'
const latitude = 37.7749 // Replace with the desired latitude value
const longitude = -122.4194 // Replace with the desired longitude value
const hourlyParams = ['weather', 'temperature_2m']

async function fetchWeatherData() {
  try {
    const response = await fetch(
      `${apiUrl}?latitude=${latitude}&longitude=${longitude}&hourly=${hourlyParams.join(
        ','
      )}`
    )
    const data = await response.json()

    // Access the 'weather' and 'temperature_2m' keys
    const weatherData = data?.hourly?.weather
    const temperatureData = data?.hourly?.temperature_2m

    // Do something with the weather and temperature data
    console.log('Weather Data:', weatherData)
    console.log('Temperature Data:', temperatureData)
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

fetchWeatherData()
