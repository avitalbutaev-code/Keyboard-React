import React from "react";
function Languages(props) {
  let currentLanguage = props.currentLanguage;
  function sendToKeyboard(lang) {
    return <Languages language={lang} />;
  }
  if (currentLanguage === "he") {
    return (
      <>
        <button id="en" onClick={() => sendToKeyboard("en")}>
          English
        </button>
        <button id="ru" onClick={() => sendToKeyboard("ru")}>
          Russian
        </button>
      </>
    );
  }
  if (currentLanguage === "en") {
    return (
      <>
        <button id="he" onClick={() => sendToKeyboard("he")}>
          Hebrew
        </button>
        <button id="ru" onClick={() => sendToKeyboard("ru")}>
          Russian
        </button>
      </>
    );
  }
  if (currentLanguage === "ru")
    return (
      <>
        <button id="he" onClick={() => sendToKeyboard("he")}>
          Hebrew
        </button>
        <button id="en" onClick={() => sendToKeyboard("en")}>
          English
        </button>
      </>
    );
}
export default Languages;
