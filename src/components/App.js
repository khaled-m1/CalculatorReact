import { useState } from "react";
import "../App.css";
import Header from "./Header";

function App() {
  // Kitchen
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState("");

  function addition() {
    setTotal(number1 + number2);
  }
  //subtraction
  function subtraction() {
    setTotal(number1 - number2);
  }
  //multiplication
  function multiplication() {
    setTotal(number1 * number2);
  }
  //division
  function division() {
    setTotal(number1 / number2);
  }
  //percent
  function percent() {
    setTotal(number1 % number2);
  }
  return (
    // Cake
    <>
      <div className="App">
        <div className="container">
          <Header />
          {/* Two input */}
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={number1}
              onChange={(e) => setNumber1(+e.target.value)}
            />
            &nbsp; &nbsp;
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={number2}
              onChange={(e) => setNumber2(+e.target.value)}
            />
          </div>
          {/* btn groub */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={addition}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={subtraction}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={multiplication}
            >
              *
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={division}
            >
              /
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={percent}
            >
              %
            </button>
          </div>
          {/* text to show result */}
          <div className="resultText">
            <h3>{total}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
