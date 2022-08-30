import React, {memo} from "react";
import IntroImage from "../../images/intro.png";

function Intro() {
  return (
    <div className="flex justify-center items-center mt-10">
        <div className="min-h-[200px] xsm:max-w-[390px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center items-center text-center">
          
          
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
            Welcome to
            <br />
            The Stone Church, Agugu
          </p>
          <div className="mt-4 md:mt-8">
            <p className="font-casual text-base sm:text-lg md:text-xl">
              We are Christians bringing The Good News of The Gospel to our
              city, by building an army of saints.
            </p>
          </div>

          <div className="mt-12 md:mt-16">
          <img src={IntroImage} alt="" className="w-full h-auto rounded-xl" />
          </div>




        </div>
    </div>
  );
}

export default memo(Intro);
