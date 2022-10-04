import './App.css';
import { NavBar } from "./Components/NavBar";
import { Headings } from "./Components/Headings";
import { Sliders } from "./Components/Sliders";
import { Cards } from "./Components/Cards";
import { Footer } from "./Components/Footer";
import { Footer2 } from "./Components/Footer2";
import { Advertise } from "./Components/Advertise";

function App() {
  return (
    <>
      <NavBar/>
      <Headings/>
      <Sliders/>
      <Cards/>
      <Advertise/>
      <Footer/>
      <Footer2/>
    </>
  );
}

export default App;