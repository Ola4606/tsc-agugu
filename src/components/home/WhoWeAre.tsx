import React from "react";
import WeImage from "../../images/we.png";

function WhoWeAre() {
  return (
    <div
      className="bg-center bg-no-repeat bg-[length:auto_450px] mt-20"
      style={{ backgroundImage: `url(${WeImage})` }}
    >
      <div className="bg-white/[.50] min-h-[450px] flex justify-center items-center">
        <div className="xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-center">
          <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 mb-16">
            Who We Are?
          </p>
          <div>
            <span className="bible-verse text-base md:text-base lg:text-lg mb-2 underline underline-offset-1">
              Daniel 2:34-35 (KJV)
            </span>
            <span className="bible-verse text-base md:text-base lg:text-lg mb-2 ">
              :
            </span>
          </div>

          <div className="font-casual text-base md:text-lg lg:text-xl">
            <p>
              The Stone symbolized in this vision gives a revelation of the
              kingdom of the Great King Jesus which outlasts every other
              kingdom.{" "}
            </p>
            <br />
            <p>
              Thou sawest till that a stone was cut out without hands, which
              smote the image upon his feet that were of iron and clay and brake
              them to pieces. Then was the iron, the clay, the brass, the
              silver, and the gold, broken to pieces together, and became like
              the chaff of the summer threshing floors; and the wind carried them
              away, that no place was found for them: and the stone that smote
              the image became a great mountain, and filled the whole earth.
            </p>
            <br />
          </div>

          <ul className="list-disc list-inside font-casual text-base md:text-lg lg:text-xl">
            <li>
              <span>
                He is <span className="font-semibold">The Stone</span> that was
                rejected but has become the head of the corner.{" "}
                <span className="bible-verse text-base">~Psalm 118:22</span>
              </span>
            </li>

            <li>
              <span>
                He is <span className="font-semibold">The Stone</span> of
                Israel.{" "}
                <span className="bible-verse text-base">~Genesis 49:24</span>
              </span>
            </li>
            <li>
              <span>
                He is <span className="font-semibold">The Stone</span> that
                falls on you such that it will crush you to powder and that when
                you fall on it will break you into pieces.{" "}
                <span className="bible-verse text-base">~Matthew 21:44</span>
              </span>
            </li>
            <li>
              <span>
                He is{" "}
                <span className="font-semibold">
                  The First and The Last, Alpha and Omega
                </span>{" "}
                that fills all things with Himself.{" "}
                <span className="bible-verse text-base">~Revelation 22:13</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
