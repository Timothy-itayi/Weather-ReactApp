const apiUrl = 'https://api.open-meteo.com/v1/gem'
const latitude = 37.7749 // Replace with the desired latitude value
const longitude = -122.4194 // Replace with the desired longitude value
const hourlyParams = ['current_weather', 'temperature_2m']

export async function fetchWeatherData(latitude: number, longitude: number) {
  try {
    const apiUrl = 'https://api.open-meteo.com/v1/gem'
    const queryParams = [
      'current_weather=true',
      'temperature_unit=celsius',
      'windspeed_unit=kmh',
      'precipitation_unit=mm',
      'timeformat=iso8601',
      'timezone=GMT',
    ]

    const response = await fetch(
      `${apiUrl}?latitude=${latitude}&longitude=${longitude}&${queryParams.join(
        '&'
      )}`
    )

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()

    // Extract the desired keys
    const currentWeather = data?.current_weather
    const temperatureUnit = data?.temperature_unit
    const windSpeedUnit = data?.windspeed_unit
    const precipitationUnit = data?.precipitation_unit
    const timeFormat = data?.timeformat
    const timezone = data?.timezone

    // Do something with the extracted data
    console.log('Current Weather:', currentWeather)
    console.log('Temperature Unit:', temperatureUnit)
    console.log('Wind Speed Unit:', windSpeedUnit)
    console.log('Precipitation Unit:', precipitationUnit)
    console.log('Time Format:', timeFormat)
    console.log('Timezone:', timezone)
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

fetchWeatherData(latitude, longitude)
