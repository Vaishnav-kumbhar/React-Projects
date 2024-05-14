import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#FF0000");
  let body = document.querySelector(".body");

  return (
    <div className="wrapper">
      <div
        className="colors red"
        onClick={() => {
          body.style.backgroundColor = color;
        }}
      >
        <div>Red</div>
      </div>
      <div
        className="colors green"
        onClick={() => {
          body.style.backgroundColor = "#00FF00";
        }}
      >
        <div>Green</div>
      </div>
      <div
        className="colors yellow"
        onClick={() => {
          body.style.backgroundColor = "#FFFF00";
        }}
      >
        <div>Yellow</div>
      </div>
      <div
        className="colors pink"
        onClick={() => {
          body.style.backgroundColor = "#FFC0CB";
        }}
      >
        <div>Pink</div>
      </div>
    </div>
  );
}

export default App;
