import React, { Component } from "react";
import IncreaseDecreaseCount from "./IncreaseDecreaseCount.js";

class MyCounterQ3 extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
        <h1> Q3.Answer: Complete Event Handler </h1>
        <IncreaseDecreaseCount />
        <hr />
      </div>
    );
  }
}
export default MyCounterQ3;
