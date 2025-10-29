function StyleButtons({ setCurrentStyle }) {
  return (
    <>
      <h5>Colors</h5>
      {["red", "green", "blue"].map((color) => (
        <button
          key={color}
          onClick={() => {
            setCurrentStyle((prev) => ({ ...prev, color }));
          }}
          className="styleButton"
        >
          {color}
        </button>
      ))}

      <h5>Fonts</h5>
      {["ariel", "sans-serif", "david"].map((font) => (
        <button
          key={font}
          onClick={() => {
            setCurrentStyle((prev) => ({ ...prev, fontFamily: font }));
          }}
          className="styleButton"
        >
          {font}
        </button>
      ))}

      <h5>Sizes</h5>
      {["2rem", "4rem", "6rem"].map((size) => (
        <button
          key={size}
          onClick={() => {
            setCurrentStyle((prev) => ({ ...prev, fontSize: size }));
          }}
          className="styleButton"
        >
          {size}
        </button>
      ))}
    </>
  );
}

export default StyleButtons;
