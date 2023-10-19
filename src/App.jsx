import { useState } from "react";
import "./index.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  };

  const clear = () => {
    setResult("");
  };

  const deleteEl = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="output">
        <input type="text" disabled value={result} />
      </div>

      <div className="input">
        <button onClick={clear}>AC</button>
        <button onClick={deleteEl}>DEL</button>
        <button id="." onClick={handleClick}>
          .
        </button>
        <button className="operator" id="/" onClick={handleClick}>
          /
        </button>

        <button id="7" onClick={handleClick}>
          7
        </button>
        <button id="8" onClick={handleClick}>
          8
        </button>
        <button id="9" onClick={handleClick}>
          9
        </button>
        <button id="*" className="operator" onClick={handleClick}>
          *
        </button>

        <button id="4" onClick={handleClick}>
          4
        </button>
        <button id="5" onClick={handleClick}>
          5
        </button>
        <button id="6" onClick={handleClick}>
          6
        </button>
        <button id="-" onClick={handleClick} className="operator">
          -
        </button>

        <button id="1" onClick={handleClick}>
          1
        </button>
        <button id="2" onClick={handleClick}>
          2
        </button>
        <button id="3" onClick={handleClick}>
          3
        </button>
        <button id="+" onClick={handleClick} className="operator">
          +
        </button>

        <button id="00" onClick={handleClick}>
          00
        </button>
        <button id="0" onClick={handleClick}>
          0
        </button>
        <button className="col-span-2 operator" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
