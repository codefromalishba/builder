"use client";
import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";

const SummaryMain = () => {
  const [isPromoVisible, setIsPromoVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const handleApplyPromotionClick = () => {
    setIsPromoVisible(!isPromoVisible); // Toggle the visibility
  };

  const handleInputChange = (e) => {
    setPromoCode(e.target.value);
  };
  const handleApplyClick = () => {
    // Logic to apply the promo code goes here
    console.log(`Promo code applied: ${promoCode}`);
  };

  return (
    <div className="w-full h-[calc(100vh-4.5rem)]       ">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="py-5 px-10 flex flex-col">
            <p className="font-medium">Hi, malikafaq788@gmail.com</p>
            <div className="flex justify-between items-center py-2">
              <p className="font-semibold">Here is your Launch Swift</p>
              <p className="text-gray-900 text-sm">Last edited: Oct 01, 2024</p>
            </div>
            <div className="flex gap-10 py-5">
              <div className="w-1/4">
                <div className="cursor-pointer">
                  <p className="rounded-md p-2 my-2 bg-demo text-white">
                    Launch Swift Info
                  </p>
                </div>
                <div className="cursor-pointer">
                  <p className="rounded-md p-2 my-2">Features (4)</p>
                </div>
                <div className="cursor-pointer">
                  <p className="rounded-md p-2 my-2">Phases (5)</p>
                </div>
              </div>
              <div className="w-3/4">
                <div className="py-2">
                  <p className="text-demo font-semibold pb-5">
                    Launch Swift basic details
                  </p>
                  <div className="flex gap-5">
                    <FaRegBookmark className="mt-1" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-thin">Name</p>
                        <LuPencil className="text-demo text-sm" />
                      </div>
                      <p className="font-bold py-2">app</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-thin">Details</p>
                        <LuPencil className="text-demo text-sm" />
                      </div>
                      <p className="py-2 text-sm">
                        Enter Launch Swift Description
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="m-5 flex flex-col border-[1px] border-gray-300 rounded-md p-5">
            <p className="font-semibold">Payment Summary</p>
            <div className="py-5">
              <div className="flex justify-between items-center py-1 text-sm">
                <p>Customization Cost</p>
                <p>$428</p>
              </div>
              <div className="flex justify-between items-center py-1 text-sm">
                <p>Fixed Cost</p>
                <p>$2,137</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1 text-sm">
                <p className="font-bold">Total Cost</p>
                <p>$2,565</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1 text-sm">
                <p>Indicative Development Duration</p>
                <p className="font-bold">6 weeks</p>
              </div>
              <div className="flex justify-between items-center py-1 text-sm">
                <p>Estimated Delivery Date</p>
                <p className="font-bold">12-Nov-2024</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1 text-sm">
                <p className="font-bold">Promo Code</p>
                <p
                  className="text-white p-2 bg-demo rounded-md cursor-pointer"
                  onClick={handleApplyPromotionClick}
                >
                  Apply Promotion
                </p>
              </div>
              {isPromoVisible && (
                <div className="my-1 w-full gap-2 flex items-center">
                  <div className="border-gray-300 w-full border rounded-md my-1">
                    <input
                      className="p-2 w-full rounded-md font-medium outline-none"
                      type="text"
                      placeholder="Enter Promo Code"
                      value={promoCode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <p
                    className="bg-slate-300 py-2 w-[90px] text-center text-white rounded-md text-sm cursor-pointer"
                    onClick={handleApplyClick}
                  >
                    Apply
                  </p>
                </div>
              )}
              <hr className="my-2" />
            </div>
            <button className="w-full text-white my-1 flex items-center p-3 justify-center bg-demo rounded-md text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryMain;
