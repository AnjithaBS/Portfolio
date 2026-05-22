import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Counter from "./components/Counter";
// import Data from "./components/Data";
function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Education />
      <Project />
      <Skill />
      <Contact />
      <Footer/>
      {/* <Counter /> */}
      {/* <Data /> */}
    
    </>
  );
}

export default App;