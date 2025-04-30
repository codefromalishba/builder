import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { calculateFeatureTotals } from "../store/featureSlice";
import { IoIosCheckmarkCircle } from "react-icons/io";

const DeliveryTime = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [step, setStep] = useState(3); // Default step is "Standard"
  const [step2, setStep2] = useState(4); // Default step is "50k+"
  const features = useSelector((state) => state.feature.allFeatures);
  const { totalCost } = calculateFeatureTotals(features);
  // const grandTotal =
  //   parseFloat(fixedCost) +
  //   parseFloat(customizationCost) +
  //   parseFloat(phasesCost);

  const getAdjustedPrice = (basePrice, adjustment) => {
    const price = Number(basePrice);
    const adj = Number(adjustment);

    if (isNaN(price) || isNaN(adj)) {
      console.error("Invalid input to getAdjustedPrice", {
        basePrice,
        adjustment,
      });
      return "0";
    }

    return Math.round(price + price * adj).toString(); // returns a string like "123"
  };

  console.log("Total Cost:", totalCost);

  const speedOptions = [
    { label: "Relaxed", adjustment: -0.025, duration: "4 Weeks" },
    { label: "Slow", adjustment: -0.015, duration: "3 Weeks" },
    { label: "Standard", adjustment: 0, duration: "2 Weeks" },
    { label: "Fast", adjustment: 0.015, duration: "1 Week" },
    { label: "Speedy", adjustment: 0.025, duration: "0 Weeks" },
  ];
  const handleChange = (event) => {
    setStep(Number(event.target.value));
  };

  const userRanges = [
    { label: "0-500", value: "0-500" },
    { label: "500-5k", value: "500-5k" },
    { label: "5k-50k", value: "5k-50k" },
    { label: "50k+", value: "50k+" },
  ];

  const handleChange2 = (event) => {
    setStep2(Number(event.target.value));
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
                        step === index + 1
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
                    value={step}
                    onChange={handleChange}
                    className="slider w-full outline-none border-none rounded-md cursor-pointer bg-gray-300 relative"
                  />
                </div>

                <div className="h-10 flex justify-between">
                  {speedOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`text-xs mt-4 text-center ${
                        step === index + 1
                          ? "text-demo font-semibold"
                          : "text-black"
                      }`}
                    >
                      <p>${getAdjustedPrice(totalCost, option.adjustment)}</p>
                      <p className="pt-1">{option.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/4 ">
              <div className="bg-gray-300 w-48 p-2 rounded">
                <div className="flex flex-col p-3 justify-center items-center">
                  <p className="text-xs font-semibold">Standard</p>
                  <p className="text-xs text-center pt-1">
                    The perfect middle ground for anyone with a modest budget
                    and medium-term deadlines
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 flex ">
            <div className="bg-white p-5 rounded-md">
              <p className="font-bold">
                If you kick-off on
                <span className="text-demo"> 29-Sep-2024</span>
              </p>
              <p className="pt-2 text-sm text-gray-400">
                Estimated Final delivery:
                <span className="font-bold text-black"> 10-Nov-2024</span>
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
            onClick={() => setIsSelected((prev) => !prev)}
          >
            {isSelected ? (
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
            <p className="font-bold">{userRanges[step2 - 1].value}</p>
          </div>

          {/* Slider */}
          <div className="flex flex-col items-center justify-center gap-4 mt-2 py-3">
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={step2}
              onChange={handleChange2}
              className="slider w-full outline-none border-none rounded-md cursor-pointer bg-gray-300 relative"
            />
          </div>

          {/* User Ranges */}
          <div className="flex justify-between items-center h-8">
            {userRanges.map((range, index) => (
              <p
                key={index}
                className={`text-xs mt-4 text-center ${
                  step2 === index + 1 ? "text-demo font-semibold" : "text-black"
                }`}
              >
                {range.label}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className=" text-2xl">
            <span className="font-bold"> $1,000 + * </span> /month
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
