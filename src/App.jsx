import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Project from "./components/Project"; // 
// narendar bau
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";


const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experiences" element={<Experiences />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
