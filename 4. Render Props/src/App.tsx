import "./App.css";
import Toggle from "./components/toggle";

function App() {
  return (
    <>
      <Toggle
        render={(isOpen, toggle) => (
          <>
            <button onClick={toggle}>Toggle</button>
            {isOpen ? "Openss" : "Closedddd"}
          </>
        )}
      />
    </>
  );
}

export default App;
