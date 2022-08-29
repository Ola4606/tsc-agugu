import React from "react";
import MissionImage from "../../images/mission.png";

function OurMission() {
  return (
    <div
      className="bg-right bg-no-repeat bg-[length:auto_450px] mt-20"
      style={{ backgroundImage: `url(${MissionImage})` }}
    >
      <div className="bg-white/[.50] min-h-[450px] flex justify-start items-center">
        <div className="xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-justify">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 mb-16">
            Our Mission
          </p>

          <div className="font-casual text-base md:text-lg lg:text-xl">
            <p>
              Build an army of saints that will shine light to those who sat in
              darkness and in the shadow of death. We will achieve this by
              bringing people into{" "}
              <span className="font-semibold text-red-600">MEMBERSHIP</span> in
              God’s Family, help them to{" "}
              <span className="font-semibold text-red-600">MATURITY</span> in
              Christ likeness, equip them for{" "}
              <span className="font-semibold text-red-600">MINISTRY</span>, send
              them out to{" "}
              <span className="font-semibold text-red-600">MISSIONS</span> to
              the world, thus{" "}
              <span className="font-semibold text-red-600">MAGNIFYING</span>{" "}
              God’s Name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
