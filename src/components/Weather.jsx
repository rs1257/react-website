import React, { Component, Fragment } from 'react';
import './Weather.css';

const url = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=0c3ed6ebbd6ea5f789cb4bbf96395276&units=metric&q=Leeds';
class Weather extends Component {
    constructor(props) {
      super(props);
      this.state = {
        location: "",
        temp: "",
        weather: ""
      };
    }

    componentDidMount() {
      this.updateWeather();

      this.intervalID = setInterval(
        () => this.tick(),
        60000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    tick() {
      this.updateWeather();
      console.log("Weather Updated");
    }

    render() {
      return (
        <Fragment>
        <div className="WeatherTile">
          <div className="Location">{this.state.location}</div>
          <hr></hr>
          <div className="Temperature">{Math.round(this.state.temp)}&#8451;</div>
          <div className="Weather">{this.state.weather}</div>
        </div>
      </Fragment>
      );
    }

  async updateWeather(){
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        location: data.name,
        temp: data.main.temp,
        weather: data.weather[0].main
      }); 
    } catch (error) {
      console.log(error);
    }
  }

}
  export default Weather;