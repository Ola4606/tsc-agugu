import React from "react";
import TSCLogo from "../images/tsc-logo.png";

function LogoNav() {
  return (
    <div className="w-full flex justify-between items-center my-12">
      <div className="flex justify-start items-center">
        <img src={TSCLogo} alt="tsc-logo" className="w-[70px] h-[70px]" />

        <div className="ml-2">
          <span className="font-bold font-title text-2xl leading-none">
            THE STONE CHURCH, AGUGU
          </span>
        </div>
      </div>

      <span className="font-light font-casual">
        Ibadan,&nbsp;&nbsp;Nigeria.
      </span>
    </div>
  );
}

export default LogoNav;
