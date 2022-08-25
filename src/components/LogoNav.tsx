import React from "react";
import TSCLogo from "../images/tsc-logo.png";

function LogoNav() {
  return (
    <div className="w-full flex justify-between items-center my-12">
      <div className="flex justify-start items-center">
      <img src={TSCLogo} alt="tsc-logo" className="w-[70px] h-[70px]"/>
      <div className="flex flex-col justify-center items-start ml-2">
      <span className="font-bold text-2xl leading-none">THE STONE CHURCH</span>
      <span className="font-light text-xl text-black leading-none">Agugu</span>
      </div>
      </div>

      <span className="font-light">Ibadan,&nbsp;&nbsp;Nigeria.</span>
    </div>
  );
}

export default LogoNav;
