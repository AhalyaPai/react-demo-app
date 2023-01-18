import React, { useState } from "react";
import { Counter } from "./Counter";
import "./index.css";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide counter" : "Show counter"}
      </button>
      {showCounter && <Counter />}
    </div>
  );
}
