import React, { Component } from "react";
import CounterDisplayer from "../Question_1/CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer.js";

class MyCounterQ2 extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1> Q2.Answer: Even Events-Handler </h1>
        <button onClick={this.allClicksCounter}>Click me</button>
        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer count={this.state.count} />
        <hr />
      </div>
    );
  }
}

export default MyCounterQ2;
