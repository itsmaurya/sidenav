import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Guide from "./Components/Guide";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="side-area">
          <HomePage />
        </div>
        <div className="main-page">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={< AboutUs/>}></Route>
            <Route path="/contactus" element={<ContactUs/>}></Route>
            <Route path="/guide" element={<Guide/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
