import axios from "axios"
import { useState, useEffect } from "react"

function WeatherTable({weather}) {

  const [weatherData, setWeatherData] = useState(null)


  useEffect( () => {

    async function getWeather() {
      const {data: { weather }} = await axios.get('https://mjgh1cx0le.execute-api.us-west-1.amazonaws.com/default/weatherAPI')
      console.log(weather)
      setWeatherData(weather)
    }
  
    getWeather()

  }, [])

  return (
    <div className="weather-container">
      <table>
        <tbody>
          <tr>
            <th>
              <div className="table-header">Weather API Results</div>
            </th>
          </tr>
          <tr>
            <td colSpan="2">
              Weather in {weatherData?.location} at {weatherData?.time}
            </td>
          </tr>
          <tr>
            <td width="20px">
              <img src={weatherData?.icon_weather} width="120" height="120"/>
            </td>
            <td>
              <div>Current: {weatherData?.temperature_current}</div>
              <div>Low: {weatherData?.temperature_low}</div>
              <div>High: {weatherData?.temperature_high}</div>
              <div>Wind: {weatherData?.temperature_high}</div>
              <div>Humidity: {weatherData?.humidity}</div>
              <div>Wind: {weatherData?.wind}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default WeatherTable;
