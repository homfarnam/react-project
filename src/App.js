import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Messages from "./components/messages";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <EventBind/>

        <Messages/> 
        <Counter/>
        <Greet name="farnam" heroName="assassin">
          <p>This is children props </p>{" "}
        </Greet>
        <Greet name="john" heroName="gamer">
          <button>action</button>
        </Greet>

        <Greet name="jack" heroName="archer" />

        <Welcome name="farnam" heroName="assassin" />
        <Welcome name="john" heroName="gamer" />
        <Welcome name="jack" heroName="archer" />
        <Hello />
        <br/>
        <FunctionClick/>
        <ClassClick/>
        <ParentComponent/> */}
        <UserGreeting />
       </div>
    );
  }
}

export default App;
