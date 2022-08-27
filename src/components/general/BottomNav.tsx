import React from "react";

function BottomNav() {
  return (
    <div>
      <div className="w-full bg-red-600 flex flex-col justify-start p-20 mt-20 text-white">
        <div className="flex justify-end items-center">
          <span className="nav-text">Home</span>
          <span className="nav-text">Services</span>
          <span className="nav-text">Giving</span>
        </div>

        <div className="flex">
          <div className="flex flex-col w-40 mt-4">
            <span className="font-casual font-bold text-sm md:text-base">
              Agugu
            </span>
            <span className="font-casual font-light text-sm md:text-base">
              Opposite Damatons Fuel Station, Iyana Idi-Obi
            </span>
          </div>
          <div className="flex flex-col mt-4 ml-10">
            <span className="font-casual font-bold text-sm md:text-base">
              Contact Us
            </span>
            <span className="font-casual font-light text-sm md:text-base">
              Phone: +234
              <br />
              Email:{" "}
              <a
                href="https://laolu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400"
              >
                @gmail.com
              </a>
              <br />
              <a
                href="https://laolu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400"
              >
                Telegram Group
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-red-600 flex justify-between items-center px-20 py-2 text-white">
        <span className="font-casual font-light text-sm md:text-base">
          Copyright 2022 The Stone Church, Agugu. All Rights Reserved
        </span>
        <span className="font-casual font-light text-sm md:text-base">
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
