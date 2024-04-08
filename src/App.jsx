import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl">Price Options</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
