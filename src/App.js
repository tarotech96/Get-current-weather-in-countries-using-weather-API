import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/Weather';
import Form from './component/Form';
const API_key = '88b4b25038244d071f187242bdc98206';
const URL = 'https://api.openweathermap.org/data/2.5/';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      iconWeather: '',
      main: {},
      celcius: 0,
      temp_min: undefined,
      temp_max: undefined,
      description: '',
      error: false
    }
    this.weatherIcon = {
      Thunderstorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog'
    }
  }

  calCelcius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({
          icon: this.weatherIcon.Thunderstorm
        });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({
          icon: this.weatherIcon.Drizzle
        });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({
          icon: this.weatherIcon.Rain
        });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({
          icon: this.weatherIcon.Snow
        });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({
          icon: this.weatherIcon.Atmosphere
        });
        break;
      case rangeId === 800:
        this.setState({
          icon: this.weatherIcon.Clear
        });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({
          icon: this.weatherIcon.Clouds
        });
        break;
      default:
        this.setState({
          icon: this.weatherIcon.Clouds
        });
    }
  }

  getWeather = async (event, data) => {
    event.preventDefault();
    if (data.city && data.country) {
      const apiURL = URL + `weather?q=${data.city},${data.country}&appid=${API_key}`;
      const api_call = await fetch(apiURL);
      const response = await api_call.json();
      console.log(response);
      this.setState({
        city: response.name,
        country: response.sys.country,
        main: response.main,
        celcius: this.calCelcius(response.main.temp),
        temp_min: this.calCelcius(response.main.temp_min),
        temp_max: this.calCelcius(response.main.temp_max),
        description: response.weather[0].description
      })
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
    } else {
      this.setState({
        error: true
      })
    }


  }


  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          iconWeather={this.state.icon}
          main={this.state.main}
          celcius={this.state.celcius}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          description={this.state.description} />
      </div>
    );
  }

}


export default App;
