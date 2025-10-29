import React from "react";
import { useState } from "react";
import CommandCenter from "./CoomandCenter";
function Display() {
  const [display, setDisplay] = useState("");
  function handleDisplayChange(character) {
    setDisplay(display + character);
  }
  function handleBackSpace() {
    setDisplay(display.slice(0, -1));
  }
  function deleteAll() {
    setDisplay("");
  }

  function allToUpperCase() {
    setDisplay(display.toUpperCase());
  }
  return (
    <div>
      {display}
      <CommandCenter
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
        deleteAll={deleteAll}
        allToUpperCase={allToUpperCase}
      />
    </div>
  );
}

export default Display;
