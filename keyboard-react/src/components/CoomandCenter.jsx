import Keyboard from "./command-components/Keyboard";
import Languages from "./command-components/Languages";
import { useState } from "react";
function CommandCenter() {
  const [currentLanguage, setLanguage] = useState("en");
  return (
    <>
      <Languages
        currentLanguage={currentLanguage}
        handleLanguageChange={setLanguage}
      />
      <Keyboard language={currentLanguage} />
    </>
  );
}

export default CommandCenter;
