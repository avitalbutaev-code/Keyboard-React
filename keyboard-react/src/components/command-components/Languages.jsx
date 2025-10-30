import React from "react";
import CommandCenter from "../CommandCenter";
import Keyboard from "./Keyboard";
function Languages(props) {
  let currentLanguage = props.currentLanguage;
  function sendToKeyboard(lang, handleLanguageChange) {
    handleLanguageChange(lang);
    return (
      <Keyboard
        language={lang}
        handleDisplayChange={props.handleDisplayChange}
        handleBackSpace={props.handleBackSpace}
        deleteAll={props.deleteAll}
        allToUpperCase={props.allToUpperCase}
      />
    );
  }
  if (currentLanguage === "he") {
    return (
      <>
        <div className="commandCenter">
          <button
            id="en"
            onClick={() => {
              sendToKeyboard("en", props.handleLanguageChange);
            }}
          >
            English
          </button>
          <button
            id="ru"
            onClick={() => sendToKeyboard("ru", props.handleLanguageChange)}
          >
            Russian
          </button>
        </div>
      </>
    );
  }
  if (currentLanguage === "en") {
    return (
      <>
        <div className="commandCenter">
          <button
            id="he"
            onClick={() => {
              console.log("He clicked!");
              sendToKeyboard("he", props.handleLanguageChange);
            }}
          >
            Hebrew
          </button>
          <button
            id="ru"
            onClick={() => sendToKeyboard("ru", props.handleLanguageChange)}
          >
            Russian
          </button>
        </div>
      </>
    );
  }
  if (currentLanguage === "ru")
    return (
      <>
        <div className="commandCenter">
          <button
            id="he"
            onClick={() => sendToKeyboard("he", props.handleLanguageChange)}
          >
            Hebrew
          </button>
          <button
            id="en"
            onClick={() => sendToKeyboard("en", props.handleLanguageChange)}
          >
            English
          </button>
        </div>
      </>
    );
}
export default Languages;
