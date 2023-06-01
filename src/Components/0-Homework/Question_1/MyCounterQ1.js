import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer.js";

class MyCounterQ1 extends Component {
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
        <h1> Q1.Answer: Event-Handler </h1>
        <button onClick={this.allClicksCounter}>Click me</button>
        <CounterDisplayer count={this.state.count} />
        <hr />
      </div>
    );
  }
}
export default MyCounterQ1;
