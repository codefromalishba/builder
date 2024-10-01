import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const AppName = ({ handleCloseAppNamePopup }) => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="fixed inset-0 w-full h-full z-40 bg-black bg-opacity-60 flex justify-center items-center">
      <div className=" w-96 h-auto z-50 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col py-10 px-4 justify-center items-center">
          <div className=" flex justify-center items-center w-20 h-20 bg-demo rounded-full">
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
            type="text"
            placeholder="eg.Booking.com"
            onChange={handleInputChange}
          />
          <button
            onClick={handleCloseAppNamePopup}
            className="flex justify-center items-center h-10 px-2 py-1 bg-gray-400 w-full rounded-md"
            disabled={name.trim() === ""}
          >
            <p className="text-white text-sm">SAVE</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppName;
