import React from "react";

function OurMission() {
  return (
    <div className="text-justify mt-20 text-lg">
      <p className="font-light font-casual text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 mb-16">
        Our Mission
      </p>

      <ul className="list-disc list-inside font-light font-casual">
        <li>
          <span>
            We bring people into{" "}
            <span className="font-semibold text-red-600">MEMBERSHIP</span> in God’s Family.
          </span>
        </li>

        <li>
          <span>
            We help them to <span className="font-semibold text-red-600">MATURITY</span> in
            Christ likeness.
          </span>
        </li>
        <li>
          <span>
            We equip them for <span className="font-semibold text-red-600">MINISTRY</span>
          </span>
        </li>
        <li>
          <span>
            We send them out to <span className="font-semibold text-red-600">MISSIONS</span>{" "}
            to the world.
          </span>
        </li>
        <li>
          <span>
            In order to <span className="font-semibold text-red-600">MAGNIFY</span> God’s
            Name.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default OurMission;
