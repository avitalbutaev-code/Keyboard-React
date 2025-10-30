import React, { useState } from "react";
import CommandCenter from "./CoomandCenter";
function Display() {
  const [currentStyle, setCurrentStyle] = useState({
    color: "black",
    fontFamily: "ariel",
    fontSize: "2rem",
  });
  const [display, setDisplay] = useState([]);

  function handleDisplayChange(character) {
    setDisplay([
      ...display,
      <span key={display.length} style={currentStyle}>
        {character}
      </span>,
    ]);
  }

  function handleBackSpace() {
    setDisplay(display.slice(0, -1));
  }

  function deleteAll() {
    setDisplay([]); // fixed
  }

  function allToUpperCase() {
    const updated = display.map((element, index) => (
      <span key={index} style={element.props.style}>
        {String(element.props.children).toUpperCase()}
      </span>
    ));
    setDisplay(updated);
  }

  return (
    <div>
      {display}
      <CommandCenter
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
        deleteAll={deleteAll}
        allToUpperCase={allToUpperCase}
        setCurrentStyle={setCurrentStyle}
      />
    </div>
  );
}

export default Display;
