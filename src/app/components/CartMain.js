import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const CartMain = ({ isMobile }) => {
  return (
    <div>
      <div className="px-5 pb-5 pt-5">
        <div className="flex pb-4 border-b border-b-gray-[#A6A6A6]  cursor-pointer group">
          <div className="flex justify-between  items-center gap-3">
            <div className="border-2 w-12 rounded-lg  border-demo">
              <img
                className="p-1 h-full rounded-lg"
                src="https://statestreetdebating.site/lauchswift/mobile/login-with-google.png"
                alt="cartImg 1"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-2 w-20">
                <p className="text-sm">Signup/login with email</p>
                <div className="w-7 p-[5px] h-7 cursor-pointer rounded-full border-[1px] bg-white hover-bg-slate-50 items-center justify-center flex ">
                  <MdOutlineDelete className="    " />
                </div>
              </div>
              <div className="py-1">
                <p className="text-xs text-gray-400">from $412.84</p>
                <p className="text-xs text-gray-400">2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 pt-1">
        <div className="flex pb-4 border-b border-b-gray-[#A6A6A6]  cursor-pointer group">
          <div className="flex justify-between  items-center gap-3">
            <div className="border-2 w-12 rounded-lg  border-demo">
              <img
                className="p-1 h-full rounded-lg"
                src="https://statestreetdebating.site/lauchswift/mobile/login-with-google.png"
                alt="cartImg 2"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-2 w-20">
                <p className="text-sm">Signup/login with email</p>
                <div className="w-7 p-1 h-7 rounded-full border-[1px] bg-white hover-bg-slate-50 items-center justify-center flex ">
                  <MdOutlineDelete className="    " />
                </div>
              </div>
              <div className="py-1">
                <p className="text-xs text-gray-400">from $412.84</p>
                <p className="text-xs text-gray-400">2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 pt-1">
        <div className="flex pb-4 border-b border-b-gray-[#A6A6A6]  cursor-pointer group">
          <div className="flex justify-between  items-center gap-3">
            <div className="border-2 w-12 rounded-lg  border-demo">
              <img
                className="p-1 h-full rounded-lg"
                src="https://statestreetdebating.site/lauchswift/mobile/login-with-google.png"
                alt="cartImg 3"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-2 w-20">
                <p className="text-sm">Signup/login with email</p>
                <div className="w-7 p-1 h-7 rounded-full border-[1px] bg-white hover-bg-slate-50 items-center justify-center flex ">
                  <MdOutlineDelete className="    " />
                </div>
              </div>
              <div className="py-1">
                <p className="text-xs text-gray-400">from $412.84</p>
                <p className="text-xs text-gray-400">2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 pt-1">
        <div className="flex pb-4 border-b border-b-gray-[#A6A6A6]  cursor-pointer group">
          <div className="flex justify-between  items-center gap-3">
            <div className="border-2 w-12 rounded-lg  border-demo">
              <img
                className="p-1 h-full rounded-lg"
                src="https://statestreetdebating.site/lauchswift/mobile/login-with-google.png"
                alt="cartImg 4"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-2 w-20">
                <p className="text-sm">Signup/login with email</p>
                <div className="w-7 p-1 h-7 rounded-full border-[1px] bg-white hover-bg-slate-50 items-center justify-center flex ">
                  <MdOutlineDelete className="    " />
                </div>
              </div>
              <div className="py-1">
                <p className="text-xs text-gray-400">from $412.84</p>
                <p className="text-xs text-gray-400">2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
