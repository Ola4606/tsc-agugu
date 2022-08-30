import React, {memo} from "react";
import GivingImage from "../../images/giving.png";
import GivingImageSm from "../../images/giving-sm.png";

function Giving() {
  return (
    <div className="w-full">
      <div
        className="bg-center bg-no-repeat bg-[length:100%_auto] mt-10"
        style={{ backgroundImage: `url(${GivingImage})` }}
      >
        <div className="bg-white md:bg-white/[.50] w-full md:h-[320px] lg:h-[370px] xl:h-[450px] flex flex-col justify-center items-center">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
            Giving
          </p>
          <div className="xsm:max-w-[390px] sm:max-w-[550px] my-12 md:hidden md:my-0">
            <img src={GivingImageSm} alt="" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-0 lg:mt-8 xl:mt-14 text-center">
        <p className="font-casual text-base md:text-lg lg:text-xl">
          While we can’t do it all, we can make a difference with simple, small
          actions that give back to others. Through small gestures, we can make
          the world a more positive, better place.
          <br />
          Here are a few ways to get started.
          <br />
          <br />
          <span className="bible-verse">Hebrews 13:16</span>
          <br />
          “But to do good and to communicate forget not: for with such
          sacrifices God is well pleased.”
        </p>
      </div>

      <div className="mt-14 md:mt-32 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          FOR LOCAL (NIGERIAN) PAYMENTS:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          Bank transfers can be made to this account
        </p>
        <p className="font-bold font-title text-lg leading-none text-gray-600 mt-4 md:mt-16">
          ECOBANK
        </p>
        <p className="font-bold font-title text-lg leading-none text-gray-600 mt-3 md:mt-8">
          THE STONE CHURCH AGUGU
        </p>

        <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black underline underline-offset-4 decoration-slate-300 mt-4 md:mt-16">
          0250063391
        </p>

        <p className="font-casual text-base md:text-lg lg:text-xl mt-3 md:mt-8">
          Thank You for supporting the ministry!
        </p>
      </div>

      <div className="mt-14 md:mt-32 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          FOR INTERNATIONAL PAYMENTS:
        </p>
        <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black mt-4 md:mt-16">
          Currently Unavailable
        </p>
      </div>
    </div>
  );
}

export default memo(Giving);
