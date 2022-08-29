import React from "react";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div>
      

      <div className="w-full bg-red-600 flex flex-col justify-start px-5 sm:px-8 md:px-20 pt-10 pb-2 mt-20 text-white">
        <div className="flex justify-end items-center">
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

        <div className="flex flex-col md:flex-row mt-10">
          <div className="flex flex-col md:w-40">
            <span className="font-casual font-bold text-sm md:text-base">
              Agugu
            </span>
            <span className="font-casual font-light text-sm md:text-base">
              Opposite Damatons Fuel Station, Iyana Idi-Obi
            </span>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 md:ml-10">
            <span className="font-casual font-bold text-sm md:text-base">
              Contact Us
            </span>
            <span className="font-casual font-light text-sm md:text-base">
              Phone: +<a href="tel:+2348037172329" className="underline decoration-gray-400">2348037172329</a>
              
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center text-white font-casual font-light text-sm mt-16">

        <span>Copyright 2022 The Stone Church, Agugu. All Rights Reserved</span>
        <span className="mt-4 md:mt-0">
          Made by{" "}
          <a
            href="https://laolu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400"
          >
            Laolu
          </a>
        </span>

        </div>
      </div>
    </div>
  );
}

export default BottomNav;
