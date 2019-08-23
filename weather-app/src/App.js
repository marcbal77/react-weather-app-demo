//Import the react object from react package from package.json
import React from "react";

//Import Titles Component
import Titles from "./components/Titles";
//Import Form Component
import Form from "./components/Form";
//Import Weather Component
import Weather from "./components/Weather";

// initialize component
class App extends React.Component {
  //apply render method to display data
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;