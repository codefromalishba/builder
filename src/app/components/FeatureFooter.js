import React from "react";
import { useSelector } from "react-redux";
import { selectTotalCost } from "../store/featureSlice";

const FeatureFooter = () => {
  const { fixedCost, totalTimeline, customizationCost } =
    useSelector(selectTotalCost);

  const grandTotal = (
    parseFloat(fixedCost) + parseFloat(customizationCost)
  ).toFixed(0);

  return (
    <div className="px-5 gap-8 flex pt-4 justify-center">
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
  );
};

export default FeatureFooter;
