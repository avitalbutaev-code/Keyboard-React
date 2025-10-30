function StyleButtons({ setCurrentStyle }) {
  const colors = ["black", "lime", "blue", "coral", "purple"];
  const fonts = ["Arial", "David"];
  const sizes = ["20px", "30px", "40px"];

  return (
    <div className="style-buttons">
      <h5>Colors</h5>
      <div className="fontButtons">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: `${color}` }}
            onClick={() => setCurrentStyle((prev) => ({ ...prev, color }))}
          >
            {color}
          </button>
        ))}
      </div>
      <h5>Fonts</h5>{" "}
      <div className="fontButtons">
        {fonts.map((font) => (
          <button
            key={font}
            onClick={() =>
              setCurrentStyle((prev) => ({ ...prev, fontFamily: font }))
            }
          >
            {font}
          </button>
        ))}
      </div>
      <h5>Sizes</h5>
      <div className="sizeButtons">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() =>
              setCurrentStyle((prev) => ({ ...prev, fontSize: size }))
            }
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StyleButtons;
