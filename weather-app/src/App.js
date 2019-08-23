//Import the react object from react package from package.json
import React from "react";

//Import Titles Component
import Titles from "./components/Titles";
//Import Form Component
import Form from "./components/Form";
//Import Weather Component
import Weather from "./components/Weather";


const API_KEY = "3948607ceafbbf3a5a2fe6a01e37c67f"

// initialize component
class App extends React.Component {
  // initial state - enables changes across state when changed - no constructor require post react 16 release
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // get weather method * e (event object) + consts to hit api + api call with event literals + await (+JSON)
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    //prevent throw error when empty state exists in front end and button is clicked
    if (city && country) {
      console.log(data);
      // Set the values of the initial states to determinate values - no direct manipulation of the state
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "undefined"
      });
    } else {
      
    }
  }

  //apply render method to display data
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;