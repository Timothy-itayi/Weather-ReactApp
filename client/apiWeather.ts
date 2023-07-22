const apiUrl = 'https://api.open-meteo.com/v1/forecast'

interface WeatherData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  // Add any other properties you need from the response here
}

export async function fetchWeatherData(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  try {
    const queryParams = ['latitude=' + latitude, 'longitude=' + longitude]

    const response = await fetch(`${apiUrl}?${queryParams.join('&')}`)

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()

    // Extract the desired keys and return them
    const weatherData: WeatherData = {
      latitude: data?.latitude,
      longitude: data?.longitude,
      generationtime_ms: data?.generationtime_ms,
      utc_offset_seconds: data?.utc_offset_seconds,
      timezone: data?.timezone,
      timezone_abbreviation: data?.timezone_abbreviation,
      elevation: data?.elevation,
      // Add any other properties you need from the response here
    }

    return weatherData
  } catch (error) {
    throw new Error('Error fetching weather data')
  }
}
