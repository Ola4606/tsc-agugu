import React from "react";
import StoryImage from "../../images/story.png";

function OurStory() {
  return (
    <div
      className="bg-left bg-no-repeat bg-[length:auto_450px] mt-20"
      style={{ backgroundImage: `url(${StoryImage})` }}
    >
      <div className="bg-white/[.50] min-h-[450px] flex justify-end items-center">
        <div className="xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-end">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 mb-16">
            Our Story
          </p>

          <div className="font-casual text-base md:text-lg lg:text-xl">
            <p>
              We’ve been gathering together for over 25 years. Started on April
              23rd, 1993 at the Omega Conference Centre, Favos building, New
              Bodija, in Ibadan, Oyo State. We’ve expanded to more than 5,000
              people in forty-one (41) locations across 4 continents.The Stone
              Church, registered as an arm of the Word Alive Ministries
              International.
            </p>
            <br />
            <p>
              The inaugural service was held on Saturday, April 23rd 1993, at
              the Omega Conference Centre, Favos Building, New Bodija, Ibadan,
              Oyo State. Sunday services commenced at the same venue on April
              24th 1993 at 8 a.m. The Headquarters of the Church has since moved
              to its permanent site at Mokola, and has continued to establish
              branches all over the country and overseas.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
