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
  handleUndo,
}) {
  const [currentLanguage, setLanguage] = useState("en");
  return (
    <div className="command-center">
      <StyleButtons setCurrentStyle={setCurrentStyle} />
      <Keyboard
        language={currentLanguage}
        handleDisplayChange={handleDisplayChange}
        handleBackSpace={handleBackSpace}
        deleteAll={deleteAll}
        allToUpperCase={allToUpperCase}
        handleUndo={handleUndo}
      />
      <Languages currentLanguage={currentLanguage} setLanguage={setLanguage} />
    </div>
  );
}

export default CommandCenter;
