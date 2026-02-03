import "./App.css";
import ControlledForm from "./components/ControlledForm";
import UncontrolledFormWithoutRef from "./components/UncontrolledFormWithoutRef";
import UncontrolledFormWithRef from "./components/UncontrolledFormWithRef";

function App() {
  return (
    <>
      <ControlledForm />
      <hr />
      <UncontrolledFormWithRef />
      <hr />
      <UncontrolledFormWithoutRef />
    </>
  );
}

export default App;
