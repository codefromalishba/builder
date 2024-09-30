import React, { useState } from "react";
import AppName from "./AppName";

const DeliveryFooter = () => {
  const [isAppNamePopupOpen, setIsAppNamePopupOpen] = useState(false);

  const handleOpenAppNamePopup = () => {
    setIsAppNamePopupOpen(true);
    document.body.classList.add("overflow-hidden"); // Prevent scrolling
  };

  const handleCloseAppNamePopup = () => {
    setIsAppNamePopupOpen(false);
    document.body.classList.remove("overflow-hidden"); // Re-enable scrolling
  };
  return (
    <>
      <div className=" grid grid-cols-4 h-16">
        <div className=" flex justify-between gap-12 col-span-3 pt-4 px-20">
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Customization Cost</p>
            <p className="font-extrabold text-xl">$83</p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">+</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Fixed Cost</p>
            <p className="font-extrabold text-xl">$413</p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">=</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Total Cost</p>
            <p className="font-extrabold text-xl">$496</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start  border-l-[3px]  pl-10 border-[#A6A6A6]">
            <p className="text-xs">Indicative Duration</p>
            <p className="font-extrabold text-xl">1 weeks</p>
          </div>
        </div>
        <div
          onClick={handleOpenAppNamePopup}
          className="bg-demo col-span-1 flex justify-center py-6 cursor-pointer items-center h-full border border-gray-500"
        >
          <p className=" ">Done</p>
        </div>
      </div>
      {isAppNamePopupOpen && (
        <AppName handleCloseAppNamePopup={handleCloseAppNamePopup} />
      )}
    </>
  );
};

export default DeliveryFooter;
