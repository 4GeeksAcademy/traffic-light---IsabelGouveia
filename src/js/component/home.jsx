import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");

  const handleClick = () => {
    // Logic to cycle through colors
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else if (color === "green") {
      setColor("red");
    }
  };

  return (
    <div className="traffic-light">
      <div className={"light red" + (color === "red" ? " glow" : "")}></div>
      <div className={"light yellow" + (color === "yellow" ? " glow" : "")}></div>
      <div className={"light green" + (color === "green" ? " glow" : "")}></div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default Home;

