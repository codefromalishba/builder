"use client";
import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { TfiAndroid } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import ProductPhase from "./ProductPhase";

const MainDelivery = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="pt-4">
      <div className="flex justify-between items-center px-10 ">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl">Decide your deliverables</p>
          <div className="flex items-center gap-2">
            <p className="font-md">Select platform for your product</p>
            <BsInfoCircle className="text-gray-400" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <p>Expected kick-off date</p>
            <BsInfoCircle className="text-gray-400" />
          </div>
          <div>
            <p className="text-xs">28 Sep 2024 (Today)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center  py-4 px-10 gap-4">
        <div className="border-[1px] h-20 w-20 cursor-pointer rounded-md flex justify-center items-center border-gray-300">
          <div className="p-3 ">
            <TfiAndroid className="text-[#B4B6B7] flex justify-center items-center text-4xl " />
          </div>
        </div>
        <div className="border-[1px] h-20 w-20 cursor-pointer bg-black rounded-md flex justify-center items-center border-gray-300">
          <div className="p-3 ">
            <FaApple className="text-white flex justify-center items-center text-4xl " />
          </div>
        </div>
        <div className="border-[1px] h-20 w-20 cursor-pointer rounded-md flex justify-center items-center border-gray-300">
          <div className="p-3 ">
            <MdWeb className="text-[#B4B6B7] flex justify-center items-center text-4xl " />
          </div>
        </div>
        <div className="border-[1px] h-20 w-20 cursor-pointer rounded-md flex justify-center items-center border-gray-300">
          <div className="p-3 ">
            <IoDesktop className="text-[#B4B6B7] flex justify-center items-center text-4xl " />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-10 pt-6">
        <p className="font-md">Select phases for your product</p>
        <div className="flex items-center gap-2">
          <p>Advanced</p>
          <button
            onClick={() => setIsOn(!isOn)}
            className={`relative w-12 h-6 rounded-full ${
              isOn ? "bg-demo" : "bg-gray-400"
            }`}
          >
            <div
              className={`absolute bottom-[2px] ${
                !isOn && "left-1"
              } w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                isOn ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <ProductPhase isOn={isOn} />
    </div>
  );
};

export default MainDelivery;
