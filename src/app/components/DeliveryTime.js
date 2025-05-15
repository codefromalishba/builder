import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { speedOptions, userRanges } from "@/data";
import { useFeatureTotals } from "../utils/calculateTotal";
import {
  changeSpeed,
  setCloudRangeIndex,
  toggleCloud,
} from "../store/featureSlice";
import moment from "moment";

const DeliveryTime = () => {
  const dispatch = useDispatch();
  const {
    allFeatures,
    selectedPhases,
    initialPhases,
    speed,
    cloudEnabled,
    cloudRangeIndex,
  } = useSelector((state) => state.feature);

  const { fixedCost, customizationCost, indicativeDurationInWeeks } =
    useFeatureTotals(allFeatures, selectedPhases, initialPhases, 3);

  const data = useFeatureTotals(
    allFeatures,
    selectedPhases,
    initialPhases,
    speed
  );

  const today = moment();
  const deliveryDate = today
    .clone()
    .add(data?.indicativeDurationInWeeks, "weeks");

  const getAdjustedPrice = (adjustment) => {
    const adj = Number(adjustment);

    const speedFixedCost = fixedCost * adj;
    const speedCustomizationCost = customizationCost * adj;

    const totalCostAfterSpeed =
      fixedCost + speedFixedCost + (customizationCost + speedCustomizationCost);

    return Math.ceil(totalCostAfterSpeed).toString();
  };

  const handleChange = (event) => {
    dispatch(changeSpeed(Number(event.target.value)));
  };

  const handleCloudRange = (event) => {
    const index = Number(event.target.value);
    dispatch(setCloudRangeIndex(index));
  };

  return (
    <div className="bg-slate-100 mt-10 grid grid-cols-3">
      <div className="col-span-2 p-10">
        <p className="text-2xl font-bold">When do you want the delivery?</p>
        <div className="pt-5 flex flex-col justify-between">
          <div className="flex items-center w-full gap-2">
            <div className="w-3/4">
              <div className="bg-white p-5 rounded-md h-40">
                <div className="h-10 flex justify-between">
                  {speedOptions.map((option, index) => (
                    <p
                      key={index}
                      className={`text-xs mt-4 ${
                        speed === index + 1
                          ? "text-demo font-semibold"
                          : "text-black"
                      }`}
                    >
                      {option.label}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mt-4">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={speed}
                    onChange={handleChange}
                    className="slider w-full outline-none border-none rounded-md cursor-pointer bg-gray-300 relative"
                  />
                </div>

                <div className="h-10 flex justify-between">
                  {speedOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`text-xs mt-4 text-center ${
                        speed === index + 1
                          ? "text-demo font-semibold"
                          : "text-black"
                      }`}
                    >
                      <p>${getAdjustedPrice(option.adjustment)}</p>
                      <p className="pt-1">
                        {Math.max(
                          1,
                          indicativeDurationInWeeks +
                            (option.durationChange ?? 0)
                        )}{" "}
                        {indicativeDurationInWeeks +
                          (option.durationChange ?? 0) ===
                        1
                          ? "Week"
                          : "Weeks"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/4 ">
              <div className="bg-gray-300 w-48 p-2 rounded">
                <div className="flex flex-col p-3 justify-center items-center">
                  <p className="text-xs font-semibold">
                    {speedOptions[speed - 1]?.label}
                  </p>
                  <p className="text-xs text-center pt-1">
                    {speedOptions[speed - 1]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-5">
            <div className="bg-white p-5 rounded-md">
              <p className="text-black font-bold">
                If you kick-off on{" "}
                <span className="font-bold text-demo">
                  {today.format("DD-MMM-YYYY")}
                </span>
              </p>
              <p className="text-gray-400 text-sm pt-2">
                Estimated Final delivery:{" "}
                <span className="font-bold text-black">
                  {deliveryDate.format("DD-MMM-YYYY")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 m-10 flex-col border-[1px] border-gray-300 rounded-md p-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="w-[140px] h-[26px]"
              src="./images/LaunchSwiftLogo.avif"
              alt="logo"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(setCloudRangeIndex(1));
              dispatch(toggleCloud());
            }}
          >
            {cloudEnabled ? (
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            ) : (
              <FaRegCircle className="text-xl text-gray-400" />
            )}
          </div>
        </div>
        <div>
          <p className="pt-4 font-medium">
            Builder Cloud helps you scale your business
          </p>
          <ul className="list-disc pl-4">
            <li className="py-1 text-black text-xs">
              <span className="font-bold">Commitment-free savings: </span>
              Our customers saved over $4.5m, last year.
            </li>
            <li className="py-1 text-black text-xs">
              <span className="font-bold">World-className analytics: </span>
              Optimise your software and infrastructure.
            </li>
            <li className="py-1 text-black text-xs">
              <span className="font-bold">Best-in-className multi-cloud: </span>
              Azure, AWS, and more. Just one bill (for a lot less).
            </li>
          </ul>
        </div>
        <div className="bg-slate-200 mt-3 p-5 w-full rounded-md">
          {/* Header with selected range */}
          <div className="flex justify-between items-center h-8">
            <p className="font-bold">Number of users</p>
            <p className="font-bold">
              {cloudRangeIndex > 0 && userRanges?.[cloudRangeIndex - 1]
                ? userRanges[cloudRangeIndex - 1].value
                : "N/A"}
            </p>
          </div>

          {/* Slider */}
          <div className="flex flex-col items-center justify-center gap-4 mt-2 py-3">
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={cloudRangeIndex}
              onChange={handleCloudRange}
              className="slider w-full outline-none border-none rounded-md cursor-pointer bg-gray-300 relative"
            />
          </div>

          {/* User Ranges */}
          <div className="flex justify-between items-center h-8">
            {userRanges.map((range, index) => (
              <p
                key={index}
                className={`text-xs mt-4 text-center ${
                  cloudRangeIndex === index + 1
                    ? "text-demo font-semibold"
                    : "text-black"
                }`}
              >
                {range.label}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-black text-2xl">
            {cloudRangeIndex > 0 && userRanges?.[cloudRangeIndex - 1] ? (
              userRanges[cloudRangeIndex - 1].minPrice !== undefined ? (
                <span className="font-bold">
                  ${userRanges[cloudRangeIndex - 1].minPrice} - $
                  {userRanges[cloudRangeIndex - 1].maxPrice}
                </span>
              ) : (
                <span className="font-bold">
                  ${userRanges[cloudRangeIndex - 1].maxPrice.toLocaleString()} +
                  *
                </span>
              )
            ) : (
              <span className="font-bold">N/A</span>
            )}{" "}
            /month
          </p>
          <p className="text-xs text-gray-600 pt-5 font-thin">
            *This is an estimated price for cloud hosting and will vary
            according to usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTime;
