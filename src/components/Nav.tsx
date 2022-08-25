import React from "react";

function Nav() {
  return (
    <div className="w-full h-14 bg-red-600 flex justify-end items-center pr-20">
      <span className="nav-text-first">Home</span>
      <span className="nav-text">Audio Sermons</span>
      <span className="nav-text">Giving</span>
      <span className="nav-text">Get in Touch</span>
    </div>
  );
}

export default Nav;
