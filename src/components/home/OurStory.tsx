import React from "react";
import StoryImage from "../../images/story.png";

function OurStory() {
  return (
    <div
      className="bg-left bg-no-repeat bg-[length:auto_450px] mt-20"
      style={{ backgroundImage: `url(${StoryImage})` }}
    >
      <div className="bg-white/[.50] min-h-[450px] flex justify-end items-center">
        <div className="xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-justify">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 mb-16 text-end">
            Our Story
          </p>

          <div className="font-casual text-base md:text-lg lg:text-xl">
            <p>
              We started out in 2018 with the goal of publishing the full gospel
              of Jesus Christ to the inner city of Ibadan. Beginning with free
              tutorials classes to prepare students for the final secondary
              school examinations and university entrance examinations, we
              eventually started an afternoon fellowship. Gradually we commenced
              Sunday services and Friday prayer meeting and Bible study using a
              classroom within United Secondary School, Agugu.  In 2021 we
              acquired a parcel of land at Iyana Idi Obi junction, Agugu and we
              initiated the construction of the church auditorium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
