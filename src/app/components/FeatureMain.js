import Image from "next/image";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const FeatureMain = ({ isMobile }) => {
  const selectedFeature = useSelector((state) => state.feature.selectedFeature);
  console.log(selectedFeature);
  return selectedFeature ? (
    <div
      className={`flex bg-slate-100 rounded-lg ${
        isMobile ? "flex-row" : "flex-col"
      } h-[calc(100vh-13rem)] overflow-y-auto custom-scrollbar justify-center px-10 py-5 gap-4 mx-6 mb-6`}
    >
      {isMobile ? (
        <>
          <div className="border-2 p-2 w-48 h-fit rounded-xl border-[#A6A6A6]">
            <img src={selectedFeature?.mobile} alt="MobileImg" />
          </div>
          <div className="w-1/3 pt-3">
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">{selectedFeature?.name}</p>
              <div className="w-7 p-[5px] h-7 rounded-full border-[1px] bg-white hover-bg-slate-50 items-center justify-center flex">
                <MdOutlineDelete />
              </div>
            </div>
            <div className="py-2">
              <p className="text-lg">{selectedFeature?.price} $</p>
              <p className="text-lg">{selectedFeature?.timeline} days</p>
            </div>
            <div>
              <p className="text-md py-1">{selectedFeature?.description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <Image
              width={450}
              height={300}
              className="h-[300px] w-[450px] mt-40 border-2 p-2 rounded-xl border-[#A6A6A6]"
              src={selectedFeature?.web}
            />
          </div>
          <div className=" pt-3">
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">{selectedFeature?.name}</p>
              <div className="bg-white cursor-pointer hover-bg-slate-50 w-7 h-7 rounded-md items-center justify-center flex border-[1px]">
                <MdOutlineDelete />
              </div>
            </div>
            <div className="py-2">
              <p className="text-lg">{selectedFeature?.price} $</p>
              <p className="text-lg">{selectedFeature?.timeline} days</p>
            </div>
            <div>
              <p className="text-md py-1">{selectedFeature?.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="flex justify-center h-full items-center font-bold text-xl">
      No Feature Selected
    </div>
  );
};

export default FeatureMain;
