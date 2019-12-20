import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    // return this.state.isLoggedIn && <div>Welcome Farnam</div>


    // #3
    return this.state.isLoggedIn ? (
      <div>Welcome Farnam</div>
    ) : (
      <div>Welcome Guest</div>
    );

    // #1
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Farnam</div>

    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }

    // #2
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Farnam</div>
    // } else{
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // return (
    //     <div>
    //       <div>
    //         Welcome Farnam
    //       </div>
    //       <div>Welcome Guest</div>
    //     </div>

    // )
  }
}

export default UserGreeting;
