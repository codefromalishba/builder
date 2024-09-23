import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { sidebarData } from "../../data";
import Image from "next/image";

const MainDashboard = () => {
  return (
    <div className="flex h-[calc(100vh-4.5rem)]">
      <div className="grid w-full grid-cols-5 overflow-y-hidden  ">
        <div className="col-span-1 bg-slate-100 max-h-screen relative  overflow-y-auto">
          <div className="flex items-center border border-gray-300 rounded-md m-2 bg-white p-2 gap-2">
            <IoMdSearch className="h-4 w-4 text-gray-600 text-xl" />
            <input
              placeholder="Search for a feature"
              className="bg-transparent text-sm "
            />
          </div>
          {sidebarData.map((item, index) => (
            <div className=" group flex justify-between p-4 items-center hover:bg-slate-200 duration-300">
              <div className="flex items-center gap-3">
                <Image
                  src={item.img}
                  className="w-5 h-5 opacity-50 group-hover:opacity-100"
                />
                <p className="text-sm">{item.name}</p>
              </div>
              <IoIosArrowDown className="text-transparent group-hover:text-black" />
            </div>
          ))}
        </div>
        <div className="bg-yellow-500 col-span-3"> hello</div>
        <div className="bg-green-500 col-span-1">hello</div>
      </div>
    </div>
  );
};

export default MainDashboard;
