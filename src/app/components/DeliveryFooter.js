import React, { useState } from "react";
import AppName from "./AppName";
import { useSelector } from "react-redux";
import { selectTotalCost } from "../store/featureSlice";

const DeliveryFooter = () => {
  const [isAppNamePopupOpen, setIsAppNamePopupOpen] = useState(false);
  const { fixedCost, totalTimeline, customizationCost } =
    useSelector(selectTotalCost);

  const grandTotal = (
    parseFloat(fixedCost) + parseFloat(customizationCost)
  ).toFixed(2);

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
        <div className=" flex justify-between gap-7 col-span-3 pt-4 px-20">
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Customization Cost</p>
            <p className="font-extrabold text-xl">
              {customizationCost.toFixed(2)} $
            </p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">+</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Fixed Cost</p>
            <p className="font-extrabold text-xl">{fixedCost.toFixed(2)} $</p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">=</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Total Cost</p>
            <p className="font-extrabold text-xl">{grandTotal} $</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start  border-l-[3px]  pl-10 border-[#A6A6A6]">
            <p className="text-xs">Indicative Duration</p>
            <p className="font-extrabold text-xl">
              {`${Math.ceil(totalTimeline / 7)} ${
                Math.ceil(totalTimeline / 7) === 1 ? "week" : "weeks"
              }`}
            </p>
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
