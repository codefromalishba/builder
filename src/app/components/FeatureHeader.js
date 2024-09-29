import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { IoDesktopSharp } from "react-icons/io5";
import { RiFunctionAddLine } from "react-icons/ri";

const FeatureHeader = ({ isMobile, handleDeviceSelection }) => {
  return (
    <div className="flex justify-between items-center px-7  h-16">
      <div className="flex ">
        <div
          onClick={() => handleDeviceSelection(true)}
          className={`${
            isMobile && "bg-slate-200"
          } px-4 py-3 border border-gray-200 rounded-bl rounded-tl`}
        >
          <FaMobileAlt />
        </div>
        <div
          onClick={() => handleDeviceSelection(false)}
          className={`${
            !isMobile && "bg-slate-200"
          } px-4 py-3 border border-gray-200 rounded-br rounded-tr`}
        >
          <IoDesktopSharp />
        </div>
      </div>
      <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-md cursor-pointer">
        <RiFunctionAddLine className="text-white " />
        <p className="text-white text-sm">Custom Features</p>
      </div>
    </div>
  );
};

export default FeatureHeader;
