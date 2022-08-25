import React from "react";

function Intro() {
  return (
    <div className="min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center items-start my-20">
      <p className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">
        Welcome to<br />The Stone Church, Agugu
      </p>
      <div className="mt-4 md:mt-8">
        <p className="casual-text text-base md:text-lg lg:text-xl">
          We are a community of Christ followers bringing gospel renewal to our
          city and world.
        </p>
      </div>
    </div>
  );
}

export default Intro;
