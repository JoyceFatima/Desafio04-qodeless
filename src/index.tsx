import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./components/Button/Button";

ReactDOM.render(
  <React.StrictMode>
    <Button handleClick={function () {
      alert ("você apertou o botão.")
    }} />
  </React.StrictMode>,
  document.getElementById("root")
);
