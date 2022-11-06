import "./CurrentWeather.css";
const CurrentWeather = (props) => {
  return (
    <div className="weather">
      <div className="weather-top">
        <div>
        <p className="weather-city">{props.data.city}</p>
        <p className="weather-description">{props.data.weather[0].description}</p>
        <img alt="weather" className="weather-icon" src={`icons/${props.data.weather[0].icon}.png`}/>
        </div>
      </div>
      <div className="weather-bottom">
        <p className="weather-temperature">{Math.round(props.data.main.temp)}</p>
        <div className="weather-details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(props.data.main.feels_like)}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{props.data.wind.speed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{props.data.main.humidity}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{props.data.main.pressure} hPA</span>
          </div>
        </div>
         </div>
      
    </div>
  )
}

export default CurrentWeather