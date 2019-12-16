import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Welcome from './components/welcome';
import Hello from './components/hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name='farnam' heroName='assassin'>
          <p>This is children props </p> </Greet>
        <Greet name='john' heroName='gamer'>
          <button>action</button>
        </Greet>

        <Greet name='jack' heroName='archer'/>

        <Welcome name='farnam' heroName='assassin'/>
        <Welcome name='john' heroName='gamer'/>
        <Welcome name='jack' heroName='archer'/>
        <Hello />
      </div>
    )
  }
}

export default App;
