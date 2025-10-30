function StyleButtons({ setCurrentStyle }) {
  const colors = ["black", "green", "blue"];
  const fonts = ["Arial", "sans-serif", "David"];
  const sizes = ["2rem", "4rem", "6rem"];

  return (
    <div className="style-buttons">
      <h5>Colors</h5>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setCurrentStyle((prev) => ({ ...prev, color }))}
        >
          {color}
        </button>
      ))}

      <h5>Fonts</h5>
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

      <h5>Sizes</h5>
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
  );
}

export default StyleButtons;
