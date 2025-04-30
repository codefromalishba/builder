import React, { useState } from "react";
import AppName from "./AppName";
import { useSelector } from "react-redux";
import { calculateFeatureTotals } from "../store/featureSlice";

const DeliveryFooter = () => {
  const [isAppNamePopupOpen, setIsAppNamePopupOpen] = useState(false);
  const { allFeatures, selectedPhases, initialPhases } = useSelector(
    (state) => state.feature
  );
  const uniqueFeatures = allFeatures.filter(
    (feature, index, self) =>
      index === self.findIndex((f) => f.id === feature.id)
  );

  const { fixedCost, customizationCost, totalCost, indicativeDurationInWeeks } =
    calculateFeatureTotals(uniqueFeatures, selectedPhases, initialPhases);

  const durationLabel = `${indicativeDurationInWeeks} ${
    indicativeDurationInWeeks === 1 ? "week" : "weeks"
  }`;

  const handleOpenAppNamePopup = () => {
    setIsAppNamePopupOpen(true);
    document.body.classNameList.add("overflow-hidden"); // Prevent scrolling
  };

  const handleCloseAppNamePopup = () => {
    setIsAppNamePopupOpen(false);
    document.body.classNameList.remove("overflow-hidden"); // Re-enable scrolling
  };
  return (
    <>
      <div className=" grid grid-cols-4  h-[80px]">
        <div className=" flex justify-between bg-white gap-7 col-span-3 pt-4 pb-4 px-20">
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Customization Cost</p>
            <p className="font-extrabold text-xl">
              {customizationCost.toFixed(0)} $
            </p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">+</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Fixed Cost</p>
            <p className="font-extrabold text-xl">{fixedCost.toFixed(0)} $</p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">=</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Total Cost</p>
            <p className="font-extrabold text-xl">{totalCost} $</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start  border-l-[3px]  pl-7 border-[#A6A6A6]">
            <p className="text-xs">Indicative Duration</p>
            <p className="font-extrabold text-xl">{durationLabel}</p>
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
