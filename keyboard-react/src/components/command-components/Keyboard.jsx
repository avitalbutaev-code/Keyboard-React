import React from "react";
import CommandCenter from "../CoomandCenter";
// import { useState } from "react";
function Keyboard({ language }) {
  console.log(language);
  const enLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const heLetters = [
    "א",
    "ב",
    "ג",
    "ד",
    "ה",
    "ו",
    "ז",
    "ח",
    "ט",
    "י",
    "כ",
    "ל",
    "מ",
    "נ",
    "ס",
    "ע",
    "פ",
    "צ",
    "ק",
    "ר",
    "ש",
    "ת",
  ];
  const ruLetters = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
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
      <div className="keyboard">
        <button key="spaceBtn" className="key-button">
          Space
        </button>
        <button key="backSpaceBtn" className="key-button">
          Backspace
        </button>
        {letters.map((letter) => (
          <button key={letter} className="key-button">
            {letter}
          </button>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
