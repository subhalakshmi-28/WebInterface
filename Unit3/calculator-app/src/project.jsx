import React, { useState } from "react";
import "./project.css";
function Project() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const add = () => setResult(Number(num1) + Number(num2));
  const sub = () => setResult(Number(num1) - Number(num2));
  const mul = () => setResult(Number(num1) * Number(num2));
  const div = () => setResult(Number(num1) / Number(num2));
  const reset = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };
  return (
    <div className="container">
      <div className="card">
        <h2>Calculator</h2>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="buttons">
          <button onClick={add}>+</button>
          <button onClick={sub}>−</button>
          <button onClick={mul}>×</button>
          <button onClick={div}>÷</button>
        </div>
        <h3>Result: {result}</h3>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default Project;