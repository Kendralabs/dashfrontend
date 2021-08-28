import React,{useState,useEffect} from 'react'
import { fetchWeather } from './HopeApi';
import './WContainer.css'

const WContainer = () => {

    const [query, setQuery] = useState('london');
    
    const search = e => {
       // if(e.key === 'Enter') {
        fetchWeather(query).then(data => data.json()).then(data => {
            console.log(data)
            setWeather(data);
        })
        //setQuery('');
        //}
    }
    const [weather, setWeather] = useState({});
    useEffect(() => {
        search();
    },[query])
    return (
        <div className="main-container">
             <input type="text"className="search"placeholder="Search..." value={query}onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />

             {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp - 273.15)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default WContainer