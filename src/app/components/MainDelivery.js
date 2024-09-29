import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { TfiAndroid } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

const MainDelivery = () => {
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
          <button className="relative w-12 h-6 bg-gray-400 rounded-full">
            <div className="absloute ml-1 w-5 h-5 bg-white rounded-full"></div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 px-10 py-5 gap-5">
        <div className=" relative border-[1px] border-demo rounded-md p-5 ">
          <div className="absolute top-2 right-2 ">
            <div className="">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
          </div>
          <div className=" flex gap-2 ">
            <div className="w-12 h-12 ">
              <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
            </div>
            <div>
              <div className="flex gap-1 py-1">
                <p className="font-bold text-demo max-w-[100px] text-sm">
                  Product Roadmap
                </p>
                <BsInfoCircle className="text-gray-400" />
              </div>
              <p className="font-bold text-xs pb-1">
                Estimated Duration:
                <span className="font-normal">1 Weeks</span>
              </p>
              <p className="font-bold text-xs">
                Estimated Delivery Date:
                <span className="font-normal"> 05-Oct-2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" relative border-[1px] border-demo rounded-md p-5 ">
          <div className="absolute top-2 right-2 ">
            <div className="">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
          </div>
          <div className=" flex gap-2 ">
            <div className="w-12 h-12 ">
              <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
            </div>
            <div>
              <div className="flex gap-1 py-1">
                <p className="font-bold text-demo max-w-[100px] text-sm">
                  Product Roadmap
                </p>
                <BsInfoCircle className="text-gray-400" />
              </div>
              <p className="font-bold text-xs pb-1">
                Estimated Duration:
                <span className="font-normal">1 Weeks</span>
              </p>
              <p className="font-bold text-xs">
                Estimated Delivery Date:
                <span className="font-normal"> 05-Oct-2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" relative border-[1px] border-demo rounded-md p-5 ">
          <div className="absolute top-2 right-2 ">
            <div className="">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
          </div>
          <div className=" flex gap-2 ">
            <div className="w-12 h-12 ">
              <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
            </div>
            <div>
              <div className="flex gap-1 py-1">
                <p className="font-bold text-demo max-w-[100px] text-sm">
                  Product Roadmap
                </p>
                <BsInfoCircle className="text-gray-400" />
              </div>
              <p className="font-bold text-xs pb-1">
                Estimated Duration:
                <span className="font-normal">1 Weeks</span>
              </p>
              <p className="font-bold text-xs">
                Estimated Delivery Date:
                <span className="font-normal"> 05-Oct-2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" relative border-[1px] border-demo rounded-md p-5 ">
          <div className="absolute top-2 right-2 ">
            <div className="">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
          </div>
          <div className=" flex gap-2 ">
            <div className="w-12 h-12 ">
              <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
            </div>
            <div>
              <div className="flex gap-1 py-1">
                <p className="font-bold text-demo max-w-[100px] text-sm">
                  Product Roadmap
                </p>
                <BsInfoCircle className="text-gray-400" />
              </div>
              <p className="font-bold text-xs pb-1">
                Estimated Duration:
                <span className="font-normal">1 Weeks</span>
              </p>
              <p className="font-bold text-xs">
                Estimated Delivery Date:
                <span className="font-normal"> 05-Oct-2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" relative border-[1px] border-demo rounded-md p-5 ">
          <div className="absolute top-2 right-2 ">
            <div className="">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
          </div>
          <div className=" flex gap-2 ">
            <div className="w-12 h-12 ">
              <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
            </div>
            <div>
              <div className="flex gap-1 py-1">
                <p className="font-bold text-demo max-w-[100px] text-sm">
                  Product Roadmap
                </p>
                <BsInfoCircle className="text-gray-400" />
              </div>
              <p className="font-bold text-xs pb-1">
                Estimated Duration:
                <span className="font-normal">1 Weeks</span>
              </p>
              <p className="font-bold text-xs">
                Estimated Delivery Date:
                <span className="font-normal"> 05-Oct-2024</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDelivery;
