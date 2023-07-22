const apiUrl = 'https://api.open-meteo.com/v1/gem'

interface WeatherData {
  current_weather: {
    time: string
    temperature: number
    weathercode: number
    windspeed: number
    winddirection: number
  }
  temperature_unit: string
  windspeed_unit: string
  precipitation_unit: string
  timeformat: string
  timezone: string
}

export async function fetchWeatherData(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  try {
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

    // Extract the desired keys and return them
    const currentWeather = data?.current_weather
    const temperatureUnit = data?.temperature_unit
    const windSpeedUnit = data?.windspeed_unit
    const precipitationUnit = data?.precipitation_unit
    const timeFormat = data?.timeformat
    const timezone = data?.timezone

    const weatherData: WeatherData = {
      current_weather: currentWeather,
      temperature_unit: temperatureUnit,
      windspeed_unit: windSpeedUnit,
      precipitation_unit: precipitationUnit,
      timeformat: timeFormat,
      timezone: timezone,
    }

    return weatherData
  } catch (error) {
    throw new Error('Error fetching weather data')
  }
}
