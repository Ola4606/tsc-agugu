import React from "react";
import TestImage from "../images/test.png";

function OurMission() {
  return (
    <div
      className="bg-right bg-no-repeat bg-[length:auto_500px] mt-20"
      style={{ backgroundImage: `url(${TestImage})` }}
    >
      <div className="bg-white/[.50] min-h-[500px] flex justify-start items-center">
        <div className="xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-justify text-lg">
          <p className="font-light font-casual text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 mb-16">
            Our Mission
          </p>

          <ul className="list-disc list-inside font-light font-casual">
            <li>
              <span>
                We bring people into{" "}
                <span className="font-semibold text-red-600">MEMBERSHIP</span>{" "}
                in God’s Family.
              </span>
            </li>

            <li>
              <span>
                We help them to{" "}
                <span className="font-semibold text-red-600">MATURITY</span> in
                Christ likeness.
              </span>
            </li>
            <li>
              <span>
                We equip them for{" "}
                <span className="font-semibold text-red-600">MINISTRY</span>
              </span>
            </li>
            <li>
              <span>
                We send them out to{" "}
                <span className="font-semibold text-red-600">MISSIONS</span> to
                the world.
              </span>
            </li>
            <li>
              <span>
                In order to{" "}
                <span className="font-semibold text-red-600">MAGNIFY</span>{" "}
                God’s Name.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
