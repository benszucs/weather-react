import React from 'react';
import PropTypes from 'prop-types';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import ThreeDayWeather from './components/ThreeDayWeather';

const API_KEY = "36384422921b15a2d48127c4c325ddc0";

class App extends React.Component {
  state= {
    todaysWeather:
    {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    },
    threeDayWeather:
    {
      temperature: undefined,
      humidity: undefined,
      description: undefined,
    }
  }

  getWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        todaysWeather:
        {
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.substr(1),
          error: undefined
        },
        threeDayWeather:
        {
          temperature: undefined,
          humidity: undefined,
          description: undefined,
        }
      });
    } else {
      this.setState({
        todaysWeather:
        {
        error: "Please enter values for city and country."
        }
      });
    }
  };

  threeDayWeatherData = async (e) => {
    e.preventDefault();
    const city = this.state.todaysWeather.city;
    const country = this.state.todaysWeather.country;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    console.log(data);

    this.setState({
      threeDayWeather:
      {
        temperature: [
          data.list[8].main.temp,
          data.list[16].main.temp,
          data.list[24].main.temp
        ],
        humidity: [
          data.list[8].main.humidity,
          data.list[16].main.humidity,
          data.list[24].main.humidity
        ],
        description: [
          data.list[8].weather[0].description.charAt(0).toUpperCase() + data.list[8].weather[0].description.substr(1),
          data.list[16].weather[0].description.charAt(0).toUpperCase() + data.list[16].weather[0].description.substr(1),
          data.list[24].weather[0].description.charAt(0).toUpperCase() + data.list[24].weather[0].description.substr(1)
        ],
      }
    });
  };

  render() {
    return(
      <div>
        <div class="bgPic">
          <div class="main my-5">
            <div class="container">
              <Title />
              <Form getWeatherData={this.getWeatherData}/>
              <Weather
                city={this.state.todaysWeather.city}
                country={this.state.todaysWeather.country}
                temperature={this.state.todaysWeather.temperature}
                humidity={this.state.todaysWeather.humidity}
                description={this.state.todaysWeather.description}
                error={this.state.todaysWeather.error}
                threeDayWeatherData={this.threeDayWeatherData}
              />
              <ThreeDayWeather
                temp={this.state.threeDayWeather.temperature}
                hum={this.state.threeDayWeather.humidity}
                desc={this.state.threeDayWeather.description}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
