import Keyboard from "./command-components/Keyboard";
import Languages from "./command-components/Languages";
import { useState } from "react";
function CommandCenter({ handleDisplayChange, handleBackSpace }) {
  const [currentLanguage, setLanguage] = useState("en");
  return (
    <>
      <Languages
        currentLanguage={currentLanguage}
        handleLanguageChange={setLanguage}
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
      />
      <Keyboard
        language={currentLanguage}
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
      />
    </>
  );
}

export default CommandCenter;
