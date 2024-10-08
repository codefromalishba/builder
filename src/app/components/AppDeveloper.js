import React from "react";

const AppDeveloper = () => {
  return (
    <div
      className="relative h-[370px] md:h-[680px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://webappbuilder.netlify.app/_next/static/media/banner.c995ec0e.png)",
      }}
    >
      <div className="  inset-0 flex flex-col text-center items-center sm:pt-24 pt-20 ">
        <h1 className="lg:text-h1 font-bold sm:text-[30px] text-lg ">
          Developing Apps Made Effortless!
        </h1>
        <p className="font-normal lg:text-xl sm:text-md p-8">
          No Code. No delays. Launch Swift.
        </p>
        <div className="flex flex-col sm:flex-row  sm:gap-8 gap-4  items-center text-p ">
          <p className="bg-black sm:text-p text-sm text-white p-btn rounded-8 ">
            Get A Free Demo
          </p>
          <p className=" border text-sm sm:text-p rounded-8 p-btn border-black">
            See Solution And Pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDeveloper;
