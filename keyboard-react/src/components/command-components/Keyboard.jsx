import React from "react";
import CommandCenter from "../CoomandCenter";
function Keyboard({ language, handleDisplayChange, handleBackSpace }) {
  const enLetters = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];
  const heLetters = [
    ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
    ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל"],
    ["ז", "ס", "ט", "צ", "ב", "נ", "מ"],
  ];
  const ruLetters = [
    ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
    ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
    ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
  ];

  let letters;
  switch (language) {
    case "en":
      letters = [...enLetters];
      break;
    case "ru":
      letters = [...ruLetters];
      break;
    case "he":
      letters = [...heLetters];
      break;
    default:
  }

  return (
    <>
      <div className="keyboard commandCenter">
        <button
          key="spaceBtn"
          className="key-button"
          onClick={() => handleDisplayChange(" ")}
        >
          Space
        </button>
        <button
          onClick={() => handleBackSpace()}
          key="backSpaceBtn"
          className="key-button"
        >
          Backspace
        </button>
        {letters.map((line, index) => (
          <div key={index} className="keyboard-row">
            {line.map((letter) => (
              <button
                onClick={() => handleDisplayChange(letter)}
                key={letter}
                className="key-button"
              >
                {letter}
              </button>
            ))}
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
