import "./App.css";
// import BrokenMemorization from "./components/task/BrokenMemorization";
// import DerivedState from "./components/task/DerivedState";
import { ProductCard } from "./components/task/RemoveUnnessesary";
// import DeferredDemo from "./components/deffered/DefferedDemo";
// import ScrollTracker from "./components/throttling/ScrollTracker";

function App() {
  return (
    <>
      <div className="min-h-screen">
        {/* <DeferredDemo /> */}
        {/* <ScrollTracker /> */}
        {/* <BrokenMemorization /> */}
        {/* <DerivedState /> */}
        <ProductCard price={30}/>
      </div>
    </>
  );
}

export default App;
