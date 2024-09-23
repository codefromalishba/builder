import React from "react";

const DashboardHeader = () => {
  return (
    <div>
      <div className="bg-black p-3 h-[4.5rem] flex items-center justify-between">
        <div className="flex items-center sm:gap-[7rem]">
          <img
            className="w-[140px] h-7"
            src="./images/LaunchSwiftLogo.avif"
            alt="logo"
          />
          <div>
            <p className="text-white font-bold">My app</p>
          </div>
        </div>

        <div className=" flex gap-2">
          <div className="flex flex-col items-end justify-center">
            <p className="text-white font-normal">malikafaq788@gmail.com</p>
            <p className="text-white font-medium text-xs">
              malikafaq788@gmail.com
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-demo flex items-center justify-center">
            <p className="text-white font-semibold text-2xl">m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
