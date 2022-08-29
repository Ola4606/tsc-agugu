import React from "react";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div>
      <div className="w-full bg-red-600 flex flex-col justify-start px-20 pt-10 pb-12 mt-20 text-white">
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

        <div className="flex mt-10">
          <div className="flex flex-col w-40">
            <span className="font-casual font-bold text-sm md:text-base">
              Agugu
            </span>
            <span className="font-casual font-light text-sm md:text-base">
              Opposite Damatons Fuel Station, Iyana Idi-Obi
            </span>
          </div>
          <div className="flex flex-col ml-10">
            <span className="font-casual font-bold text-sm md:text-base">
              Contact Us
            </span>
            <span className="font-casual font-light text-sm md:text-base">
              Phone:{" "}+
              <a
                href="tel:+2348037172329"
                className="underline decoration-gray-400"
              >
                2348037172329
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-red-600 flex justify-between items-center px-20 pt-4 pb-2 text-white font-casual font-light text-sm">
        <span>Copyright 2022 The Stone Church, Agugu. All Rights Reserved</span>
        <span>
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
  );
}

export default BottomNav;
