"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { sidebarData } from "../../data";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import Cart from "./Cart";
import FeatureView from "./FeatureView";
import { GoPlus } from "react-icons/go";

const MainDashboard = () => {
  const [openDropDown, setOpenDropDown] = useState();

  const handleShowFeatures = (index) => {
    if (openDropDown === index) {
      setOpenDropDown();
    } else setOpenDropDown(index);
  };
  return (
    <div className="flex h-[calc(100vh-4.5rem)]">
      <div className="grid w-full grid-cols-5 overflow-y-hidden  ">
        <div className="col-span-1 bg-slate-100 max-h-screen relative custom-scrollbar  overflow-y-auto">
          <div className="flex items-center border border-gray-300 rounded-md m-2 bg-white p-2 gap-2">
            <IoMdSearch className="h-4 w-4 text-gray-600 text-xl" />
            <input
              placeholder="Search for a feature"
              className="bg-transparent text-sm "
            />
          </div>
          {sidebarData.map((item, index) => (
            <div>
              <div
                onClick={() => handleShowFeatures(index)}
                className="group p-4 hover:bg-slate-200  duration-300 ease-in-out "
              >
                <div className="  flex justify-between items-center hover:bg-slate-200 duration-300">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.img}
                      alt="dropDown img"
                      className="w-5 h-5 opacity-50 group-hover:opacity-100"
                    />
                    <p className="text-sm">{item.name}</p>
                  </div>
                  <IoIosArrowDown className="text-transparent group-hover:text-black" />
                </div>
              </div>
              {openDropDown === index && (
                <div className=" max-h-[207px]">
                  <div className=" bg-slate-100 flex justify-between  items-center py-3 px-4">
                    <p className="text-gray-500 text-xs">1/15 features</p>
                    <p className="text-gray-500 text-xs">Select All</p>
                  </div>
                  <div className="overflow-y-auto custom-scrollbar max-h-[180px]">
                    {item.dropDown.map((item, index) => (
                      <div className="flex flex-col  w-full">
                        <div className="bg-slate-100 flex justify-between items-center p-4 border-l-demo border-l-4 border-b-[1px]  ">
                          <div className="flex justify-between w-full">
                            <div className="flex gap-2">
                              <img
                                src={item.icon}
                                alt="iconImg"
                                className="w-5 h-5 mt-2 opacity-50"
                              />
                              <div>
                                <p className="text-sm">{item.name} </p>
                                <p className="text-xs text-gray-500">
                                  from {item.price}
                                </p>
                                <p className="text-xs text-gray-500">
                                  from {item.timeline} days
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2 items-center justify-between ">
                              <div className="border-[1px] p-1 border-gray-600 rounded-full hover:bg-demo hover:text-slate-100 hover:border-demo">
                                <IoEyeOutline />
                              </div>
                              <div className="border-[1px] p-1 border-gray-600 rounded-full hover:bg-demo hover:text-slate-100 hover:border-demo">
                                <GoPlus />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" col-span-3">
          <FeatureView />
        </div>
        <div className="col-span-1">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
