function Languages({ currentLanguage, setLanguage }) {
  const languages = {
    en: ["he", "ru"],
    he: ["en", "ru"],
    ru: ["en", "he"],
  };
  return (
    <div className="languages">
      {languages[currentLanguage].map((lang) => (
        <button key={lang} onClick={() => setLanguage(lang)}>
          {lang}
        </button>
      ))}
    </div>
  );
}

export default Languages;
