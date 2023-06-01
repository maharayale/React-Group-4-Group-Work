import React from "react";
import "./App.css";

// Import each question Event counter component
import MyCounterQ1 from "./Components/0-Homework/Question_1/MyCounterQ1";
import MyCounterQ2 from "./Components/0-Homework/Question_2/MyCounterQ2";
import MyCounterQ3 from "./Components/0-Homework/Question_3/MyCounterQ3";
import MyCounterQ4 from "./Components/0-Homework/Question_4/MyCounterQ4";

function App() {
  return (
    <div className="App">
      <MyCounterQ1 />
      <MyCounterQ2 />
      <MyCounterQ3 />
      <MyCounterQ4 />
    </div>
  );
}

export default App;
