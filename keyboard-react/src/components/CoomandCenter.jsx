import Keyboard from "./command-components/Keyboard";
import Languages from "./command-components/Languages";
import { useState } from "react";
import StyleButtons from "./command-components/StyleButtons";
function CommandCenter({
  handleDisplayChange,
  handleBackSpace,
  deleteAll,
  allToUpperCase,
  setCurrentStyle,
}) {
  const [currentLanguage, setLanguage] = useState("en");
  return (
    <>
      <Languages
        currentLanguage={currentLanguage}
        handleLanguageChange={setLanguage}
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
        deleteAll={deleteAll}
        allToUpperCase={allToUpperCase}
      />
      <Keyboard
        language={currentLanguage}
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
        deleteAll={deleteAll}
        allToUpperCase={allToUpperCase}
      />
      <StyleButtons setCurrentStyle={setCurrentStyle} />
    </>
  );
}

export default CommandCenter;
