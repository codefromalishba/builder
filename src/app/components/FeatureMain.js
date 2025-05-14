import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeature,
  removeFeature,
  setSelectedFeature,
} from "../store/featureSlice";

const FeatureMain = ({ isMobile }) => {
  const dispatch = useDispatch();
  const { selectedFeature, allFeatures } = useSelector(
    (state) => state.feature
  );
  const isSelected = allFeatures.some((f) => f.id === selectedFeature?.id);
  const isUnderView = selectedFeature?.id && !isSelected;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFeatureAction = (e) => {
    e.stopPropagation(); // Prevent parent click events

    if (isSelected) {
      dispatch(removeFeature(selectedFeature?.id)); // Remove from cart
    } else {
      dispatch(addFeature(selectedFeature)); // Add to cart
    }
  };

  // Function to toggle the description view
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return selectedFeature ? (
    <div
      className={`flex bg-slate-100 rounded-lg ${
        isMobile ? "flex-row" : "flex-col pt-10"
      } h-[calc(100vh-13rem)] items-center overflow-y-auto custom-scrollbar justify-center px-10 py-5 gap-4 mx-6 mb-6`}
    >
      {isMobile ? (
        <>
          <div className="border-2 p-2 w-48 h-fit rounded-xl border-[#A6A6A6]">
            <Image
              src={selectedFeature?.mobile}
              alt="MobileImg"
              width={200}
              height={450}
              className="rounded-lg"
            />
          </div>
          <div className="w-3/5 pt-3">
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">{selectedFeature?.name}</p>
              <div
                className="w-7 p-[5px] h-7 rounded-full border-[1px] bg-white hover:bg-slate-50 items-center justify-center flex cursor-pointer"
                onClick={handleFeatureAction}
              >
                {isSelected ? <MdOutlineDelete /> : <GoPlus />}
              </div>
            </div>
            <div className="py-2">
              <p className="text-lg">{selectedFeature?.price} $</p>
              <p className="text-lg">{selectedFeature?.timeline} days</p>
            </div>
            <div>
              <div className="text-md py-1">
                <p className="whitespace-pre-line">
                  {isExpanded
                    ? selectedFeature?.description
                    : `${selectedFeature?.description.slice(0, 100)}`}

                  <button
                    className=" cursor-pointer font-bold hover:underline text-sm"
                    onClick={toggleDescription}
                  >
                    {isExpanded ? " see less" : "...see more"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <Image
              width={450}
              height={300}
              className="h-[300px] w-[450px] rounded-xl p-2 border-2 flex justify-center items-center border-[#A6A6A6]"
              src={selectedFeature?.web}
            />
          </div>
          <div className=" pt-3">
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">{selectedFeature?.name}</p>
              <div
                className="w-7 p-[5px] h-7 rounded-full border-[1px] bg-white hover:bg-slate-50 items-center justify-center flex cursor-pointer"
                onClick={handleFeatureAction}
              >
                {isSelected ? <MdOutlineDelete /> : <GoPlus />}
              </div>
            </div>
            <div className="py-2">
              <p className="text-lg">{selectedFeature?.price} $</p>
              <p className="text-lg">{selectedFeature?.timeline} days</p>
            </div>
            <div>
              <div className="text-md py-1">
                <p className="whitespace-pre-line">
                  {isExpanded
                    ? selectedFeature?.description
                    : `${selectedFeature?.description.slice(0, 100)}`}

                  <button
                    className=" cursor-pointer font-bold hover:underline text-sm"
                    onClick={toggleDescription}
                  >
                    {isExpanded ? " see less" : "...see more"}
                  </button>
                </p>
              </div>
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
