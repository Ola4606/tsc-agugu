import React from "react";
import IntroImage from "../../images/intro.png";

function Intro() {
  return (
    <div
      className="bg-right bg-no-repeat bg-[length:auto_450px] mt-10"
      style={{ backgroundImage: `url(${IntroImage})` }}
    >
      <div className="bg-white/[.50] w-full h-[450px] flex flex-col justify-center items-start">
      <div className="xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center items-start">
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
    </div>
  );
}

export default Intro;
