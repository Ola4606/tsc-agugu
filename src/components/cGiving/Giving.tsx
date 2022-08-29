import React from "react";
import GivingImage from "../../images/giving.png";

function Giving() {
  return (
    <div className="w-full">
      <div
        className="bg-center bg-no-repeat bg-[length:100%_auto] mt-10"
        style={{ backgroundImage: `url(${GivingImage})` }}
      >
        <div className="bg-white/[.50] w-full h-[450px] flex justify-center items-center">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
            Giving
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-14 text-center">
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

      <div className="mt-14 md:mt-24 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          FOR LOCAL (NIGERIAN) PAYMENTS:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          Bank transfers can be made to this account
        </p>
        <br />
        <br />
        <p className="font-bold font-title text-lg leading-none text-gray-600">
          ECOBANK
        </p>
        <br />
        <p className="font-bold font-title text-lg leading-none text-gray-600">
          THE STONE CHURCH
        </p>
        <br />
        <br />
        <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black underline underline-offset-4 decoration-slate-300">
          0032467854
        </p>
        <br />
        <br />
        <br />
        <p className="font-casual text-base md:text-lg lg:text-xl">
          Thank You for supporting the ministry!
        </p>
      </div>

      <div className="mt-14 md:mt-24 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          FOR INTERNATION PAYMENTS:
        </p>
        <br />
        <br />
        {/* <p className="font-bold font-title text-lg leading-none text-gray-600">
          ECOBANK
        </p>
        <br />
        <p className="font-bold font-title text-lg leading-none text-gray-600">
          THE STONE CHURCH
        </p>
        <br /><br /> */}
        <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
          Currently Unavaliable
        </p>
      </div>
    </div>
  );
}

export default Giving;
