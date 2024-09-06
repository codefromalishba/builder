import React from "react";

const AppDeveloper = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center lg-[640px]"
      style={{
        backgroundImage:
          "url(https://webappbuilder.netlify.app/_next/static/media/banner.c995ec0e.png)",
      }}
    >
      <div className=" absolute inset-0 flex flex-col text-center items-center pt-24  ">
        <h1 className="text-h1 font-bold">Developing Apps Made Effortless!</h1>
        <p className="font-normal text-xl p-8">
          No Code. No delays. Launch Swift.
        </p>
        <div className="flex gap-8 items-center text-p">
          <p className="bg-black text-white p-btn rounded-8 ">
            Get A Free Demo
          </p>
          <p className=" border rounded-8 p-btn border-black">
            See Solution And Pricing
          </p>
        </div>
        <div className="flex mt-[15%] m-img">
          <img
            className="relative rounded-7 shadow-xl"
            src="./images/demoimg.avif"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDeveloper;
