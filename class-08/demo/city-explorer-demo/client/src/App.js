import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {
  /*
  ------------------------------------------
  - step one 
     : as a user I want to display a form where I can type down the name of the city and display the information for that city from our API

  - how to implement, code a form that will update the state of the city name 
  - Now that we have the data in the state, I want to match or search the data that I want from the API



  ------------------------------------------
  */

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      lat: '',
      lon: '',
      weatherData: '',
      displayData: false,
    }
  };

  updateCityNameState = (e) => {
    // console.log(e.target.value);
    // updating the state 
    this.setState({
      cityName: e.target.value
    });
    // console.log(this.state);
  }

  getCityData = async (e) => {
    e.preventDefault();
    await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.cityName}&format=json`).then(locationResponse => {

      this.setState({
        cityData: locationResponse.data[0],
        lat: locationResponse.data[0].lat,
        lon: locationResponse.data[0].lon,
      });
      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherResponse => {
        this.setState({
          weatherData: weatherResponse.data,
          displayData: true
        })

      });
    });

  }


  render() {
    return (
      <div>
        <h2>City Explorer</h2>
        <form onSubmit={this.getCityData}>
          <label>
            City Name:
          </label>
          <input onChange={this.updateCityNameState} type="text" />
          <br></br>
          <br></br>
          <input type="submit" value="get City" />
        </form>
        {/* Conditional Rendering to display the data after the request was made */}
        {this.state.displayData &&
          <div>

            <p>
              {this.state.cityData.display_name}
            </p>

            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} alt='' />

            {
              this.state.weatherData.map(weatherObj => {
                return (
                  <>
                    <p>
                      {weatherObj.description}
                    </p>
                    <p>
                      {weatherObj.date}
                    </p>
                  </>
                )
              })
            }

          </div>
        }
      </div>
    )
  }
}

export default App
