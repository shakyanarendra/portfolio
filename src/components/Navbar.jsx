import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="left nav_items">Portfolio</div>
      <div className="right">
        <Link to="/" className="nav_items">
          Home
        </Link>
        <Link to="/skills" className="nav_items">
          Skills
        </Link>
        <Link to="/projects" className="nav_items">
          Projects
        </Link>

        <Link to="/contact" className="nav_items">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
