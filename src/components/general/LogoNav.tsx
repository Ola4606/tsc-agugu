import React, {memo} from "react";
import TSCLogo from "../../images/tsc-logo.png";

function LogoNav() {
  return (
    <div className="w-full flex justify-center md:justify-between items-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
        <img
          src={TSCLogo}
          alt="tsc-logo"
          className="w-[70px] h-[70px]"
        />

        <div className="mt-2 md:mt-0 md:ml-2 flex flex-col justify-center items-center">
          <span className="font-bold font-title text-base md:text-lg leading-none">
            WORLD ALIVE MINISTRIES
          </span>
          <span className="font-light font-casual text-sm md:text-base md:hidden text-center">
            Ibadan,&nbsp;Nigeria.
          </span>
        </div>
      </div>

      <span className="font-light font-casual text-sm md:text-base hidden md:flex">
        Ibadan,&nbsp;&nbsp;Nigeria.
      </span>
    </div>
  );
}

export default memo(LogoNav);
