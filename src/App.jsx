import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Experiences from "./components/Experiences.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx"; // 
// narendar bau
import Contact from "./components/Contact.jsx";
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
