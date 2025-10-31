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

  function addDisplay(newDisplay) {
    //   const historyCopy = history.slice(0, pointer + 1);
    //   historyCopy.push(newDisplay);
    //   const start = Math.max(0, historyCopy.length - maxHistory);
    //   const newHistory = historyCopy.slice(start);
    //   const newPointer = newHistory.length - 1;
    //   setHistory(newHistory);
    //   setPointer(newPointer);
    setDisplay(newDisplay);
  }

  function handleDisplayChange(character) {
    const newItem = { char: character, style: { ...currentStyle } };
    const newDisplay = [...display, newItem];
    addDisplay(newDisplay);
  }

  function handleBackSpace() {
    if (display.length === 0) return;
    const newDisplay = display.slice(0, -1);
    addDisplay(newDisplay);
  }

  function deleteAll() {
    if (display.length === 0) return;
    addDisplay([]);
  }

  function allToUpperCase() {
    if (display.length === 0) return;
    const newDisplay = display.map((item) => ({
      ...item,
      char: item.char.toUpperCase(),
    }));
    addDisplay(newDisplay);
  }
  function allFontChange(newFont) {
    if (display.length === 0) return;
    const newDisplay = display.map((item) => ({
      ...item,
      style: {
        ...item.style,
        fontFamily: newFont,
      },
    }));
    setCurrentStyle((prev) => ({ ...prev, fontFamily: newFont }));
    addDisplay(newDisplay);
  }

  function allColorChange(newColor) {
    if (display.length === 0) return;
    const newDisplay = display.map((item) => ({
      ...item,
      style: {
        ...item.style,
        color: newColor,
      },
    }));
    setCurrentStyle((prev) => ({ ...prev, color: newColor }));
    addDisplay(newDisplay);
  }
  function allSizeChange(newSize) {
    if (display.length === 0) return;
    const newDisplay = display.map((item) => ({
      ...item,
      style: {
        ...item.style,
        fontSize: newSize,
      },
    }));
    setCurrentStyle((prev) => ({ ...prev, fontSize: newSize }));
    addDisplay(newDisplay);
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
        allColorChange={allColorChange}
        allFontChange={allFontChange}
        allSizeChange={allSizeChange}
      />
    </div>
  );
}
export default Display;
