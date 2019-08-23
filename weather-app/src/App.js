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

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  //apply render method to display data
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;