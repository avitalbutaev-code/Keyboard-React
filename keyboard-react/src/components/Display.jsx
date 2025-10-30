import React, { useState } from "react";
import CommandCenter from "./CommandCenter";

const maxHistory = 10;

function Display() {
  const [display, setDisplay] = useState([]);
  const [history, setHistory] = useState([[]]);
  const [pointer, setPointer] = useState(0);
  const [currentStyle, setCurrentStyle] = useState({
    color: "black",
    fontFamily: "Arial",
    fontSize: "20px",
  });

  function pushSnapshot(newSnapshot) {
    const truncated = history.slice(0, pointer + 1);
    truncated.push(newSnapshot);
    const start = Math.max(0, truncated.length - maxHistory);
    const newHistory = truncated.slice(start);
    const newPointer = newHistory.length - 1;

    setHistory(newHistory);
    setPointer(newPointer);
    setDisplay(newSnapshot);
  }
  function handleDisplayChange(character) {
    const newItem = { char: character, style: { ...currentStyle } };
    const newDisplay = [...display, newItem];
    pushSnapshot(newDisplay);
  }

  function handleBackSpace() {
    if (display.length === 0) return;
    const newDisplay = display.slice(0, -1);
    pushSnapshot(newDisplay);
  }

  function deleteAll() {
    if (display.length === 0) return;
    pushSnapshot([]);
  }

  function allToUpperCase() {
    if (display.length === 0) return;
    const newDisplay = display.map((item) => ({
      ...item,
      char: item.char.toUpperCase(),
    }));
    pushSnapshot(newDisplay);
  }

  function handleUndo() {
    if (pointer <= 0) return;
    const newPointer = pointer - 1;
    setPointer(newPointer);
    setDisplay(history[newPointer]);
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
        handleUndo={handleUndo}
      />
    </div>
  );
}

export default Display;
