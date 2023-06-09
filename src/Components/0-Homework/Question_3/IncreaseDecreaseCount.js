import React, { useState } from "react";
import "./counter.css";

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <div className="valueHolder">
        <h2>The value of count is: {count}</h2>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;
