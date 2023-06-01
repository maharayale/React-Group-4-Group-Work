import React, { Component } from "react";

class EvenCounterDisplayer extends Component {
  render() {
    const { count } = this.props,
    evenClickCount = count % 2 === 0 ? count : count - 1;
    return <h2> DThe Count is Even Number: {evenClickCount}</h2>;
  }
}
export default EvenCounterDisplayer;
