import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import ClipboardDemo from "./components/ClipboardDemo";
import Modal from "./components/Modal";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <>
      <ThemeToggle />
      <hr />
      <ClipboardDemo />
      <hr />
      <Modal />
      <hr />
      <SearchComponent />
    </>
  );
}

export default App;
