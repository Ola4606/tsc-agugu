import React from "react";

function Nav() {
  return (
    <div className="w-full h-14 bg-red-500/90 capitalize flex justify-end items-center pr-20">
      <span className="nav-text-first">home</span>
      <span className="nav-text">about</span>
      <span className="nav-text">sermons</span>
      <span className="nav-text">give</span>
      <span className="nav-text">contact</span>
    </div>
  );
}

export default Nav;
