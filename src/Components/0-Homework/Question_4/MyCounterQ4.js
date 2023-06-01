import React, { useState, useEffect } from "react";
import "./counter.css";

const UseEffectForTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Hello world!");
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const incrementValues = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <h1> Q4.Answer: Event Handler in Functional Compnent </h1>
      </div>
      <button onClick={incrementValues}>Increment</button>
      {/* Count {this.state.count} */}

      <div className="valueHolder">
        <h2> The Number of count is: {count}</h2>
      </div>
    </div>
  );
};

export default UseEffectForTitle;
