import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };
    // this.clickHandler=this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({
  //     message: "Goodbye"
  //   });
  //   console.log(this);
  // }

  clickHandler=() =>{
    this.setState({
      message:'Goodbye'
    })
    console.log('Goodbye');
  }

  render() {
    return (
      <div>
        <br />
        <div>{this.state.message}</div>
        
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>   bad performamnce*/}  
        {/* <button onClick={() => this.clickHandler()}>Click</button>  not good*/}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    );
  }
}

export default EventBind;
