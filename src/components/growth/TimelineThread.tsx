import React, {memo} from "react";
import ArrowDown from "../../images/arrow.png";

function TimelineThread() {
  return (
    <div className="flex flex-col justify-center items-center my-6 md:my-12">
      <img src={ArrowDown} alt="" className="w-[70px] md:w-[100px] h-auto rounded-xl" />
    </div>
  );
}

export default memo(TimelineThread);
