import React, { Component } from "react";

const CounterDisplayer = (props) => {
  return (
    <h2>Number of clicks: {props.count}</h2>
  );
}

export default CounterDisplayer;
