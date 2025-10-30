import React, { useState } from "react";
import CommandCenter from "./CommandCenter";

function Display() {
  const [display, setDisplay] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({
    color: "black",
    fontFamily: "Arial",
    fontSize: "2rem",
  });

  function handleDisplayChange(character) {
    setDisplay((prev) => [...prev, { char: character, style: currentStyle }]);
  }

  function handleBackSpace() {
    setDisplay((prev) => prev.slice(0, -1));
  }

  function deleteAll() {
    setDisplay([]);
  }

  function allToUpperCase() {
    setDisplay((prev) =>
      prev.map((item) => ({
        ...item,
        char: item.char.toUpperCase(),
      }))
    );
  }

  return (
    <div className="display">
      <div className="text-output">
        {display.map((item, i) => (
          <span key={i} style={item.style}>
            {item.char}
          </span>
        ))}
      </div>

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
