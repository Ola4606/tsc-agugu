import React, {memo} from "react";
import TimelineThread from "./TimelineThread";

type YearDescriptionPropType = {
  year: string;
  description: any;
  imageURL: string;
  side: string;
};

function YearDescription({
  year,
  description,
  imageURL,
  side,
}: YearDescriptionPropType) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {side === "left" ? (
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="min-h-[200px] xsm:max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[570px] xl:max-w-[700px] flex flex-col justify-center items-center lg:items-start text-center lg:text-start lg:mr-8">
            <p className="font-bold font-title text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600 mb-5">
              {year}:
            </p>

            <div className="font-casual font-semibold text-sm md:text-base lg:text-lg">
              {description}
            </div>
          </div>
          <div>
            <img src={imageURL} alt="" className="mt-6 md:mt-12 lg:mt-0 w-full xsm:w-[370px] sm:w-[450px] md:w-[500px] h-auto rounded-xl" />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
          <div>
            <img src={imageURL} alt="" className="mt-6 md:mt-12 lg:mt-0 w-full xsm:w-[370px] sm:w-[450px] md:w-[500px] h-auto rounded-xl" />
          </div>

          <div className="min-h-[200px] xsm:max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[570px] xl:max-w-[700px] flex flex-col justify-center items-center lg:items-end text-center lg:text-end lg:ml-8">
            <p className="font-bold font-title text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600 mb-5">
              {year}:
            </p>

            <div className="font-casual font-semibold text-sm md:text-base lg:text-lg">
              {description}
            </div>
          </div>
        </div>
      )}

      <TimelineThread />
    </div>
  );
}

export default memo(YearDescription);
