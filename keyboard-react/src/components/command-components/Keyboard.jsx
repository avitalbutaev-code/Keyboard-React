import { useState } from "react";
function Keyboard({
  language,
  handleDisplayChange,
  handleBackSpace,
  deleteAll,
  allToUpperCase,
  handleUndo,
}) {
  const [caps, setCaps] = useState(false);

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ","];
  const emojis = [
    "😀",
    "😎",
    "🤓",
    "🥳",
    "😇",
    "🤠",
    "🐱",
    "🐶",
    "🦄",
    "☀️",
    "🌸",
  ];
  const lettersLang = {
    en: [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      ["z", "x", "c", "v", "b", "n", "m"],
    ],
    he: [
      ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
      ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
      ["ז", "ס", "ט", "צ", "ב", "נ", "מ", "ת", "ץ"],
    ],
    ru: [
      ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
      ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
      ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
    ],
  };

  const letters = lettersLang[language];

  return (
    <div className="keyboard">
      <div className="controls">
        <button
          onClick={() => setCaps((prev) => !prev)}
          onDoubleClick={allToUpperCase}
        >
          Caps
        </button>
        <button onClick={deleteAll} className="special-key">
          Clear
        </button>
        <button onClick={() => handleDisplayChange(" ")}>Space</button>
        <button onClick={handleBackSpace}>Backspace</button>
        <button onClick={() => handleUndo()}>Undo</button>
      </div>

      <div className="keys">
        {numbers.map((num) => (
          <button key={num} onClick={() => handleDisplayChange(num)}>
            {num}
          </button>
        ))}
        <div className="emoji-keys">
          {" "}
          {emojis.map((em) => (
            <button key={em} onClick={() => handleDisplayChange(em)}>
              {em}
            </button>
          ))}
          <button
            onClick={() => {
              alert("Hello Earthlings!");
              handleDisplayChange("👽");
            }}
          >
            👽
          </button>
        </div>
        {letters.map((row, i) => (
          <div key={i} className="keyboard-row">
            {row.map((ch) => (
              <button
                key={ch}
                onClick={() =>
                  handleDisplayChange(
                    caps ? ch.toUpperCase() : ch.toLowerCase()
                  )
                }
              >
                {caps ? ch.toUpperCase() : ch.toLowerCase()}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
