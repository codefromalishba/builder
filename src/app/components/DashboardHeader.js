"use client";
import React from "react";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const profile = useSelector((state) => state.profile);
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
          <div className="w-11 h-10 rounded-md  bg-demo flex items-center justify-center">
            <p className="text-white px-1 font-semibold text-xl">
              {profile?.name[0]?.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white font-normal">{profile.name}</p>
            <p className="text-white font-medium text-xs">{profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
