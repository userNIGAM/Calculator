import { useState } from "react";
import "./Calculator.css";
import {
  FaRuler,
  FaWeight,
  FaThermometerHalf,
  FaTachometerAlt,
  FaClock,
  FaDatabase,
  FaTag,
  FaCube,
  FaSortNumericUp,
  FaGlobe,
  FaExpand,
  FaHeartbeat,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("calculator");
  const [selectedConverter, setSelectedConverter] = useState(null);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("0");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  const converters = [
    { name: "Currency", icon: <FaMoneyBillWave /> },
    { name: "Length", icon: <FaRuler /> },
    { name: "Mass", icon: <FaWeight /> },
    { name: "Area", icon: <FaExpand /> },
    { name: "Time", icon: <FaClock /> },
    { name: "Data", icon: <FaDatabase /> },
    { name: "Discount", icon: <FaTag /> },
    { name: "Volume", icon: <FaCube /> },
    { name: "Numeral System", icon: <FaSortNumericUp /> },
    { name: "Speed", icon: <FaTachometerAlt /> },
    { name: "Temperature", icon: <FaThermometerHalf /> },
    { name: "BMI", icon: <FaHeartbeat /> },
  ];

  return (
    <div className="calculator redmi-style">
      <div className="mode-switch">
        <button
          className={mode === "calculator" ? "active" : ""}
          onClick={() => {
            setMode("calculator");
            setSelectedConverter(null);
          }}
        >
          Calculator
        </button>
        <button
          className={mode === "converter" ? "active" : ""}
          onClick={() => setMode("converter")}
        >
          Converter
        </button>
      </div>
      {mode === "calculator" ? (
        <>
          <div className="display">
            <div className="input">{input}</div>
            <div className="result">{result || " "}</div>
          </div>
          <div className="buttons">
            {[
              "AC",
              "C",
              "%",
              "/",
              "7",
              "8",
              "9",
              "*",
              "4",
              "5",
              "6",
              "-",
              "1",
              "2",
              "3",
              "+",
              "00",
              "0",
              ".",
              "=",
              "",
            ].map((btn, index) =>
              btn ? (
                <button
                  key={index}
                  onClick={() => handleClick(btn)}
                  className={`btn ${
                    btn === "C" ? "clear" : btn === "=" ? "equal" : ""
                  }`}
                >
                  {btn}
                </button>
              ) : (
                <div key={index} className="placeholder"></div>
              )
            )}
          </div>
        </>
      ) : (
        <div className="converter">
          {!selectedConverter ? (
            <div className="converter-list">
              {converters.map((converter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedConverter(converter.name)}
                  className="converter-btn"
                >
                  {converter.icon} {converter.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="converter-screen">
              <button
                className="back-btn"
                onClick={() => setSelectedConverter(null)}
              >
                Back
              </button>
              <h2>{selectedConverter} Converter</h2>
              <p>Conversion functionality coming soon...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
