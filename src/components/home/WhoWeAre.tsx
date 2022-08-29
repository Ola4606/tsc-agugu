import React from "react";
import WeImage from "../../images/we.png";

function WhoWeAre() {
  return (
    <div
      className="bg-left bg-no-repeat bg-[length:auto_450px] mt-20"
      style={{ backgroundImage: `url(${WeImage})` }}
    >
      <div className="bg-white/[.50] min-h-[450px] flex justify-end items-center">
        <div className="xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-justify">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 mb-16 text-end">
            Who We Are?
          </p>
        

          <div className="font-casual text-base md:text-lg lg:text-xl">
            <p>
              We are a group of believers with a passion to ensure that the
              fullness of the reward of the sacrifice of the Lord Jesus Christ
              is achieved. Operating within the context of Word Alive Ministry
              a.k.a. The Stone Church, we present the full gospel of Jesus
              Christ to the inner city of Ibadan.<br /><br />Declaring the good news to the
              poor, healing the broken hearted, proclaiming freedom to the
              captives and oppressed, restoration of sight to the blind, and
              assert that the time of the Lord’s favor has come.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
