import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  };

  const clear = () => setResult("");

  const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">{result}</div>
      <div className="input">
        <button className="operator-btn" onClick={clear}>
          AC
        </button>
        <button className="operator-btn" onClick={deleteEl}>
          DEL
        </button>
        <button className="operator-btn" id="." onClick={handleClick}>
          .
        </button>
        <button className="operator-btn" id="/" onClick={handleClick}>
          /
        </button>
        <button onClick={handleClick} id="7">
          7
        </button>
        <button onClick={handleClick} id="8">
          8
        </button>
        <button onClick={handleClick} id="9">
          9
        </button>
        <button className="operator-btn" onClick={handleClick} id="*">
          *
        </button>
        <button onClick={handleClick} id="4">
          4
        </button>
        <button onClick={handleClick} id="5">
          5
        </button>
        <button onClick={handleClick} id="6">
          6
        </button>
        <button className="operator-btn" onClick={handleClick} id="-">
          -
        </button>
        <button onClick={handleClick} id="1">
          1
        </button>
        <button onClick={handleClick} id="2">
          2
        </button>
        <button onClick={handleClick} id="3">
          3
        </button>
        <button className="operator-btn" onClick={handleClick} id="+">
          +
        </button>
        <button onClick={handleClick} id="00">
          00
        </button>
        <button onClick={handleClick} id="0">
          0
        </button>
        <button className="operator-btn equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
