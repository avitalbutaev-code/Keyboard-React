import "./App.css";
import Languages from "./components/command-components/Languages";
function App() {
  const buttons = ["a", "b", "c"];
  return (
    <>
      {buttons.map((key, idx) => {
        return <button key={key}>{buttons[idx]}</button>;
      })}
      abcd
      <Languages />
    </>
  );
}

export default App;
