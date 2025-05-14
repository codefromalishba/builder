import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";

const AppName = ({
  name,
  setName,
  loading,
  handleCloseAppNamePopup,
  handleUpdateDelivery,
}) => {
  const { recentBuildCard } = useSelector((state) => state.feature);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="fixed inset-0 w-full h-full z-40 bg-black bg-opacity-60 flex justify-center items-center">
      <div className=" w-96 h-auto z-50 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col py-10 px-4 justify-center items-center">
          <div className=" flex justify-center items-center w-20 h-20 bg-demo hover:bg-hdemo duration-150 rounded-full">
            <AiFillLike className="text-white text-3xl" />
          </div>
          <p className="text-center py-4 my-2">
            Time to create your Launch Swift (It describes exactly what you want
            to build)
          </p>
          <p className="my-2 font-bold text-center">
            First, please name your Launch Swift
          </p>
          <input
            className="my-2 outline-none border-[1px] w-full border-gray-300 rounded-md p-2"
            placeholder={recentBuildCard?.name || "eg. Booking.com"}
            value={name}
            onChange={handleInputChange}
          />
          <div className="grid grid-cols-2 gap-x-6 w-full">
            <button
              onClick={handleCloseAppNamePopup}
              className="cursor-pointer w-full bg-white hover:bg-slate-50 duration-100 items-center h-10 py-1 border-slate-300 border rounded-md"
            >
              <p className="text-sm">Close</p>
            </button>
            <button
              onClick={handleUpdateDelivery}
              className={`w-full items-center h-10 py-1 rounded-md ${
                loading || name.trim() === ""
                  ? "opacity-50 cursor-not-allowed bg-gray-400"
                  : "cursor-pointer bg-demo hover:bg-hdemo duration-150"
              }`}
              disabled={name.trim() === ""}
            >
              <p className="text-white text-lg">
                {loading ? "Saving..." : "Save"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppName;
