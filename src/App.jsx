import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./Components/Calculator";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
