import React from "react";

const FeatureFooter = () => {
  return (
    <div className="px-5 gap-12 flex pt-4 justify-center">
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
  );
};

export default FeatureFooter;
