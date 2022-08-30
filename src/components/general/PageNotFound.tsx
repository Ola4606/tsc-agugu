import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center mt-16 md:mt-24">
      <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
        Page Not Found!
      </p>
      <Link to="/">
        <div className="mt-4 md:mt-8 text-center bg-red-600 rounded-md py-1 px-2">
          <p className="font-casual text-sm text-white">
            Home Page
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PageNotFound;
