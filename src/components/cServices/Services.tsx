import React from "react";
import ServiceImage from "../../images/services.png";
import ServiceImageSm from "../../images/services-sm.png";

function Services() {
  return (
    <div className="w-full">
      <div
        className="bg-center bg-no-repeat bg-[length:100%_auto] mt-10"
        style={{ backgroundImage: `url(${ServiceImage})` }}
      >
        <div className="bg-white md:bg-white/[.50] w-full md:h-[320px] lg:h-[370px] xl:h-[450px] flex flex-col justify-center items-center">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
            Our Services
          </p>
          <div className="xsm:max-w-[390px] sm:max-w-[550px] my-12 md:hidden md:my-0">
            <img
              src={ServiceImageSm}
              alt=""
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-14 text-center">
        <p className="font-casual text-base md:text-lg lg:text-xl">
          We meet on Fridays and Sundays
        </p>
      </div>

      <div className="mt-14 md:mt-24 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          Every Friday:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          We meet for our midweek services from 4:00pm - 6:00pm
        </p>

        {/* <p className="font-bold font-title text-base md:text-lg lg:text-xl text-start leading-none text-gray-600">
          Upcoming:
        </p> */}
      </div>

      <div className="mt-14 md:mt-24 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          Every 3rd Friday:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          We meet for a word based seminar on relationships and marriage titled
          "<span className="font-bold">Matters of the Heart</span>" from 4:00pm
          - 6:00pm
        </p>

        {/* <p className="font-bold font-title text-base md:text-lg lg:text-xl text-start leading-none text-gray-600">
          Upcoming:
        </p> */}
      </div>

      <div className="mt-14 md:mt-24 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          Every 4th Friday:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          We meet for a word based seminar on entrepreneurship and financial
          management titled "<span className="font-bold">Money Matters</span>"
          from 4:00pm - 6:00pm
        </p>

        {/* <p className="font-bold font-title text-base md:text-lg lg:text-xl text-start leading-none text-gray-600">
          Upcoming:
        </p> */}
      </div>

      <div className="mt-10 md:mt-20 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          Every Sunday:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          We meet for our main weekly services from 4:30pm - 6:00pm
        </p>

        {/* <p className="font-bold font-title text-base md:text-lg lg:text-xl text-start leading-none text-gray-600">
          Upcoming:
        </p> */}
      </div>

      <div className="mt-10 md:mt-20 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          Every 3rd Sunday:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          We have a door-to-door evangelism session from 3:30pm - 4:30pm.{" "}
          <i>In addition to the main service.</i>
        </p>

        {/* <p className="font-bold font-title text-base md:text-lg lg:text-xl text-start leading-none text-gray-600">
          Upcoming:
        </p> */}
      </div>

      <div className="mt-10 md:mt-20 text-center">
        <p className="font-bold font-title text-lg leading-none text-start">
          Every 4th Sunday:
        </p>
        <p className="font-casual text-base md:text-lg lg:text-xl text-start">
          We have our Believers Bible Class from 5:00pm - 6:00pm.{" "}
          <i>In addition to the main service.</i>
        </p>

        {/* <p className="font-bold font-title text-base md:text-lg lg:text-xl text-start leading-none text-gray-600">
          Upcoming:
        </p> */}
      </div>
    </div>
  );
}

export default Services;
