import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full h-14 bg-red-600 flex justify-end items-center pr-20 mb-10">
      <Link to="/">
        <span className="nav-text">Home</span>
      </Link>
      <Link to="/services">
        <span className="nav-text">Services</span>
      </Link>
      <Link to="/giving">
        <span className="nav-text">Giving</span>
      </Link>
    </div>
  );
}

export default Nav;
