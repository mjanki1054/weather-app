import './current-weather.css'
import React from "react";

function convertTimestampToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    // const seconds = "0" + date.getSeconds();
    return `${hours}:${minutes.substr(-2)}`;
  }
  

const CurrentWeather = ({ data }) => {

const sunrise = convertTimestampToTime(data.sys.sunrise);
const sunset = convertTimestampToTime(data.sys.sunset);
    

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>sunrise</span>
                        <span className='parameter-value'>{sunrise} AM</span>
                    </div>
                    <div className='parameter-row'>

                    {/* const timestamp = Date.now(); // This would be the timestamp you want to format */}

{/* console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)); */}

                        <span className='parameter-label'>sunset</span>
                        <span className='parameter-value'>{sunset} PM</span>
                        
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;