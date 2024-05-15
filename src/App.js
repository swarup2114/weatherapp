import React, { useState } from 'react';
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=012316680c508f1a494c2cb3e39c875d`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('No data found');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setError('');
          console.log(data);
        })
        .catch(error => {
          setData({});
          setError('No data found');
        });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
        />
      </div>
      <div className="container">
        {error && <p className="error">{error}</p>}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
