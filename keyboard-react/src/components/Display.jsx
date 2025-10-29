import React from "react";
import { useState } from "react";
import CommandCenter from "./CoomandCenter";
function Display() {
  const [display, setDisplay] = useState("");
  function handleDisplayChange(character) {
    setDisplay(display + character);
  }
  function handleBackSpace() {
    console.log("sdj");
    setDisplay(display.slice(0, -1));
  }
  return (
    <div>
      {display}
      <CommandCenter
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
      />
    </div>
  );
}

export default Display;
