import { useState } from "react";
import Languages from "./command-components/Languages";
import Keyboard from "./command-components/Keyboard";
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
    <div className="command-center">
      <Languages currentLanguage={currentLanguage} setLanguage={setLanguage} />

      <Keyboard
        language={currentLanguage}
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
        deleteAll={deleteAll}
        allToUpperCase={allToUpperCase}
      />

      <StyleButtons setCurrentStyle={setCurrentStyle} />
    </div>
  );
}

export default CommandCenter;
