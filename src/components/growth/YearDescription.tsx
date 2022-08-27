import React from "react";
import TimelineThread from "./TimelineThread";

type YearDescriptionPropType = {
  year: string;
  description: any;
  imageURL: string;
};

function YearDescription({
  year,
  description,
  imageURL,
}: YearDescriptionPropType) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center">
        <div className="bg-green-400 min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-center flex flex-col justify-center items-center">
          <p className="font-bold font-title text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600 mb-10">
            {year}
          </p>

          <div className="font-casual text-base md:text-lg lg:text-xl">
            {description}
          </div>
        </div>
        <div>
          <img src={imageURL} alt="" className="w-[250px] h-[250px] bg-zinc-900" />
        </div>
      </div>

      <TimelineThread />
    </div>
  );
}

export default YearDescription;
