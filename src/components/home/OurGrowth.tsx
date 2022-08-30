import React, {memo} from "react";
import outGrowthData from "../../data/outGrowthData";
import YearDescription from "../growth/YearDescription";

function OurGrowth() {
  let ourGrowthElements = outGrowthData.map((i, index) => {
    return (
      <div key={index}>
        <YearDescription
          year={i.year}
          description={i.description}
          imageURL={i.imageURL}
          side={i.side}
        />
      </div>
    );
  });

  return (
    <div className="mt-20">
      <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 text-center mb-4 md:mb-8">
        Our Growth
      </p>

      {ourGrowthElements}

      <p className="font-bold font-title text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600 text-center">
        Much more to come, by God's Grace
      </p>
    </div>
  );
}

export default memo(OurGrowth);
