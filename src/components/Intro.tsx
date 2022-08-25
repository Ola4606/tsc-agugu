import React from "react";

import TestImage from "../images/test.png";

function Intro() {
  return (
    <div
      className="bg-right bg-no-repeat bg-[length:auto_500px] w-full h-[500px] flex flex-col justify-center items-start mt-10"
      style={{ backgroundImage: `url(${TestImage})` }}
    >
      <div className="h-[300px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center items-start">
        <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
          Welcome to
          <br />
          The Stone Church, Agugu
        </p>
        <div className="mt-4 md:mt-8">
          <p className="font-casual text-base md:text-lg lg:text-xl">
            We are a community of Christ followers bringing gospel renewal to
            our city and world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
