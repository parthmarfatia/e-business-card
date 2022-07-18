import "./App.css";
import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Interests from "./Components/Interests";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
